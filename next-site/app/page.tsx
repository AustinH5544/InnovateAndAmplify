"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
    return (
        <ShaderBackground>
            <Navigation />

            {/* Hero Section */}
            <main className="relative min-h-screen flex items-center justify-center pt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                            <Sparkles size={16} />
                            <span>{"Premium Digital Solutions"}</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                            <span className="text-foreground">{"Transform Your Vision Into "}</span>
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                {"Digital Reality"}
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl subtext max-w-2xl mx-auto text-pretty leading-relaxed">
                            {
                                "I craft exceptional web experiences, build memorable brands, and amplify your digital presence with strategy-driven marketing."
                            }
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="group" asChild>
                                <Link href="/contact">
                                    {"Get Started"}
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/portfolio">{"View My Work"}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Services Preview */}
            <section className="relative py-20 border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{"What I Do Best"}</h2>
                        <p className="text-lg subtext max-w-2xl mx-auto">
                            {"Three core services that drive results for ambitious businesses"}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Zap className="h-8 w-8" />,
                                title: "Web Development",
                                description:
                                    "Lightning-fast, scalable websites built with cutting-edge technology and best practices.",
                            },
                            {
                                icon: <Target className="h-8 w-8" />,
                                title: "Brand Identity",
                                description:
                                    "Memorable visual identities that capture your essence and resonate with your audience.",
                            },
                            {
                                icon: <Sparkles className="h-8 w-8" />,
                                title: "Digital Marketing",
                                description:
                                    "Data-driven strategies that amplify your reach and convert visitors into customers.",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/services">
                                {"Explore All Services"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 border-t border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            {"Ready to Amplify Your Digital Presence?"}
                        </h2>
                        <p className="text-lg subtext">
                            {"Let's collaborate on something extraordinary. Get in touch to discuss your project."}
                        </p>
                        <Button size="lg" className="group" asChild>
                            <Link href="/contact">
                                {"Start Your Project"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </ShaderBackground>
    )
}
