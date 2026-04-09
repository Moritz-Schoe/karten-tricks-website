import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Clock, Zap, Star, Layers, Wand2 } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import { getArticlesByCategory } from "@/lib/content";
import type { Category } from "@/lib/types";

export const metadata: Metadata = {
  title: "Kartentricks lernen: Einfache & starke Tricks (für Anfänger)",
  description:
    "Kartentricks lernen: einfache Anleitungen für Anfänger, mathematische Kartentricks, Tricks mit System (präparierte Decks) und Grundlagen der Fingerfertigkeit. Kostenlos auf Deutsch.",
  keywords: [
    "Kartentricks",
    "Kartentricks lernen",
    "Kartentricks für Anfänger",
    "mathematische Kartentricks",
    "Kartentricks mit System",
    "Svengali Deck",
    "Stripper Deck",
    "Kartenzauberei",
  ],
  alternates: { canonical: "https://karten-tricks.de/kartentricks" },
  openGraph: {
    title: "Kartentricks lernen: Einfache & starke Tricks",
    description:
      "Einfache Kartentricks für Anfänger + mathematische Tricks + Tricks mit System. Schritt-für-Schritt erklärt, kostenlos und auf Deutsch.",
    type: "website",
    url: "https://karten-tricks.de/kartentricks",
  },
};

const MATHE_SLUGS = ["21-karten", "dreimal-abheben"];
const EINSTIEG_SLUGS = [
  "10-in-10-minuten",
  "anfaenger-guide",
  "21-karten",
  "dreimal-abheben",
  "umgedrehte-karte",
  "karte-erraten",
];

const TECHNIK_SLUGS = ["pinky-break", "double-lift", "forces", "misdirection"];

const KARTENTRICKS_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Kartentricks eignen sich für Anfänger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Anfänger sind mathematische Kartentricks ideal: Sie funktionieren nach festen Prinzipien und brauchen keine Fingerfertigkeit. Danach kannst du mit Tricks mit System (z.B. Svengali/Stripper) und einfachen Profi-Griffen wie dem Double Lift erweitern.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich spezielle Karten für Kartentricks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für viele Kartentricks reicht ein normales Kartenspiel. Für Tricks mit System können präparierte Decks (z.B. Svengali oder Stripper) die Ausführung deutlich erleichtern und trotzdem extrem starke Effekte ermöglichen.",
      },
    },
  ],
} as const;

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

function pickArticlesBySlugs<T extends { slug: string }>(
  all: T[],
  slugs: string[],
  fallbackCount: number
) {
  const picked = all.filter((a) => slugs.includes(a.slug));
  if (picked.length > 0) return picked;
  return all.slice(0, fallbackCount);
}

export default function KartentricksLandingPage() {
  const allKartentricks = getArticlesByCategory("kartentricks" as Category);
  const allTechniken = getArticlesByCategory("fingerfertigkeit" as Category);

  const einstiegArtikel = pickArticlesBySlugs(allKartentricks, EINSTIEG_SLUGS, 6);
  const matheArtikel = pickArticlesBySlugs(allKartentricks, MATHE_SLUGS, 6);
  const technikArtikel = pickArticlesBySlugs(allTechniken, TECHNIK_SLUGS, 4);

  return (
    <>
      <JsonLd data={KARTENTRICKS_FAQ_JSON_LD} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-50 border-b border-black/[0.04]">
        <div className="layout-page py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-6">
              <Star className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Kostenlos · Schritt für Schritt
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-5">
              Kartentricks lernen -<br className="hidden sm:block" /> einfach, stark, verständlich
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-500 max-w-2xl mb-8">
              Du willst Kartentricks lernen, ohne dich in tausend Moves zu verlieren?
              Starte mit <strong>mathematischen Tricks</strong> (fehlerfrei), gehe dann
              zu <strong>Tricks mit System</strong> über, und baue parallel echte Profi-Technik
              auf.
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
                Anfänger-Guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-page py-12 space-y-16">
        {/* Quick-Start */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Dein Start: Wähle deinen Pfad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickLink
              href="#mathematisch"
              icon={<Clock className="h-6 w-6" />}
              title="Mathematische Tricks"
              subtitle="Funktioniert „von selbst“ – perfekt für Anfänger"
            />
            <QuickLink
              href="#system"
              icon={<Layers className="h-6 w-6" />}
              title="Kartentricks mit System"
              subtitle="Präparierte Decks, große Wirkung, wenig Moves"
            />
            <QuickLink
              href="/fingerfertigkeit"
              icon={<Wand2 className="h-6 w-6" />}
              title="Fingerfertigkeit (Profi-Griffe)"
              subtitle="Double Lift, Forces & Co. sauber lernen"
            />
            <QuickLink
              href="/shop"
              icon={<Zap className="h-6 w-6" />}
              title="Karten & Zubehör"
              subtitle="Decks, die sich fürs Zaubern wirklich lohnen"
            />
          </div>
        </section>

        {/* Einfache Kartentricks */}
        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Einfache Kartentricks für Anfänger
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Diese Auswahl bringt dich schnell auf die Bühne: verständlich erklärt, mit maximaler Wirkung.
              Wenn du neu bist, beginne hier – und spring dann zu Mathe oder System.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {einstiegArtikel.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Mathematische Kartentricks */}
        <section id="mathematisch" className="scroll-mt-28">
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Mathematische Kartentricks: 100% sicher vorführen
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Mathematische Tricks sind dein „Sicherheitsnetz“: Der Effekt entsteht durch ein logisches Prinzip.
              Du kannst dich komplett auf Auftreten, Timing und Story konzentrieren.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matheArtikel.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="#alle"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Alle Kartentricks ansehen <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Alle Kartentricks */}
        <section id="alle" className="scroll-mt-28">
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Alle Kartentricks ({allKartentricks.length})
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Hier findest du wirklich alle Kartentricks aus der Kategorie – chronologisch sortiert (neueste zuerst).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allKartentricks.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Kartentricks mit System (Pfad 2) */}
        <section id="system" className="scroll-mt-28 rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Pfad 2
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mt-2 mb-4">
              Kartentricks mit System
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              <strong>Präparierte Decks</strong> (z.B. <strong>Stripper</strong> oder{" "}
              <strong>Svengali</strong>) sorgen für unmögliche Effekte, ohne schwere Moves.
              Das ist ideal, wenn du schnell starke Resultate willst – und später trotzdem
              saubere Fingerfertigkeit aufbauen möchtest.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                System-Decks im Shop ansehen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/fingerfertigkeit"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
              >
                Profi-Griffe parallel lernen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Techniken */}
        <section>
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Die wichtigsten Techniken für bessere Kartentricks
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Wenn du die Basics drauf hast, machen ein paar Griffe den Unterschied: sauberer, überzeugender, „echter“.
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

        {/* SEO-Textblock */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-4">
            Kartentricks lernen: Der klare Weg für Einsteiger
          </h2>
          <div className="prose max-w-none text-neutral-600">
            <p>
              Gute Kartenmagie fühlt sich unmöglich an – und ist trotzdem erlernbar. Wenn du als Anfänger startest,
              hilft dir eine Struktur: zuerst <strong>Mathematik</strong> (fehlerfrei), dann <strong>System</strong> (maximale Wirkung ohne schwere Moves),
              und anschließend <strong>Fingerfertigkeit</strong> (visuelle Wunder).
            </p>
            <p>
              Genau deshalb findest du hier drei Einstiegs-Pfade. Du kannst sofort loslegen – mit einem normalen Kartendeck
              oder, wenn du willst, mit einem System-Deck. Am Ende zählt nicht der Move, sondern die Performance.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Bereit für deinen ersten Kartentrick?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Starte mit „10 Tricks in 10 Minuten“ – und entscheide danach, ob du Mathe, System oder Profi-Technik als Nächstes willst.
          </p>
          <Link
            href="/kartentricks/10-in-10-minuten"
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

