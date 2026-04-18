import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Star, Wand2, Baby, ScrollText, Zap } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zaubersprüche: Bedeutung, Herkunft und Verwendung",
  description:
    "Harry Potter Zaubersprüche, Abrakadabra, Hocus Pocus und mehr – mit Bedeutung, Aussprache und Herkunft erklärt. Für Kinder, Zauberer und HP-Fans.",
  keywords: [
    "Zaubersprüche",
    "Harry Potter Zaubersprüche",
    "Abrakadabra Bedeutung",
    "Zaubersprüche für Kinder",
    "magische Wörter",
    "Expecto Patronum Bedeutung",
    "Wingardium Leviosa",
    "Hocus Pocus Bedeutung",
    "lateinische Zaubersprüche",
  ],
  alternates: { canonical: "https://karten-tricks.de/zaubersprueche" },
  openGraph: {
    title: "Zaubersprüche: Bedeutung, Herkunft und Verwendung",
    description:
      "Harry Potter Zaubersprüche, Abrakadabra, Hocus Pocus und mehr – mit Bedeutung, Aussprache und Herkunft erklärt.",
    type: "website",
    url: "https://karten-tricks.de/zaubersprueche",
  },
};

const HARRY_POTTER_SLUGS = [
  "harry-potter-zaubersprueche",
  "wingardium-leviosa",
  "expecto-patronum",
  "avada-kedavra",
];

const KLASSISCH_SLUGS = [
  "abrakadabra-bedeutung",
  "hocus-pocus-bedeutung",
  "lateinische-zaubersprueche",
];

const KINDER_SLUGS = [
  "zaubersprueche-kinder",
  "bibbidi-bobbidi-boo",
];

const AUFTRITT_SLUGS = [
  "zauberer-spruche-auftritt",
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist ein Zauberspruch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Zauberspruch ist eine Formel oder ein Wort, dem magische Wirkung zugeschrieben wird. In der Literatur und im Film – besonders bei Harry Potter – lösen Zaubersprüche konkrete magische Effekte aus. In der echten Zauberkunst dienen sie als Patter, also als begleitende Worte, die den Zuschauer ablenken und die Atmosphäre des Auftritts verstärken.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Zaubersprüche gibt es bei Harry Potter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die bekanntesten Harry-Potter-Zaubersprüche sind Expecto Patronum (beschwört einen Patronus), Wingardium Leviosa (Schwebe-Zauber), Alohomora (öffnet Schlösser), Lumos (erzeugt Licht) und Avada Kedavra (der Todesfluch). Insgesamt gibt es in J. K. Rowlings Welt über 200 Zaubersprüche.",
      },
    },
    {
      "@type": "Question",
      name: "Woher kommt das Wort Abrakadabra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abrakadabra stammt wahrscheinlich aus dem Aramäischen und bedeutet so viel wie 'Ich erschaffe, was ich spreche'. Es taucht erstmals im 2. Jahrhundert n. Chr. in medizinischen Texten auf, wo es als Schutzformel gegen Krankheiten auf Amulette geschrieben wurde. Heute ist es das bekannteste Zauberwort der Welt.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Zaubersprüche eignen sich für Kinder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Kinder eignen sich kurze, klanglich einprägsame Sprüche wie 'Simsalabim', 'Hokuspokus Fidibus' oder 'Bibbidi Bobbidi Boo' aus Aschenputtel. Diese Sprüche sind einfach zu merken, klingen magisch und machen beim Aussprechen Spaß. Kombiniert mit einem einfachen Trick wirken sie auf Kinder besonders beeindruckend.",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet Expecto Patronum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Expecto Patronum ist Latein und bedeutet 'Ich erwarte einen Beschützer' oder 'Ich erbitte einen Schutzgeist'. In der Harry-Potter-Welt beschwört dieser Spruch einen Patronus – ein magisches Schutztier aus positivem Energie. Die Stärke des Patronus hängt von der Intensität der glücklichsten Erinnerung des Zauberers ab.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es echte Zaubersprüche, die wirken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Echte 'Magie' im übernatürlichen Sinne gibt es nicht. Was Zaubersprüche in einem Auftritt leisten, ist psychologisch: Sie lenken die Aufmerksamkeit des Zuschauers, erzeugen Spannung und schaffen eine magische Atmosphäre. Ein gut gewählter Spruch ist für professionelle Zauberer ein wichtiges Werkzeug zur Misdirection.",
      },
    },
    {
      "@type": "Question",
      name: "Wie setze ich Zaubersprüche in einem Zauberauftritt ein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profizauberer nutzen Zaubersprüche strategisch: Der Spruch markiert den Moment, in dem die 'Magie passiert', und lenkt die Aufmerksamkeit auf das falsche Objekt. Wichtig ist Timing – der Spruch sollte genau dann fallen, wenn der geheime Teil des Tricks ausgeführt wird. Weniger ist oft mehr: Ein einziges, gut platziertes Wort kann wirkungsvoller sein als eine lange Formel.",
      },
    },
  ],
} as const;

interface EinstiegCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function EinstiegCard({ href, icon, title, subtitle }: EinstiegCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-5 transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
    >
      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-bold text-neutral-800 tracking-tight leading-snug">{title}</p>
        <p className="text-sm text-neutral-500 mt-0.5">{subtitle}</p>
      </div>
      <ArrowRight className="ml-auto shrink-0 h-4 w-4 text-neutral-300 transition-colors group-hover:text-violet-600" />
    </Link>
  );
}

export default function ZauberspruechePage() {
  const allArtikel = getArticlesByCategory("zaubersprueche");

  const harryPotterArtikel = allArtikel.filter((a) => HARRY_POTTER_SLUGS.includes(a.slug));
  const klassischArtikel = allArtikel.filter((a) => KLASSISCH_SLUGS.includes(a.slug));
  const kinderArtikel = allArtikel.filter((a) => KINDER_SLUGS.includes(a.slug));
  const auftrittArtikel = allArtikel.filter((a) => AUFTRITT_SLUGS.includes(a.slug));

  return (
    <>
      <JsonLd data={FAQ_JSON_LD} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-violet-50 to-white border-b border-black/[0.04]">
        <div className="layout-page py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 border border-violet-200 px-4 py-1.5 mb-6">
              <Star className="h-3.5 w-3.5 text-violet-600" />
              <span className="text-xs font-semibold text-violet-700 uppercase tracking-wider">
                Harry Potter · Abrakadabra · Für Kinder
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-5">
              Zaubersprüche –<br className="hidden sm:block" /> Bedeutung &amp; Herkunft
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-500 max-w-2xl mb-8">
              Von Harry Potters Expecto Patronum bis zu Abrakadabra: Hier findest du alle bekannten
              Zaubersprüche mit ihrer Bedeutung, Herkunft und Aussprache. Plus: wie echte Zauberer
              Zaubersprüche in ihren Auftritten einsetzen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#harry-potter"
                className="inline-flex items-center gap-2 rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-800"
              >
                <BookOpen className="h-4 w-4" />
                Harry Potter Sprüche
              </Link>
              <Link
                href="#klassisch"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
              >
                <ScrollText className="h-4 w-4" />
                Klassische Zauberwörter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-page py-12 space-y-16">

        {/* Einstiege */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Wähle deinen Einstieg
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <EinstiegCard
              href="#harry-potter"
              icon={<BookOpen className="h-6 w-6" />}
              title="Harry Potter Sprüche"
              subtitle="Expecto Patronum, Wingardium Leviosa & Co."
            />
            <EinstiegCard
              href="#klassisch"
              icon={<ScrollText className="h-6 w-6" />}
              title="Klassische Zauberwörter"
              subtitle="Abrakadabra, Hocus Pocus und ihr Ursprung"
            />
            <EinstiegCard
              href="#kinder"
              icon={<Baby className="h-6 w-6" />}
              title="Für Kinder"
              subtitle="Lustige Formeln für Partys und Kindergeburtstage"
            />
            <EinstiegCard
              href="#zauberer"
              icon={<Wand2 className="h-6 w-6" />}
              title="Für Zauberer"
              subtitle="Wie Profis Sprüche strategisch einsetzen"
            />
          </div>
        </section>

        {/* Harry Potter */}
        <section id="harry-potter" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-violet-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">Harry Potter</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Harry Potter Zaubersprüche mit Bedeutung
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              J. K. Rowling hat über 200 Zaubersprüche erfunden – die meisten basieren auf echtem
              Latein oder Altgriechisch. Hier findest du die bekanntesten mit Bedeutung, Aussprache
              und Kontext aus den Büchern.
            </p>
          </div>
          {harryPotterArtikel.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {harryPotterArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-sm">Artikel werden geladen…</p>
          )}
        </section>

        {/* Erklärblock Harry Potter */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-3">
            Woher kommen die Harry Potter Zaubersprüche?
          </h2>
          <div className="prose max-w-none text-neutral-600 text-sm leading-relaxed">
            <p>
              J. K. Rowling hat die meisten Zaubersprüche aus dem Lateinischen abgeleitet.{" "}
              <Link href="/zaubersprueche/expecto-patronum" className="text-violet-700 hover:underline font-medium">
                Expecto Patronum
              </Link>{" "}
              bedeutet wörtlich „Ich erwarte einen Beschützer", und{" "}
              <Link href="/zaubersprueche/wingardium-leviosa" className="text-violet-700 hover:underline font-medium">
                Wingardium Leviosa
              </Link>{" "}
              verbindet das englische „wing" (Flügel) mit dem lateinischen „leviosa" (leicht, schwebend).
            </p>
            <p>
              Diese linguistische Tiefe macht die Sprüche besonders faszinierend: Wer Latein kennt,
              versteht sofort, was ein Zauberspruch bewirkt. Auch{" "}
              <Link href="/zaubersprueche/avada-kedavra" className="text-violet-700 hover:underline font-medium">
                Avada Kedavra
              </Link>{" "}
              – der berüchtigte Todesfluch – hat sprachliche Wurzeln, die weit über die Bücher hinausgehen.
            </p>
          </div>
        </section>

        {/* Klassische Zauberwörter */}
        <section id="klassisch" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <ScrollText className="h-5 w-5 text-violet-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">Klassische Zauberwörter</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Abrakadabra, Hocus Pocus & Co.: die echte Geschichte
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Die klassischen Zauberwörter sind viel älter als Harry Potter. Abrakadabra stammt aus
              dem 2. Jahrhundert, Hocus Pocus aus dem 17. Hinter jedem steckt eine erstaunliche Geschichte.
            </p>
          </div>
          {klassischArtikel.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {klassischArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-sm">Artikel werden geladen…</p>
          )}
        </section>

        {/* Erklärblock Klassisch */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-3">
            Was steckt hinter den klassischen Zauberwörtern?
          </h2>
          <div className="prose max-w-none text-neutral-600 text-sm leading-relaxed">
            <p>
              Klassische Zauberwörter wie{" "}
              <Link href="/zaubersprueche/abrakadabra-bedeutung" className="text-violet-700 hover:underline font-medium">
                Abrakadabra
              </Link>{" "}
              hatten ursprünglich gar nichts mit Bühnenmagie zu tun. Sie standen auf Amuletten
              und sollten Krankheiten oder böse Geister abwehren. Erst mit dem Aufkommen der
              Unterhaltungsmagie im 18. und 19. Jahrhundert wanderten sie auf die Bühne.
            </p>
            <p>
              Interessant ist, dass fast alle klassischen Zauberwörter auf einer anderen Sprache basieren –
              meist Latein, Hebräisch oder Aramäisch. Die Fremdheit der Worte war bewusst gewählt:
              Sie sollten geheimnisvoll klingen und dem Publikum signalisieren, dass hier etwas
              Übernatürliches im Gange ist.
            </p>
          </div>
        </section>

        {/* Für Kinder */}
        <section id="kinder" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <Baby className="h-5 w-5 text-violet-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">Für Kinder</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Zaubersprüche für Kinder: lustig, laut, magisch
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Für Kindergeburtstage oder Zaubershows braucht es Sprüche, die Kinder begeistern:
              kurz, klingend, mitsprechbar. Hier findest du die besten Formeln plus ihre Herkunft.
            </p>
          </div>
          {kinderArtikel.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {kinderArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-sm">Artikel werden geladen…</p>
          )}
        </section>

        {/* Für Zauberer */}
        <section id="zauberer" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <Wand2 className="h-5 w-5 text-violet-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">Für Zauberer</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Zaubersprüche im Auftritt: so macht es der Profi
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Profis nutzen Zaubersprüche nicht zufällig. Sie setzen sie gezielt ein, um Misdirection
              zu erzeugen und den Moment der „Magie" präzise zu steuern.
            </p>
          </div>
          {auftrittArtikel.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {auftrittArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-sm">Artikel werden geladen…</p>
          )}
        </section>

        {/* Cross-CTA: Zaubertricks */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Auch beliebt</p>
              <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-2">
                Lerne echte Zaubertricks
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                Wer Zaubersprüche kennt, braucht auch echte Tricks dahinter. In unserem Zaubertricks-Bereich
                findest du Schritt-für-Schritt Anleitungen für Mentalmagie und Münzmagie – ohne Karten,
                ohne spezielle Requisiten.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/zaubertricks"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Alle Zaubertricks <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/zaubertricks/shiner-gedankenlesen"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
                >
                  Gedankenlesen lernen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Häufige Fragen zu Zaubersprüchen
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Was ist ein Zauberspruch?",
                a: "Ein Zauberspruch ist eine Formel oder ein Wort, dem magische Wirkung zugeschrieben wird. In der Literatur und im Film – besonders bei Harry Potter – lösen Zaubersprüche konkrete magische Effekte aus. In der echten Zauberkunst dienen sie als Patter, also als begleitende Worte, die den Zuschauer ablenken und die Atmosphäre des Auftritts verstärken.",
              },
              {
                q: "Welche Zaubersprüche gibt es bei Harry Potter?",
                a: "Die bekanntesten Harry-Potter-Zaubersprüche sind Expecto Patronum, Wingardium Leviosa, Alohomora, Lumos und Avada Kedavra. Insgesamt hat J. K. Rowling über 200 Zaubersprüche erfunden, die meisten basieren auf Latein oder Altgriechisch.",
              },
              {
                q: "Woher kommt das Wort Abrakadabra?",
                a: "Abrakadabra stammt wahrscheinlich aus dem Aramäischen und bedeutet 'Ich erschaffe, was ich spreche'. Es taucht erstmals im 2. Jahrhundert n. Chr. auf, wo es als Schutzformel gegen Krankheiten auf Amulette geschrieben wurde.",
              },
              {
                q: "Welche Zaubersprüche eignen sich für Kinder?",
                a: "Für Kinder eignen sich kurze, klanglich einprägsame Sprüche wie 'Simsalabim', 'Hokuspokus Fidibus' oder 'Bibbidi Bobbidi Boo' aus Aschenputtel. Diese sind einfach zu merken, klingen magisch und machen beim Aussprechen Spaß.",
              },
              {
                q: "Was bedeutet Expecto Patronum?",
                a: "Expecto Patronum ist Latein und bedeutet 'Ich erwarte einen Beschützer'. In der Harry-Potter-Welt beschwört dieser Spruch einen Patronus – ein magisches Schutztier aus positiver Energie. Die Stärke des Patronus hängt von der glücklichsten Erinnerung des Zauberers ab.",
              },
              {
                q: "Gibt es echte Zaubersprüche, die wirken?",
                a: "Echte 'Magie' im übernatürlichen Sinne gibt es nicht. Was Zaubersprüche in einem Auftritt leisten, ist psychologisch: Sie lenken die Aufmerksamkeit des Zuschauers, erzeugen Spannung und schaffen eine magische Atmosphäre. Ein gut gewählter Spruch ist ein wichtiges Werkzeug zur Misdirection.",
              },
              {
                q: "Wie setze ich Zaubersprüche in einem Zauberauftritt ein?",
                a: "Profizauberer nutzen Zaubersprüche strategisch: Der Spruch markiert den Moment, in dem die 'Magie passiert', und lenkt die Aufmerksamkeit auf das falsche Objekt. Wichtig ist das Timing – der Spruch sollte genau dann fallen, wenn der geheime Teil ausgeführt wird.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl bg-white border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.03)] open:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-semibold text-neutral-800 list-none">
                  {q}
                  <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed border-t border-black/[0.04] pt-4">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-violet-700 to-violet-900 p-8 md:p-10 text-white text-center">
          <Wand2 className="h-8 w-8 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Bereit, Magie zu machen?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Zaubersprüche sind der erste Schritt. Lerne jetzt echte Zaubertricks –
            von Gedankenlesen bis Münzmagie – und kombiniere sie mit dem richtigen Patter.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/zaubersprueche/zauberer-spruche-auftritt"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-violet-800 transition-opacity hover:opacity-90"
            >
              <Zap className="h-4 w-4" />
              Sprüche richtig einsetzen
            </Link>
            <Link
              href="/zaubertricks"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            >
              Zaubertricks lernen
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
