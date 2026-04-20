import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Star, Wand2, Baby, Music2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Die besten Zaubersprüche: über 150 Sprüche für jeden Anlass",
  description:
    "Die große Zaubersprüche-Sammlung: für Kinder, mit Reim, Harry Potter und für echte Zaubertricks – mit Bedeutung, Beispielen und Anwendung.",
  keywords: [
    "Zaubersprüche",
    "Zaubersprüche Liste",
    "Zaubersprüche Kinder",
    "Zaubersprüche Reim",
    "Zaubersprüche für Zaubertricks",
    "Harry Potter Zaubersprüche",
  ],
  alternates: { canonical: "https://karten-tricks.de/zaubersprueche" },
  openGraph: {
    title: "Die besten Zaubersprüche: über 150 Sprüche für jeden Anlass",
    description:
      "Für Kinder, mit Reim, Harry Potter und für echte Zaubertricks – die große Zaubersprüche-Sammlung mit Bedeutung und Anwendung.",
    type: "website",
    url: "https://karten-tricks.de/zaubersprueche",
  },
};

const KINDER_SLUG = "zaubersprueche-kinder";
const HARRY_POTTER_SLUG = "harry-potter-zaubersprueche";
const TRICKS_SLUG = "zauberer-spruche-auftritt";

const REIM_SPRUECHE = [
  {
    spruch: "Sim sala bim, dreh dich im Kreis – was verschwunden ist, weiß keiner so genau.",
    kontext: "Klassischer Bühnen-Reim",
  },
  {
    spruch: "Hokus, pokus, Hexenschuss – jetzt gleich kommt der Zauberkuss.",
    kontext: "Spielerisch, kindgerecht",
  },
  {
    spruch: "Krötenei und Schlangendreck – was hier war, das ist nun weg.",
    kontext: "Für Verschwinde-Tricks",
  },
  {
    spruch: "Abrakadabra, eins-zwei-drei – aus Nichts entsteht Zauberei.",
    kontext: "Für Erscheinen-Tricks",
  },
];

const KINDER_SPRUECHE = [
  {
    spruch: "Hokuspokus Fidibus",
    kontext: "Der Klassiker für Kindergeburtstage",
  },
  {
    spruch: "Simsalabim",
    kontext: "Kurz, laut und leicht mitzusprechen",
  },
  {
    spruch: "Zippel-Zappel-Zauberstab",
    kontext: "Reim-Spruch für Gruppen und Mitmach-Momente",
  },
  {
    spruch: "Hoppla-Zappla-Peng",
    kontext: "Perfekt für plötzliche Erscheinen- oder Verschwinde-Tricks",
  },
];

const HARRY_POTTER_SPRUECHE = [
  {
    spruch: "Expecto Patronum",
    kontext: "Beschwört einen Schutzgeist gegen Dementoren",
  },
  {
    spruch: "Wingardium Leviosa",
    kontext: "Lässt Gegenstände schweben",
  },
  {
    spruch: "Expelliarmus",
    kontext: "Entwaffnet den Gegner",
  },
  {
    spruch: "Lumos",
    kontext: "Erzeugt Licht an der Zauberstabspitze",
  },
];

const AUFTRITT_SPRUECHE = [
  {
    spruch: "Abrakadabra!",
    kontext: "Klassiker für Erscheinen- und Verschwinde-Effekte",
  },
  {
    spruch: "Simsalabim!",
    kontext: "Funktioniert stark bei lockerem, spielerischem Publikum",
  },
  {
    spruch: "Hokuspokus Fidibus!",
    kontext: "Ideal für Familien- und Kinderauftritte",
  },
  {
    spruch: "Verschwinde!",
    kontext: "Einwort-Spruch für punktgenaues Timing",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist der bekannteste Zauberspruch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abrakadabra ist der bekannteste Zauberspruch der Welt. Er stammt aus dem 2. Jahrhundert n. Chr. und wurde ursprünglich als Schutzformel gegen Krankheiten auf Amulette geschrieben. Heute ist er das Synonym für jede Form von Magie – dicht gefolgt von Simsalabim und Hokuspokus.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Zaubersprüche gibt es?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zaubersprüche lassen sich grob in vier Gruppen einteilen: klassische Formeln (Abrakadabra, Simsalabim, Hokuspokus), Harry-Potter-Sprüche, Sprüche für Kinder und Sprüche, die echte Zauberer bei Tricks einsetzen. Zusammen gibt es mehrere hundert bekannte Varianten.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der mächtigste Zauberspruch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für die Bühnenmagie gilt: Ein einziges, perfekt platziertes Wort wirkt stärker als jede lange Formel. Die Macht eines Zauberspruchs entsteht durch Timing, Stimme und den Moment, in dem er fällt – nicht durch seine Länge oder seinen Klang allein.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist ein guter Zauberspruch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein guter Zauberspruch ist kurz, klangvoll und einprägsam. Er sollte reimen oder einen markanten Rhythmus haben, er muss zum Trick passen und darf nicht zu ernst klingen. Für Kinder gilt: je lustiger, desto besser. Für Erwachsene: je mysteriöser und knapper, desto stärker die Wirkung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie erfindet man eigene Zaubersprüche?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die einfachste Formel: zwei Fantasiewörter + ein Reim. Starte mit einem bekannten Wort wie 'Hokuspokus' und hänge etwas Unerwartetes an. Oder kombiniere zwei Dinge aus dem Alltag mit einem Reim ('Krötenei und Schlangendreck'). Wichtig ist der Klang – lies den Spruch laut, bevor du ihn benutzt.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Zaubersprüche eignen sich für Kinder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Kinder funktionieren kurze, reimende Sprüche am besten: 'Simsalabim', 'Hokuspokus Fidibus, drei Mal schwarzer Kater' oder 'Bibbidi Bobbidi Boo' aus Aschenputtel. Sie sind leicht zu merken, klingen magisch und laden zum Mitsprechen ein.",
      },
    },
    {
      "@type": "Question",
      name: "Wie setze ich Zaubersprüche bei einem Zaubertrick ein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profis nutzen Zaubersprüche als Misdirection: Der Spruch markiert den Moment, in dem die 'Magie passiert' – in Wirklichkeit ist es der Augenblick, in dem der geheime Teil des Tricks ausgeführt wird. Entscheidend sind Timing, Stimme und Geste.",
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

interface SpruchCardProps {
  spruch: string;
  kontext: string;
}

function SpruchCard({ spruch, kontext }: SpruchCardProps) {
  return (
    <div className="rounded-2xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6">
      <p className="font-bold text-neutral-800 tracking-tight leading-snug mb-2">„{spruch}"</p>
      <p className="text-sm text-neutral-500">{kontext}</p>
    </div>
  );
}

interface DirektArtikelLinkProps {
  article?: { slug: string; title: string; description: string };
  href?: string;
  label: string;
}

function DirektArtikelLink({ article, href, label }: DirektArtikelLinkProps) {
  const resolvedHref = article ? `/zaubersprueche/${article.slug}` : href;

  if (!resolvedHref) return null;

  return (
    <Link
      href={resolvedHref}
      className="group inline-flex w-fit max-w-[calc(100%-0.75rem)] items-center justify-between gap-3 rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(23,67,187,0.28)] transition-all hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5"
    >
      <span>
        {label}
        {article ? `: ${article.title}` : ""}
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export default function ZauberspruechePage() {
  const allArtikel = getArticlesByCategory("zaubersprueche");

  const kinderArtikel = allArtikel.find((a) => a.slug === KINDER_SLUG);
  const harryPotterArtikel = allArtikel.find((a) => a.slug === HARRY_POTTER_SLUG);
  const tricksArtikel = allArtikel.find((a) => a.slug === TRICKS_SLUG);

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
                Für Kinder · Mit Reim · Für Tricks
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight text-neutral-900 leading-[1.05] mb-5">
              Die besten Zaubersprüche –<br className="hidden sm:block" /> über 150 Sprüche für jeden Anlass
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-neutral-500 max-w-2xl mb-8">
              Für Kinder, mit Reim, Harry Potter und Sprüche, die echte Zauberer bei ihren Tricks
              einsetzen: Hier findest du die komplette Sammlung – kategorisiert, erklärt und sofort
              einsatzbereit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#tricks"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                <Wand2 className="h-4 w-4" />
                Sprüche für Zaubertricks
              </Link>
              <Link
                href="#reim"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
              >
                <Music2 className="h-4 w-4" />
                Sprüche die sich reimen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-page py-12 space-y-16">

        {/* Einstiege */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-6">
            Direkt zu den Artikeln
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <EinstiegCard
              href={kinderArtikel ? `/zaubersprueche/${kinderArtikel.slug}` : "#kinder"}
              icon={<Baby className="h-6 w-6" />}
              title="Zaubersprüche für Kinder"
              subtitle="Direkt zum Artikel mit allen Sprüchen"
            />
            <EinstiegCard
              href={harryPotterArtikel ? `/zaubersprueche/${harryPotterArtikel.slug}` : "#harry-potter"}
              icon={<BookOpen className="h-6 w-6" />}
              title="Harry Potter Zaubersprüche"
              subtitle="Direkt zur Liste mit Bedeutung"
            />
            <EinstiegCard
              href="#reim"
              icon={<Music2 className="h-6 w-6" />}
              title="Zaubersprüche mit Reim"
              subtitle="Die klangvollsten Sprüche – sortiert nach Anlass"
            />
            <EinstiegCard
              href="#tricks"
              icon={<Wand2 className="h-6 w-6" />}
              title="Sprüche für Zaubertricks"
              subtitle="So setzt du Sprüche wirklich wirkungsvoll ein"
            />
          </div>
        </section>

        {/* Allgemein-Intro */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Allgemein</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-3">
            Was ist eigentlich ein Zauberspruch?
          </h2>
          <div className="prose max-w-none text-neutral-600 text-sm leading-relaxed">
            <p>
              Ein Zauberspruch ist eine Formel oder ein Wort, dem magische Wirkung zugeschrieben wird.
              Die bekanntesten – Abrakadabra, Simsalabim, Hokuspokus – sind mehrere hundert Jahre alt
              und stammen aus dem Lateinischen, Hebräischen oder Aramäischen. Sie standen ursprünglich
              auf Amuletten gegen Krankheiten, bevor sie mit dem Aufstieg der Bühnenmagie im 18. und
              19. Jahrhundert zum Standardrepertoire jeder Zaubershow wurden.
            </p>
            <p>
              In der Bühnenmagie hat der Spruch eine klare Funktion: Er markiert den Moment, in dem
              die „Magie passiert", und lenkt die Aufmerksamkeit genau dorthin, wo der Zauberer sie
              haben will. In Büchern und Filmen – allen voran Harry Potter – lösen Zaubersprüche
              dagegen konkrete Effekte aus und sind das zentrale Werkzeug jeder Hexe und jedes Zauberers.
            </p>
          </div>
        </section>

        {/* Zaubersprüche für Kinder */}
        <section id="kinder" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <Baby className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Für Kinder</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Zaubersprüche für Kinder: kurz, lustig, einfach
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Für Kindergeburtstage und Zaubershows funktionieren Sprüche, die Kinder mitsprechen
              können: Verschwinden lassen, Erscheinen lassen, Verwandeln. Je kürzer und klingender,
              desto größer die Wirkung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KINDER_SPRUECHE.map((s) => (
              <SpruchCard key={s.spruch} spruch={s.spruch} kontext={s.kontext} />
            ))}
          </div>
          <div className="mt-6">
            <DirektArtikelLink article={kinderArtikel} href="#kinder" label="Zum ganzen Artikel" />
          </div>
        </section>

        {/* Harry Potter */}
        <section id="harry-potter" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Harry Potter</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Harry Potter Zaubersprüche: Liste &amp; Bedeutung
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              J. K. Rowling hat über 200 Zaubersprüche erfunden – von Kampfzaubern über
              Alltagssprüche bis zu den verbotenen Flüchen. Die bekanntesten mit Bedeutung,
              Aussprache und Kontext – alles in einem Artikel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HARRY_POTTER_SPRUECHE.map((s) => (
              <SpruchCard key={s.spruch} spruch={s.spruch} kontext={s.kontext} />
            ))}
          </div>
          <div className="mt-6">
            <DirektArtikelLink
              article={harryPotterArtikel}
              href="#harry-potter"
              label="Zum ganzen Artikel"
            />
          </div>
        </section>

        {/* Zaubersprüche mit Reim */}
        <section id="reim" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <Music2 className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Mit Reim</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Zaubersprüche, die sich reimen
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Reim macht Zaubersprüche sofort einprägsam und gibt ihnen einen Rhythmus, der perfekt
              zum Timing eines Tricks passt. Hier die schönsten Reim-Sprüche – sortiert nach Anlass.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REIM_SPRUECHE.map((s) => (
              <SpruchCard key={s.spruch} spruch={s.spruch} kontext={s.kontext} />
            ))}
          </div>
          <div className="mt-6">
            <DirektArtikelLink
              href="/zaubersprueche/zaubersprueche-kinder#mit-reim"
              label="Zum ganzen Artikel mit Reim-Sprüchen"
            />
          </div>
        </section>

        {/* Sprüche für Zaubertricks */}
        <section id="tricks" className="scroll-mt-28">
          <div className="mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <Wand2 className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Für Zaubertricks</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 mb-2">
              Zaubersprüche richtig als Zauberer verwenden
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Der Spruch ist bei einem Zaubertrick nicht Deko, sondern Werkzeug. Er steuert, wann
              die „Magie" passiert, und lenkt die Aufmerksamkeit präzise dorthin, wo du sie
              brauchst. Timing, Stimme und Geste entscheiden über die Wirkung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AUFTRITT_SPRUECHE.map((s) => (
              <SpruchCard key={s.spruch} spruch={s.spruch} kontext={s.kontext} />
            ))}
          </div>
          <div className="mt-6">
            <DirektArtikelLink article={tricksArtikel} href="#tricks" label="Zum ganzen Artikel" />
          </div>
        </section>

        {/* Cross-CTA: Zaubertricks */}
        <section className="rounded-3xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Auch beliebt</p>
              <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-2">
                Lerne echte Zaubertricks
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                Ein Spruch wird erst mit dem passenden Trick magisch. In unserem Zaubertricks-Bereich
                findest du Schritt-für-Schritt-Anleitungen für Karten-, Münz- und Mentalmagie –
                kombinierbar mit jedem Spruch von dieser Seite.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/zaubertricks"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Alle Zaubertricks <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/kartentricks"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-black/10 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-black/20"
                >
                  Kartentricks lernen
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
                q: "Was ist der bekannteste Zauberspruch?",
                a: "Abrakadabra ist der bekannteste Zauberspruch der Welt. Er stammt aus dem 2. Jahrhundert n. Chr. und wurde ursprünglich als Schutzformel gegen Krankheiten auf Amulette geschrieben. Heute ist er das Synonym für jede Form von Magie – dicht gefolgt von Simsalabim und Hokuspokus.",
              },
              {
                q: "Welche Zaubersprüche gibt es?",
                a: "Zaubersprüche lassen sich grob in vier Gruppen einteilen: klassische Formeln (Abrakadabra, Simsalabim, Hokuspokus), Harry-Potter-Sprüche, Sprüche für Kinder und Sprüche, die echte Zauberer bei Tricks einsetzen. Zusammen gibt es mehrere hundert bekannte Varianten.",
              },
              {
                q: "Was ist der mächtigste Zauberspruch?",
                a: "Für die Bühnenmagie gilt: Ein einziges, perfekt platziertes Wort wirkt stärker als jede lange Formel. Die Macht eines Zauberspruchs entsteht durch Timing, Stimme und den Moment, in dem er fällt – nicht durch seine Länge oder seinen Klang allein.",
              },
              {
                q: "Was ist ein guter Zauberspruch?",
                a: "Ein guter Zauberspruch ist kurz, klangvoll und einprägsam. Er sollte reimen oder einen markanten Rhythmus haben, er muss zum Trick passen und darf nicht zu ernst klingen. Für Kinder gilt: je lustiger, desto besser. Für Erwachsene: je mysteriöser und knapper, desto stärker die Wirkung.",
              },
              {
                q: "Wie erfindet man eigene Zaubersprüche?",
                a: "Die einfachste Formel: zwei Fantasiewörter + ein Reim. Starte mit einem bekannten Wort wie 'Hokuspokus' und hänge etwas Unerwartetes an. Oder kombiniere zwei Dinge aus dem Alltag mit einem Reim ('Krötenei und Schlangendreck'). Wichtig ist der Klang – lies den Spruch laut, bevor du ihn benutzt.",
              },
              {
                q: "Welche Zaubersprüche eignen sich für Kinder?",
                a: "Für Kinder funktionieren kurze, reimende Sprüche am besten: 'Simsalabim', 'Hokuspokus Fidibus, drei Mal schwarzer Kater' oder 'Bibbidi Bobbidi Boo' aus Aschenputtel. Sie sind leicht zu merken, klingen magisch und laden zum Mitsprechen ein.",
              },
              {
                q: "Wie setze ich Zaubersprüche bei einem Zaubertrick ein?",
                a: "Profis nutzen Zaubersprüche als Misdirection: Der Spruch markiert den Moment, in dem die 'Magie passiert' – in Wirklichkeit ist es der Augenblick, in dem der geheime Teil des Tricks ausgeführt wird. Entscheidend sind Timing, Stimme und Geste.",
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
            Bereit, Magie zu machen?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            Zaubersprüche sind der erste Schritt. Lerne jetzt echte Zaubertricks –
            von Kartentricks bis Mentalmagie – und kombiniere sie mit dem richtigen Spruch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/zaubersprueche/zauberer-spruche-auftritt"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--color-primary-dark)] transition-opacity hover:opacity-90"
            >
              <Wand2 className="h-4 w-4" />
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
