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
            "Most small businesses run on templates that look like every other site in their industry. They're slow, generic, and hard to update. I build custom web applications with React, Next.js, TypeScript, and Tailwind CSS that are fast, easy to maintain, and built around how your business actually works. When you need something, you talk to the person who wrote the code instead of filing a support ticket.",
        offerings: [
            {
                icon: <Globe className="h-5 w-5" />,
                title: "Custom web applications",
                description:
                    "I build with React, Next.js, and Node.js instead of page builders or off-the-shelf themes. Every component is written for your content, workflow, and brand, so when something needs to change six months from now, it can.",
            },
            {
                icon: <Smartphone className="h-5 w-5" />,
                title: "Responsive design",
                description:
                    "Your site has to work as well on a phone in someone's hand in a parking lot as it does on a desktop. I build mobile-first with Tailwind CSS and test on real device sizes, not just a resized browser window.",
            },
            {
                icon: <Box className="h-5 w-5" />,
                title: "Online stores",
                description:
                    "Full online stores with secure payments, inventory management, and product pages you edit yourself through a CMS. I've set up Square payments and Sanity CMS for real clients, so they can manage their own catalog without calling a developer every time.",
            },
        ],
    },
    {
        category: "AI Automation",
        icon: <Bot className="h-6 w-6" />,
        description:
            "Some tasks in your business happen the same way every time: a new lead comes in, a form gets submitted, an appointment gets booked. Right now a person probably handles those by hand. I replace the manual steps with workflows built in n8n and connected to tools like OpenAI, your CRM, and your website through webhooks and APIs. You drop fewer balls and spend fewer hours on admin.",
        offerings: [
            {
                icon: <GitBranch className="h-5 w-5" />,
                title: "Workflow automation",
                description:
                    "I use n8n to connect the tools you already use, like your CRM, email platform, website forms, and calendar. When something happens (a form submission, a new booking, a status change), the workflow takes care of the next steps, and you stop copying and pasting between systems.",
            },
            {
                icon: <Bot className="h-5 w-5" />,
                title: "AI agents and assistants",
                description:
                    "AI agents built on the OpenAI and Anthropic APIs and trained on your own products, services, and FAQs, rather than a generic chatbot. For Evergreen Rain Gutters in Spokane, I built an AI assistant that answers homeowners' questions on their website around the clock, and the owner gets a text and an email the moment a lead comes in.",
            },
            {
                icon: <Plug className="h-5 w-5" />,
                title: "Integrations and internal tools",
                description:
                    "Custom API integrations, internal dashboards, and tools that turn a repeatable process into a system. If your team does something the same way more than a few times a week, there's a good chance some or all of it can be automated. I scope it, build it, and hand it off with documentation.",
            },
        ],
    },
    {
        category: "Digital Marketing",
        icon: <TrendingUp className="h-6 w-6" />,
        description:
            "A great website doesn't help if nobody finds it. Marketing is about making sure the people already looking for what you offer can find you and see why you're the right choice. I start with the data: what's bringing in traffic, what's converting, what isn't, and where the effort should go next.",
        offerings: [
            {
                icon: <Search className="h-5 w-5" />,
                title: "Search engine optimization",
                description:
                    "Technical SEO audits, on-page content fixes, structured data, and page speed work that improves your organic rankings. SEO takes time. I'll set realistic expectations and focus on work that builds up over months instead of quick fixes that fade.",
            },
            {
                icon: <Megaphone className="h-5 w-5" />,
                title: "Social media management",
                description:
                    "A content plan and posting schedule built around your audience and business goals instead of a generic content calendar. Whether you need a steady LinkedIn presence for B2B or Instagram content for a consumer brand, I set up something you can keep up with that still sounds like you.",
            },
            {
                icon: <BarChart className="h-5 w-5" />,
                title: "Analytics and reporting",
                description:
                    "GA4 setup, conversion tracking, campaign reporting, and plain-English analysis of what's working. I make sure you're measuring the right things before anyone draws conclusions, because vanity metrics don't pay the bills.",
            },
        ],
    },
]

const process = [
    {
        step: "01",
        title: "Discovery",
        description:
            "It starts with a conversation. There's no form to fill out and no RFP process. I want to understand your business, what you're trying to do, and what's in the way. That usually takes 30 to 60 minutes and gives me enough to write a clear scope. You'll know what I'm thinking by the end of the call instead of waiting on a mystery proposal.",
    },
    {
        step: "02",
        title: "Strategy",
        description:
            "Once I understand the problem, I write a plan: what to build, which tools to use, what order to do things in, and what to expect at each stage. For a website that means wireframes and tech decisions. For an automation it means a workflow map. You review it and push back, and the plan is settled before I write any code.",
    },
    {
        step: "03",
        title: "Execution",
        description:
            "I build it, and you get regular updates that show real progress instead of status meetings. Most web projects ship in 4 to 8 weeks depending on scope. Automations can be faster, sometimes 1 to 2 weeks for a focused workflow. You see working builds early, so problems show up long before the end.",
    },
    {
        step: "04",
        title: "Growth",
        description:
            "Launch is usually where the ongoing work starts. I offer retainers for clients who want continued development, optimization, or new automations as their business changes. Each month I go over what's working with you, pick the next most useful thing to build, and keep improving the system. Most of my best client relationships started with a single project.",
    },
]

const faqs = [
    {
        question: "What types of businesses do you work with?",
        answer:
            "Mostly small and mid-sized businesses that need real technical work rather than a template. That includes service businesses, local companies growing their operations, and founders building something specific. You can see examples in the <a href=\"/portfolio\" class=\"underline underline-offset-2\">portfolio</a>. Clients so far include an environmental training company, a home services contractor, and a photographer. If you're not sure your project fits, just ask.",
    },
    {
        question: "How long does a typical website project take?",
        answer:
            "Most custom websites take 4 to 8 weeks from signed contract to launch, depending on scope. A focused marketing site with a few pages is closer to 4 weeks. A site with a CMS, online store, or custom integrations takes longer. I'll give you a specific timeline during Discovery, before any money changes hands.",
    },
    {
        question: "What does AI automation actually do for a small business?",
        answer:
            "It takes over the repetitive, rules-based tasks that eat your team's time, like answering inbound inquiries, routing leads to the right person, sending follow-up emails, or updating your CRM when someone fills out a form. For a gutter company in Spokane, that meant an AI agent answering customer questions and taking down lead details at 11pm when nobody was in the office. The payoff is usually clear once you add up the hours saved.",
    },
    {
        question: "Do you work with clients remotely?",
        answer:
            "Yes. Almost all of my client work is remote. I'm based in Spokane and work with businesses across the US over video calls, shared docs, and email. If you're in the Spokane area or elsewhere in the Pacific Northwest and would rather meet in person for the first conversation, I'm happy to.",
    },
    {
        question: "What's included in an ongoing retainer?",
        answer:
            "A retainer is a set number of hours each month, spent on whatever matters most right now: new features, bug fixes, automation improvements, SEO work, or content updates. At the start of each month you and I agree on what to tackle, and I report back on what shipped. It works well for clients with ongoing technical needs who don't want to hire in-house.",
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
                            {"Web development, AI automation, and "}
                            <span className="gradient-text">{"digital marketing"}</span>
                        </h1>
                        <p className="subtext mt-5 text-lg leading-8 sm:text-xl">
                            {
                                "I work directly with business owners, without account managers or agency layers in between. If you want a developer who takes the time to understand your business and builds around it, "
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
                                <h2 className="page-title mt-6">{"How a project goes"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"You always know where things stand and what comes next."}
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
                                <h2 className="page-title mt-6">{"Common questions"}</h2>
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
                                <h2 className="page-title mt-6">{"Ready to get started?"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"Tell me what you're working on. If it's a good fit, I'll tell you what I'd build and what it would cost, without a sales pitch."}
                                </p>
                                <div className="mt-8">
                                    <Button size="lg" className="group" asChild>
                                        <Link href="/contact">
                                            {"Start a project"}
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
