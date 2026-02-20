import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

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
    template: "%s | Dhruvil Textiles",
    default: "Dhruvil Textiles - Premium Bullet Dori & Yarn Manufacturer",
  },
  description: "Dhruvil Textiles: Leading manufacturer of high-quality Bullet Dori, Cotton Thread, and Polyester Yarns in Surat since 2008. Export-quality manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} antialiased selection:bg-secondary selection:text-white`}>
      <body className="font-sans bg-background text-foreground tracking-wide overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

