import { buildSystem, SAVE_LEAD_TOOL, FALLBACK_REPLY, LEAD_CONFIRMATION } from "./prompt.ts"

export interface Env {
    ANTHROPIC_API_KEY: string
    RESEND_API_KEY: string
    RESEND_FROM_EMAIL: string
    CONTACT_NOTIFY_EMAIL: string
    REPLY_TO_EMAIL: string
    // "true" enables the model. Anything else serves the scripted fallback with no model call,
    // so the assistant can be switched off without a deploy.
    CHAT_ENABLED: string
    MODEL?: string
    RATE_LIMIT?: KVNamespace
    // Turnstile secret. While unset, the challenge is skipped entirely, so the Worker runs
    // unchanged until the widget is built and the key is in place.
    TURNSTILE_SECRET_KEY?: string
    // Conversation transcripts, kept briefly so the daily digest can report the ones that did not
    // produce a lead. Optional: with no namespace bound, nothing is stored and no digest is sent.
    TRANSCRIPTS?: KVNamespace
}

// Same allowlist as the contact Worker: the live site and this project's Pages previews.
const ALLOWED_ORIGINS = new Set(["https://innovateandamplify.com", "https://www.innovateandamplify.com"])
const PREVIEW_ORIGIN = /^https:\/\/[a-z0-9-]+\.innovateandamplify\.pages\.dev$/

export const LIMITS = {
    maxUserTurns: 14, // conversation length before it stops and offers to take a message
    maxCharsPerMessage: 1200,
    maxTotalChars: 24000,
    maxOutputTokens: 400,
    modelTimeoutMs: 9000,
    ratePerHour: 40, // requests per IP per hour, only when a KV namespace is bound
} as const

const DEFAULT_MODEL = "claude-haiku-4-5-20251001"

export interface ChatMessage {
    role: "user" | "assistant"
    content: string
}

export function isAllowedOrigin(origin: string | null): origin is string {
    return !!origin && (ALLOWED_ORIGINS.has(origin) || PREVIEW_ORIGIN.test(origin))
}

function corsHeaders(origin: string): Record<string, string> {
    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        Vary: "Origin",
    }
}

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

const EMAIL_PATTERN = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/
const PHONE_PATTERN = /^[+(]?[\d][\d\s().-]{6,19}$/
// Same guard as the contact Worker. The confirmation email goes to an address the visitor chose,
// so anything of theirs that reaches it has to look like a name and nothing else.
export const SAFE_NAME = /^[\p{L}][\p{L} .'-]{0,59}$/u

// Last line of defence on model output. A hit means the reply is thrown away, not edited, and the
// notification to Austin records which rule tripped.
//
// What this can and cannot do. It is a pattern match, so it catches a shape of sentence, never a
// falsehood. "Austin has worked with HVAC companies" is invented and passes cleanly, because
// nothing about it looks wrong. Only the system prompt argues against that, and a prompt is
// persuasion, not enforcement. Keep that in mind before trusting this list to be a wall.
//
// Phone numbers must survive every rule here: the fallback and the lead confirmation both carry
// one, and a guard that flags its own replacement text would loop.
export function breaksRules(text: string): string | null {
    if (/\$\s?\d/.test(text)) return "quoted a dollar amount"
    // Money written without a currency symbol: "3000 dollars", "2,500", "a few thousand dollars".
    if (/\b\d[\d,]*\s*(dollars|bucks)\b/i.test(text)) return "quoted a dollar amount"
    if (/\b\d{1,3}(,\d{3})+\b/.test(text)) return "quoted a number that reads as a price"
    if (/\b(hundred|thousand)\s+dollars\b/i.test(text)) return "quoted a dollar amount"
    if (/\b(one|two|three|four|five|six|seven|eight|nine|ten|fifteen|twenty|thirty|fifty)\s+(hundred|thousand)\b/i.test(text))
        return "quoted a dollar amount"
    if (/\b\d+\s?%/.test(text)) return "quoted a percentage"
    if (/\b(percent|per cent)\b/i.test(text)) return "quoted a percentage"
    if (/\bguarantee(d|s)?\b/i.test(text)) return "used the word guarantee"
    if (/\bdiscount(ed|s)?\b/i.test(text)) return "offered a discount"
    if (/\bpromis(e|es|ed|ing)\b/i.test(text)) return "made a promise"
    if (/\byou('ll| will| would)\s+(definitely|certainly|absolutely|for sure)\b/i.test(text)) return "promised an outcome"
    // Claimed results for a client. Austin publishes none, so any of these is invented.
    if (/\b(doubled?|tripled?|quadrupled?)\b/i.test(text)) return "claimed a result"
    if (/\b(increased?|boost(ed)?|grew|grown)\b[^.]{0,40}\b(leads?|calls?|sales|revenue|traffic|bookings?|customers?)\b/i.test(text))
        return "claimed a result"
    if (/https?:\/\/(?!(www\.)?(innovateandamplify\.com|evergreenrainguttersllc\.com|micristenviro\.com|sp-archives\.com))/i.test(text))
        return "linked somewhere off-site"
    return null
}

export function validateConversation(messages: unknown): { ok: true; messages: ChatMessage[] } | { ok: false; error: string; status: number } {
    if (!Array.isArray(messages) || messages.length === 0) return { ok: false, error: "No messages", status: 400 }
    const clean: ChatMessage[] = []
    let total = 0
    for (const m of messages) {
        if (!m || typeof m !== "object") return { ok: false, error: "Bad message", status: 400 }
        const role = (m as ChatMessage).role
        const content = (m as ChatMessage).content
        if (role !== "user" && role !== "assistant") return { ok: false, error: "Bad role", status: 400 }
        if (typeof content !== "string" || content.trim() === "") return { ok: false, error: "Empty message", status: 400 }
        if (content.length > LIMITS.maxCharsPerMessage) return { ok: false, error: "Message too long", status: 413 }
        total += content.length
        clean.push({ role, content: content.trim() })
    }
    if (total > LIMITS.maxTotalChars) return { ok: false, error: "Conversation too long", status: 413 }
    if (clean.filter((m) => m.role === "user").length > LIMITS.maxUserTurns) return { ok: false, error: "turn-cap", status: 429 }
    if (clean[clean.length - 1].role !== "user") return { ok: false, error: "Last message must be from the visitor", status: 400 }
    return { ok: true, messages: clean }
}

function json(data: unknown, status: number, origin: string | null): Response {
    const headers: Record<string, string> = { "Content-Type": "application/json" }
    if (isAllowedOrigin(origin)) Object.assign(headers, corsHeaders(origin))
    return new Response(JSON.stringify(data), { status, headers })
}

async function underRateLimit(env: Env, ip: string): Promise<boolean> {
    if (!env.RATE_LIMIT) return true // no namespace bound: caps and origin checks still apply
    const key = `rl:${ip}:${new Date().toISOString().slice(0, 13)}`
    const used = Number((await env.RATE_LIMIT.get(key)) ?? 0)
    if (used >= LIMITS.ratePerHour) return false
    await env.RATE_LIMIT.put(key, String(used + 1), { expirationTtl: 3600 })
    return true
}

// Turnstile proves a browser solved a challenge. Only the first message is checked: that is where
// a scripted flood begins, and re-challenging mid-conversation is hostile to a real visitor.
// A failure here never errors at the visitor. They get the scripted message-taker instead, so a
// Cloudflare outage degrades the assistant rather than breaking the page.
export async function passesTurnstile(env: Env, token: unknown, ip: string): Promise<boolean> {
    if (!env.TURNSTILE_SECRET_KEY) return true // not configured yet
    if (typeof token !== "string" || token === "") return false
    try {
        const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
        })
        const data = (await res.json()) as { success?: boolean }
        return data.success === true
    } catch (err) {
        console.error("Turnstile verification failed:", err instanceof Error ? err.message : err)
        return false
    }
}

async function sendEmail(env: Env, payload: Record<string, unknown>): Promise<Response> {
    return fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: env.RESEND_FROM_EMAIL, ...payload }),
    })
}

export interface Lead {
    name?: string
    email?: string
    phone?: string
    business_type?: string
    what_they_need?: string
    urgency?: string
}

export function transcriptHtml(messages: ChatMessage[]): string {
    return messages
        .map((m) => {
            const who = m.role === "user" ? "Visitor" : "Assistant"
            const color = m.role === "user" ? "#ffffff" : "#9aa6b2"
            return `<p style="margin: 0 0 12px; line-height: 1.6; color: ${color};"><strong>${who}:</strong> ${escapeHtml(m.content)}</p>`
        })
        .join("")
}

async function emailLead(env: Env, lead: Lead, messages: ChatMessage[], flagged: string | null): Promise<void> {
    const row = (label: string, value: string) =>
        `<tr><td style="padding: 8px 0; border-bottom: 1px solid #222; color: #888; width: 150px;">${label}</td><td style="padding: 8px 0; border-bottom: 1px solid #222;">${value}</td></tr>`
    const rows = [
        lead.name ? row("Name", escapeHtml(lead.name)) : "",
        lead.email ? row("Email", `<a href="mailto:${escapeHtml(lead.email)}" style="color: #7c6bf0;">${escapeHtml(lead.email)}</a>`) : "",
        lead.phone ? row("Phone", escapeHtml(lead.phone)) : "",
        lead.business_type ? row("Business", escapeHtml(lead.business_type)) : "",
        lead.what_they_need ? row("Needs", escapeHtml(lead.what_they_need)) : "",
        lead.urgency ? row("Timing", escapeHtml(lead.urgency)) : "",
    ].join("")

    const warning = flagged
        ? `<p style="margin: 0 0 16px; padding: 10px 12px; background: #3a2a00; color: #ffd38a; font-size: 13px;">A reply in this conversation was replaced because it ${escapeHtml(flagged)}.</p>`
        : ""

    const html = `
        <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; padding: 32px 24px; background: #0d0d0d; color: #e5e5e5;">
            <h2 style="margin: 0 0 20px; font-size: 22px; color: #ffffff;">New lead from the site assistant</h2>
            ${warning}
            <table style="width: 100%; border-collapse: collapse;">${rows}</table>
            <h3 style="margin: 28px 0 12px; font-size: 16px; color: #ffffff;">Conversation</h3>
            ${transcriptHtml(messages)}
            <p style="margin: 28px 0 0; font-size: 12px; color: #555;">Sent by the assistant on innovateandamplify.com. The visitor was told you reply by the next business day.</p>
        </div>`

    const notify = await sendEmail(env, {
        to: [env.CONTACT_NOTIFY_EMAIL],
        reply_to: lead.email && EMAIL_PATTERN.test(lead.email) ? lead.email : env.REPLY_TO_EMAIL,
        subject: `Assistant lead${lead.name ? ` from ${lead.name.replace(/[\r\n]+/g, " ").slice(0, 60)}` : ""}`,
        html,
    })
    if (!notify.ok) console.error("Resend error (lead notification):", await notify.text())

    // Confirmation to the visitor. Plain text, never echoes what they typed.
    if (lead.email && EMAIL_PATTERN.test(lead.email)) {
        const confirm = await sendEmail(env, {
            to: [lead.email],
            reply_to: env.REPLY_TO_EMAIL,
            subject: "Innovate and Amplify: I got your message",
            text: [
                lead.name && SAFE_NAME.test(lead.name) ? `Hi ${lead.name.split(" ")[0]},` : "Hi there,",
                "",
                "Thanks for chatting with the assistant on my site. Your details came through to me.",
                "",
                "I'll reply by the next business day. If you want to add anything, just reply to this email.",
                "If it's urgent, call me at (425) 582-1003.",
                "",
                "Austin Harrison",
                "Innovate and Amplify, Spokane, WA",
                "https://innovateandamplify.com",
            ].join("\n"),
        })
        if (!confirm.ok) console.error("Resend error (visitor confirmation):", await confirm.text())
    }
}

interface ModelResult {
    text: string
    lead: Lead | null
    flagged: string | null
}

async function callModel(env: Env, messages: ChatMessage[]): Promise<ModelResult> {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), LIMITS.modelTimeoutMs)
    try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            signal: controller.signal,
            headers: {
                "x-api-key": env.ANTHROPIC_API_KEY,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                model: env.MODEL || DEFAULT_MODEL,
                max_tokens: LIMITS.maxOutputTokens,
                system: buildSystem(),
                tools: [SAVE_LEAD_TOOL],
                messages: messages.map((m) => ({ role: m.role, content: m.content })),
            }),
        })
        if (!res.ok) {
            console.error("Model error:", res.status, await res.text())
            return { text: FALLBACK_REPLY, lead: null, flagged: null }
        }
        const data = (await res.json()) as { content?: Array<Record<string, unknown>> }
        const blocks = data.content ?? []
        const text = blocks
            .filter((b) => b.type === "text")
            .map((b) => String(b.text ?? ""))
            .join("\n")
            .trim()
        const toolUse = blocks.find((b) => b.type === "tool_use" && b.name === SAVE_LEAD_TOOL.name)
        const lead = toolUse ? ((toolUse.input ?? {}) as Lead) : null

        // A lead needs a way to reach them. Without one, treat it as no lead.
        const reachable =
            lead && ((lead.email && EMAIL_PATTERN.test(lead.email)) || (lead.phone && PHONE_PATTERN.test(lead.phone.trim())))

        const flagged = text ? breaksRules(text) : null
        const safeText = flagged ? FALLBACK_REPLY : text
        if (flagged) console.error("Reply replaced because it", flagged)

        return {
            text: reachable ? LEAD_CONFIRMATION : safeText || FALLBACK_REPLY,
            lead: reachable ? lead : null,
            flagged,
        }
    } catch (err) {
        console.error("Model call failed:", err instanceof Error ? err.message : err)
        return { text: FALLBACK_REPLY, lead: null, flagged: null }
    } finally {
        clearTimeout(timer)
    }
}

// A lead email already carries its own transcript, so the digest exists for the other kind of
// conversation: the one where someone asked three questions, got an answer, and left. Without it
// a wrong answer is invisible, which is the one failure the output guard cannot catch.
export const TRANSCRIPT_TTL_DAYS = 8

export interface StoredConversation {
    at: string
    leadSaved: boolean
    flagged: string | null
    messages: ChatMessage[]
}

export function dayKey(d: Date): string {
    return d.toISOString().slice(0, 10)
}

// Stable across the turns of one conversation without trusting the client: the first thing the
// visitor typed does not change, so every turn hashes to the same key and overwrites the last.
// A client-supplied id is preferred when it looks sane, since it survives an edited first message.
export async function conversationId(messages: ChatMessage[], supplied?: unknown): Promise<string> {
    if (typeof supplied === "string" && /^[A-Za-z0-9_-]{8,64}$/.test(supplied)) return supplied
    const first = messages.find((m) => m.role === "user")?.content ?? ""
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(first))
    return Array.from(new Uint8Array(digest).slice(0, 8))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")
}

export async function recordConversation(env: Env, id: string, record: StoredConversation): Promise<void> {
    if (!env.TRANSCRIPTS) return
    try {
        await env.TRANSCRIPTS.put(`convo:${dayKey(new Date(record.at))}:${id}`, JSON.stringify(record), {
            expirationTtl: TRANSCRIPT_TTL_DAYS * 24 * 60 * 60,
        })
    } catch (err) {
        // Never let bookkeeping break a conversation that already succeeded.
        console.error("Transcript write failed:", err instanceof Error ? err.message : err)
    }
}

export function digestHtml(day: string, convos: StoredConversation[], leadCount: number): string {
    const block = (c: StoredConversation, i: number) => {
        const flag = c.flagged
            ? `<p style="margin: 0 0 8px; color: #ffd38a; font-size: 13px;">A reply here was replaced because it ${escapeHtml(c.flagged)}.</p>`
            : ""
        const asked = c.messages.filter((m) => m.role === "user").length
        return `
            <div style="margin: 0 0 28px; padding: 16px; background: #141414; border-left: 2px solid #333;">
                <p style="margin: 0 0 12px; color: #888; font-size: 12px;">Conversation ${i + 1} · ${asked} question${asked === 1 ? "" : "s"} · ${escapeHtml(new Date(c.at).toISOString().slice(11, 16))} UTC</p>
                ${flag}
                ${transcriptHtml(c.messages)}
            </div>`
    }
    return `
        <div style="font-family: sans-serif; max-width: 680px; margin: 0 auto; padding: 32px 24px; background: #0d0d0d; color: #e5e5e5;">
            <h2 style="margin: 0 0 8px; font-size: 22px; color: #ffffff;">Assistant conversations that did not leave details</h2>
            <p style="margin: 0 0 24px; color: #888; font-size: 14px;">${escapeHtml(day)} · ${convos.length} without a lead · ${leadCount} that did leave details, already emailed to you separately.</p>
            ${convos.map(block).join("")}
            <p style="margin: 28px 0 0; font-size: 12px; color: #555;">Read these for answers that were wrong, not just answers that were refused. The output guard catches the shape of a bad reply, never a false one.</p>
        </div>`
}

// Runs on the cron trigger. Reports yesterday's conversations that produced no lead, and sends
// nothing at all when there is nothing to report, so the mail stays worth opening.
export async function sendDigest(env: Env, now: Date): Promise<"sent" | "nothing" | "unconfigured"> {
    if (!env.TRANSCRIPTS) return "unconfigured"
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)
    const day = dayKey(yesterday)

    const listed = await env.TRANSCRIPTS.list({ prefix: `convo:${day}:` })
    const records: StoredConversation[] = []
    for (const key of listed.keys) {
        const raw = await env.TRANSCRIPTS.get(key.name)
        if (!raw) continue
        try {
            records.push(JSON.parse(raw) as StoredConversation)
        } catch {
            console.error("Unreadable transcript:", key.name)
        }
    }

    const withoutLead = records.filter((r) => !r.leadSaved).sort((a, b) => a.at.localeCompare(b.at))
    if (withoutLead.length === 0) return "nothing"

    const leadCount = records.length - withoutLead.length
    const res = await sendEmail(env, {
        to: [env.CONTACT_NOTIFY_EMAIL],
        reply_to: env.REPLY_TO_EMAIL,
        subject: `Assistant digest, ${day}: ${withoutLead.length} conversation${withoutLead.length === 1 ? "" : "s"} without a lead`,
        html: digestHtml(day, withoutLead, leadCount),
    })
    if (!res.ok) console.error("Resend error (digest):", await res.text())
    return "sent"
}

export default {
    async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
        ctx.waitUntil(sendDigest(env, new Date()))
    },

    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const origin = request.headers.get("Origin")

        if (request.method === "OPTIONS") {
            if (!isAllowedOrigin(origin)) return new Response(null, { status: 403 })
            return new Response(null, { status: 204, headers: corsHeaders(origin) })
        }
        if (request.method !== "POST") return json({ error: "Method not allowed" }, 405, origin)
        if (!isAllowedOrigin(origin)) return json({ error: "Forbidden" }, 403, origin)

        const ip = request.headers.get("CF-Connecting-IP") ?? "unknown"
        if (!(await underRateLimit(env, ip))) {
            return json({ reply: FALLBACK_REPLY, leadSaved: false, limited: true }, 200, origin)
        }

        let body: { messages?: unknown; leadSaved?: unknown; turnstileToken?: unknown; sessionId?: unknown }
        try {
            body = (await request.json()) as typeof body
        } catch {
            return json({ error: "Invalid request body" }, 400, origin)
        }

        const check = validateConversation(body.messages)
        if (!check.ok) {
            if (check.error === "turn-cap") {
                return json({ reply: FALLBACK_REPLY, leadSaved: false, capped: true }, 200, origin)
            }
            return json({ error: check.error }, check.status, origin)
        }
        const messages = check.messages

        // The model is off, over budget, or unconfigured: take a message instead.
        if (env.CHAT_ENABLED !== "true" || !env.ANTHROPIC_API_KEY) {
            return json({ reply: FALLBACK_REPLY, leadSaved: false, fallback: true }, 200, origin)
        }

        // Checked here rather than earlier so it only ever guards the path that costs money.
        const firstMessage = messages.filter((m) => m.role === "user").length === 1
        if (firstMessage && !(await passesTurnstile(env, body.turnstileToken, ip))) {
            return json({ reply: FALLBACK_REPLY, leadSaved: false, unverified: true }, 200, origin)
        }

        const result = await callModel(env, messages)

        // One lead per conversation. The client echoes leadSaved back so a later turn cannot
        // trigger a second email; a spoofed value only ever suppresses an email, never sends one.
        const alreadySaved = body.leadSaved === true
        const full = [...messages, { role: "assistant" as const, content: result.text }]
        if (result.lead && !alreadySaved) {
            ctx.waitUntil(emailLead(env, result.lead, full, result.flagged))
        }

        // Each turn overwrites the same key, so the stored copy is the whole conversation as it
        // stands and the leadSaved flag on it is final.
        const leadSaved = alreadySaved || !!result.lead
        ctx.waitUntil(
            conversationId(messages, (body as { sessionId?: unknown }).sessionId).then((id) =>
                recordConversation(env, id, {
                    at: new Date().toISOString(),
                    leadSaved,
                    flagged: result.flagged,
                    messages: full,
                }),
            ),
        )

        return json({ reply: result.text, leadSaved }, 200, origin)
    },
}
