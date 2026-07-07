import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://riseandconnect.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rise & Connect · Generaties op de werkvloer & Generatie Alpha",
    template: "%s · Rise & Connect",
  },
  description:
    "Interactieve trainingen over generaties op de werkvloer en het thema Generatie Alpha in de praktijk. Voor teams in kinderopvang, onderwijs en zorg. Praktisch, laagdrempelig en direct toepasbaar.",
  keywords: [
    "generaties op de werkvloer",
    "Generatie Alpha",
    "training",
    "teambuilding",
    "samenwerking",
    "kinderopvang",
    "onderwijs",
    "zorg",
    "Saskia Bodde",
  ],
  authors: [{ name: "Saskia Bodde" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Rise & Connect",
    title: "Rise & Connect · Generaties op de werkvloer & Generatie Alpha",
    description:
      "Interactieve trainingen over generaties op de werkvloer en Generatie Alpha in de praktijk.",
    // og:image wordt automatisch geleverd door app/opengraph-image.tsx (echte PNG)
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise & Connect · Generaties op de werkvloer & Generatie Alpha",
    description:
      "Interactieve trainingen over generaties op de werkvloer en Generatie Alpha in de praktijk.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rise & Connect",
  description:
    "Interactieve trainingen over generaties op de werkvloer en het thema Generatie Alpha in de praktijk, voor teams in kinderopvang, onderwijs en zorg.",
  url: siteUrl,
  email: "hallo@riseandconnect.nl",
  areaServed: "NL",
  founder: {
    "@type": "Person",
    name: "Saskia Bodde",
    jobTitle: "Trainer generaties op de werkvloer",
  },
  knowsAbout: [
    "Generaties op de werkvloer",
    "Generatie Alpha",
    "Teamontwikkeling",
    "Samenwerking",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sage-500 focus:px-5 focus:py-2 focus:text-sm focus:text-cream"
        >
          Direct naar inhoud
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
