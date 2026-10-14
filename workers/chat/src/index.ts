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

// Last line of defence on model output. A hit means the reply is thrown away, not edited, and the
// notification to Austin records which rule tripped.
export function breaksRules(text: string): string | null {
    if (/\$\s?\d/.test(text)) return "quoted a dollar amount"
    if (/\b\d+\s?%/.test(text)) return "quoted a percentage"
    if (/\bguarantee(d|s)?\b/i.test(text)) return "used the word guarantee"
    if (/\bdiscount(ed|s)?\b/i.test(text)) return "offered a discount"
    if (/\bI promise\b/i.test(text)) return "made a promise"
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
                lead.name ? `Hi ${lead.name.split(" ")[0]},` : "Hi there,",
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

export default {
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

        let body: { messages?: unknown; leadSaved?: unknown }
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

        const result = await callModel(env, messages)

        // One lead per conversation. The client echoes leadSaved back so a later turn cannot
        // trigger a second email; a spoofed value only ever suppresses an email, never sends one.
        const alreadySaved = body.leadSaved === true
        if (result.lead && !alreadySaved) {
            const full = [...messages, { role: "assistant" as const, content: result.text }]
            ctx.waitUntil(emailLead(env, result.lead, full, result.flagged))
        }

        return json({ reply: result.text, leadSaved: alreadySaved || !!result.lead }, 200, origin)
    },
}
