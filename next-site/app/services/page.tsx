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
        description:
            "Most small businesses are running on templates that look like every other site in their industry — slow, generic, and hard to update. I build custom web applications using React, Next.js, TypeScript, and Tailwind CSS that are fast, maintainable, and built around how your business actually works. You get a direct line to the person who wrote the code, not a support ticket queue.",
        offerings: [
            {
                icon: <Globe className="h-5 w-5" />,
                title: "Custom Web Applications",
                description:
                    "Built with React, Next.js, and Node.js — not page builders or off-the-shelf themes. Every component is written to fit your specific content, workflow, and brand. When something needs to change six months down the line, it's actually changeable.",
            },
            {
                icon: <Smartphone className="h-5 w-5" />,
                title: "Responsive Design",
                description:
                    "Your site has to work on a phone held by someone standing in a parking lot just as well as it does on a desktop. I build mobile-first with Tailwind CSS, testing across real device sizes — not just a browser resize tool.",
            },
            {
                icon: <Box className="h-5 w-5" />,
                title: "E-commerce Solutions",
                description:
                    "Full online stores with secure payment processing, inventory management, and CMS-backed product pages. I've integrated Square payments and Sanity CMS for real clients — the kind of setup that lets you manage your own catalog without calling a developer every time.",
            },
        ],
    },
    {
        category: "AI Automation",
        icon: <Bot className="h-6 w-6" />,
        description:
            "There are tasks in your business that happen the same way every time — a new lead comes in, a form gets submitted, an appointment gets booked. Right now, a person is probably handling those manually. AI automation replaces the manual steps with workflows built in n8n, connected to tools like OpenAI, your CRM, and your website via webhooks and APIs. The result is fewer dropped balls and fewer hours spent on admin.",
        offerings: [
            {
                icon: <GitBranch className="h-5 w-5" />,
                title: "Workflow Automation",
                description:
                    "I use n8n to build automation workflows that connect the tools you already use — your CRM, your email platform, your website forms, your calendar. When a trigger fires (a form submit, a new booking, a status change), the workflow handles the next steps automatically. No more copy-pasting between systems.",
            },
            {
                icon: <Bot className="h-5 w-5" />,
                title: "AI Agents & Assistants",
                description:
                    "Purpose-built AI agents using the OpenAI and Anthropic APIs — not generic chatbots, but agents trained on your specific products, services, and FAQs. For one client in Spokane, we built an AI agent that handles inbound customer questions about their gutter services 24/7, qualifying leads before anyone on the team sees them.",
            },
            {
                icon: <Plug className="h-5 w-5" />,
                title: "Integrations & Internal Tools",
                description:
                    "Custom API integrations, internal dashboards, and tooling that turns a repeatable process into a system. If your team is doing something the same way more than a few times a week, there's a good chance it can be partially or fully automated. I scope it, build it, and hand it off with documentation.",
            },
        ],
    },
    {
        category: "Digital Marketing",
        icon: <TrendingUp className="h-6 w-6" />,
        description:
            "A great website that nobody finds doesn't help your business. Digital marketing is about making sure the right people — people who are actually looking for what you offer — can find you and understand why you're the right choice. I approach this with data first: what's driving traffic, what's converting, what's not, and where to put the effort next.",
        offerings: [
            {
                icon: <Search className="h-5 w-5" />,
                title: "SEO Optimization",
                description:
                    "Technical SEO audits, on-page content optimization, structured data markup, and page speed improvements that move the needle on organic rankings. SEO is a long game — I set realistic expectations and focus on the work that actually compounds over time, not quick fixes that evaporate.",
            },
            {
                icon: <Megaphone className="h-5 w-5" />,
                title: "Social Media Management",
                description:
                    "Content strategy and posting cadence built around your audience and business goals — not generic content calendars. Whether you need consistent LinkedIn presence for B2B reach or Instagram content for a consumer brand, I build a system that's sustainable and on-brand.",
            },
            {
                icon: <BarChart className="h-5 w-5" />,
                title: "Analytics & Insights",
                description:
                    "GA4 setup, conversion tracking, campaign performance reporting, and the kind of plain-English analysis that tells you what's actually working. I make sure you're measuring the right things before drawing conclusions — vanity metrics don't pay the bills.",
            },
        ],
    },
]

const process = [
    {
        step: "01",
        title: "Discovery",
        description:
            "We start with a conversation — no forms to fill out, no RFP process. I want to understand your business, what you're trying to accomplish, and what's getting in the way. This usually takes 30–60 minutes and gives me enough to put together a clear scope. You'll leave knowing exactly what I'm thinking, not waiting on a black-box proposal.",
    },
    {
        step: "02",
        title: "Strategy",
        description:
            "Once I understand the problem, I put together a plan: what to build, what tools to use, what order to do things in, and what to expect at each stage. For web projects this means wireframes and tech decisions. For automation projects it means a workflow map. You review it, push back, and we lock it in before any code gets written.",
    },
    {
        step: "03",
        title: "Execution",
        description:
            "I build it. You get regular updates — not status meetings, just actual progress. Most web projects ship in 4–8 weeks depending on scope. Automation projects can be faster, sometimes 1–2 weeks for a focused workflow. I work iteratively, so you see real builds early rather than waiting until the end to find out something's off.",
    },
    {
        step: "04",
        title: "Growth",
        description:
            "Launch isn't the end — it's the beginning. I offer retainer engagements for clients who want ongoing development, optimization, or new automation work as their business evolves. We review what's working, identify the next highest-leverage thing to build, and keep the system improving. Most of my best client relationships started with a single project.",
    },
]

const faqs = [
    {
        question: "What types of businesses do you work with?",
        answer:
            "Mostly small and mid-sized businesses that need real technical work done — not templated solutions. That includes service businesses, local companies scaling their operations, and founders building something specific. You can see examples in the <a href=\"/portfolio\" class=\"underline underline-offset-2\">portfolio</a> — clients range from environmental consulting firms to home services companies. If you're not sure whether your project fits, just reach out.",
    },
    {
        question: "How long does a typical website project take?",
        answer:
            "Most custom website builds take 4–8 weeks from signed contract to launch. The range depends on scope: a focused marketing site with a few pages lands closer to 4 weeks, while a site with a CMS, e-commerce, or custom integrations takes longer. I give you a specific timeline estimate during Discovery, before any money changes hands.",
    },
    {
        question: "What does AI automation actually do for a small business?",
        answer:
            "It handles the repetitive, rules-based tasks that are eating your team's time — things like responding to inbound inquiries, routing leads to the right person, sending follow-up emails, or updating your CRM when a form gets filled out. For a gutter company in Spokane, that meant an AI agent answering customer questions and capturing lead info at 11pm when no one was in the office. The ROI is usually pretty clear once you add up the hours saved.",
    },
    {
        question: "Do you work with clients remotely?",
        answer:
            "Yes — almost all of my client work is done remotely. I'm based in the Pacific Northwest and work with businesses across the US. Everything runs over video calls, shared docs, and async communication. If you're in the Spokane or broader Pacific Northwest area and prefer to meet in person for the initial conversation, that's an option too.",
    },
    {
        question: "What's included in an ongoing retainer?",
        answer:
            "Retainers are structured around a set number of hours per month, applied to whatever the current priority is — new features, bug fixes, automation improvements, SEO work, or content updates. There are no rigid service buckets. We meet briefly at the start of each month to align on what to tackle, and I report back on what shipped. It works well for clients who have ongoing technical needs but don't want to hire in-house.",
    },
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
                            {"Web Development, AI Automation & "}
                            <span className="gradient-text">{"Digital Marketing Services"}</span>
                        </h1>
                        <p className="subtext mt-5 text-lg leading-8 sm:text-xl">
                            {
                                "I work directly with business owners — no account managers, no agency layers, no handoffs. If you want a developer who actually understands your business and builds accordingly, "
                            }
                            <Link href="/contact" className="underline underline-offset-2">
                                {"get in touch"}
                            </Link>
                            {"."}
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
                                    {"A clear, collaborative approach — you always know where things stand and what comes next."}
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
                        <div className="mx-auto max-w-3xl">
                            <div className="mb-10 text-center">
                                <div className="section-badge">
                                    <span>{"FAQ"}</span>
                                </div>
                                <h2 className="page-title mt-6">{"Common Questions"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"Straight answers to the things people usually ask before reaching out."}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {faqs.map((faq) => (
                                    <div key={faq.question} className="glass-panel-strong p-6 sm:p-8">
                                        <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
                                            {faq.question}
                                        </h2>
                                        <p
                                            className="subtext mt-4 leading-8"
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        />
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
                                    {"Tell me what you're working on. If it's a good fit, I'll tell you what I'd build and what it would cost — no pressure, no sales pitch."}
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
