"use client"

import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import "../styles/navigation.css"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export default function Navigation() {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav className="navigation">
            <div className="container">
                <div className="nav-inner">
                    <Link to="/" className="nav-logo">
                        <span className="logo-text">Innovate</span>
                        <span className="logo-amp"> & </span>
                        <span className="logo-amplify">Amplify</span>
                    </Link>

                    <div className="nav-desktop">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`nav-link ${location.pathname === link.href ? "nav-link-active" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="nav-mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="nav-mobile">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`nav-mobile-link ${location.pathname === link.href ? "nav-mobile-link-active" : ""}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
