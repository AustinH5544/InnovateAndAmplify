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
        {
            "@type": "FAQPage",
            "@id": "https://innovateandamplify.com/services#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What types of businesses do you work with?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Mostly small and mid-sized businesses that need real technical work done — not templated solutions. That includes service businesses, local companies scaling their operations, and founders building something specific. Clients range from environmental consulting firms to home services companies. If you're not sure whether your project fits, just reach out.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does a typical website project take?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most custom website builds take 4–8 weeks from signed contract to launch. The range depends on scope: a focused marketing site with a few pages lands closer to 4 weeks, while a site with a CMS, e-commerce, or custom integrations takes longer. A specific timeline estimate is provided during Discovery, before any money changes hands.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What does AI automation actually do for a small business?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It handles the repetitive, rules-based tasks that are eating your team's time — things like responding to inbound inquiries, routing leads to the right person, sending follow-up emails, or updating your CRM when a form gets filled out. For a gutter company in Spokane, that meant an AI agent answering customer questions and capturing lead info at 11pm when no one was in the office. The ROI is usually clear once you add up the hours saved.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you work with clients remotely?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes — almost all client work is done remotely. Based in the Pacific Northwest, working with businesses across the US. Everything runs over video calls, shared docs, and async communication. If you're in the Spokane or broader Pacific Northwest area and prefer to meet in person for the initial conversation, that's an option too.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What's included in an ongoing retainer?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Retainers are structured around a set number of hours per month, applied to whatever the current priority is — new features, bug fixes, automation improvements, SEO work, or content updates. There are no rigid service buckets. We align briefly at the start of each month on what to tackle, and I report back on what shipped. It works well for clients who have ongoing technical needs but don't want to hire in-house.",
                    },
                },
            ],
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
