"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Zap, Heart } from "lucide-react"
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
            "I genuinely love building for the web, shaping brands, and refining digital experiences—and that energy shows up in the care I bring to every project.",
    },
]

const stats = [
    { value: "2024", label: "Founded" },
    { value: "5+", label: "Projects Shipped" },
    { value: "3+", label: "Client Collaborations" },
    { value: "1", label: "Person Studio" },
]

const team = [
    {
        name: "Austin Harrison",
        role: "Founder & Developer",
        image: "/austin.jpg",
        bio: "I’m a freelance developer and designer working across web, branding, and digital marketing for small businesses and creators.",
    },
]

export default function AboutPage() {
    return (
        <ShaderBackground>
            <Navigation />

            <main className="relative min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                            {"Meet "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                {"Innovate & Amplify"}
                            </span>
                        </h1>
                        <p className="text-xl subtext text-pretty leading-relaxed">
                            {
                                "A one-person studio blending modern web development, brand identity, and digital marketing to help small businesses and creators punch above their weight online."
                            }
                        </p>
                    </div>

                    {/* Story Section */}
                    <div className="max-w-4xl mx-auto mb-32">
                        <div className="p-8 sm:p-12 rounded-2xl bg-card/50 backdrop-blur border border-border">
                            <h2 className="text-3xl font-bold mb-6">{"My Story"}</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    {
                                        "Founded in 2024, Innovate & Amplify started as my personal studio with a simple mission: to help people with big ideas show up online with clarity, confidence, and modern, cohesive visuals."
                                    }
                                </p>
                                <p>
                                    {
                                        "Instead of a large agency with layers of handoffs, you work directly with me—from early strategy and messaging, to brand foundations, to design and development, to launch and iteration."
                                    }
                                </p>
                                <p>
                                    {
                                        "I’m still early in my freelance journey, but I’ve already shipped a growing handful of websites, apps, and digital experiments. The goal isn’t to inflate project counts—it’s to build a tight portfolio of work I’m proud of and long-term relationships with clients who value thoughtful craft."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-32">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm subtext">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Values */}
                    <div className="max-w-6xl mx-auto mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{"My Values"}</h2>
                            <p className="text-lg subtext">
                                {"The principles that guide every project I take on"}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="p-8 rounded-xl bg-card/50 backdrop-blur border border-border">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team */}
                    <div className="max-w-6xl mx-auto mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{"Meet The Founder"}</h2>
                            <p className="text-lg subtext">
                                {"The person behind Innovate & Amplify"}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="group text-center">
                                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                                        <img
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            className="w-full h-full object-contain transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                                    <div className="text-sm text-primary mb-2">{member.role}</div>
                                    <p className="text-sm subtext">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-card/50 backdrop-blur border border-border">
                        <h2 className="text-3xl font-bold mb-4">{"Let's Work Together"}</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {"Ready to level up your website, brand, or digital presence? Get in touch today."}
                        </p>
                        <Button size="lg" className="group" asChild>
                            <Link href="/contact">
                                {"Start a Conversation"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </ShaderBackground>
    )
}
