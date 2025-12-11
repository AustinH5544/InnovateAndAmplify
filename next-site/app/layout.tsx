import type React from "react";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-serif",
    display: "swap",
});

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
        <html lang="en">
            <body className={`${inter.className} ${cormorant.variable} antialiased`}>
                {children}
                {/* If you ever move to Vercel and install @vercel/analytics:
            <Analytics /> 
        */}
            </body>
        </html>
    );
}
