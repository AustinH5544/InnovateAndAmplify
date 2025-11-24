"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Code2,
    Palette,
    TrendingUp,
    Globe,
    Smartphone,
    Search,
    Mail,
    BarChart,
    Megaphone,
    PenTool,
    Box,
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
        category: "Brand Identity",
        icon: <Palette className="h-6 w-6" />,
        description: "Create memorable visual identities that resonate with your audience",
        offerings: [
            {
                icon: <PenTool className="h-5 w-5" />,
                title: "Logo Design",
                description: "Unique, timeless logos that capture your brand essence",
            },
            {
                icon: <Palette className="h-5 w-5" />,
                title: "Visual Systems",
                description: "Comprehensive brand guidelines including colors, typography, and imagery",
            },
            {
                icon: <Mail className="h-5 w-5" />,
                title: "Marketing Collateral",
                description: "Business cards, brochures, and digital assets that maintain brand consistency",
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

export default function ServicesPage() {
    return (
        <ShaderBackground>
            <Navigation />

            <main className="relative min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                            {"Services That Drive "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                {"Results"}
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            {
                                "From concept to launch and beyond, we provide comprehensive digital solutions tailored to your business goals."
                            }
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div key={index} className="max-w-6xl mx-auto">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">{service.icon}</div>
                                    <div>
                                        <h2 className="text-3xl font-bold">{service.category}</h2>
                                        <p className="text-muted-foreground mt-1">{service.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {service.offerings.map((offering, offerIndex) => (
                                        <div
                                            key={offerIndex}
                                            className="group p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300"
                                        >
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                                                {offering.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">{offering.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Process Section */}
                    <div className="max-w-4xl mx-auto mt-32">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{"Our Process"}</h2>
                            <p className="text-lg text-muted-foreground">
                                {"A proven methodology that delivers exceptional results"}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Discovery", description: "Understanding your goals and challenges" },
                                { step: "02", title: "Strategy", description: "Crafting a tailored approach" },
                                { step: "03", title: "Execution", description: "Bringing ideas to life" },
                                { step: "04", title: "Growth", description: "Iterating and optimizing" },
                            ].map((phase, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto text-center mt-32 p-12 rounded-2xl bg-card/50 backdrop-blur border border-border">
                        <h2 className="text-3xl font-bold mb-4">{"Ready to Get Started?"}</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {"Let's discuss how we can help achieve your digital goals."}
                        </p>
                        <Button size="lg" className="group" asChild>
                            <Link href="/contact">
                                {"Start Your Project"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </ShaderBackground>
    )
}
