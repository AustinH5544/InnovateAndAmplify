"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Heart, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const values = [
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Innovation First",
        description:
            "I stay ahead of the curve, experimenting with modern tools and creative approaches across web, brand, and digital campaigns.",
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Client Partnership",
        description:
            "Your success is my focus. I treat every project as a collaboration, keeping you in the loop from first idea to final launch.",
    },
    {
        icon: <Award className="h-6 w-6" />,
        title: "Excellence Always",
        description:
            "I hold my work to a high standard, sweating the details so your site, brand, and content feel polished and consistent.",
    },
    {
        icon: <Heart className="h-6 w-6" />,
        title: "Passion Driven",
        description:
            "I genuinely love building for the web, shaping brands, and refining digital experiences - and that energy shows up in the care I bring to every project.",
    },
]

const stats = [
    { value: "2024", label: "Founded" },
    { value: "7+", label: "Products Shipped" },
    { value: "6+", label: "Client Collaborations" },
    { value: "1", label: "Person Studio" },
]

const team = [
    {
        name: "Austin Harrison",
        role: "Founder & Developer",
        image: "/austin.jpg",
        bio: "I run Innovate & Amplify as a founder-led studio, partnering with clients across web, AI automation, branding, and digital marketing to ship polished work that performs.",
    },
]

export default function AboutPage() {
    return (
        <ShaderBackground>
            <Navigation />

            <main className="page-main">
                <div className="site-container">
                    <section className="mx-auto max-w-4xl text-center">
                        <div className="section-badge">
                            <span>{"Studio Profile"}</span>
                        </div>
                        <h1 className="page-title mt-6">
                            {"Meet "}
                            <span className="gradient-text">{"Innovate & Amplify"}</span>
                        </h1>
                        <p className="subtext mt-5 text-lg leading-8 sm:text-xl">
                            {
                                "A founder-led studio blending modern web development, AI automation, and digital marketing to help small businesses and creators grow with clarity and confidence."
                            }
                        </p>
                    </section>

                    <section className="page-section">
                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                            <div className="glass-panel-strong p-8 sm:p-10">
                                <div className="eyebrow">{"Origin Story"}</div>
                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                                    {"My Story"}
                                </h2>
                                <div className="subtext mt-6 space-y-4 leading-8">
                                    <p>
                                        {
                                            "Founded in 2024, Innovate & Amplify is my studio for building high-performing websites, modern brand systems, and AI-powered workflows that help clients show up online with clarity and confidence."
                                        }
                                    </p>
                                    <p>
                                        {
                                            "Instead of a large agency with layers of handoffs, you work directly with me end-to-end - from strategy and messaging, to design and development, to launch, optimization, and ongoing improvement."
                                        }
                                    </p>
                                    <p>
                                        {
                                            "Since launching, I've shipped 7+ products and collaborated with 6+ clients - delivering websites, apps, and automations built to scale, easy to maintain, and aligned with real business goals."
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="glass-panel interactive-panel p-6">
                                        <div className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                                            {stat.value}
                                        </div>
                                        <div className="subtext mt-3 text-sm uppercase tracking-[0.2em]">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="page-section pt-0">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-10 text-center">
                                <div className="section-badge">
                                    <span>{"Operating Principles"}</span>
                                </div>
                                <h2 className="page-title mt-6">{"My Values"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"The principles that guide every project I take on"}
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {values.map((value) => (
                                    <div key={value.title} className="glass-panel interactive-panel p-7">
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                            {value.title}
                                        </h3>
                                        <p className="subtext mt-4 leading-8">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="page-section pt-0">
                        <div className="mx-auto max-w-5xl">
                            <div className="mb-10 text-center">
                                <div className="section-badge">
                                    <span>{"Team"}</span>
                                </div>
                                <h2 className="page-title mt-6">{"Meet The Founder"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"The person behind Innovate & Amplify"}
                                </p>
                            </div>

                            {team.map((member) => (
                                <div
                                    key={member.name}
                                    className="glass-panel-strong grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-[320px_minmax(0,1fr)]"
                                >
                                    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.04]">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            width={640}
                                            height={640}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="eyebrow">{"Founder Profile"}</div>
                                        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                                            {member.name}
                                        </h3>
                                        <p className="mt-2 text-base font-medium text-primary">{member.role}</p>
                                        <p className="subtext mt-5 max-w-2xl leading-8">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="page-section pt-0">
                        <div className="mx-auto max-w-4xl">
                            <div className="glass-panel-strong px-6 py-10 text-center sm:px-10 sm:py-12">
                                <div className="section-badge">
                                    <span>{"Collaboration"}</span>
                                </div>
                                <h2 className="page-title mt-6">{"Let's Work Together"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {
                                        "Ready to level up your website, brand, or digital presence? Get in touch today."
                                    }
                                </p>
                                <div className="mt-8">
                                    <Button size="lg" className="group" asChild>
                                        <Link href="/contact">
                                            {"Start a Conversation"}
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
