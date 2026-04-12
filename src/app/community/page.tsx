import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kartentricks Community & Discord: Lerne mit Gleichgesinnten",
  description:
    "Tritt der karten-tricks.de Community auf Discord bei! Tausche Kartentricks aus, zeig deine Fortschritte und lerne direkt von anderen.",
  keywords: ["Kartentricks Community", "Zaubertricks Discord", "Kartentricks lernen Community", "Kartentrick-Fans"],
  alternates: { canonical: "https://karten-tricks.de/community" },
  openGraph: {
    title: "Kartentricks Community & Discord",
    description:
      "Tausche Kartentricks aus, zeig deine Fortschritte und lerne mit anderen direkt auf Discord.",
    type: "website",
    url: "https://karten-tricks.de/community",
  },
};

export default function CommunityPage() {
  return (
    <div className="layout-page py-12">
      <div className="mx-auto max-w-4xl">
      <nav className="text-sm text-neutral-400 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-600">Community</span>
      </nav>

      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-neutral-800 mb-4 leading-[1.1]">Community & Discord</h1>
      <p className="text-neutral-500 text-lg mb-10 max-w-xl leading-relaxed">
        Lern nicht allein. Tausche dich mit anderen Kartentrick-Fans aus, zeig deine Fortschritte und bekomme ehrliches Feedback.
      </p>

      <div className="rounded-2xl bg-white p-8 text-center max-w-lg mx-auto mb-12 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="w-16 h-16 bg-neutral-200/80 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-black/5">
          <svg className="w-8 h-8 text-neutral-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-2">Discord Server</h2>
        <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
          Tausche Tricks aus, teile Videos, stelle Fragen.
        </p>
          <a
            href="https://discord.gg/QQ2nDMPZ6p"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-50 px-8 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
          >
            Discord beitreten
            <ArrowRight className="h-4 w-4 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-neutral-500" />
          </a>
      </div>
      </div>
    </div>
  );
}
