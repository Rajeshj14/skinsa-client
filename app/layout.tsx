import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import ScrollToTop from "@/component/scroll-to-top";
import Footer from "@/component/footer";
import MobileActionBar from "@/component/mobile-bar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skinsa Aesthetic",
  description: "Premium aesthetic skincare clinic",
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
        {children}
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
