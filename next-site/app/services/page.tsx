"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    BarChart,
    Bot,
    Box,
    Code2,
    GitBranch,
    Globe,
    Megaphone,
    Plug,
    Search,
    Smartphone,
    TrendingUp,
} from "lucide-react"
import Link from "next/link"

const services = [
    {
        category: "Web Development",
        icon: <Code2 className="h-6 w-6" />,
        description: "Build powerful, scalable web applications that drive business growth",
        offerings: [
            {
                icon: <Globe className="h-5 w-5" />,
                title: "Custom Web Applications",
                description: "Tailored solutions built with modern frameworks like React, Next.js, and Node.js",
            },
            {
                icon: <Smartphone className="h-5 w-5" />,
                title: "Responsive Design",
                description: "Pixel-perfect experiences that work seamlessly across all devices",
            },
            {
                icon: <Box className="h-5 w-5" />,
                title: "E-commerce Solutions",
                description: "Complete online stores with secure payment processing and inventory management",
            },
        ],
    },
    {
        category: "AI Automation",
        icon: <Bot className="h-6 w-6" />,
        description: "Automate operations with agents, integrations, and internal tooling built for your workflows",
        offerings: [
            {
                icon: <GitBranch className="h-5 w-5" />,
                title: "Workflow Automation",
                description: "Connect tools and data with triggers, webhooks, and jobs that eliminate manual steps",
            },
            {
                icon: <Bot className="h-5 w-5" />,
                title: "AI Agents & Assistants",
                description: "Purpose-built agents for support, ops, and knowledge workflows with guardrails",
            },
            {
                icon: <Plug className="h-5 w-5" />,
                title: "Integrations & Internal Tools",
                description: "APIs, dashboards, and internal tools that turn repeatable processes into systems",
            },
        ],
    },
    {
        category: "Digital Marketing",
        icon: <TrendingUp className="h-6 w-6" />,
        description: "Data-driven strategies that amplify reach and drive conversions",
        offerings: [
            {
                icon: <Search className="h-5 w-5" />,
                title: "SEO Optimization",
                description: "Improve search rankings and drive organic traffic to your website",
            },
            {
                icon: <Megaphone className="h-5 w-5" />,
                title: "Social Media Management",
                description: "Engaging content strategies that build community and brand awareness",
            },
            {
                icon: <BarChart className="h-5 w-5" />,
                title: "Analytics & Insights",
                description: "Track performance and optimize campaigns with detailed reporting",
            },
        ],
    },
]

const process = [
    { step: "01", title: "Discovery", description: "Understanding your goals and challenges" },
    { step: "02", title: "Strategy", description: "Crafting a tailored approach" },
    { step: "03", title: "Execution", description: "Bringing ideas to life" },
    { step: "04", title: "Growth", description: "Iterating and optimizing" },
]

export default function ServicesPage() {
    return (
        <ShaderBackground>
            <Navigation />

            <main className="page-main">
                <div className="site-container">
                    <section className="mx-auto max-w-4xl text-center">
                        <div className="section-badge">
                            <span>{"Capabilities"}</span>
                        </div>
                        <h1 className="page-title mt-6">
                            {"Services That Drive "}
                            <span className="gradient-text">{"Results"}</span>
                        </h1>
                        <p className="subtext mt-5 text-lg leading-8 sm:text-xl">
                            {
                                "From concept to launch and beyond, I provide comprehensive digital solutions tailored to your business goals."
                            }
                        </p>
                    </section>

                    <section className="page-section">
                        <div className="space-y-8">
                            {services.map((service, index) => (
                                <div key={service.category} className="glass-panel-strong p-6 sm:p-8">
                                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                                        <div className="max-w-md">
                                            <div className="mb-5 flex items-center gap-4">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                                    {service.icon}
                                                </div>
                                                <span className="eyebrow">{`0${index + 1}`}</span>
                                            </div>
                                            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                                                {service.category}
                                            </h2>
                                            <p className="subtext mt-4 leading-8">{service.description}</p>
                                        </div>

                                        <div className="grid flex-1 gap-5 md:grid-cols-3">
                                            {service.offerings.map((offering) => (
                                                <div
                                                    key={offering.title}
                                                    className="glass-panel interactive-panel rounded-[1.35rem] p-5"
                                                >
                                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-primary">
                                                        {offering.icon}
                                                    </div>
                                                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                                                        {offering.title}
                                                    </h3>
                                                    <p className="subtext mt-3 text-sm leading-7">
                                                        {offering.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="page-section pt-0">
                        <div className="mx-auto max-w-5xl">
                            <div className="mb-10 text-center">
                                <div className="section-badge">
                                    <span>{"Delivery Model"}</span>
                                </div>
                                <h2 className="page-title mt-6">{"My Process"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"A clear, collaborative approach that delivers exceptional results"}
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                                {process.map((phase) => (
                                    <div key={phase.step} className="glass-panel interactive-panel p-6">
                                        <div className="eyebrow">{phase.step}</div>
                                        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                            {phase.title}
                                        </h3>
                                        <p className="subtext mt-3 text-sm leading-7">{phase.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="page-section pt-0">
                        <div className="mx-auto max-w-4xl">
                            <div className="glass-panel-strong px-6 py-10 text-center sm:px-10 sm:py-12">
                                <div className="section-badge">
                                    <span>{"Project Start"}</span>
                                </div>
                                <h2 className="page-title mt-6">{"Ready to Get Started?"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"Let's discuss how I can help you achieve your digital goals."}
                                </p>
                                <div className="mt-8">
                                    <Button size="lg" className="group" asChild>
                                        <Link href="/contact">
                                            {"Start Your Project"}
                                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </ShaderBackground>
    )
}
