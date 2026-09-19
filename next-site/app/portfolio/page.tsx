"use client"

import Navigation from "@/components/navigation"
import ShaderBackground from "@/components/shader-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const isExternalLink = (href: string) => href.startsWith("http")

const projects = [
    {
        id: 1,
        title: "Evergreen Rain Gutters",
        categories: ["Web Development", "AI Agents"],
        description:
            "Client work. The website for a roofing and gutter contractor in Spokane, with an AI assistant that answers homeowners on the site, instant alerts to the owner by text and email when a lead comes in, and a confirmation sent to the homeowner.",
        image: "/Evergreen_Port.webp",
        tags: ["Next.js", "AI Assistant", "Lead Alerts"],
        link: "https://evergreenrainguttersllc.com",
        showLink: true,
    },
    {
        id: 2,
        title: "MICRIST Environmental",
        categories: ["Web Development"],
        description:
            "Client work. The website for an asbestos training and inspection company serving the Inland Northwest, with a course catalog, online payments, booking confirmations, and a content system the client edits themselves.",
        image: "/Micrist_Port.webp",
        tags: ["Next.js", "Sanity CMS", "Online Payments"],
        link: "https://micristenviro.com",
        showLink: true,
    },
    {
        id: 3,
        title: "Starlit Stories",
        categories: ["App Development", "Web Development"],
        description:
            "A product I built, now in beta. A personalized children's storybook generator that lets parents create unique bedtime stories with their kids.",
        image: "/Starlit_Port.webp",
        tags: ["React", "Azure", "OpenAI"],
        link: "https://staging.starlitstories.app",
        showLink: true,
    },
    {
        id: 4,
        title: "Innovate and Amplify",
        categories: ["Web Development"],
        description:
            "This site. Built and hosted by me as a static Next.js site on Cloudflare Pages.",
        image: "/IAA_PortV2.webp",
        tags: ["Next.js", "Tailwind CSS", "Static Export"],
        link: "/",
        showLink: true,
    },
]

const categories = ["All", "Web Development", "App Development", "AI Agents"]

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.categories.includes(selectedCategory))

    return (
        <ShaderBackground>
            <Navigation />

            <main className="page-main">
                <div className="site-container">
                    <section className="mx-auto max-w-4xl text-center">
                        <div className="section-badge">
                            <span>{"Selected Work"}</span>
                        </div>
                        <h1 className="page-title mt-6">
                            {"My "}
                            <span className="gradient-text">{"Portfolio"}</span>
                        </h1>
                        <p className="subtext mt-5 text-lg leading-8 sm:text-xl">
                            {
                                "Explore the projects I have worked on and see how I help businesses transform their digital presence."
                            }
                        </p>
                    </section>

                    <section className="page-section">
                        <div className="mx-auto max-w-5xl">
                            <div className="glass-panel flex flex-wrap items-center justify-center gap-3 p-3">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "default" : "ghost"}
                                        onClick={() => setSelectedCategory(category)}
                                        className="min-w-[10rem]"
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group glass-panel interactive-panel flex h-full flex-col overflow-hidden"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(109,231,255,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
                                        <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-slate-950/75 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                                            {`0${index + 1}`}
                                        </div>
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                                            className="object-contain p-8 transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                        {project.showLink && project.link && (
                                            <div className="absolute inset-x-4 bottom-4">
                                                <Button size="sm" variant="secondary" asChild className="w-full">
                                                    {isExternalLink(project.link) ? (
                                                        <a href={project.link} target="_blank" rel="noreferrer">
                                                            {"View Project"}
                                                            <ExternalLink className="ml-1 h-4 w-4" />
                                                        </a>
                                                    ) : (
                                                        <Link href={project.link}>
                                                            {"View Project"}
                                                            <ExternalLink className="ml-1 h-4 w-4" />
                                                        </Link>
                                                    )}
                                                </Button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="eyebrow text-[0.68rem]">
                                            {project.categories.join(" / ")}
                                        </div>
                                        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                                            {project.title}
                                        </h2>
                                        <p className="subtext mt-4 flex-1 text-sm leading-7">{project.description}</p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="tag-chip">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="page-section pt-0">
                        <div className="mx-auto max-w-4xl">
                            <div className="glass-panel-strong px-6 py-10 text-center sm:px-10 sm:py-12">
                                <div className="section-badge">
                                    <span>{"Open Engagements"}</span>
                                </div>
                                <h2 className="page-title mt-6">{"Interested In What You See?"}</h2>
                                <p className="subtext mt-4 text-lg leading-8">
                                    {"Let's create something amazing together. Start your project today."}
                                </p>
                                <div className="mt-8">
                                    <Button size="lg" className="group" asChild>
                                        <Link href="/contact">
                                            {"Get In Touch"}
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
