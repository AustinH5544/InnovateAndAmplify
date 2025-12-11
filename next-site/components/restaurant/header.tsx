"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowLeft } from "lucide-react"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#signature", label: "Signature" },
    { href: "#menu", label: "Menu" },
    { href: "#reservations", label: "Reservations" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[oklch(0.75_0.15_75_/_0.2)] bg-[oklch(0.1_0_0_/_0.95)] backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Left side: Back button + Logo */}
                <div className="flex items-center gap-5">
                    {/* Back to Innovate & Amplify */}
                    <Link
                        href="/portfolio" // change to "/" if you prefer going to the homepage
                        className="group inline-flex items-center gap-2 rounded-full border border-[oklch(0.75_0.15_75_/_0.35)] px-3 py-1 text-[9px] sm:text-[10px] tracking-[0.25em] text-[oklch(0.75_0.15_75)] transition-colors hover:bg-[oklch(0.18_0.03_80)] hover:text-[oklch(0.97_0_0)]"
                    >
                        <ArrowLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:-translate-x-0.5" />
                        <span className="uppercase">
                            <span className="hidden sm:inline">Back</span>
                            <span className="sm:hidden">Back</span>
                        </span>
                    </Link>

                    {/* Logo */}
                    <a href="#top" className="group flex flex-col items-center">
                        <span className="font-serif text-xl tracking-[0.3em] text-[oklch(0.95_0_0)] sm:text-2xl">
                            RIVERFRONT
                        </span>
                        <span className="text-[10px] tracking-[0.5em] text-[oklch(0.75_0.15_75)]">
                            BISTRO
                        </span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs tracking-[0.2em] text-[oklch(0.7_0_0)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
                        >
                            {link.label.toUpperCase()}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <a
                        href="#reservations"
                        className="btn-gold inline-flex items-center rounded-none px-6 py-3 text-xs tracking-[0.2em]"
                    >
                        RESERVE
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-[oklch(0.75_0.15_75)] lg:hidden"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-[oklch(0.75_0.15_75_/_0.2)] bg-[oklch(0.1_0_0)] lg:hidden">
                    <nav className="flex flex-col items-center gap-6 py-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm tracking-[0.2em] text-[oklch(0.7_0_0)] transition-colors hover:text-[oklch(0.75_0.15_75)]"
                            >
                                {link.label.toUpperCase()}
                            </a>
                        ))}

                        <a
                            href="#reservations"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn-gold mt-2 inline-flex items-center px-8 py-3 text-xs tracking-[0.2em]"
                        >
                            RESERVE A TABLE
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
