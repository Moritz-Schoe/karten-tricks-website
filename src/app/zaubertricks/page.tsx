import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Coins, ScrollText, Sparkles, Star, Wand2, Zap } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import JsonLd from "@/components/JsonLd";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Zaubertricks lernen: Mentalmagie & Münzmagie für Anfänger",
  description:
    "Lerne Zaubertricks jenseits der Karten: Mentalmagie, Münztricks und psychologische Effekte - kostenlos, auf Deutsch, Schritt für Schritt erklärt.",
  keywords: [
    "Zaubertricks",
    "Zaubertricks lernen",
    "Mentalmagie",
    "Münzmagie",
    "Zaubertricks für Anfänger",
    "Gedanken lesen Trick",
    "Münze verschwinden lassen",
    "einfache Zaubertricks",
    "Zaubertricks ohne Karten",
  ],
  alternates: { canonical: "https://karten-tricks.de/zaubertricks" },
  openGraph: {
    title: "Zaubertricks lernen: Mentalmagie & Münzmagie",
    description:
      "Mentalmagie, Münztricks und psychologische Effekte für Anfänger. Schritt-für-Schritt Anleitungen auf Deutsch, kostenlos.",
    type: "website",
    url: "https://karten-tricks.de/zaubertricks",
  },
};

const MENTALMAGIE_SLUGS = ["mentalmagie-vorhersage", "shiner-gedankenlesen"];
const MUENZMAGIE_SLUGS = ["muenzmagie-french-drop", "muenzmagie-durch-den-tisch"];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was sind die einfachsten Zaubertricks für Anfänger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Anfänger sind Mentalmagie-Tricks ideal: Sie brauchen keine Fingerfertigkeiten oder Requisiten. Der Dänemark-Trick funktioniert zum Beispiel mit reiner Mathematik und Psychologie und lässt sich in zwei Minuten lernen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Mentalmagie und Münzmagie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mentalmagie simuliert Gedankenlesen und Vorhersagen - der Zauberer scheint in den Kopf des Zuschauers blicken zu können. Münzmagie ist visueller: Münzen verschwinden, erscheinen oder gehen durch feste Objekte. Beide Bereiche eignen sich für Anfänger.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Zaubertricks kann man ohne Requisiten machen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mentalmagie-Tricks wie der Dänemark-Trick oder das Vorhersage-Prinzip brauchen keine Requisiten - nur Worte und Mathematik. Für Münzmagie reicht eine einzige Münze aus dem Geldbeutel.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert es, Zaubertricks zu lernen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Viele Mentalmagie-Tricks sind in 5-10 Minuten lernbar. Münztricks wie der French Drop brauchen etwas Übung - nach 15-20 Minuten vor dem Spiegel ist der Ablauf meist verinnerlicht.",
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

export default function ZaubertricksPage() {
  const allZaubertricks = getArticlesByCategory("zaubertricks");

  const mentalmagieArtikel = allZaubertricks.filter((a) =>
    MENTALMAGIE_SLUGS.includes(a.slug)
  );
  const muenzmagieArtikel = allZaubertricks.filter((a) =>
    MUENZMAGIE_SLUGS.includes(a.slug)
  );

  return (
    <>
      <JsonLd data={FAQ_JSON_LD} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-neutral-50 border-b border-black/[0.04]">
        <div className="layout-page py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 mb-6">
              <Star className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Kostenlos · Ohne Karten · Sofort lernbar
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-5">
              Zaubertricks lernen –<br className="hidden sm:block" /> Mentalmagie & Münzmagie
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-500 max-w-2xl mb-8">
              Zauberei braucht keine Karten. Gedanken lesen, Münzen verschwinden lassen,
                                        Vorhersagen treffen: hier lernst du die stärksten Tricks jenseits des
                                        Kartendecks. Schritt für Schritt, auf Deutsch, kostenlos.
                                      </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#mentalmagie"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                <Brain className="h-4 w-4" />
                Mentalmagie entdecken
              </Link>
              <Link
                href="#muenzmagie"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
              >
                <Coins className="h-4 w-4" />
                Münzmagie entdecken
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
              href="#mentalmagie"
              icon={<Brain className="h-6 w-6" />}
              title="Mentalmagie"
              subtitle="Gedankenlesen, Vorhersagen, kein Requisit"
            />
            <EinstiegCard
              href="#muenzmagie"
              icon={<Coins className="h-6 w-6" />}
              title="Münzmagie"
              subtitle="Münzen verschwinden - eine Münze reicht"
            />
            <EinstiegCard
              href="/zaubertricks/zaubersprueche"
              icon={<ScrollText className="h-6 w-6" />}
              title="Zaubersprüche"
              subtitle="Sprüche für Show, Timing und Atmosphäre"
            />
            <EinstiegCard
              href="/kartentricks"
              icon={<Sparkles className="h-6 w-6" />}
              title="Kartentricks"
              subtitle="Der klassische Einstieg mit einem Deck"
            />
          </div>
        </section>

        {/* Mentalmagie */}
        <section id="mentalmagie" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Mentalmagie</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Gedanken lesen: so funktioniert Mentalmagie
                                      </h2>
            <p className="text-neutral-500 max-w-2xl">
              Mentalisten lesen keine Gedanken. Sie nutzen Mathematik, Psychologie und Misdirection.
                                        Diese Tricks brauchen kein einziges Requisit und funktionieren überall: im Büro,
                                        auf einer Party, beim Abendessen.
                                      </p>
          </div>
          {mentalmagieArtikel.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentalmagieArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-sm">Artikel werden geladen…</p>
          )}
        </section>

        {/* Trennlinie / Erklärblock Mentalmagie */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-3">
            Was ist Mentalmagie?
          </h2>
          <div className="prose max-w-none text-neutral-600 text-sm leading-relaxed">
            <p>
              Mentalmagie ist der Bereich der Zauberei, der mit dem menschlichen Geist spielt.
                                        Der Zauberer scheint Gedanken zu lesen, Entscheidungen vorherzusagen oder Zahlen
                                        zu kennen, die noch niemand gesagt hat. Das Geheimnis: Er liest keine Gedanken, sondern
                                        er <strong>erzeugt</strong> sie.
            </p>
            <p>
              Mathematische Zwangsläufigkeiten sorgen dafür, dass bestimmte Ergebnisse immer
              eintreten. Psychologische Muster sorgen dafür, dass Menschen in bestimmten
              Situationen meist dieselben Wörter denken. Der Mentalist kombiniert beides
              und präsentiert das Ergebnis als Wahrsagerei.
            </p>
            <p>
              Der Einstieg in die Mentalmagie ist denkbar einfach: Du brauchst kein Deck,
              keine Münze, keine Vorbereitung. Ein Trick wie der{" "}
              <Link href="/zaubertricks/mentalmagie-daenemark-trick" className="text-primary hover:underline font-medium">
                ElefantTrick
                                            </Link>{" "}
              lässt sich in zwei Minuten lernen und verblüfft trotzdem zuverlässig.
            </p>
          </div>
        </section>

        {/* Münzmagie */}
        <section id="muenzmagie" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <Coins className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Münzmagie</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Münzen verschwinden lassen: Münzmagie für Anfänger
                                      </h2>
            <p className="text-neutral-500 max-w-2xl">
              Münzmagie ist die visuellste Form der Zauberei. Die Magie passiert direkt in deinen
                                        Händen, aus nächster Nähe, ohne Bühne. Eine einzige 1 Euro Münze reicht für
                                        Effekte, die selbst skeptische Zuschauer sprachlos machen.
                                      </p>
          </div>
          {muenzmagieArtikel.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {muenzmagieArtikel.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-sm">Artikel werden geladen…</p>
          )}
        </section>

        {/* Erklärblock Münzmagie */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-3">
            Was ist Münzmagie?
          </h2>
          <div className="prose max-w-none text-neutral-600 text-sm leading-relaxed">
            <p>
              Münzmagie ist Close-Up Magie in Reinform. Alles passiert in deinen Händen,
                                        ohne Tisch, ohne Abstand zum Publikum. Das macht sie besonders schwer zu
                                        erkennen und besonders verblüffend.
                                      </p>
            <p>
              Der Kern der Münzmagie sind sogenannte <strong>Scheingriffe</strong>: Bewegungen,
                                        die aussehen, als würdest du eine Münze von einer Hand in die andere nehmen, 
                                        während sie in Wirklichkeit bleibt, wo sie ist. Der{" "}
              <Link href="/zaubertricks/muenzmagie-french-drop" className="text-primary hover:underline font-medium">
                French Drop
              </Link>{" "}
              ist der bekannteste davon und der ideale Einstieg.
            </p>
            <p>
              Der große Vorteil gegenüber Kartentricks: Du brauchst wirklich nichts vorzubereiten.
                                        Eine Münze aus dem Geldbeutel, fünfzehn Minuten Übung und du hast einen Trick,
                                        den du für den Rest deines Lebens zeigen kannst.
                                      </p>
          </div>
        </section>

        {/* Auch interessant: Kartentricks */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Auch beliebt</p>
              <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-2">
                Kartentricks: der klassische Einstieg
                                            </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                Wer mit einem normalen Kartenspiel starten möchte, findet auf kartentricks.de
                                              alles von einfachen Anfänger-Tricks bis zu professionellen Techniken wie dem
                                              Double Lift oder dem Pinky Break.
                                            </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kartentricks"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Alle Kartentricks <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/kartentricks/anfaenger-guide"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
                >
                  Anfänger-Guide
                                                  </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Zauberkästen CTA */}
        <section>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-10 rounded-3xl bg-neutral-950 overflow-hidden p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-white/[0.05]">
            <div className="absolute top-0 right-0 bottom-0 w-[80%] sm:w-[60%] bg-gradient-to-l from-primary/30 via-primary/10 to-transparent pointer-events-none" />
            <div className="absolute top-[-30%] right-[-10%] h-[160%] w-[55%] rounded-full bg-primary/20 blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="relative z-10 max-w-xl">
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                Lust auf mehr Anleitungen & Gimmicks?
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed mb-8 max-w-lg">
                Zauberkästen sind der schnellste Weg zu professionellen Effekten, inklusive
                                              Gimmicks, die du selbst nicht bauen könntest. Such dir einen unserer
                                              empfohlenen Zauberkästen aus.
                                            </p>
              <Link
                href="/spielkarten/zauberkaesten"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white transition-all hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.45)] border border-primary/40"
              >
                Zauberkästen Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Häufige Fragen zu Zaubertricks
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Welche Zaubertricks kann ich als Anfänger sofort lernen?",
                a: "Der Dänemark-Trick ist in zwei Minuten lernbar - du brauchst dafür nichts außer deiner Stimme. Für Münzmagie ist der French Drop der ideale Einstieg: nach 15 Minuten Übung vor dem Spiegel funktioniert er zuverlässig.",
              },
              {
                q: "Brauche ich für Zaubertricks spezielle Requisiten?",
                a: "Für Mentalmagie-Tricks wie das Vorhersage-Prinzip oder den Dänemark-Trick brauchst du gar nichts. Für Münztricks reicht eine normale Münze aus dem Portemonnaie.",
              },
              {
                q: "Was ist der Unterschied zwischen Mentalmagie und anderen Zaubertricks?",
                a: "Bei klassischer Magie sieht der Zuschauer, dass etwas mit einem Objekt passiert - eine Karte verschwindet, eine Münze ist weg. Bei Mentalmagie passiert die Magie scheinbar im Kopf des Zuschauers. Das macht sie oft noch verblüffender.",
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
        <section className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] p-8 md:p-10 text-white text-center">
          <Wand2 className="h-8 w-8 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Bereit für deinen ersten Zaubertrick?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Fang mit dem DänemarkTrick an. Kein Requisit, kein Risiko  und die
                                  Reaktionen sind jedes Mal dieselbe: ungläubiges Staunen.
                                </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/zaubertricks/mentalmagie-daenemark-trick"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
            >
              <Zap className="h-4 w-4" />
              DänemarkTrick lernen
                                      </Link>
            <Link
              href="/zaubertricks/muenzmagie-french-drop"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            >
              French Drop lernen
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
