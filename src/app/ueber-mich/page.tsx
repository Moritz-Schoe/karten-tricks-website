import type { Metadata } from "next";
import Link from "next/link";
import NewsletterBox from "@/components/NewsletterBox";

export const metadata: Metadata = {
  title: "Über mich – Moritz Schöbs",
  description:
    "Lern mich kennen: Ich bin Moritz, und ich beschäftige mich seit über 10 Jahren mit Kartentricks und Kartenmagie. Auf karten-tricks.de teile ich alles kostenlos.",
};

export default function UeberMichPage() {
  return (
    <div className="layout-page py-12">
      <div className="mx-auto max-w-3xl">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-[#7C3AED] transition-colors">Startseite</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Über mich</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-6 mb-10">
        <div className="w-20 h-20 bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] rounded-[16px] flex items-center justify-center text-white font-medium text-3xl flex-shrink-0">
          M
        </div>
        <div>
          <h1 className="text-3xl font-medium text-slate-800 mb-1">Moritz Schöbs</h1>
          <p className="text-slate-500">Gründer von karten-tricks.de · Kartentrick-Enthusiast seit 2014</p>
          <div className="flex gap-3 mt-3">
            <span className="text-xs bg-[#F5F3FF] text-[#5B21B6] px-3 py-1 rounded-[6px] font-medium">Kartentricks</span>
            <span className="text-xs bg-[#F5F3FF] text-[#5B21B6] px-3 py-1 rounded-[6px] font-medium">Cardistry</span>
            <span className="text-xs bg-[#E0F2FE] text-[#0369A1] px-3 py-1 rounded-[6px] font-medium">Community</span>
          </div>
        </div>
      </div>

      <div className="prose">
        <h2>Wie alles begann</h2>
        <p>
          Mit 16 hat mir ein Freund den Chicago Opener gezeigt. Ich war sofort fasziniert – nicht nur vom Trick selbst,
          sondern davon wie einfach man Menschen mit einem normalen Kartenspiel in den Bann ziehen kann.
          Seitdem habe ich nicht aufgehört, Tricks zu lernen.
        </p>

        <h2>Was karten-tricks.de ist</h2>
        <p>
          Als ich anfing, gab es kaum gute deutschsprachige Ressourcen. Anleitungen waren entweder auf Englisch,
          hinter Paywalls, oder einfach schlecht erklärt. Also habe ich angefangen, selbst zu schreiben.
        </p>
        <p>
          Heute ist karten-tricks.de die umfassendste kostenlose Anlaufstelle für Kartentricks auf Deutsch –
          mit Tutorials für Anfänger bis Fortgeschrittene, dem ersten deutschen Cardistry-Guide, und einer
          wachsenden Community auf Discord.
        </p>

        <h2>Was ich glaube</h2>
        <p>
          Kartentricks sind keine Kindersache. Sie trainieren Konzentration, Feinmotorik, soziale Intelligenz –
          und sie öffnen Gespräche auf jeder Party. Jeder kann es lernen. Es braucht nur die richtige Anleitung.
        </p>

        <h2>Kontakt & Community</h2>
        <p>
          Der beste Weg mich zu erreichen ist unser <Link href="/community">Discord-Server</Link>.
          Dort teile ich auch Materialien, beantworte Fragen, und freue mich über Tricks die ihr gelernt habt.
        </p>
      </div>

      <div className="mt-12">
        <NewsletterBox />
      </div>
      </div>
    </div>
  );
}
