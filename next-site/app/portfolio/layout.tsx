import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Portfolio — Web, AI & App Projects | Innovate & Amplify",
    description:
        "Selected work by Austin Harrison: Starlit Stories, HRV monitoring for St. Luke's Hospital, Park Smart, Restaurant AI Agent, and more. Real projects, real results.",
    alternates: { canonical: "/portfolio" },
};

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
                        name: "Starlit Stories",
                        description: "A personalised children's storybook generator built with React, Azure, and OpenAI.",
                        url: "https://staging.starlitstories.app",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                        "@type": "CreativeWork",
                        name: "HRV Monitoring App for St. Luke's Hospital",
                        description: "A prototype iOS and Apple Watch app for monitoring heart rate variability for clinical review.",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                        "@type": "CreativeWork",
                        name: "Park Smart",
                        description: "A parking lot management web app for reservations, payments, and availability tracking.",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    item: {
                        "@type": "CreativeWork",
                        name: "Restaurant AI Agent",
                        description: "An AI agent chatbot handling customer queries and operations for restaurants.",
                        creator: { "@id": "https://innovateandamplify.com/#organization" },
                    },
                },
                {
                    "@type": "ListItem",
                    position: 5,
                    item: {
                        "@type": "CreativeWork",
                        name: "Cozy Curations",
                        description: "A print-on-demand store with active TikTok content marketing and e-commerce strategy.",
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
