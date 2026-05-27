import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import ScrollToTop from "@/component/scroll-to-top";
import Footer from "@/component/footer";
import MobileActionBar from "@/component/mobile-bar";
import RevealObserver from "@/component/reveal-observer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skinsa Aesthetic",
  description: "Premium aesthetic skincare clinic",
  icons: {
    icon: [
      { url: "logo.svg", sizes: "any" },
      { url: "logo.svg", sizes: "16x16", type: "image/png" },
      { url: "logo.svg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "logo.svg", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "logo.svg", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "logo.svg", sizes: "512x512", type: "image/png" },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-outfit)]">
        <ScrollToTop />
        <RevealObserver />
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
