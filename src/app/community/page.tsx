import type { Metadata } from "next";
import Link from "next/link";
import NewsletterBox from "@/components/NewsletterBox";

export const metadata: Metadata = {
  title: "Community & Discord",
  description: "Tritt der karten-tricks.de Community bei – tausche Tricks aus, bekomme Feedback und lern von anderen Kartentrick-Fans.",
};

export default function CommunityPage() {
  return (
    <div className="layout-page py-12">
      <div className="mx-auto max-w-4xl">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-[#7C3AED] transition-colors">Startseite</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Community</span>
      </nav>

      <h1 className="text-[36px] font-medium text-slate-800 mb-4 leading-[1.2]">Community & Discord</h1>
      <p className="text-slate-500 text-lg mb-10 max-w-xl leading-relaxed">
        Lern nicht allein – tausch dich mit anderen Kartentrick-Fans aus, zeig deine Fortschritte und bekomme ehrliches Feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#1A1B26] text-white rounded-[16px] p-8 text-center">
          <div className="w-16 h-16 bg-[#5865F2] rounded-[12px] flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
          </div>
          <h2 className="text-xl font-medium mb-2">Discord Server</h2>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            500+ Mitglieder. Tausche Tricks aus, teile Videos, stelle Fragen – direkt zu Moritz und anderen Fans.
          </p>
          <a
            href="https://discord.gg/karten-tricks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium px-8 py-3 rounded-[8px] transition-colors text-sm"
          >
            Discord beitreten →
          </a>
        </div>

        <div className="bg-[#F5F3FF] border border-[#C4B5FD] rounded-[16px] p-8 text-center">
          <div className="w-16 h-16 bg-[#7C3AED] rounded-[12px] flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h2 className="text-xl font-medium text-[#4C1D95] mb-2">Newsletter</h2>
          <p className="text-[#5B21B6]/70 text-sm mb-6 leading-relaxed">
            Jeden Freitag: Ein Trick, eine Technik, ein Tipp. Direkt in dein Postfach. Kein Spam, jederzeit abmeldbar.
          </p>
          <Link
            href="#newsletter"
            className="inline-block bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium px-8 py-3 rounded-[8px] transition-colors text-sm"
          >
            Jetzt anmelden →
          </Link>
        </div>
      </div>

      <div id="newsletter">
        <NewsletterBox />
      </div>
      </div>
    </div>
  );
}
