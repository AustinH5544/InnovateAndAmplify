import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Services — Web Development, AI Automation & Digital Marketing | Innovate & Amplify",
    description:
        "Custom web apps with React/Next.js, AI workflow automation, and data-driven digital marketing. Tailored solutions for ambitious businesses. Founder-led, no agency layers.",
    alternates: { canonical: "/services" },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://innovateandamplify.com/services#webpage",
            url: "https://innovateandamplify.com/services",
            name: "Services — Innovate & Amplify",
            isPartOf: { "@id": "https://innovateandamplify.com/#website" },
            breadcrumb: { "@id": "https://innovateandamplify.com/services#breadcrumb" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://innovateandamplify.com/services#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://innovateandamplify.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://innovateandamplify.com/services" },
            ],
        },
        {
            "@type": "Service",
            "@id": "https://innovateandamplify.com/services#web-development",
            name: "Web Development",
            description:
                "Custom web applications, responsive design, and e-commerce solutions built with React, Next.js, and Node.js.",
            provider: { "@id": "https://innovateandamplify.com/#organization" },
            serviceType: "Web Development",
            areaServed: { "@type": "Country", name: "United States" },
        },
        {
            "@type": "Service",
            "@id": "https://innovateandamplify.com/services#ai-automation",
            name: "AI Automation",
            description:
                "Workflow automation, AI agents and assistants, and internal tooling that removes busywork, tightens operations, and scales what already works.",
            provider: { "@id": "https://innovateandamplify.com/#organization" },
            serviceType: "AI Automation",
            areaServed: { "@type": "Country", name: "United States" },
        },
        {
            "@type": "Service",
            "@id": "https://innovateandamplify.com/services#digital-marketing",
            name: "Digital Marketing",
            description:
                "Data-driven SEO, social media management, and analytics strategies that amplify reach and convert visitors into customers.",
            provider: { "@id": "https://innovateandamplify.com/#organization" },
            serviceType: "Digital Marketing",
            areaServed: { "@type": "Country", name: "United States" },
        },
    ],
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
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
