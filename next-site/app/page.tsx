"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const services = [
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Web Development",
        description: "Lightning-fast, scalable websites built with cutting-edge technology and best practices.",
    },
    {
        icon: <Bot className="h-6 w-6" />,
        title: "AI Automation",
        description: "Automations and agents that remove busywork, tighten operations, and scale what already works.",
    },
    {
        icon: <Sparkles className="h-6 w-6" />,
        title: "Digital Marketing",
        description: "Data-driven strategies that amplify your reach and convert visitors into customers.",
    },
]

export default function HomePage() {
    return (
        <ShaderBackground>
            <Navigation />

            <main className="page-main flex items-center">
                <div className="site-container">
                    <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center lg:gap-14">
                        <div className="space-y-8">
                            <div className="section-badge motion-safe-enter">
                                <Sparkles className="h-3.5 w-3.5 text-primary" />
                                <span>{"Premium Digital Solutions"}</span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="hero-title max-w-4xl motion-safe-enter motion-safe-delay-1">
                                    <span className="text-foreground">{"AI Automation & Web Development"}</span>
                                    <span className="gradient-text">{" for Small Businesses"}</span>
                                </h1>

                                <p className="subtext max-w-2xl text-lg leading-8 sm:text-xl">
                                    {
                                        "I build websites, AI automations, and digital marketing systems for small businesses and solo operators who want professional results without the agency overhead."
                                    }
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                                <Button size="lg" className="group" asChild>
                                    <Link href="/contact">
                                        {"Get Started"}
                                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/services">{"View Services"}</Link>
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {services.map((service) => (
                                    <span key={service.title} className="stat-chip">
                                        {service.title}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="tech-frame p-5 sm:p-6 lg:p-7">
                            <div className="mb-6 flex items-center justify-between gap-3">
                                <div>
                                    <p className="eyebrow">{"Capability Stack"}</p>
                                    <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                        {"What I Do Best"}
                                    </p>
                                </div>
                                <div className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                                    {"01-03"}
                                </div>
                            </div>

                            <div className="grid gap-4">
                                {services.map((service, index) => (
                                    <div
                                        key={service.title}
                                        className="glass-panel interactive-panel rounded-[1.35rem] p-5"
                                    >
                                        <div className="mb-4 flex items-start justify-between gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                                {service.icon}
                                            </div>
                                            <span className="eyebrow text-[0.68rem]">{`0${index + 1}`}</span>
                                        </div>
                                        <p className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                                            {service.title}
                                        </p>
                                        <p className="subtext mt-3 text-sm leading-7">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <section className="page-section">
                <div className="site-container">
                    <div className="section-rule mb-10" />

                    <div className="mx-auto max-w-3xl text-center">
                        <div className="section-badge">
                            <span>{"Focused Services"}</span>
                        </div>
                        <h2 className="page-title mt-6">{"What I Do Best"}</h2>
                        <p className="subtext mx-auto mt-4 max-w-2xl text-lg leading-8">
                            {"Three core services that drive results for ambitious businesses"}
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {services.map((service, index) => (
                            <div key={service.title} className="glass-panel interactive-panel p-7">
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                        {service.icon}
                                    </div>
                                    <span className="eyebrow">{`0${index + 1}`}</span>
                                </div>
                                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                    {service.title}
                                </h3>
                                <p className="subtext mt-4 leading-8">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/services">
                                {"Explore All Services"}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="page-section pt-0">
                <div className="site-container">
                    <div className="glass-panel p-7 sm:p-9">
                        <div className="mx-auto max-w-3xl">
                            <div className="section-badge mb-4">
                                <span>{"Why Work With Me"}</span>
                            </div>
                            <p className="subtext leading-8">
                                {
                                    "Every project is handled directly by me — no account managers, no handoffs, no markup on subcontracted work. I founded Innovate & Amplify in 2024 and have since shipped websites, automations, and marketing systems for clients including Evergreen Rain Gutters, a gutter contractor in Spokane, and MICRIST Environmental, a professional training company in Washington. I move fast, communicate clearly, and stay involved until the work is right."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section pt-0">
                <div className="site-container">
                    <div className="glass-panel-strong px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-14">
                        <div className="mx-auto max-w-3xl">
                            <div className="section-badge">
                                <span>{"Project Intake"}</span>
                            </div>
                            <h2 className="page-title mt-6">{"Ready to Amplify Your Digital Presence?"}</h2>
                            <p className="subtext mt-4 text-lg leading-8">
                                {
                                    "Let's collaborate on something extraordinary. Get in touch to discuss your project."
                                }
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
                </div>
            </section>
        </ShaderBackground>
    )
}
