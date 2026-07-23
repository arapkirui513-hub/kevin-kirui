import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import "@/styles/mdx.css";
import {
  personSchema,
  websiteSchema,
} from "@/lib/structured-data";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  keywords: [...site.seo.keywords],

  authors: [
    {
      name: site.author.name,
    },
  ],

  creator: site.author.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.seo.defaultImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.seo.defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const person = personSchema();
  const website = websiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
           __html: JSON.stringify(person),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
           __html: JSON.stringify(website),
          }}
        />
      </head>

      <body
        className={`${dmSans.variable} ${dmSerif.variable} ${ibmPlexMono.variable}`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}