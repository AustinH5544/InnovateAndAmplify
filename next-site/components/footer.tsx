"use client"

import Link from "next/link"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
]

export default function Footer() {
    return (
        <footer className="relative mt-20">
            {/* Top rule */}
            <div className="section-rule" />

            <div
                className="relative"
                style={{
                    background: "linear-gradient(180deg, rgba(7, 12, 24, 0.0) 0%, rgba(4, 8, 20, 0.72) 100%)",
                    backdropFilter: "blur(12px)",
                }}
            >
                {/* Main footer columns */}
                <div className="site-container py-12 lg:py-16">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Left: Brand */}
                        <div className="flex flex-col gap-4">
                            <span className="text-base font-semibold tracking-tight text-foreground">
                                Innovate &amp; Amplify
                            </span>
                            <p className="subtext max-w-[22rem] text-sm leading-relaxed">
                                AI automation, web development &amp; digital marketing for ambitious businesses.
                            </p>
                        </div>

                        {/* Middle: Navigation */}
                        <div className="flex flex-col gap-4">
                            <span className="eyebrow">Navigation</span>
                            <nav className="flex flex-col gap-2.5">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="subtext w-fit text-sm transition-colors duration-150 hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Right: Contact + CTA */}
                        <div className="flex flex-col gap-4">
                            <span className="eyebrow">Get in Touch</span>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="tel:+14255821003"
                                    className="subtext w-fit text-sm transition-colors duration-150 hover:text-foreground"
                                >
                                    +1 (425) 582-1003
                                </a>
                                <a
                                    href="mailto:contact@innovateandamplify.com"
                                    className="subtext w-fit text-sm transition-colors duration-150 hover:text-foreground"
                                >
                                    contact@innovateandamplify.com
                                </a>
                            </div>
                            <Link
                                href="/contact"
                                className="mt-2 inline-flex w-fit items-center rounded-xl px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-150 hover:brightness-110"
                                style={{
                                    background:
                                        "linear-gradient(135deg, oklch(0.77 0.11 235 / 0.18), oklch(0.7 0.11 284 / 0.18))",
                                    border: "1px solid oklch(0.77 0.11 235 / 0.32)",
                                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                                }}
                            >
                                Start a Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="site-container pb-8"
                    style={{ borderTop: "1px solid rgba(146, 168, 197, 0.1)" }}
                >
                    <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="subtext text-xs">
                            &copy; 2024&ndash;2026 Innovate &amp; Amplify. All rights reserved.
                        </p>
                        <p className="subtext text-xs">Built by Austin Harrison</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
