import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Contact — Start Your Project | Innovate & Amplify",
    description:
        "Ready to start a web development, AI automation, or digital marketing project? Get in touch with Austin Harrison at Innovate & Amplify. Response within 24 hours.",
    alternates: { canonical: "/contact" },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ContactPage",
            "@id": "https://innovateandamplify.com/contact#webpage",
            url: "https://innovateandamplify.com/contact",
            name: "Contact — Innovate & Amplify",
            description:
                "Get in touch with Innovate & Amplify to discuss your web development, AI automation, or digital marketing project.",
            isPartOf: { "@id": "https://innovateandamplify.com/#website" },
            breadcrumb: { "@id": "https://innovateandamplify.com/contact#breadcrumb" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://innovateandamplify.com/contact#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://innovateandamplify.com" },
                { "@type": "ListItem", position: 2, name: "Contact", item: "https://innovateandamplify.com/contact" },
            ],
        },
    ],
};

export default function ContactLayout({ children }: { children: ReactNode }) {
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
