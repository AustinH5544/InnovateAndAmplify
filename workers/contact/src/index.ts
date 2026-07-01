interface Env {
    RESEND_API_KEY: string
    RESEND_FROM_EMAIL: string
    CONTACT_NOTIFY_EMAIL: string
}

const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "https://innovateandamplify.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}

function json(data: unknown, status = 200): Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    })
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        if (request.method === "OPTIONS") {
            return new Response(null, { status: 204, headers: CORS_HEADERS })
        }

        if (request.method !== "POST") {
            return json({ error: "Method not allowed" }, 405)
        }

        let body: {
            name?: string
            email?: string
            company?: string
            service?: string
            budget?: string
            message?: string
        }

        try {
            body = await request.json()
        } catch {
            return json({ error: "Invalid request body" }, 400)
        }

        const { name, email, company, service, budget, message } = body

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return json({ error: "Name, email, and message are required" }, 400)
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

        const html = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0d0d0d; color: #e5e5e5;">
                <h2 style="margin: 0 0 24px; font-size: 22px; color: #ffffff;">New Contact Form Submission</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${name}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #7c6bf0;">${email}</a></td></tr>
                    ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${company}</td></tr>` : ""}
                    ${service ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${serviceLabel[service] ?? service}</td></tr>` : ""}
                    ${budget ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #222;">${budgetLabel[budget] ?? budget}</td></tr>` : ""}
                </table>
                <div style="margin-top: 24px;">
                    <p style="margin: 0 0 8px; color: #888; font-size: 14px;">Message</p>
                    <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                </div>
                <p style="margin: 32px 0 0; font-size: 12px; color: #555;">Sent via innovateandamplify.com contact form</p>
            </div>
        `

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: env.RESEND_FROM_EMAIL,
                to: [env.CONTACT_NOTIFY_EMAIL],
                reply_to: email,
                subject: `New inquiry from ${name}`,
                html,
            }),
        })

        if (!res.ok) {
            const err = await res.text()
            console.error("Resend error:", err)
            return json({ error: "Failed to send email" }, 500)
        }

        return json({ success: true })
    },
}
