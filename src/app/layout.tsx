import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 600",
});

const dmSans = localFont({
  src: "./fonts/DMSans-Variable.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "400 500",
});

export const metadata: Metadata = {
  title: {
    default: "Kartentricks lernen – karten-tricks.de",
    template: "%s | karten-tricks.de",
  },
  description:
    "Lerne Kartentricks Schritt für Schritt – von einfachen Anfängertricks bis zu professionellen Techniken. Kostenlose Anleitungen auf Deutsch.",
  keywords: ["Kartentricks", "Zaubertricks", "Kartentricks lernen", "Kartenmagie", "Kartentricks Deutsch"],
  authors: [{ name: "Moritz Schöbs" }],
  creator: "Moritz Schöbs",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://karten-tricks.de",
    siteName: "karten-tricks.de",
    title: "Kartentricks lernen – karten-tricks.de",
    description:
      "Die beste deutschsprachige Ressource für Kartentricks und Kartenmagie.",
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
    <html lang="de" className={`h-full antialiased ${inter.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col bg-surface text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
