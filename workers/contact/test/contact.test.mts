// Tests for the contact form Worker. Resend is mocked, so this suite sends no email and costs
// nothing. Run from workers/contact:
//   node --experimental-strip-types --no-warnings test/contact.test.mts
import assert from "node:assert/strict"
import worker, { isAllowedOrigin, escapeHtml, underRateLimit, RATE_PER_HOUR } from "../src/index.ts"

type Call = { url: string; body: any }
let calls: Call[] = []
let resendStatus = 200

globalThis.fetch = (async (url: string, init: any) => {
    const body = init?.body ? JSON.parse(init.body) : {}
    calls.push({ url: String(url), body })
    if (resendStatus !== 200) return new Response("nope", { status: resendStatus })
    return new Response("{}", { status: 200 })
}) as any

const env: any = {
    RESEND_API_KEY: "test-key",
    RESEND_FROM_EMAIL: "contact@innovateandamplify.com",
    CONTACT_NOTIFY_EMAIL: "innovateandamplify@gmail.com",
    REPLY_TO_EMAIL: "contact@innovateandamplify.com",
}

const valid = { name: "Dana Reyes", email: "dana@example.com", message: "Can you build me a site?" }

const post = (body: unknown, origin: string | null = "https://innovateandamplify.com", e: any = env, ip = "203.0.113.5") =>
    worker.fetch(
        new Request("https://w.example/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "CF-Connecting-IP": ip,
                ...(origin ? { Origin: origin } : {}),
            },
            body: JSON.stringify(body),
        }),
        e,
    )

const reset = () => {
    calls = []
    resendStatus = 200
}
const emails = () => calls.filter((c) => c.url.includes("resend"))
const ok = (name: string) => console.log("PASS", name)

// 1. Only the site and its previews may post.
reset()
let r = await post(valid, "https://evil.example")
assert.equal(r.status, 403)
r = await post(valid, null)
assert.equal(r.status, 403)
assert.equal(calls.length, 0)

let pre = await worker.fetch(new Request("https://w.example/", { method: "OPTIONS", headers: { Origin: "https://evil.example" } }), env)
assert.equal(pre.status, 403)
for (const o of ["https://innovateandamplify.com", "https://www.innovateandamplify.com", "https://phase-0-site.innovateandamplify.pages.dev"]) {
    pre = await worker.fetch(new Request("https://w.example/", { method: "OPTIONS", headers: { Origin: o } }), env)
    assert.equal(pre.status, 204)
    assert.equal(pre.headers.get("Access-Control-Allow-Origin"), o)
}
assert.equal(isAllowedOrigin("https://innovateandamplify.com.evil.example"), false)
assert.equal(isAllowedOrigin("http://innovateandamplify.com"), false) // not https
ok("only the site and its previews may post to the form")

// 2. A valid submission notifies Austin and confirms to the sender.
reset()
r = await post(valid)
assert.equal(r.status, 200)
assert.equal(((await r.json()) as any).success, true)
assert.equal(emails().length, 2)
const notify = emails()[0].body
const confirm = emails()[1].body
assert.deepEqual(notify.to, ["innovateandamplify@gmail.com"])
assert.equal(notify.reply_to, "dana@example.com")
assert.match(notify.html, /Dana Reyes/)
assert.match(notify.html, /Can you build me a site\?/)
assert.deepEqual(confirm.to, ["dana@example.com"])
assert.equal(confirm.reply_to, "contact@innovateandamplify.com")
assert.ok(confirm.text.startsWith("Hi Dana,"))
ok("a valid submission emails Austin and confirms to the sender")

// 3. The honeypot sends nothing and tells the bot nothing.
reset()
r = await post({ ...valid, website: "http://spam.example" })
assert.equal(r.status, 200)
assert.equal(((await r.json()) as any).success, true) // indistinguishable from a real success
assert.equal(emails().length, 0)
ok("a filled honeypot reports success and sends no email")

// 4. Required fields and email format.
reset()
for (const bad of [
    { ...valid, name: "" },
    { ...valid, email: "" },
    { ...valid, message: "" },
    { ...valid, email: "not-an-email" },
    { ...valid, email: "spoof@example.com, victim@example.com" },
    { ...valid, email: 'a@b.c" <victim@example.com>' },
]) {
    const res = await post(bad)
    assert.equal(res.status, 400, JSON.stringify(bad))
}
r = await post("not an object" as any)
assert.ok(r.status === 400 || r.status === 500)
assert.equal(emails().length, 0)
ok("missing fields and malformed or multi-address emails are rejected")

// 5. Submitted values are escaped before they touch the HTML.
assert.equal(escapeHtml(`<b>&"'`), "&lt;b&gt;&amp;&quot;&#39;")
reset()
r = await post({
    name: "<b>Dana</b>",
    email: "dana@example.com",
    message: "<script>alert(1)</script><img src=x onerror=alert(1)>",
})
assert.equal(r.status, 200)
const injected = emails()[0].body
assert.ok(!injected.html.includes("<script>"))
assert.ok(!injected.html.includes("<img src=x"))
assert.match(injected.html, /&lt;script&gt;/)
assert.match(injected.html, /&lt;b&gt;Dana&lt;\/b&gt;/)
ok("submitted HTML arrives as text, not markup")

// 6. The auto-reply cannot be used to send chosen text to a chosen inbox.
// It goes to an address the sender picked, from a verified domain, so the only part of it they
// influence is the greeting, and that has to look like a name.
reset()
await post({ ...valid, name: "https://phishing.example" })
let reply = emails()[1].body
assert.ok(reply.text.startsWith("Hi there,"))
assert.ok(!reply.text.includes("phishing.example"))

reset()
await post({ ...valid, name: "Call 555-0100 now for free money" })
reply = emails()[1].body
assert.ok(reply.text.startsWith("Hi there,"))
assert.ok(!reply.text.includes("555-0100"))

reset()
await post({ ...valid, name: "Dana O'Neil-Reyes" })
assert.ok(emails()[1].body.text.startsWith("Hi Dana,"))
ok("the auto-reply greets a real name and refuses anything else")

// 7. No CRLF reaches an email header. The injected text itself survives as ordinary characters,
// which is fine: a header is only forged by a line break, and there is none left.
reset()
await post({ ...valid, name: "Dana\r\nBcc: victim@example.com" })
const subject = emails()[0].body.subject
assert.ok(!subject.includes("\n"))
assert.ok(!subject.includes("\r"))
assert.match(subject, /Dana Bcc: victim@example\.com/) // flattened to one line
assert.deepEqual(emails()[0].body.to, ["innovateandamplify@gmail.com"]) // no extra recipient
ok("newlines in a name cannot inject an email header")

// 8. Oversized fields are truncated, not rejected outright.
reset()
await post({ ...valid, message: "x".repeat(9000) })
const body8 = emails()[0].body.html
assert.ok(body8.includes("x".repeat(5000)))
assert.ok(!body8.includes("x".repeat(5001)))
ok("an oversized message is capped at the field limit")

// 9. A failed notification surfaces; a failed auto-reply does not lose the lead.
reset()
resendStatus = 500
r = await post(valid)
assert.equal(r.status, 500)
ok("a failed notification returns an error rather than a false success")

// 10. Rate limiting against a fake KV namespace.
reset()
const store = new Map<string, string>()
const kv: any = { get: async (k: string) => store.get(k) ?? null, put: async (k: string, v: string) => void store.set(k, v) }
const limited = { ...env, RATE_LIMIT: kv }

for (let i = 0; i < RATE_PER_HOUR; i++) {
    const res = await post(valid, "https://innovateandamplify.com", limited, "198.51.100.9")
    assert.equal(res.status, 200, `submission ${i + 1} should pass`)
}
r = await post(valid, "https://innovateandamplify.com", limited, "198.51.100.9")
assert.equal(r.status, 429)
assert.equal(emails().length, RATE_PER_HOUR * 2) // the blocked one sent nothing

r = await post(valid, "https://innovateandamplify.com", limited, "198.51.100.10")
assert.equal(r.status, 200)

// The honeypot path is counted too, so a bot cannot loop through it for free.
reset()
store.clear()
for (let i = 0; i < RATE_PER_HOUR; i++) {
    await post({ ...valid, website: "spam" }, "https://innovateandamplify.com", limited, "198.51.100.11")
}
r = await post(valid, "https://innovateandamplify.com", limited, "198.51.100.11")
assert.equal(r.status, 429)
ok("a flood from one IP is cut off without affecting other senders")

// 11. With no namespace bound, the form still works.
assert.equal(await underRateLimit(env, "198.51.100.1"), true)
reset()
r = await post(valid)
assert.equal(r.status, 200)
ok("an unbound namespace degrades to no throttling, not to an error")

console.log("ALL PASS")
