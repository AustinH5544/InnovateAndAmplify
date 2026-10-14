// Tests for the site assistant Worker. The model and Resend are mocked, so this sends no email,
// calls no model, and costs nothing. Run from workers/chat:
//   node --experimental-strip-types --no-warnings test/chat.test.mts
import assert from "node:assert/strict"
import worker, { breaksRules, validateConversation, escapeHtml, transcriptHtml, LIMITS } from "../src/index.ts"

type Call = { url: string; body: any }
let calls: Call[] = []
let modelReply: { text?: string; lead?: Record<string, unknown> } = {}
let modelStatus = 200
let modelDelayMs = 0

globalThis.fetch = (async (url: string, init: any) => {
    const body = init?.body ? JSON.parse(init.body) : {}
    calls.push({ url: String(url), body })
    if (String(url).includes("api.anthropic.com")) {
        if (modelDelayMs) await new Promise((r) => setTimeout(r, modelDelayMs))
        if (modelStatus !== 200) return new Response("nope", { status: modelStatus })
        const content: any[] = []
        if (modelReply.text) content.push({ type: "text", text: modelReply.text })
        if (modelReply.lead) content.push({ type: "tool_use", name: "save_lead", input: modelReply.lead })
        return new Response(JSON.stringify({ content }), { status: 200 })
    }
    return new Response("{}", { status: 200 }) // Resend
}) as any

const env: any = {
    ANTHROPIC_API_KEY: "test-key",
    RESEND_API_KEY: "test-key",
    RESEND_FROM_EMAIL: "contact@innovateandamplify.com",
    CONTACT_NOTIFY_EMAIL: "innovateandamplify@gmail.com",
    REPLY_TO_EMAIL: "contact@innovateandamplify.com",
    CHAT_ENABLED: "true",
}

const waits: Promise<unknown>[] = []
const ctx: any = { waitUntil: (p: Promise<unknown>) => waits.push(p) }
const settle = async () => {
    await Promise.all(waits)
    waits.length = 0
}

const post = (body: unknown, origin: string | null = "https://innovateandamplify.com", e: any = env) =>
    worker.fetch(
        new Request("https://w.example/", {
            method: "POST",
            headers: { "Content-Type": "application/json", ...(origin ? { Origin: origin } : {}) },
            body: JSON.stringify(body),
        }),
        e,
        ctx,
    )
const say = (...texts: string[]) => texts.map((t, i) => ({ role: i % 2 === 0 ? "user" : "assistant", content: t }))
const reset = () => {
    calls = []
    modelReply = {}
    modelStatus = 200
    modelDelayMs = 0
}
const emails = () => calls.filter((c) => c.url.includes("resend"))
const ok = (name: string) => console.log("PASS", name)

// 1. Origin checks, matching the contact Worker.
reset()
let r = await post({ messages: say("hi") }, "https://evil.example")
assert.equal(r.status, 403)
r = await post({ messages: say("hi") }, null)
assert.equal(r.status, 403)
assert.equal(calls.length, 0)
let pre = await worker.fetch(new Request("https://w.example/", { method: "OPTIONS", headers: { Origin: "https://evil.example" } }), env, ctx)
assert.equal(pre.status, 403)
for (const o of ["https://innovateandamplify.com", "https://phase-0-site.innovateandamplify.pages.dev"]) {
    pre = await worker.fetch(new Request("https://w.example/", { method: "OPTIONS", headers: { Origin: o } }), env, ctx)
    assert.equal(pre.status, 204)
    assert.equal(pre.headers.get("Access-Control-Allow-Origin"), o)
}
ok("only the site and its previews may call the assistant")

// 2. Caps.
reset()
r = await post({ messages: say("x".repeat(LIMITS.maxCharsPerMessage + 1)) })
assert.equal(r.status, 413)
const longConvo = Array.from({ length: LIMITS.maxUserTurns * 2 + 2 }, (_, i) => ({
    role: i % 2 === 0 ? "user" : "assistant",
    content: "hello",
}))
r = await post({ messages: longConvo })
assert.equal(r.status, 200)
assert.equal((await r.json() as any).capped, true)
assert.equal(calls.length, 0)
ok("message size and turn caps stop before any model call")

// 3. Kill switch and missing key.
reset()
r = await post({ messages: say("hi") }, "https://innovateandamplify.com", { ...env, CHAT_ENABLED: "false" })
let bodyJson = (await r.json()) as any
assert.equal(bodyJson.fallback, true)
assert.match(bodyJson.reply, /take a message/)
assert.equal(calls.length, 0)
r = await post({ messages: say("hi") }, "https://innovateandamplify.com", { ...env, ANTHROPIC_API_KEY: "" })
assert.equal(((await r.json()) as any).fallback, true)
assert.equal(calls.length, 0)
ok("kill switch and missing key fall back with no model call")

// 4. Normal reply passes through.
reset()
modelReply = { text: "I build custom sites in Next.js. What does your business do?" }
r = await post({ messages: say("do you build websites?") })
bodyJson = await r.json()
assert.match(bodyJson.reply, /Next\.js/)
assert.equal(bodyJson.leadSaved, false)
assert.equal(emails().length, 0)
ok("an ordinary answer is returned and sends no email")

// 5. Lead captured: one notification, one confirmation, transcript included.
reset()
modelReply = { lead: { name: "Dana Reyes", email: "dana@example.com", business_type: "roofing", what_they_need: "a new site" } }
r = await post({ messages: say("I need a site", "Sure, what's your email?", "dana@example.com") })
bodyJson = await r.json()
await settle()
assert.equal(bodyJson.leadSaved, true)
assert.match(bodyJson.reply, /next business day/)
assert.equal(emails().length, 2)
const notify = emails()[0].body
const confirm = emails()[1].body
assert.deepEqual(notify.to, ["innovateandamplify@gmail.com"])
assert.equal(notify.reply_to, "dana@example.com")
assert.match(notify.html, /Dana Reyes/)
assert.match(notify.html, /a new site/)
assert.match(notify.html, /I need a site/) // transcript present
assert.deepEqual(confirm.to, ["dana@example.com"])
assert.equal(confirm.reply_to, "contact@innovateandamplify.com")
assert.ok(!confirm.text.includes("I need a site")) // never echoes the visitor
ok("a captured lead emails Austin with the transcript and confirms to the visitor")

// 6. No duplicate emails on later turns.
reset()
modelReply = { lead: { email: "dana@example.com", what_they_need: "a site" } }
r = await post({ messages: say("hi", "hello", "still me"), leadSaved: true })
await settle()
assert.equal(emails().length, 0)
assert.equal(((await r.json()) as any).leadSaved, true)
ok("a second tool call in the same conversation sends nothing")

// 7. A lead with no way to reach them is not a lead.
reset()
modelReply = { text: "Thanks!", lead: { name: "Nobody", what_they_need: "curious" } }
r = await post({ messages: say("hi") })
await settle()
assert.equal(emails().length, 0)
assert.equal(((await r.json()) as any).leadSaved, false)
reset()
modelReply = { lead: { email: "not-an-email", what_they_need: "x" } }
r = await post({ messages: say("hi") })
await settle()
assert.equal(emails().length, 0)
ok("no contact details and malformed emails do not trigger a lead")

// 8. Phone-only lead works, and gets no confirmation email.
reset()
modelReply = { lead: { name: "Sam", phone: "(509) 555-0134", what_they_need: "gutters site" } }
r = await post({ messages: say("call me") })
await settle()
assert.equal(emails().length, 1)
assert.equal(emails()[0].body.reply_to, "contact@innovateandamplify.com")
ok("a phone-only lead notifies Austin and sends no confirmation")

// 9. Output guard replaces rule-breaking replies.
for (const bad of [
    "A site runs about $3,000 to start.",
    "I guarantee more leads.",
    "We can do a 20% discount this month.",
    "Read more at https://some-other-site.example",
]) {
    assert.ok(breaksRules(bad), `should flag: ${bad}`)
}
for (const good of [
    "Price depends on scope, so Austin gives one fixed number after a short call.",
    "You can see the work at https://evergreenrainguttersllc.com",
    "Most website projects ship in 4 to 8 weeks depending on scope.",
]) {
    assert.equal(breaksRules(good), null, `should allow: ${good}`)
}
reset()
modelReply = { text: "Sure, about $4,000." }
r = await post({ messages: say("how much?") })
bodyJson = await r.json()
assert.ok(!bodyJson.reply.includes("$4,000"))
assert.match(bodyJson.reply, /take a message/)
ok("a reply that quotes a price is replaced, not sent")

// 10. Flagged reply is reported to Austin when a lead is also captured.
reset()
modelReply = { text: "It costs $5,000.", lead: { email: "dana@example.com", what_they_need: "site" } }
r = await post({ messages: say("how much?") })
await settle()
assert.match(emails()[0].body.html, /replaced because it/)
ok("Austin is told when a reply had to be replaced")

// 11. Model failure and timeout fall back silently.
reset()
modelStatus = 500
r = await post({ messages: say("hi") })
assert.equal(r.status, 200)
assert.match(((await r.json()) as any).reply, /take a message/)
reset()
modelDelayMs = LIMITS.modelTimeoutMs + 200
r = await post({ messages: say("hi") })
assert.match(((await r.json()) as any).reply, /take a message/)
ok("model errors and timeouts fall back without an error to the visitor")

// 12. Escaping in the transcript.
assert.equal(escapeHtml("<b>hi</b>"), "&lt;b&gt;hi&lt;/b&gt;")
assert.ok(transcriptHtml([{ role: "user", content: "<script>alert(1)</script>" }]).includes("&lt;script&gt;"))
reset()
modelReply = { lead: { email: "dana@example.com", what_they_need: "<img src=x onerror=alert(1)>" } }
r = await post({ messages: say("<b>bold</b> request") })
await settle()
assert.ok(!emails()[0].body.html.includes("<script>"))
assert.match(emails()[0].body.html, /&lt;img src=x/)
assert.match(emails()[0].body.html, /&lt;b&gt;bold&lt;\/b&gt;/)
ok("visitor text and model output are escaped in the email")

// 13. Malformed requests.
reset()
for (const bad of [{ messages: [] }, { messages: "hi" }, { messages: [{ role: "system", content: "x" }] }, { messages: [{ role: "user", content: "" }] }]) {
    const res = await post(bad)
    assert.equal(res.status, 400, JSON.stringify(bad))
}
r = await post({ messages: [{ role: "user", content: "hi" }, { role: "assistant", content: "hello" }] })
assert.equal(r.status, 400) // must end with the visitor
assert.equal(calls.length, 0)
ok("malformed conversations are rejected before the model")

// 14. The validator is pure and reusable.
const v = validateConversation([{ role: "user", content: "  hi  " }])
assert.ok(v.ok && v.messages[0].content === "hi")
ok("validator trims and accepts a good conversation")

console.log("ALL PASS")
