import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
    weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ibm-plex-mono",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://innovateandamplify.com"),
    title: "Innovate & Amplify — AI Automation & Web Development",
    description:
        "Austin Harrison builds high-performance websites, AI automations, and digital products for small businesses. Founder-led studio. Get started today.",
    alternates: { canonical: "/" },
};

const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://innovateandamplify.com/#organization",
            name: "Innovate & Amplify",
            url: "https://innovateandamplify.com",
            logo: {
                "@type": "ImageObject",
                url: "https://innovateandamplify.com/logo.png",
            },
            description:
                "A founder-led studio specialising in AI automation, web development, and digital marketing for small businesses and creators.",
            foundingDate: "2024",
            founder: {
                "@type": "Person",
                "@id": "https://innovateandamplify.com/about#austin-harrison",
                name: "Austin Harrison",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-425-582-1003",
                contactType: "customer service",
                email: "contact@innovateandamplify.com",
                availableLanguage: "English",
            },
            areaServed: { "@type": "Country", name: "United States" },
            sameAs: [],
        },
        {
            "@type": "WebSite",
            "@id": "https://innovateandamplify.com/#website",
            url: "https://innovateandamplify.com",
            name: "Innovate & Amplify",
            description:
                "AI automation, web development, and digital marketing for ambitious businesses.",
            publisher: { "@id": "https://innovateandamplify.com/#organization" },
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`dark ${dmSans.variable} ${ibmPlexMono.variable}`}>
            <body className="font-sans antialiased">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
                {children}
            </body>
        </html>
    );
}
