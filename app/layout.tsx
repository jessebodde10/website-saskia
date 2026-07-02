import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = "https://riseandconnect.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rise & Connect — Training, ademcoaching en bewustwording",
    template: "%s · Rise & Connect",
  },
  description:
    "Rise & Connect biedt interactieve trainingen over generaties op de werkvloer en ademcoaching voor volwassenen, kinderen en teams. Rust, verbinding en bewustwording voor mensen en teams.",
  keywords: [
    "ademcoaching",
    "training",
    "generaties op de werkvloer",
    "teambuilding",
    "bewustwording",
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
    title: "Rise & Connect — Rust, bewustwording en verbinding",
    description:
      "Interactieve trainingen over generaties op de werkvloer en ademcoaching voor mensen en teams.",
    // og:image wordt automatisch geleverd door app/opengraph-image.tsx (echte PNG)
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise & Connect — Rust, bewustwording en verbinding",
    description:
      "Interactieve trainingen over generaties op de werkvloer en ademcoaching voor mensen en teams.",
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
    "Training, ademcoaching en bewustwording voor mensen en teams. Interactieve trainingen over generaties op de werkvloer en ademcoaching voor volwassenen, kinderen en teams.",
  url: siteUrl,
  email: "hallo@riseandconnect.nl",
  areaServed: "NL",
  founder: {
    "@type": "Person",
    name: "Saskia Bodde",
    jobTitle: "Trainer & ademcoach",
  },
  knowsAbout: [
    "Ademcoaching",
    "Generaties op de werkvloer",
    "Teamontwikkeling",
    "Bewustwording",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${fraunces.variable}`}>
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
