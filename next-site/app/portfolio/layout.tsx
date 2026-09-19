import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
    title: "Portfolio — Client Websites and Products | Innovate & Amplify",
    description:
        "Work by Austin Harrison: websites for Evergreen Rain Gutters in Spokane and MICRIST Environmental, plus Starlit Stories, a product in beta. Every project built by me.",
    path: "/portfolio",
});

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://innovateandamplify.com/portfolio#webpage",
            url: "https://innovateandamplify.com/portfolio",
            name: "Portfolio — Innovate & Amplify",
            isPartOf: { "@id": "https://innovateandamplify.com/#website" },
            breadcrumb: { "@id": "https://innovateandamplify.com/portfolio#breadcrumb" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://innovateandamplify.com/portfolio#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://innovateandamplify.com" },
                { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://innovateandamplify.com/portfolio" },
            ],
        },
        {
            "@type": "ItemList",
            "@id": "https://innovateandamplify.com/portfolio#project-list",
            name: "Portfolio Projects",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@type": "CreativeWork",
                        name: "Evergreen Rain Gutters",
                        description: "Website for a roofing and gutter contractor in Spokane, with an on-site AI assistant and instant lead alerts to the owner.",
                        url: "https://evergreenrainguttersllc.com",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                        "@type": "CreativeWork",
                        name: "MICRIST Environmental",
                        description: "Website for an asbestos training and inspection company, with a course catalog, online payments, and a client-edited CMS.",
                        url: "https://micristenviro.com",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                        "@type": "CreativeWork",
                        name: "SP-Archives",
                        description: "Website for Skyelar Payne, a photographer covering the Pacific Northwest and North Idaho, with a catalogue-style photo archive and session inquiries.",
                        url: "https://sp-archives.com",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    item: {
                        "@type": "CreativeWork",
                        name: "Starlit Stories",
                        description: "A personalized children's storybook generator built with React, Azure, and OpenAI. A product in beta.",
                        url: "https://staging.starlitstories.app",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
            ],
        },
    ],
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {children}
        </>
    );
}
