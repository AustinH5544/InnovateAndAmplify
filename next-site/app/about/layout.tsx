import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "About Austin Harrison — Founder of Innovate & Amplify",
    description:
        "Meet Austin Harrison, founder of Innovate & Amplify. A one-person studio delivering web development, AI automation, and digital marketing since 2024. 7+ projects shipped.",
    alternates: { canonical: "/about" },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://innovateandamplify.com/about#austin-harrison",
            name: "Austin Harrison",
            jobTitle: "Founder & Developer",
            worksFor: { "@id": "https://innovateandamplify.com/#organization" },
            url: "https://innovateandamplify.com/about",
            description:
                "Founder of Innovate & Amplify, a studio specialising in web development, AI automation, and digital marketing.",
        },
        {
            "@type": "WebPage",
            "@id": "https://innovateandamplify.com/about#webpage",
            url: "https://innovateandamplify.com/about",
            name: "About Austin Harrison — Founder of Innovate & Amplify",
            isPartOf: { "@id": "https://innovateandamplify.com/#website" },
            breadcrumb: { "@id": "https://innovateandamplify.com/about#breadcrumb" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://innovateandamplify.com/about#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://innovateandamplify.com" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://innovateandamplify.com/about" },
            ],
        },
    ],
};

export default function AboutLayout({ children }: { children: ReactNode }) {
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
