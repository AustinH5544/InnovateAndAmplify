interface Env {
    RESEND_API_KEY: string
    RESEND_FROM_EMAIL: string
    CONTACT_NOTIFY_EMAIL: string
    REPLY_TO_EMAIL: string
}

// Only the live site and this project's Cloudflare Pages previews may call the Worker.
const ALLOWED_ORIGINS = new Set(["https://innovateandamplify.com", "https://www.innovateandamplify.com"])
const PREVIEW_ORIGIN = /^https:\/\/[a-z0-9-]+\.innovateandamplify\.pages\.dev$/

const LIMITS = { name: 120, email: 254, company: 160, service: 40, budget: 40, message: 5000 } as const

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

// Header-safe single line: no CR/LF, capped.
function oneLine(value: string, max: number): string {
    return value.replace(/[\r\n]+/g, " ").trim().slice(0, max)
}

const EMAIL_PATTERN = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/
// The auto-reply greets by name only when the name looks like a name, so the form
// can't be used to send arbitrary text (links, pitches) to arbitrary inboxes.
const SAFE_NAME = /^[\p{L}][\p{L} .'-]{0,59}$/u

function json(data: unknown, status: number, origin: string | null): Response {
    const headers: Record<string, string> = { "Content-Type": "application/json" }
    if (isAllowedOrigin(origin)) Object.assign(headers, corsHeaders(origin))
    return new Response(JSON.stringify(data), { status, headers })
}

async function sendEmail(env: Env, payload: Record<string, unknown>): Promise<Response> {
    return fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: env.RESEND_FROM_EMAIL, ...payload }),
    })
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const origin = request.headers.get("Origin")

        if (request.method === "OPTIONS") {
            if (!isAllowedOrigin(origin)) return new Response(null, { status: 403 })
            return new Response(null, { status: 204, headers: corsHeaders(origin) })
        }

        if (request.method !== "POST") return json({ error: "Method not allowed" }, 405, origin)
        if (!isAllowedOrigin(origin)) return json({ error: "Forbidden" }, 403, origin)

        let body: Record<string, unknown>
        try {
            body = await request.json()
        } catch {
            return json({ error: "Invalid request body" }, 400, origin)
        }

        const field = (key: keyof typeof LIMITS) => {
            const raw = body[key]
            return typeof raw === "string" ? raw.trim().slice(0, LIMITS[key]) : ""
        }

        // Honeypot: a hidden "website" field people never see. Bots fill it.
        // Report success so the bot learns nothing, and send nothing.
        if (typeof body.website === "string" && body.website.trim() !== "") {
            return json({ success: true }, 200, origin)
        }

        const name = field("name")
        const email = field("email")
        const company = field("company")
        const service = field("service")
        const budget = field("budget")
        const message = field("message")

        if (!name || !email || !message) {
            return json({ error: "Name, email, and message are required" }, 400, origin)
        }
        if (!EMAIL_PATTERN.test(email)) {
            return json({ error: "Please enter a valid email address" }, 400, origin)
        }

        const serviceLabel: Record<string, string> = {
            "web-development": "Web Development",
            "ai-automation": "AI Automation",
            "digital-marketing": "Digital Marketing",
        }

        const budgetLabel: Record<string, string> = {
            "0k-5k": "$0k – $5k",
            "5k-10k": "$5k – $10k",
            "10k-25k": "$10k – $25k",
            "25k-50k": "$25k – $50k",
            "50k+": "$50k+",
        }

        // Every submitted value is escaped before it touches the HTML.
        const e = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            company: escapeHtml(company),
            service: escapeHtml(serviceLabel[service] ?? service),
            budget: escapeHtml(budgetLabel[budget] ?? budget),
            message: escapeHtml(message),
        }
        const row = (label: string, value: string) =>
            `<tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; width: 140px;">${label}</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${value}</td></tr>`

        const html = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0d0d0d; color: #e5e5e5;">
                <h2 style="margin: 0 0 24px; font-size: 22px; color: #ffffff;">New Contact Form Submission</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    ${row("Name", e.name)}
                    ${row("Email", `<a href="mailto:${e.email}" style="color: #7c6bf0;">${e.email}</a>`)}
                    ${company ? row("Company", e.company) : ""}
                    ${service ? row("Service", e.service) : ""}
                    ${budget ? row("Budget", e.budget) : ""}
                </table>
                <div style="margin-top: 24px;">
                    <p style="margin: 0 0 8px; color: #888; font-size: 14px;">Message</p>
                    <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${e.message}</p>
                </div>
                <p style="margin: 32px 0 0; font-size: 12px; color: #555;">Sent via the innovateandamplify.com contact form. An automatic confirmation went to the sender. The site promises a reply by the next business day.</p>
            </div>
        `

        const notify = await sendEmail(env, {
            to: [env.CONTACT_NOTIFY_EMAIL],
            reply_to: email,
            subject: `New inquiry from ${oneLine(name, 80)}`,
            html,
        })

        if (!notify.ok) {
            console.error("Resend error (notification):", await notify.text())
            return json({ error: "Failed to send email" }, 500, origin)
        }

        // Plain auto-reply to the submitter. It never echoes their message.
        const greeting = SAFE_NAME.test(name) ? `Hi ${name.split(" ")[0]},` : "Hi there,"
        const autoReply = await sendEmail(env, {
            to: [email],
            reply_to: env.REPLY_TO_EMAIL,
            subject: "Innovate and Amplify: I got your message",
            text: [
                greeting,
                "",
                "Thanks for reaching out. Your message came through, and I read every one myself.",
                "",
                "I'll reply by the next business day. If you want to add anything, just reply to this email.",
                "If it's urgent, call me at (425) 582-1003.",
                "",
                "Austin Harrison",
                "Innovate and Amplify, Spokane, WA",
                "https://innovateandamplify.com",
            ].join("\n"),
        })

        if (!autoReply.ok) {
            // The lead already reached Austin, so the visitor still sees success.
            console.error("Resend error (auto-reply):", await autoReply.text())
        }

        return json({ success: true }, 200, origin)
    },
}
