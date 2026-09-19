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
        title: "Try new things",
        description:
            "I keep testing new tools and approaches in web, branding, and marketing, and I keep the ones that work.",
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Work together",
        description:
            "I treat every project as a collaboration and keep you in the loop from the first idea through launch.",
    },
    {
        icon: <Award className="h-6 w-6" />,
        title: "Sweat the details",
        description:
            "I hold my work to a high standard, so your site, brand, and content look polished and consistent.",
    },
    {
        icon: <Heart className="h-6 w-6" />,
        title: "Like the work",
        description:
            "I love building for the web and working on brands. That's a big part of why I care about the small stuff.",
    },
]

const stats = [
    { value: "2024", label: "Founded" },
    { value: "3", label: "Client Sites Live" },
    { value: "1", label: "Product in Beta" },
    { value: "1", label: "Person Studio" },
]

const team = [
    {
        name: "Austin Harrison",
        role: "Founder & Developer",
        image: "/austin.webp",
        bio: "I build websites, AI automations, and marketing systems for small businesses and solo operators, without the agency overhead. For the web I use Next.js, React, and TypeScript. For automations I use n8n, the OpenAI API, and Anthropic's Claude. I was building for the web before AI went mainstream. Now I help clients use it on problems their business actually has.",
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
                            {"Austin Harrison, "}
                            <span className="gradient-text">{"founder and developer"}</span>
                        </h1>
                        <p className="subtext mt-5 text-lg leading-8 sm:text-xl">
                            {
                                "A one-person studio doing web development, AI automation, and digital marketing for small businesses and creators."
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
                                            "I started Innovate & Amplify in 2024. It's where I build fast websites, brand systems, and AI workflows for my clients."
                                        }
                                    </p>
                                    <p>
                                        {
                                            "Instead of a large agency with layers of handoffs, you work with me the whole way through: strategy and messaging, design and development, launch, and the improvements that come after."
                                        }
                                    </p>
                                    <p>
                                        {
                                            "Since launching in 2024, I've built three client websites that are live today: Evergreen Rain Gutters, a gutter contractor in Spokane; MICRIST Environmental, a training company in Washington; and SP-Archives, the portfolio of photographer Skyelar Payne. I also have one product of my own, Starlit Stories, in beta. I built every one of them myself."
                                        }
                                    </p>
                                    <p>
                                        {
                                            "I'm based in Spokane and work with local service businesses and solo operators who don't want to pay agency prices. If you want to see the work, look through the portfolio or get in touch."
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
                                <h2 className="page-title mt-6">{"AI Automation & Web Development Studio"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"How I work on every project"}
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
                                <h2 className="page-title mt-6">{"Meet the founder"}</h2>
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
                                        "Want help with your website, brand, or marketing? Get in touch."
                                    }
                                </p>
                                <div className="mt-8">
                                    <Button size="lg" className="group" asChild>
                                        <Link href="/contact">
                                            {"Start a conversation"}
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
