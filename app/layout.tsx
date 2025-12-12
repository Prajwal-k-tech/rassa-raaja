import type { Metadata } from "next";
import { Cinzel, Inter, Rozha_One } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rozhaOne = Rozha_One({
  variable: "--font-rozha",
  weight: "400",
  subsets: ["devanagari", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rassaraaja.com"),
  title: "Rassa Raaja | Authentic Maharashtrian Cuisine in Pune",
  description: "Experience the royal taste of authentic Maharashtrian cuisine at Rassa Raaja, Pune. Famous for Gavran Mutton Thali, traditional Bhakri, and rich Tambda-Pandhra Rassa. Reserve your royal dining experience today.",
  keywords: ["Maharashtrian cuisine", "Pune restaurant", "Gavran mutton", "Bhakri", "Rassa", "Indian food", "FC Road Pune", "authentic Indian restaurant"],
  authors: [{ name: "Rassa Raaja" }],
  openGraph: {
    title: "Rassa Raaja | Royal Maharashtrian Cuisine",
    description: "Where every meal is a royal experience. Authentic Maharashtrian cuisine in Pune.",
    url: "https://rassaraaja.com",
    siteName: "Rassa Raaja",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/gallery/premium_royal_thali.png",
        width: 1200,
        height: 630,
        alt: "Rassa Raaja Royal Thali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rassa Raaja | Royal Maharashtrian Cuisine",
    description: "Where every meal is a royal experience. Authentic Maharashtrian cuisine in Pune.",
    images: ["/images/gallery/premium_royal_thali.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rassaraaja.com",
  },
};

// JSON-LD Structured Data for Restaurant
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Rassa Raaja",
  "image": "https://rassaraaja.com/images/gallery/premium_royal_thali.png",
  "url": "https://rassaraaja.com",
  "telephone": "+91-20-1234-5678",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "FC Road, Shivajinagar",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5204,
    "longitude": 73.8567
  },
  "servesCuisine": ["Maharashtrian", "Indian"],
  "acceptsReservations": "True",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "17:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "17:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "16:00",
      "closes": "21:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${inter.variable} ${rozhaOne.variable} antialiased bg-dark-bg text-gray-100`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
