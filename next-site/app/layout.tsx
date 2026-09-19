import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { pageMeta } from "@/lib/seo";

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
    ...pageMeta({
        title: "Innovate & Amplify — Websites, AI Automation & Digital Marketing in Spokane",
        description:
            "Austin Harrison builds websites, AI automations, and digital products for local service businesses from Spokane, WA. One developer, no handoffs.",
        path: "/",
    }),
};

// Cloudflare Web Analytics (cookieless). Set NEXT_PUBLIC_CF_BEACON_TOKEN in the
// Cloudflare Pages build environment; the beacon is omitted when it is unset.
const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

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
                "A one-person studio in Spokane, WA, building websites, AI automation, and digital marketing for local service businesses.",
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
                "Websites, AI automation, and digital marketing for local service businesses, built by one developer in Spokane, WA.",
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
                {cfBeaconToken ? (
                    <script
                        defer
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                        data-cf-beacon={JSON.stringify({ token: cfBeaconToken })}
                    />
                ) : null}
            </body>
        </html>
    );
}
