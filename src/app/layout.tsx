import type { Metadata } from "next";
import { fraunces, manrope } from "./fonts";
import {
  ogImage,
  shareDescription,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — KERN",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: ["strength training", "mobility", "personal training", "Copenhagen"],
  authors: [{ name: "Belfa Muhammad", url: "https://www.belfamuhammad.com" }],
  creator: "Belfa Muhammad",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/brand/favicon.ico", sizes: "any" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
  manifest: "/brand/site.webmanifest",
  openGraph: {
    title: siteTitle,
    description: shareDescription,
    type: "website",
    locale: "en_DK",
    siteName,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: shareDescription,
    images: [
      {
        url: ogImage.url,
        alt: ogImage.alt,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en",
  creator: {
    "@type": "Person",
    name: "Belfa Muhammad",
    url: "https://www.belfamuhammad.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
