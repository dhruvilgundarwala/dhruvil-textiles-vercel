import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} - Premium Bullet Dori & Yarn Manufacturer`,
  },
  description: siteConfig.description,
  keywords: [
    "Textiles",
    "Manufacturing",
    "Surat",
    "Export",
    "Polyester Yarn",
    "Dhruvil Textiles",
  ],
  authors: [{ name: "Dhruvil Gundarwala", url: "https://github.com/dhruvilgundarwala" }],
  creator: "Dhruvil Gundarwala",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@dhruviltextiles",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} antialiased selection:bg-secondary selection:text-white`} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground tracking-wide overflow-x-hidden">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}

