"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="glass-panel-strong flex items-center justify-between rounded-[1.75rem] px-4 py-3 sm:px-5">
                    <Link href="/" className="flex min-w-0 items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <Image
                                src="/logo.png"
                                alt="Innovate & Amplify Logo"
                                width={40}
                                height={40}
                                priority
                                className="h-9 w-9 rounded-xl object-contain"
                            />
                        </div>
                        <div className="min-w-0">
                            <div className="truncate text-base font-semibold tracking-[-0.03em] text-foreground sm:text-lg">
                                <span>Innovate</span>
                                <span className="px-1.5 text-primary">&amp;</span>
                                <span>Amplify</span>
                            </div>
                            <div className="eyebrow hidden sm:block">AI Automation &amp; Digital Products</div>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-2 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                                    pathname === link.href
                                        ? "bg-white/[0.08] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                                        : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] text-foreground transition-colors hover:border-primary/30 hover:text-primary md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="glass-panel mt-3 rounded-[1.5rem] p-3 md:hidden">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "block rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                                        pathname === link.href
                                            ? "bg-white/[0.08] text-foreground"
                                            : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
