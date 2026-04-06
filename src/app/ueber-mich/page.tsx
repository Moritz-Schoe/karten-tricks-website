import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Über mich - Moritz",
  description:
    "Lern mich kennen: Ich bin Moritz, und ich beschäftige mich seit über 10 Jahren mit Kartentricks und Kartenmagie. Auf karten-tricks.de teile ich alles kostenlos.",
};

export default function UeberMichPage() {
  return (
    <div className="layout-page py-12">
      <div className="mx-auto max-w-3xl">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">Über mich</span>
      </nav>

      {/* Header */}
      <div className="rounded-2xl bg-white p-6 sm:p-8 flex items-start gap-6 mb-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center text-white font-medium text-3xl flex-shrink-0">
          M
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-1">Moritz</h1>
          <p className="text-slate-500">Gründer von karten-tricks.de · Kartentrick-Enthusiast seit 2014</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Kartentricks</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Cardistry</span>
            <span className="text-xs bg-sky-500/[0.08] text-[#0369A1] px-3 py-1 rounded-full font-medium">Community</span>
          </div>
        </div>
      </div>

      <div className="prose">
        <h2>Wie alles begann</h2>
        <p>
          Mit 16 hat mir ein Freund den Chicago Opener gezeigt. Ich war sofort fasziniert - nicht nur vom Trick selbst,
          sondern davon wie einfach man Menschen mit einem normalen Kartenspiel in den Bann ziehen kann.
          Seitdem habe ich nicht aufgehört, Tricks zu lernen.
        </p>

        <h2>Was karten-tricks.de ist</h2>
        <p>
          Als ich anfing, gab es kaum gute deutschsprachige Ressourcen. Anleitungen waren entweder auf Englisch,
          hinter Paywalls, oder einfach schlecht erklärt. Also habe ich angefangen, selbst zu schreiben.
        </p>
        <p>
          Heute ist karten-tricks.de die umfassendste kostenlose Anlaufstelle für Kartentricks auf Deutsch -
          mit Tutorials für Anfänger bis Fortgeschrittene, dem ersten deutschen Cardistry-Guide, und einer
          wachsenden Community auf Discord.
        </p>

        <h2>Was ich glaube</h2>
        <p>
          Kartentricks sind keine Kindersache. Sie trainieren Konzentration, Feinmotorik, soziale Intelligenz -
          und sie öffnen Gespräche auf jeder Party. Jeder kann es lernen. Es braucht nur die richtige Anleitung.
        </p>

        <h2>Kontakt & Community</h2>
        <p>
          Der beste Weg mich zu erreichen ist unser <Link href="/community">Discord-Server</Link>.
          Dort teile ich auch Materialien, beantworte Fragen, und freue mich über Tricks die ihr gelernt habt.
        </p>
      </div>

      <div className="mt-12">
        <section className="rounded-2xl bg-white p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 mb-2">Werde Teil der Community</h2>
          <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Tausch dich mit anderen Kartentrick-Fans aus, zeig deine Fortschritte und lern von der Community - direkt auf Discord.
          </p>
            <a
              href="https://discord.gg/QQ2nDMPZ6p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[44px] items-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Discord beitreten
            </a>
        </section>
      </div>
      </div>
    </div>
  );
}
