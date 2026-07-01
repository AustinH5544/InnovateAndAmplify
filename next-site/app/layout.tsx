import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Innovate & Amplify | Creative Digital Solutions",
    description:
        "Premium web development, branding, and digital marketing services for ambitious businesses",
    generator: "v0.app",
    // Optional: if you copy the icons into /public, you can add:
    // icons: {
    //   icon: [
    //     { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
    //     { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    //     { url: "/icon.svg", type: "image/svg+xml" },
    //   ],
    //   apple: "/apple-icon.png",
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
