"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const isExternalLink = (href: string) => href.startsWith("http");

const projects = [
    {
        id: 1,
        title: "Starlit Stories",
        categories: ["App Development", "Web Development"],
        description:
            "A personaized children's storybook generator that let's parents generate custom unique bed time stories with their kids.",
        image: "/Starlit_Port.png",
        tags: ["React", "Azure", "OpenAI"],
        link: "https://staging.starlitstories.app", // <- full URL, with https
        showLink: true,
    },
    {
        id: 2,
        title: "HRV Monitoring App for St. Luke's Hospital",
        categories: ["App Development"],
        description:
            "A prototype iOS and Apple Watch app for monitoring heart rate variability (HRV), streaming watch data and storing it securely for clinical review.",
        image: "/StLuke_PortV2.png",
        tags: ["Swift", "watchOS", "HealthKit"],
        link: undefined,               // no destination yet
        showLink: false,               // <- hide button
    },
    {
        id: 3,
        title: "Park Smart",
        categories: ["App Development", "Web Development"],
        description:
            "A parking lot management web app that allows drivers to reserve and pay for spots, with tools for owners to track availability and usage.",
        image: "/ParkSmart_Port.png",
        tags: ["React", "Node.js", "Stripe"],
        link: undefined,
        showLink: false,
    },
    {
        id: 4,
        title: "Restaurant AI Agent/Chatbot (In-Progress)",
        categories: ["AI Agents", "Web Development"],
        description: "AI agent for restaurants",
        image: "/Rest_Port.png",
        tags: ["Logo Design", "Brand Guidelines", "Mockups"],
        link: "/restaurant-demo",      // <- your new page
        showLink: true,
    },
    {
        id: 5,
        title: "Cozy Curations",
        categories: ["Digital Marketing"],
        description:
            "A print-on-demand online store where I manage product listings, TikTok content, and ongoing marketing experiments to drive traffic and sales.",
        image: "/CC_Port.png",
        tags: ["E-commerce", "TikTok Marketing", "Content Strategy"],
        link: undefined,
        showLink: false,
    },
    {
        id: 6,
        title: "Innovate and Amplify",
        categories: ["Web Development"],
        description:
            "My own studio portfolio site, built to showcase services, case studies, and a clear path for potential clients to get in touch.",
        image: "/IAA_PortV2.png",
        tags: ["Next.js", "Tailwind CSS", "Static Export"],
        link: "/",                     // maybe your homepage
        showLink: true,
    },
];

const categories = ["All", "Web Development", "App Development", "Digital Marketing", "AI Agents"]

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.categories.includes(selectedCategory));

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
                            {"Explore the projects I have worked on and see how I help businesses transform their digital presence."}
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
                                <div className="relative aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="max-w-full max-h-full object-contain scale-90 group-hover:scale-100 origin-center transition-transform duration-500"
                                    />
                                    {project.showLink && project.link && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition-opacity duration-300 flex items-end justify-center pb-4">
                                            <Button size="sm" variant="secondary" asChild>
                                                {isExternalLink(project.link) ? (
                                                    <a href={project.link} target="_blank" rel="noreferrer">
                                                        {"View Project"}
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                ) : (
                                                    <Link href={project.link}>
                                                        {"View Project"}
                                                        <ExternalLink className="ml-2 h-4 w-4" />
                                                    </Link>
                                                )}
                                            </Button>
                                        </div>
                                    )}
                                </div> 

                                <div className="p-6">
                                    <div className="text-sm text-primary font-medium mb-2">
                                        {project.categories.join(" - ")}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                                            >
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
                        <h2 className="text-3xl font-bold mb-4">{"Interested In What You See?"}</h2>
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
