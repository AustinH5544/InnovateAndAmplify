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
            "We stay ahead of the curve, leveraging cutting-edge technologies and creative approaches to solve complex problems.",
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Client Partnership",
        description: "Your success is our success. We work collaboratively, treating every project as a true partnership.",
    },
    {
        icon: <Award className="h-6 w-6" />,
        title: "Excellence Always",
        description: "We hold ourselves to the highest standards, delivering work that exceeds expectations every time.",
    },
    {
        icon: <Heart className="h-6 w-6" />,
        title: "Passion Driven",
        description: "We love what we do, and it shows in the quality and creativity we bring to every project.",
    },
]

const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "5", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
]

const team = [
    {
        name: "Austin Harrison",
        role: "Founder & Developer",
        image: "/austin.jpg",
        bio: "Visionary leader with a passion for digital strategy and design.",
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
                            {"We Are "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                {"Innovate & Amplify"}
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            {
                                "A passionate team of designers, developers, and strategists dedicated to transforming ambitious ideas into digital realities."
                            }
                        </p>
                    </div>

                    {/* Story Section */}
                    <div className="max-w-4xl mx-auto mb-32">
                        <div className="p-8 sm:p-12 rounded-2xl bg-card/50 backdrop-blur border border-border">
                            <h2 className="text-3xl font-bold mb-6">{"Our Story"}</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    {
                                        "Founded in 2019, Innovate & Amplify started with a simple mission: to help businesses unlock their digital potential through exceptional design and technology."
                                    }
                                </p>
                                <p>
                                    {
                                        "What began as a small freelance operation has grown into a full-service digital agency, working with startups, scale-ups, and established brands across industries. Our approach combines strategic thinking, creative excellence, and technical expertise to deliver solutions that don't just look good—they drive real business results."
                                    }
                                </p>
                                <p>
                                    {
                                        "Today, we're proud to have helped over 50 clients transform their digital presence, launch successful products, and achieve their growth objectives. But we're just getting started."
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
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Values */}
                    <div className="max-w-6xl mx-auto mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{"Our Values"}</h2>
                            <p className="text-lg text-muted-foreground">{"The principles that guide everything we do"}</p>
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
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{"Meet The Team"}</h2>
                            <p className="text-lg text-muted-foreground">{"The talented people behind your success"}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="group text-center">
                                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                                        <img
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                                    <div className="text-sm text-primary mb-2">{member.role}</div>
                                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-card/50 backdrop-blur border border-border">
                        <h2 className="text-3xl font-bold mb-4">{"Let's Work Together"}</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {"Ready to take your digital presence to the next level? Get in touch today."}
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
