"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projects = [
    {
        id: 1,
        title: "Starlit Stories",
        category: "Web Development",
        description: "A personaized children's storybook web app that let's parents generate custom unique bed time stories with their kids.",
        image: "/PlaceHolder.png",
        tags: ["React", "Vite", "Axios"],
        link: "#",
    },
    {
        id: 2,
        title: "HRV Monitoring App for St. Luke's Hospital",
        category: "App Development",
        description:
            "A prototype iOS and Apple Watch app for monitoring heart rate variability (HRV), streaming watch data and storing it securely for clinical review.",
        image: "/PlaceHolder.png",
        tags: ["Swift", "watchOS", "HealthKit"],
        link: "#",
    },
    {
        id: 3,
        title: "SmartPark",
        category: "Web Development",
        description:
            "A parking lot management web app that allows drivers to reserve and pay for spots, with tools for owners to track availability and usage.",
        image: "/PlaceHolder.png",
        tags: ["React", "Node.js", "Stripe"],
        link: "#",
    },
    {
        id: 4,
        title: "Brand Identity Concept",
        category: "Brand Identity",
        description:
            "A concept brand identity exploring logo design, typography, and mockup applications for a modern lifestyle brand.",
        image: "/PlaceHolder.png",
        tags: ["Logo Design", "Brand Guidelines", "Mockups"],
        link: "#",
    },
    {
        id: 5,
        title: "Cozy Curations",
        category: "Digital Marketing",
        description:
            "A print-on-demand online store where I manage product listings, TikTok content, and ongoing marketing experiments to drive traffic and sales.",
        image: "/PlaceHolder.png",
        tags: ["E-commerce", "TikTok Marketing", "Content Strategy"],
        link: "#",
    },
    {
        id: 6,
        title: "Innovate and Amplify",
        category: "Web Development",
        description:
            "My own studio portfolio site, built to showcase services, case studies, and a clear path for potential clients to get in touch.",
        image: "/PlaceHolder.png",
        tags: ["Next.js", "Tailwind CSS", "Static Export"],
        link: "#",
    },
]

//{
//    id: 5,
//    title: "CloudSync Analytics",
//    category: "Web Development",
//    description: "Enterprise analytics dashboard with advanced data visualization and reporting capabilities.",
//    image: "/PlaceHolder.png",
//    tags: ["React", "D3.js", "Python"],
//    link: "#",
//},

const categories = ["All", "Web Development", "App Development", "Digital Marketing", "Brand Identity"]

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProjects =
        selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

    return (
        <ShaderBackground>
            <Navigation />

            <main className="relative min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                            {"My "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                {"Portfolio"}
                            </span>
                        </h1>
                        <p className="text-xl subtext text-pretty leading-relaxed">
                            {"Explore my latest work and see how we help businesses transform their digital presence."}
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                                className="transition-all"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group rounded-xl overflow-hidden bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <Button size="sm" variant="secondary" asChild>
                                            <a href={project.link}>
                                                {"View Project"}
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto text-center mt-32 p-12 rounded-2xl bg-card/50 backdrop-blur border border-border">
                        <h2 className="text-3xl font-bold mb-4">{"Like What You See?"}</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            {"Let's create something amazing together. Start your project today."}
                        </p>
                        <Button size="lg" className="group" asChild>
                            <Link href="/contact">
                                {"Get In Touch"}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </ShaderBackground>
    )
}
