import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
    title: "Services: Web Development, AI Automation & Digital Marketing | Innovate & Amplify",
    description:
        "Custom websites with React and Next.js, AI assistants and workflow automation, and digital marketing for local service businesses. One developer in Spokane builds all of it, with no agency in between.",
    path: "/services",
});

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://innovateandamplify.com/services#webpage",
            url: "https://innovateandamplify.com/services",
            name: "Services | Innovate & Amplify",
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
                "Custom web applications, responsive design, and online stores built with React, Next.js, and Node.js.",
            provider: { "@id": "https://innovateandamplify.com/#organization" },
            serviceType: "Web Development",
            areaServed: { "@type": "Country", name: "United States" },
        },
        {
            "@type": "Service",
            "@id": "https://innovateandamplify.com/services#ai-automation",
            name: "AI Automation",
            description:
                "Workflow automation, AI agents and assistants, and internal tools that take repetitive work off your team.",
            provider: { "@id": "https://innovateandamplify.com/#organization" },
            serviceType: "AI Automation",
            areaServed: { "@type": "Country", name: "United States" },
        },
        {
            "@type": "Service",
            "@id": "https://innovateandamplify.com/services#digital-marketing",
            name: "Digital Marketing",
            description:
                "SEO, social media management, and analytics, aimed at getting found and turning visitors into customers.",
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
                        text: "Mostly small and mid-sized businesses that need real technical work rather than a template. That includes service businesses, local companies growing their operations, and founders building something specific. You can see examples in the portfolio. Clients so far include an environmental training company, a home services contractor, and a photographer. If you're not sure your project fits, just ask.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does a typical website project take?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most custom websites take 4 to 8 weeks from signed contract to launch, depending on scope. A focused marketing site with a few pages is closer to 4 weeks. A site with a CMS, online store, or custom integrations takes longer. I'll give you a specific timeline during Discovery, before any money changes hands.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What does AI automation actually do for a small business?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It takes over the repetitive, rules-based tasks that eat your team's time, like answering inbound inquiries, routing leads to the right person, sending follow-up emails, or updating your CRM when someone fills out a form. For a gutter company in Spokane, that meant an AI agent answering customer questions and taking down lead details at 11pm when nobody was in the office. The payoff is usually clear once you add up the hours saved.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you work with clients remotely?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Almost all of my client work is remote. I'm based in Spokane and work with businesses across the US over video calls, shared docs, and email. If you're in the Spokane area or elsewhere in the Pacific Northwest and would rather meet in person for the first conversation, I'm happy to.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What's included in an ongoing retainer?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A retainer is a set number of hours each month, spent on whatever matters most right now: new features, bug fixes, automation improvements, SEO work, or content updates. At the start of each month you and I agree on what to tackle, and I report back on what shipped. It works well for clients with ongoing technical needs who don't want to hire in-house.",
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
