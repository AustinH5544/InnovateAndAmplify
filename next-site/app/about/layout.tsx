import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
    title: "About Austin Harrison, Founder of Innovate & Amplify",
    description:
        "I'm Austin Harrison. I started Innovate & Amplify, a one-person studio in Spokane, in 2024. Three client websites are live, one product is in beta, and I build every project myself.",
    path: "/about",
});

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
                "Founder of Innovate & Amplify, a studio for web development, AI automation, and digital marketing.",
        },
        {
            "@type": "WebPage",
            "@id": "https://innovateandamplify.com/about#webpage",
            url: "https://innovateandamplify.com/about",
            name: "About Austin Harrison, Founder of Innovate & Amplify",
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
