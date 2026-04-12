import type { Metadata } from "next";
import localFont from "next/font/local";
import { Source_Serif_4 } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubpageContentCard from "@/components/SubpageContentCard";

/** DM Sans (fonts.google.com/specimen/DM+Sans), self-hosted variable file */
const dmSans = localFont({
  src: "./fonts/DMSans-Variable.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "400 700",
});

/** Source Serif 4 - article body text */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Kartentricks lernen - karten-tricks.de",
    template: "%s | karten-tricks.de",
  },
  description:
    "Lerne Kartentricks und Zaubertricks Schritt für Schritt. Von einfachen Tricks für Anfänger bis zu professionellen Kartenmagie-Techniken. Kostenlos auf Deutsch.",
  keywords: ["Kartentricks", "Zaubertricks", "Kartentricks lernen", "Kartenmagie", "Zaubertricks lernen", "Kartentricks Deutsch"],
  authors: [{ name: "Moritz" }],
  creator: "Moritz",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://karten-tricks.de",
    siteName: "karten-tricks.de",
    title: "Kartentricks lernen - karten-tricks.de",
    description:
      "Einfache Kartentricks und Zaubertricks lernen. Kostenlos, auf Deutsch, Schritt für Schritt erklärt. Für Anfänger und Fortgeschrittene.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://karten-tricks.de",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`antialiased ${dmSans.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface text-foreground font-sans">
        <Header />
        <main className="flex-1 pt-[var(--floating-nav-gap)]">
          {children}
          <Suspense fallback={null}>
            <SubpageContentCard />
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
