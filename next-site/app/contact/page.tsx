"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const res = await fetch("https://iaa-contact-form.innovateandamplify.workers.dev", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (!res.ok) throw new Error("Failed to send")

            setSubmitted(true)
            setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" })
            setTimeout(() => setSubmitted(false), 5000)
        } catch {
            setError("Something went wrong. Please try again or email us directly.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <ShaderBackground>
            <Navigation />

            <main className="page-main">
                <div className="site-container">
                    <section className="mx-auto max-w-4xl text-center">
                        <div className="section-badge">
                            <span>{"Contact"}</span>
                        </div>
                        <h1 className="page-title mt-6">
                            {"Let's "}
                            <span className="gradient-text">{"Connect"}</span>
                        </h1>
                        <p className="subtext mt-5 text-lg leading-8 sm:text-xl">
                            {
                                "Have a project in mind? I'd love to hear about it. Fill out the form below or reach out directly."
                            }
                        </p>
                    </section>

                    <section className="page-section">
                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
                            <div className="glass-panel-strong p-8 sm:p-10">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <div>
                                        <div className="eyebrow">{"Project Brief"}</div>
                                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                                            {"Send us a message"}
                                        </h2>
                                    </div>
                                    <div className="hidden rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
                                        {"24h"}
                                    </div>
                                </div>

                                {submitted && (
                                    <div className="mb-6 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
                                        {"Thank you! We'll get back to you within 24 hours."}
                                    </div>
                                )}

                                {error && (
                                    <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="name">{"Name *"}</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label htmlFor="email">{"Email *"}</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label htmlFor="company">{"Company"}</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your Company Name"
                                        />
                                    </div>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="service">{"Service Interested In"}</Label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="form-select"
                                            >
                                                <option value="">{"Select a service"}</option>
                                                <option value="web-development">{"Web Development"}</option>
                                                <option value="ai-automation">{"AI Automation"}</option>
                                                <option value="digital-marketing">{"Digital Marketing"}</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label htmlFor="budget">{"Project Budget"}</Label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="form-select"
                                            >
                                                <option value="">{"Select budget range"}</option>
                                                <option value="0k-5k">{"$0k - $5k"}</option>
                                                <option value="5k-10k">{"$5k - $10k"}</option>
                                                <option value="10k-25k">{"$10k - $25k"}</option>
                                                <option value="25k-50k">{"$25k - $50k"}</option>
                                                <option value="50k+">{"$50k+"}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label htmlFor="message">{"Project Details *"}</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project, goals, and timeline..."
                                            required
                                            rows={6}
                                            className="resize-none"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="group w-full" disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </form>
                            </div>

                            <div className="space-y-6">
                                <div className="glass-panel p-7">
                                    <div className="eyebrow">{"Direct Contact"}</div>
                                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                        {"Get in touch"}
                                    </h2>

                                    <div className="mt-6 space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                                <Mail className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-foreground">{"Email"}</div>
                                                <a
                                                    href="mailto:contact@innovateandamplify.com"
                                                    className="subtext mt-1 inline-block text-sm transition-colors hover:text-primary"
                                                >
                                                    {"contact@innovateandamplify.com"}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                                <Phone className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-foreground">{"Phone"}</div>
                                                <a
                                                    href="tel:+1234567890"
                                                    className="subtext mt-1 inline-block text-sm transition-colors hover:text-primary"
                                                >
                                                    {"+1 (425) 582-1003"}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-panel p-7">
                                    <div className="eyebrow">{"Availability"}</div>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                        {"Business Hours"}
                                    </h3>
                                    <div className="subtext mt-6 space-y-3 text-sm">
                                        <div className="flex justify-between gap-4">
                                            <span>{"Monday - Friday"}</span>
                                            <span>{"9:00 AM - 6:00 PM"}</span>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <span>{"Saturday"}</span>
                                            <span>{"10:00 AM - 4:00 PM"}</span>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <span>{"Sunday"}</span>
                                            <span>{"Closed"}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-panel-strong p-7">
                                    <div className="eyebrow">{"Response Window"}</div>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                        {"Quick Response"}
                                    </h3>
                                    <p className="subtext mt-4 leading-8">
                                        {"We typically respond to all inquiries within 24 hours during business days."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </ShaderBackground>
    )
}
