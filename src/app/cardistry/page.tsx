import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Star, Zap, HandMetal, PlayCircle, ChevronRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import { getArticlesByCategory } from "@/lib/content";
import type { Category } from "@/lib/types";

export const metadata: Metadata = {
  title: "Cardistry lernen: Flourishes & Cuts für Anfänger (Deutsch)",
  description:
    "Cardistry lernen auf Deutsch: Was ist Cardistry, welche Moves für Anfänger, welche Karten eignen sich – und wie übst du richtig? Alles erklärt.",
  keywords: [
    "Cardistry lernen",
    "Cardistry Deutsch",
    "Cardistry Anfänger",
    "Flourishes lernen",
    "Card Cuts lernen",
    "Cardistry Moves",
    "Kartenflourishs",
  ],
  alternates: { canonical: "https://karten-tricks.de/kartentricks/cardistry" },
  openGraph: {
    title: "Cardistry lernen: Flourishes & Cuts für Anfänger",
    description:
      "Cardistry auf Deutsch lernen – Moves für Einsteiger, die besten Decks und Tutorials. Kostenlos erklärt.",
    type: "website",
    url: "https://karten-tricks.de/kartentricks/cardistry",
  },
};

const CARDISTRY_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Cardistry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cardistry (von \"card artistry\") ist das ästhetische Manipulieren von Spielkarten als Performancekunst. Im Gegensatz zu Kartentricks geht es nicht darum zu täuschen, sondern um Schönheit, Kontrolle und Bewegung. Die Zuschauer wissen, dass es Können ist – und staunen trotzdem.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Karten brauche ich für Cardistry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zum Einstieg reicht ein normales Bicycle Rider Back Deck – es ist robust, günstig und fühlt sich gut an. Später lohnen sich Premium-Decks wie Fontaine Cards oder NOC, die für ihre gleichmäßige Textur und Optik bei Flourishes bekannt sind.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert es, Cardistry zu lernen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grundlegende Moves wie den Charlier Cut oder den Spring lernst du in wenigen Stunden. Nach 1–2 Monaten regelmäßigen Übens hast du eine solide Basis. Profi-Niveau erfordert Jahre – aber schon nach wenigen Wochen sehen deine Moves beeindruckend aus.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Cardistry und Kartentricks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kartentricks beruhen auf Täuschung – der Zuschauer weiß nicht, wie der Effekt entsteht. Cardistry ist offen: Alle sehen, dass du Können demonstrierst. Es gibt kein Geheimnis, nur Beherrschung.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich Cardistry als absoluter Anfänger lernen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Du brauchst kein Vorwissen. Der Einstieg – Charlier Cut, Thumb Fan, Spring – ist mit einem normalen Kartenspiel möglich. Wichtig ist regelmäßiges Üben: lieber 10 Minuten täglich als 2 Stunden am Wochenende.",
      },
    },
  ],
} as const;

const AFFILIATE_KARTEN = [
  {
    label: "Bicycle Rider Back – das beste Einsteiger-Deck für Cardistry",
    url: "https://amzn.to/48Im2QY",
    note: "Robust, günstig, perfekter Einstieg",
  },
  {
    label: "SOLOMAGIA Virtuoso P1 Limited Edition Playing Cards",
    url: "https://amzn.to/4cACiF0",
    note: "Beliebtes Cardistry-Deck mit starkem Design und sauberem Handling",
  },
];

interface QuickLinkProps {
  href: string;
  icon: ReactNode;
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

export default function CardistryLandingPage() {
  const allCardistry = getArticlesByCategory("cardistry" as Category);

  return (
    <>
      <JsonLd data={CARDISTRY_FAQ_JSON_LD} />

      {/* Breadcrumb */}
      <div className="layout-page pt-6 pb-0">
        <nav className="flex items-center gap-1.5 text-sm text-neutral-400">
          <Link href="/" className="hover:text-neutral-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/kartentricks" className="hover:text-neutral-600 transition-colors">
            Kartentricks
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-neutral-600 font-medium">Cardistry</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-50 border-b border-black/[0.04]">
        <div className="layout-page py-12 md:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-6">
                <Star className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Kartenkunst · Kein Trick, reines Können
                </span>
              </div>
              <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-5">
                Was ist Cardistry?
              </h1>
              <p className="text-lg leading-relaxed text-neutral-500 mb-8">
                Cardistry ist das ästhetische Manipulieren von Spielkarten. Kein Täuschen,
                kein Geheimnis – nur{" "}
                <strong className="text-neutral-700">Kontrolle, Eleganz und Bewegung</strong>.
                Und es gibt fast nichts davon auf Deutsch. Bis jetzt.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/cardistry/anfaenger"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                >
                  <Zap className="h-4 w-4" />
                  Dein erster Flourish
                </Link>
                <Link
                  href="#tutorials"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
                >
                  Alle Tutorials
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Video */}
            <div className="rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)] aspect-video bg-neutral-900 flex items-center justify-center">
              {/* TODO: YouTube-Embed hier einfügen, z.B.:
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/DEIN_VIDEO_ID"
                    title="Cardistry – Was ist das?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
              */}
              <div className="text-center text-white/50 select-none">
                <PlayCircle className="h-16 w-16 mx-auto mb-3 opacity-40" />
                <p className="text-sm font-medium">Cardistry Video</p>
                <p className="text-xs mt-1 opacity-60">YouTube-Embed hier einfügen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-page py-12 space-y-16">
        {/* Quick Start */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Lerne deine ersten Moves
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Fang einfach an: Charlier Cut, Thumb Fan, Spring. Diese drei Moves sind der Grundstein
              – und jeder davon sieht schon nach einem Tag Übung beeindruckend aus.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickLink
              href="/cardistry/anfaenger"
              icon={<HandMetal className="h-6 w-6" />}
              title="Anfänger-Guide"
              subtitle="Was ist Cardistry – und wo fängst du an?"
            />
            <QuickLink
              href="/cardistry/flourishes-top10"
              icon={<Star className="h-6 w-6" />}
              title="Die 10 besten Flourishes"
              subtitle="Sortiert nach Schwierigkeit, mit Lernkurve"
            />
            <QuickLink
              href="#beste-karten"
              icon={<Zap className="h-6 w-6" />}
              title="Die richtigen Karten"
              subtitle="Welches Deck eignet sich für Cardistry?"
            />
            <QuickLink
              href="/kartentricks/fingerfertigkeit"
              icon={<ArrowRight className="h-6 w-6" />}
              title="Fingerfertigkeit für Kartentricks"
              subtitle="Double Lift, Forces & Profigriffe"
            />
          </div>
        </section>

        {/* Affiliate – Beste Karten */}
        <section
          id="beste-karten"
          className="scroll-mt-28 rounded-3xl bg-white border border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                Empfehlung
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-800">
                Die besten Karten für Cardistry
              </h2>
              <p className="text-neutral-500 mt-2 max-w-2xl">
                Nicht jedes Deck eignet sich für Flourishes. Diese zwei sind die Empfehlung
                für Einsteiger und alle, die weiter wollen.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AFFILIATE_KARTEN.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="group flex flex-col gap-2 rounded-2xl bg-neutral-50 border border-black/[0.06] p-5 transition-all hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
              >
                <p className="font-semibold text-neutral-800 group-hover:text-primary transition-colors leading-snug">
                  {item.label}
                </p>
                <p className="text-sm text-neutral-500">{item.note}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-1">
                  Bei Amazon ansehen <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-5">
            * Affiliate-Links. Ich erhalte eine kleine Provision ohne Mehrkosten für dich.
          </p>
        </section>

        {/* Tutorials */}
        <section id="tutorials" className="scroll-mt-28">
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Cardistry Tutorials
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Schritt-für-Schritt erklärt, auf Deutsch. Von den ersten Cuts bis zu eleganten Spreads.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCardistry.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Was ist Cardistry – SEO-Textblock */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-4">
            Cardistry vs. Kartentricks: Was ist der Unterschied?
          </h2>
          <div className="prose max-w-none text-neutral-600">
            <p>
              Beim Kartenzaubern geht es um <strong>Täuschung</strong>: Der Zuschauer weiß nicht,
              wie der Effekt entsteht. Cardistry dreht das um. Alle sehen, dass du etwas Schwieriges
              tust – und staunen trotzdem. Es gibt kein Geheimnis, nur Beherrschung.
            </p>
            <p>
              Beides hat seinen Platz. Viele Zauberer lernen Cardistry parallel, weil es die
              allgemeine Kartenkontrolle verbessert. Die Grundbewegungen – sauberes Halten,
              gleichmäßiger Druck, fließende Cuts – zahlen direkt auf Fingerfertigkeit ein.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Häufige Fragen zu Cardistry
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Was ist Cardistry?",
                a: "Cardistry (von \"card artistry\") ist das ästhetische Manipulieren von Spielkarten als Performancekunst. Im Gegensatz zu Kartentricks geht es nicht darum zu täuschen, sondern um Schönheit, Kontrolle und Bewegung.",
              },
              {
                q: "Welche Karten brauche ich für Cardistry?",
                a: "Zum Einstieg reicht ein Bicycle Rider Back Deck. Später lohnen sich Premium-Decks wie Fontaine Cards, die für ihre gleichmäßige Textur bei Flourishes bekannt sind.",
              },
              {
                q: "Wie lange dauert es, Cardistry zu lernen?",
                a: "Grundlegende Moves lernst du in wenigen Stunden. Nach 1–2 Monaten regelmäßigen Übens hast du eine solide Basis. Lieber 10 Minuten täglich als 2 Stunden am Wochenende.",
              },
              {
                q: "Was ist der Unterschied zwischen Cardistry und Kartentricks?",
                a: "Kartentricks beruhen auf Täuschung – der Zuschauer weiß nicht, wie der Effekt entsteht. Cardistry ist offen: Alle sehen, dass du Können demonstrierst.",
              },
              {
                q: "Kann ich Cardistry als absoluter Anfänger lernen?",
                a: "Ja. Du brauchst kein Vorwissen. Der Einstieg – Charlier Cut, Thumb Fan, Spring – ist mit einem normalen Kartenspiel möglich.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-neutral-800 select-none list-none [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronRight className="h-4 w-4 text-neutral-400 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 text-neutral-600 leading-relaxed text-[0.95rem]">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Bereit für deinen ersten Flourish?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Fang mit dem Anfänger-Guide an – du brauchst nur ein normales Kartenspiel und 15 Minuten.
          </p>
          <Link
            href="/cardistry/anfaenger"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
          >
            <Zap className="h-4 w-4" />
            Jetzt starten
          </Link>
        </section>
      </div>
    </>
  );
}
