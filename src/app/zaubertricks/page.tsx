import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Zap, Users, Star } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zaubertricks lernen: Einfache Tricks für Anfänger",
  description:
    "Lerne einfache Zaubertricks für Anfänger Schritt für Schritt - kostenlos, auf Deutsch, mit Karten. Tricks für Kinder, Partys und Einsteiger.",
  keywords: [
    "Zaubertricks",
    "einfache Zaubertricks",
    "Zaubertricks für Anfänger",
    "Zaubertricks lernen",
    "Zaubertricks mit Karten",
    "einfache Zaubertricks für Kinder",
    "Zaubertricks Party",
    "Zaubertricks kostenlos",
  ],
  alternates: { canonical: "https://karten-tricks.de/zaubertricks" },
  openGraph: {
    title: "Zaubertricks lernen: Kostenlos & auf Deutsch",
    description:
      "Einfache Zaubertricks für Anfänger, Kinder und Partys. Schritt-für-Schritt Anleitungen mit Karten.",
    type: "website",
    url: "https://karten-tricks.de/zaubertricks",
  },
};

const EINSTIEG_SLUGS = [
  "10-in-10-minuten",
  "anfaenger-guide",
  "21-karten",
  "dreimal-abheben",
  "umgedrehte-karte",
  "karte-erraten",
];

const PARTY_SLUGS = ["geburtstag", "spontan", "eisbrecher", "kinder"];

const TECHNIK_SLUGS = ["pinky-break", "double-lift", "forces", "misdirection"];

const ZAUBERTRICKS_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Zaubertricks kann ich als Anfänger lernen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als Anfänger eignen sich mathematische Tricks wie der 21-Karten-Trick oder der Dreimal-Abheben-Trick besonders gut – sie brauchen keine Fingerfertigkeiten. Auch Tricks auf Basis von Psychologie sind ideal für den Einstieg.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert es, Zaubertricks zu lernen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einfache Zaubertricks lassen sich in 5–10 Minuten verstehen und grundlegend ausführen. Einen wirklich sauberen Vortrag zu entwickeln dauert länger - regelmäßiges Üben über einige Wochen ist empfehlenswert.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Zaubertricks kann man ohne Requisiten machen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Viele Kartentricks funktionieren mit einem normalen Kartenspiel, das in fast jedem Haushalt vorhanden ist. Trick-Decks oder spezielle Requisiten sind für den Einstieg nicht notwendig.",
      },
    },
  ],
} as const;

interface QuickLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function QuickLink({ href, icon, title, subtitle }: QuickLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-5 transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
    >
      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-bold text-neutral-800 tracking-tight leading-snug">{title}</p>
        <p className="text-sm text-neutral-500 mt-0.5">{subtitle}</p>
      </div>
      <ArrowRight className="ml-auto shrink-0 h-4 w-4 text-neutral-300 transition-colors group-hover:text-primary" />
    </Link>
  );
}

export default function ZauberticksPage() {
  const allKartentricks = getArticlesByCategory("kartentricks");
  const allPartyTricks = getArticlesByCategory("party-tricks");
  const allTechniken = getArticlesByCategory("fingerfertigkeit");
  const allZaubertricks = getArticlesByCategory("zaubertricks");

  const einstiegArtikel = allKartentricks.filter((a) =>
    EINSTIEG_SLUGS.includes(a.slug)
  );

  const partyArtikel = allPartyTricks.filter((a) =>
    PARTY_SLUGS.includes(a.slug)
  );

  const technikArtikel = allTechniken.filter((a) =>
    TECHNIK_SLUGS.includes(a.slug)
  );

  return (
    <>
      <JsonLd data={ZAUBERTRICKS_FAQ_JSON_LD} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-50 border-b border-black/[0.04]">
        <div className="layout-page py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-6">
              <Star className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Kostenlos · Auf Deutsch
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-5">
              Zaubertricks lernen -<br className="hidden sm:block" /> für Anfänger & Einsteiger
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-500 max-w-2xl mb-8">
              Hier findest du einfache Zaubertricks mit Karten. Schritt-für-Schritt
              erklärt, für Kinder und Erwachsene, ohne Vorkenntnisse. Und das alles
              kostenlos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kartentricks/10-in-10-minuten"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                <Zap className="h-4 w-4" />
                10 Tricks in 10 Minuten
              </Link>
              <Link
                href="/kartentricks/anfaenger-guide"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
              >
                Anfänger-Leitfaden
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-page py-12 space-y-16">

        {/* Quick-Start-Navigation */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Wo möchtest du anfangen?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickLink
              href="/kartentricks/10-in-10-minuten"
              icon={<Clock className="h-6 w-6" />}
              title="In 10 Minuten 10 Tricks"
              subtitle="Sofort anwendbar, kein Vorwissen nötig"
            />
            <QuickLink
              href="/kartentricks/anfaenger-guide"
              icon={<Star className="h-6 w-6" />}
              title="Ultimativer Anfänger-Guide"
              subtitle="Alle Grundlagen auf einen Blick"
            />
            <QuickLink
              href="/party-tricks/geburtstag"
              icon={<Users className="h-6 w-6" />}
              title="Tricks für Partys & Feiern"
              subtitle="Funktionieren vor Gruppen garantiert"
            />
            <QuickLink
              href="/party-tricks/kinder"
              icon={<Zap className="h-6 w-6" />}
              title="Zaubertricks für Kinder"
              subtitle="Altersgerecht erklärt, sicher geheim"
            />
          </div>
        </section>

        {/* Einfache Zaubertricks für Anfänger */}
        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Einfache Zaubertricks für Anfänger
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Diese Tricks funktionieren mit einem normalen Kartenspiel. Du brauchst
              keine Fingerfertigkeiten und keine Vorbereitung. Perfekt für den ersten
              Auftritt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {einstiegArtikel.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/kartentricks"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Alle Kartentricks ansehen <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Was sind Zaubertricks - SEO-Textblock */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-4">
            Was sind Zaubertricks - und wie lernt man sie?
          </h2>
          <div className="prose max-w-none text-neutral-600">
            <p>
              Zaubertricks sind Illusionen, die das Publikum verblüffen, indem sie
              gegen die Erwartungen verstoßen. Die meisten Zaubertricks basieren auf
              einem von drei Prinzipien: <strong>Mathematik</strong> (die Zahl stimmt
              immer), <strong>Psychologie</strong> (der Zuschauer denkt, er hat eine
              freie Wahl), oder <strong>Fingertechnik</strong> (Handgriffe, die
              unbemerkt bleiben).
            </p>
            <p>
              Der einfachste Einstieg in die Welt der Zaubertricks sind{" "}
              <Link href="/kartentricks" className="text-primary hover:underline font-medium">
                Kartentricks
              </Link>
              . Du brauchst nur ein normales Kartenspiel. Das Werkzeug ist günstig,
              überall verfügbar und gleichzeitig vielseitig genug für Anfänger und
              Profis.
            </p>
            <p>
              Wer tiefer einsteigen möchte, sollte sich mit den{" "}
              <Link href="/fingerfertigkeit" className="text-primary hover:underline font-medium">
                Grundtechniken der Kartenmagie
              </Link>{" "}
              beschäftigen: Der{" "}
              <Link href="/fingerfertigkeit/double-lift" className="text-primary hover:underline font-medium">
                Double Lift
              </Link>
              , der{" "}
              <Link href="/fingerfertigkeit/pinky-break" className="text-primary hover:underline font-medium">
                Pinky Break
              </Link>{" "}
              und die Kunst der{" "}
              <Link href="/fingerfertigkeit/misdirection" className="text-primary hover:underline font-medium">
                Misdirection
              </Link>{" "}
              sind die Bausteine hinter den meisten professionellen Tricks.
            </p>
          </div>
        </section>

        {/* Zaubertricks für Partys & besondere Anlässe */}
        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Zaubertricks für Partys & besondere Anlässe
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Nicht jeder Trick passt in jeden Kontext. Diese Artikel helfen dir, den
              richtigen Trick für den richtigen Moment zu finden.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partyArtikel.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/party-tricks"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Alle Party-Tricks ansehen <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Techniken */}
        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Grundtechniken - das Handwerk hinter Zaubertricks
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Hinter jedem guten Zaubertrick steckt eine erlernbare Technik. Diese
              Grundlagen machen dich zu einem besseren Zauberer, egal welchen Trick
              du als nächstes lernen willst.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technikArtikel.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/fingerfertigkeit"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Alle Techniken ansehen <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Mentalmagie & Münzmagie */}
        {allZaubertricks.length > 0 && (
          <section>
            <div className="mb-7">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
                Mentalmagie & Münzmagie
              </h2>
              <p className="text-neutral-500 max-w-2xl">
                Zaubertricks jenseits der Karten: Wie Gedankenleser wirklich arbeiten und wie du
                eine Münze spurlos verschwinden lässt.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allZaubertricks.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* CTA-Box */}
        <section className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Bereit für deinen ersten Zaubertrick?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Starte mit dem Artikel, der am besten zu dir passt. In 10 Minuten
            weißt du, ob Zaubertricks dein Ding sind.
          </p>
          <Link
            href="/kartentricks/10-in-10-minuten"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
          >
            <Zap className="h-4 w-4" />
            Jetzt 10 Tricks lernen
          </Link>
        </section>

      </div>
    </>
  );
}
