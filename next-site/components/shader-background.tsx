"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import Footer from "./footer"

interface ShaderBackgroundProps {
    children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
    const [isPageVisible, setIsPageVisible] = useState(true)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

        updateMotionPreference()
        mediaQuery.addEventListener("change", updateMotionPreference)

        const handleVisibilityChange = () => setIsPageVisible(!document.hidden)
        document.addEventListener("visibilitychange", handleVisibilityChange)

        const handleMouseEnter = () => setIsActive(true)
        const handleMouseLeave = () => setIsActive(false)

        const container = containerRef.current
        if (container) {
            container.addEventListener("mouseenter", handleMouseEnter)
            container.addEventListener("mouseleave", handleMouseLeave)
        }

        return () => {
            mediaQuery.removeEventListener("change", updateMotionPreference)
            document.removeEventListener("visibilitychange", handleVisibilityChange)
            if (container) {
                container.removeEventListener("mouseenter", handleMouseEnter)
                container.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [])

    const shaderSpeed = prefersReducedMotion || !isPageVisible ? 0 : isActive ? 0.18 : 0.08

    return (
        <div ref={containerRef} className="site-shell relative min-h-screen overflow-hidden bg-[#040814]">
            {/* SVG Filters */}
            <svg className="absolute inset-0 w-0 h-0">
                <defs>
                    <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence baseFrequency="0.004" numOctaves="1" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.25" />
                        <feColorMatrix
                            type="matrix"
                            values="1 0 0 0 0.02
                      0 1 0 0 0.04
                      0 0 1 0 0.08
                      0 0 0 0.92 0"
                            result="tint"
                        />
                    </filter>
                    <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -9"
                            result="gooey"
                        />
                        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                    </filter>
                </defs>
            </svg>

            {/* Single background shader — pauses when tab is hidden or reduced-motion requested */}
            <MeshGradient
                className="absolute inset-0 h-full w-full opacity-95"
                colors={["#030712", "#08101f", "#0b1835", "#1a2d63", "#050918"]}
                speed={shaderSpeed}
            />

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="tech-orbit -left-32 top-0 h-[28rem] w-[28rem] bg-[#587dff]" />
                <div className="tech-orbit right-[-6rem] top-28 h-[22rem] w-[22rem] bg-[#51d7ff]" />
                <div className="tech-orbit bottom-[-12rem] left-[28%] h-[24rem] w-[24rem] bg-[#7a5cff]" />
                <div className="absolute inset-y-0 left-[7%] hidden w-px bg-gradient-to-b from-transparent via-white/12 to-transparent lg:block" />
                <div className="absolute inset-y-0 right-[8%] hidden w-px bg-gradient-to-b from-transparent via-sky-300/18 to-transparent lg:block" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,rgba(87,125,255,0.12),transparent_30%,rgba(81,215,255,0.1)_62%,transparent)]" />
            </div>

            <div className="relative z-10">
                {children}
                <Footer />
            </div>
        </div>
    )
}
