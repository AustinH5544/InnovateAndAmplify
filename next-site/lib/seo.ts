import type { Metadata } from "next";

// One site-wide share image for now (Phase 0). Relative URLs resolve to absolute
// through metadataBase in app/layout.tsx.
export const OG_IMAGE = {
    url: "/og/default.png",
    width: 1200,
    height: 630,
    alt: "Innovate and Amplify: websites, lead follow-up, and content for local service businesses. Spokane, WA.",
};

type PageMetaInput = { title: string; description: string; path: string };

// Full Open Graph and Twitter metadata for one page. Next.js replaces a parent's
// openGraph object rather than merging it, so every page sets the whole thing.
export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            siteName: "Innovate and Amplify",
            locale: "en_US",
            title,
            description,
            url: path,
            images: [OG_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [OG_IMAGE.url],
        },
    };
}
