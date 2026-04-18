import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Star, Zap, Hand, Wand2, ChevronRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import { getArticlesByCategory } from "@/lib/content";
import type { Category } from "@/lib/types";

export const metadata: Metadata = {
  title: "Fingerfertigkeit lernen: Double Lift, Forces & Profigriffe (Deutsch)",
  description:
    "Fingerfertigkeit für Kartentricks: Double Lift, Pinky Break, Forces und mehr – schritt für Schritt erklärt. Baue saubere Profigriffe auf, die Tricks unmöglich wirken lassen.",
  keywords: [
    "Fingerfertigkeit Kartentricks",
    "Double Lift lernen",
    "Pinky Break",
    "Force Kartentrick",
    "Kartentrick Techniken",
    "Profigriffe Karten",
    "Kartenmagie Grundlagen",
  ],
  alternates: { canonical: "https://karten-tricks.de/kartentricks/fingerfertigkeit" },
  openGraph: {
    title: "Fingerfertigkeit lernen: Double Lift, Forces & Profigriffe",
    description:
      "Die wichtigsten Kartentrick-Techniken auf Deutsch – Double Lift, Pinky Break, Forces. Sauber erklärt für Einsteiger.",
    type: "website",
    url: "https://karten-tricks.de/kartentricks/fingerfertigkeit",
  },
};

const FINGERFERTIGKEIT_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Fingerfertigkeit beim Kartenzaubern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fingerfertigkeit bezeichnet die Techniken, mit denen Zauberer Karten kontrollieren, ohne dass der Zuschauer es merkt. Dazu gehören Griffe wie der Double Lift (zwei Karten als eine zeigen), der Pinky Break (unsichtbare Position markieren) oder verschiedene Forces (Zuschauer eine bestimmte Karte wählen lassen).",
      },
    },
    {
      "@type": "Question",
      name: "Was ist ein Double Lift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beim Double Lift werden die obersten zwei Karten des Decks gleichzeitig umgedreht, sodass es für den Zuschauer aussieht, als wäre es nur eine Karte. Er ist eine der grundlegendsten Techniken und Voraussetzung für viele Kartentricks wie den Chicago Opener.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist ein Pinky Break?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Pinky Break ist eine subtile Technik, bei der der kleine Finger eine kleine Lücke im Kartendeck markiert. Das ermöglicht es, eine bestimmte Position im Deck unsichtbar zu halten – Grundlage für viele Moves wie den Double Lift.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist eine Force beim Kartenzaubern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Force (dt. Kraft/Zwang) ist eine Technik, mit der der Zauberer die Karte bestimmt, die der Zuschauer \"frei\" wählt. Der Zuschauer glaubt, er hat freie Wahl – in Wirklichkeit hat der Zauberer das Ergebnis kontrolliert.",
      },
    },
    {
      "@type": "Question",
      name: "Muss ich Fingerfertigkeit lernen, um Kartentricks zu können?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein – du kannst mit mathematischen Tricks oder System-Decks starten, die keine Fingerfertigkeit erfordern. Aber mit ein paar sauberen Griffen wie dem Double Lift wirkst du sofort deutlich professioneller und kannst stärkere Effekte erzeugen.",
      },
    },
  ],
} as const;

const KEY_TECHNIKEN = [
  {
    slug: "pinky-break",
    title: "Pinky Break",
    desc: "Unsichtbare Position im Deck markieren – Grundlage für fast alles.",
    difficulty: "Anfänger",
  },
  {
    slug: "double-lift",
    title: "Double Lift",
    desc: "Zwei Karten als eine zeigen. Voraussetzung für Dutzende Tricks.",
    difficulty: "Mittel",
  },
  {
    slug: "forces",
    title: "Forces",
    desc: "Zuschauer eine bestimmte Karte \"frei\" wählen lassen.",
    difficulty: "Mittel",
  },
  {
    slug: "misdirection",
    title: "Misdirection",
    desc: "Aufmerksamkeit lenken – der unsichtbarste Trick überhaupt.",
    difficulty: "Anfänger",
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

function pickArticlesBySlugs<T extends { slug: string }>(all: T[], slugs: string[]) {
  return slugs
    .map((s) => all.find((a) => a.slug === s))
    .filter((a): a is T => a !== undefined);
}

export default function FingerfertigkeitLandingPage() {
  const allTechniken = getArticlesByCategory("fingerfertigkeit" as Category);
  const keyArtikel = pickArticlesBySlugs(
    allTechniken,
    KEY_TECHNIKEN.map((t) => t.slug)
  );
  const weitereArtikel = allTechniken.filter(
    (a) => !KEY_TECHNIKEN.map((t) => t.slug).includes(a.slug)
  );

  return (
    <>
      <JsonLd data={FINGERFERTIGKEIT_FAQ_JSON_LD} />

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
          <span className="text-neutral-600 font-medium">Fingerfertigkeit</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-50 border-b border-black/[0.04]">
        <div className="layout-page py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-6">
              <Star className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Profigriffe · Schritt für Schritt
              </span>
            </div>
            <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-5">
              Fingerfertigkeit für Kartentricks
            </h1>
            <p className="text-lg leading-relaxed text-neutral-500 max-w-2xl mb-8">
              Ein sauberer <strong className="text-neutral-700">Double Lift</strong> macht
              deinen Trick unmöglich. Ein guter <strong className="text-neutral-700">Force</strong>{" "}
              lässt den Zuschauer glauben, er hat freie Wahl. Diese Techniken sind der Unterschied
              zwischen „ganz nett" und „wie hast du das gemacht?".
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/fingerfertigkeit/pinky-break"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                <Zap className="h-4 w-4" />
                Mit dem Pinky Break starten
              </Link>
              <Link
                href="/kartentricks"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
              >
                Zurück zu Kartentricks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-page py-12 space-y-16">
        {/* Quick Navigation */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Die wichtigsten Techniken
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <QuickLink
              href="/fingerfertigkeit/pinky-break"
              icon={<Hand className="h-6 w-6" />}
              title="Pinky Break"
              subtitle="Einstieg: unsichtbare Position markieren"
            />
            <QuickLink
              href="/fingerfertigkeit/double-lift"
              icon={<Wand2 className="h-6 w-6" />}
              title="Double Lift"
              subtitle="Zwei Karten als eine zeigen"
            />
            <QuickLink
              href="/fingerfertigkeit/forces"
              icon={<Star className="h-6 w-6" />}
              title="Forces"
              subtitle="Karte kontrollieren, Zuschauer entscheiden lassen"
            />
            <QuickLink
              href="/fingerfertigkeit/misdirection"
              icon={<Zap className="h-6 w-6" />}
              title="Misdirection"
              subtitle="Aufmerksamkeit lenken – der unsichtbarste Trick"
            />
          </div>
        </section>

        {/* Key Techniken – Artikel */}
        {keyArtikel.length > 0 && (
          <section>
            <div className="mb-7">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
                Kern-Techniken lernen
              </h2>
              <p className="text-neutral-500 max-w-2xl">
                Diese vier Griffe sind in fast jedem Profi-Trick drin. Wer sie sauber beherrscht,
                hat eine solide Basis für alles weitere.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {keyArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Lernpfad */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-4">
            Der richtige Einstieg in Fingerfertigkeit
          </h2>
          <div className="prose max-w-none text-neutral-600">
            <p>
              Starte nicht mit dem schwersten Move. Die richtige Reihenfolge:{" "}
              <strong>Pinky Break → Double Lift → Force → Misdirection</strong>. Jede Technik
              baut auf der vorherigen auf und macht die nächste leichter.
            </p>
            <p>
              Wichtig: Übe vor dem Spiegel. Nicht wegen der Optik, sondern weil du siehst, was
              der Zuschauer sieht – und merkst, was noch nicht sauber ist. Ein unsauberer
              Double Lift fällt auf; ein sauberer ist magisch.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kartentricks"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Kartentricks, die diese Griffe nutzen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/kartentricks/cardistry"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
            >
              Auch Cardistry lernen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Weitere Artikel */}
        {weitereArtikel.length > 0 && (
          <section>
            <div className="mb-7">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
                Weitere Techniken
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {weitereArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Häufige Fragen zur Fingerfertigkeit
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Was ist Fingerfertigkeit beim Kartenzaubern?",
                a: "Fingerfertigkeit bezeichnet Techniken, mit denen Zauberer Karten kontrollieren, ohne dass der Zuschauer es merkt – Double Lift, Pinky Break, Forces und mehr.",
              },
              {
                q: "Was ist ein Double Lift?",
                a: "Beim Double Lift werden die obersten zwei Karten gleichzeitig umgedreht, sodass es für den Zuschauer wie eine Karte aussieht. Grundlage für viele starke Kartentricks.",
              },
              {
                q: "Was ist ein Pinky Break?",
                a: "Ein Pinky Break ist eine subtile Technik, bei der der kleine Finger eine unsichtbare Lücke im Deck markiert. Grundlage für viele Moves wie den Double Lift.",
              },
              {
                q: "Was ist eine Force beim Kartenzaubern?",
                a: "Ein Force ist eine Technik, mit der der Zauberer die Karte bestimmt, die der Zuschauer \"frei\" wählt – ohne dass dieser es merkt.",
              },
              {
                q: "Muss ich Fingerfertigkeit lernen, um Kartentricks zu können?",
                a: "Nein – mathematische Tricks und System-Decks brauchen keine Fingerfertigkeit. Aber mit ein paar Griffen wirkst du sofort professioneller.",
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
                <div className="px-6 pb-5 text-neutral-600 leading-relaxed text-[0.95rem]">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Fang heute mit dem Pinky Break an
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            In 15 Minuten hast du die Grundlage für Dutzende Kartentricks gelernt.
          </p>
          <Link
            href="/fingerfertigkeit/pinky-break"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
          >
            <Zap className="h-4 w-4" />
            Pinky Break lernen
          </Link>
        </section>
      </div>
    </>
  );
}
