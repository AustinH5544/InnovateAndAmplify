"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({
            name: "",
            email: "",
            company: "",
            service: "",
            budget: "",
            message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
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

            <main className="relative min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                            {"Let's "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                {"Connect"}
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            {"Have a project in mind? We'd love to hear about it. Fill out the form below or reach out directly."}
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="p-8 sm:p-10 rounded-2xl bg-card/50 backdrop-blur border border-border">
                            <h2 className="text-2xl font-bold mb-6">{"Send us a message"}</h2>

                            {submitted && (
                                <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                    {"Thank you! We'll get back to you within 24 hours."}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{"Name *"}</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">{"Email *"}</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">{"Company"}</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                        className="bg-background/50"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="service">{"Service Interested In"}</Label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="">{"Select a service"}</option>
                                            <option value="web-development">{"Web Development"}</option>
                                            <option value="brand-identity">{"Brand Identity"}</option>
                                            <option value="digital-marketing">{"Digital Marketing"}</option>
                                            <option value="consulting">{"Consulting"}</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="budget">{"Project Budget"}</Label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="">{"Select budget range"}</option>
                                            <option value="5k-10k">{"$5k - $10k"}</option>
                                            <option value="10k-25k">{"$10k - $25k"}</option>
                                            <option value="25k-50k">{"$25k - $50k"}</option>
                                            <option value="50k+">{"$50k+"}</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">{"Project Details *"}</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        required
                                        rows={6}
                                        className="bg-background/50 resize-none"
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur border border-border">
                                <h2 className="text-2xl font-bold mb-6">{"Get in touch"}</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium mb-1">{"Email"}</div>
                                            <a
                                                href="mailto:hello@innovateamplify.com"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {"hello@innovateamplify.com"}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium mb-1">{"Phone"}</div>
                                            <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                                                {"+1 (234) 567-890"}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium mb-1">{"Office"}</div>
                                            <div className="text-muted-foreground">
                                                {"123 Innovation Street"}
                                                <br />
                                                {"San Francisco, CA 94103"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur border border-border">
                                <h3 className="text-xl font-bold mb-4">{"Business Hours"}</h3>
                                <div className="space-y-2 text-muted-foreground">
                                    <div className="flex justify-between">
                                        <span>{"Monday - Friday"}</span>
                                        <span>{"9:00 AM - 6:00 PM"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{"Saturday"}</span>
                                        <span>{"10:00 AM - 4:00 PM"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{"Sunday"}</span>
                                        <span>{"Closed"}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                                <h3 className="text-xl font-bold mb-2">{"Quick Response"}</h3>
                                <p className="text-muted-foreground">
                                    {"We typically respond to all inquiries within 24 hours during business days."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </ShaderBackground>
    )
}
