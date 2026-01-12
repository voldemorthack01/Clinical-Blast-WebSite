import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

const oswald = Oswald({
    subsets: ["latin"],
    variable: '--font-oswald',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: "Clinical Blast - Sydney's #1 Brick Cleaning & Caulking Specialists",
    description: "Professional brick cleaning, acid washing, pressure cleaning, and precision caulking services in Middle Dural and Sydney. Rated 5.0 stars with 178+ Google reviews. Expert restoration for homes and commercial properties.",
    keywords: "brick cleaning Sydney, brick cleaning Middle Dural, caulking Sydney, acid wash brick, pressure cleaning, paint removal, mortar tag removal, expansion joint sealing",
    authors: [{ name: "Clinical Blast" }],
    openGraph: {
        title: "Clinical Blast - Sydney's #1 Brick Cleaning & Caulking Specialists",
        description: "Restoring homes across Middle Dural and Sydney. Acid washing, pressure cleaning, and precision caulking. 178+ 5-star Google reviews.",
        type: "website",
        locale: "en_AU",
        siteName: "Clinical Blast",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Clinical Blast",
                            "description": "Professional brick cleaning and caulking services",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "1233 Old Northern Rd",
                                "addressLocality": "Middle Dural",
                                "addressRegion": "NSW",
                                "postalCode": "2158",
                                "addressCountry": "AU"
                            },
                            "telephone": "+61420696157",
                            "openingHours": [
                                "Mo-We 07:00-18:30",
                                "Th 07:00-21:30",
                                "Fr 07:00-18:30"
                            ],
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5.0",
                                "reviewCount": "178",
                                "bestRating": "5"
                            },
                            "priceRange": "$$",
                            "url": "https://clinicalblast.com.au"
                        })
                    }}
                />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
