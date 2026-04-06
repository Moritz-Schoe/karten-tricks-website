import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mouse } from "lucide-react";

export const metadata: Metadata = {
  title: "Magic Shop – Empfohlene Produkte | karten-tricks.de",
  description:
    "Unsere Empfehlungen für Spielkarten, Trick-Decks, Zauberkästen und Bücher – alle Affiliate-Produkte auf einen Blick.",
};

interface Product {
  name: string;
  description: string;
  url: string;
  image?: string;
  tag?: string;
}

interface ProductCategory {
  id: string;
  label: string;
  description: string;
  products: Product[];
}

const SHOP_CATEGORIES: ProductCategory[] = [
  {
    id: "spielkarten",
    label: "Spielkarten",
    description: "Standard-Decks für Kartentricks, Poker und Cardistry.",
    products: [
      {
        name: "Bicycle Rider Back",
        description:
          "Der Allrounder – das meistgenutzte Kartendeck der Welt. Perfekt für Tricks, Poker und Cardistry.",
        url: "https://amzn.to/3vUzH7h",
        image: "/images/xxIMG_6951-copy.jpg",
        tag: "Bestseller",
      },
      {
        name: "Bee Standard Karten",
        description:
          "Casino-Qualität ohne weißen Rand. Ideal für fortgeschrittene Techniken und professionelle Auftritte.",
        url: "https://amzn.to/3xzgJUn",
        image: "/images/61jJIveilAL._AC_SL1000_.jpg",
      },
      {
        name: "Tally-Ho Circle Back",
        description:
          "Das Deck von Penn & Teller – glatteres Finish, perfekt für Cardistry und Flourishes. 2er-Pack.",
        url: "https://amzn.to/3vUK6zR",
        image: "/images/71fw80m4jL._AC_SL1000_.jpg",
      },
    ],
  },
  {
    id: "trick-decks",
    label: "Trick-Decks",
    description: "Präparierte Kartendecks für verblüffende Effekte.",
    products: [
      {
        name: "Bicycle Stripper Deck",
        description:
          "Lässt dich jede frei gewählte Karte sofort im Deck finden – ganz ohne Pinky Break.",
        url: "https://amzn.to/4cTIp6I",
        tag: "Empfehlung",
      },
      {
        name: "Markierte Bicycle Karten",
        description:
          "Cleveres Markierungssystem, unsichtbar für Zuschauer. Perfekt für Gedankenlese-Effekte.",
        url: "https://amzn.to/49wKjXN",
      },
      {
        name: "Bicycle Svengali Deck",
        description:
          "Vielseitigstes Trick-Deck: erzwinge Karten, verändere das Deck, verblüffe selbst Zauberer.",
        url: "https://amzn.to/3ypaUco",
      },
      {
        name: "Bicycle Invisible Deck",
        description:
          "Einer der mächtigsten Tricks der Magie – der Zuschauer wählt, und seine Karte liegt umgedreht im Deck.",
        url: "https://amzn.to/3UBMLqx",
        tag: "Profi-Tipp",
      },
    ],
  },
  {
    id: "zauberkaesten",
    label: "Zauberkästen",
    description: "Komplett-Sets für den Einstieg in die Zauberkunst.",
    products: [
      {
        name: "Kosmos Zauberkasten",
        description:
          "Über 150 Tricks und Illusionen, hochwertige Materialien. Der perfekte Einstieg für Kinder.",
        url: "https://amzn.to/3SwBKXv",
        image: "/images/817kScCxs6L._AC_SL1500_.jpg",
        tag: "Top-Empfehlung",
      },
      {
        name: "Ravensburger – Meine erste Zaubershow",
        description:
          "Speziell für jüngere Kinder ab 6 Jahren: einfache Tricks, robuste Materialien.",
        url: "https://amzn.to/4filnYa",
        image: "/images/61BFUYfkQFL._AC_SL1024_.jpg",
      },
      {
        name: "Clementoni – Ehrlich Brothers Modern Magic",
        description:
          "Moderne und kreative Tricks für Kinder und Jugendliche. Gutes Preis-Leistungs-Verhältnis.",
        url: "https://amzn.to/4dj8mM4",
        image: "/images/81oGyYXJ8SL._AC_SL1500_.jpg",
      },
      {
        name: "Noris iMagicBox",
        description:
          "Kombiniert klassische Zaubertricks mit einer interaktiven App. Für technikbegeisterte Kinder.",
        url: "https://amzn.to/3AdMkMt",
        image: "/images/71A2hHPI8pL._AC_SL1500_.jpg",
      },
      {
        name: "Marvin's Magic – Klassiker",
        description:
          "Umfangreicher Zauberkasten mit hochwertigen Materialien für alle Altersgruppen.",
        url: "https://amzn.to/3A2pO9B",
        image: "/images/81dngsnHoPL._AC_SL1500_.jpg",
      },
      {
        name: "Marvin's Magic – 275 Tricks",
        description:
          "Einfache Tricks speziell für Kinder, hochwertige Materialien und gute Anleitungen.",
        url: "https://amzn.to/3Svvijp",
        image: "/images/712lkVLWLVL._AC_SL1500_.jpg",
      },
      {
        name: "Japace Zauberkasten",
        description:
          "Magie trifft Wissenschaft – ideal für neugierige Kinder, die verstehen wollen, wie Tricks funktionieren.",
        url: "https://amzn.to/3WudmGS",
        image: "/images/81tWHfBiWiL._AC_SL1500_.jpg",
      },
      {
        name: "Madus-Magic Premium",
        description:
          "15 innovative Tricks mit Video-Anleitungen. Für ältere Kinder und Erwachsene.",
        url: "https://amzn.to/3SvQnud",
        image: "/images/812shWbYaL._AC_SL1500_.jpg",
      },
    ],
  },
  {
    id: "buecher",
    label: "Bücher",
    description: "Lesetipps rund um Kartentricks und Zauberkunst.",
    products: [
      {
        name: "Kartentricks für Anfänger – Buchempfehlung",
        description:
          "Der perfekte Begleiter zum Einstieg: Grundlagen, Techniken und erste Routinen verständlich erklärt.",
        url: "https://amzn.to/4cjeuD8",
        tag: "Lesetipp",
      },
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="group glass-card flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
    >
      {product.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {product.tag && (
            <span className="absolute left-3 top-3 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              {product.tag}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {!product.image && product.tag && (
          <span className="mb-2 inline-flex w-fit rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {product.tag}
          </span>
        )}
        <h3 className="text-base font-semibold text-slate-800 group-hover:text-[#FF007D] transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
          {product.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF007D]">
          Auf Amazon ansehen
          <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

function ProductCardCompact({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="group glass-card flex items-center gap-4 rounded-2xl p-4 transition-shadow hover:shadow-lg"
    >
      <div className="flex-1">
        {product.tag && (
          <span className="mb-1.5 inline-flex rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            {product.tag}
          </span>
        )}
        <h3 className="text-sm font-semibold text-slate-800 group-hover:text-[#FF007D] transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {product.description}
        </p>
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-[#FF007D]" />
    </a>
  );
}

const HERO_GRAY_CARD =
  "relative flex shrink-0 flex-col justify-end rounded-sm px-3 pb-3 pt-4 transition-opacity hover:opacity-90 sm:px-4 sm:pb-4";
const HERO_PINK_CARD =
  "relative flex shrink-0 flex-col justify-between rounded-sm px-3 pb-3 pt-4 transition-opacity hover:opacity-95 sm:px-4 sm:pb-4";

export default function ShopPage() {
  return (
    <>
      {/* Hero — staggered category cards (design reference) */}
      <section className="bg-white pt-[var(--floating-nav-gap)] pb-12 md:pb-16">
        <div className="layout-page">
          <header className="text-center">
            <p className="text-sm font-normal lowercase tracking-normal text-slate-500">
              karten-tricks.de
            </p>
            <h1 className="mt-1 text-[clamp(2.25rem,7vw,3.5rem)] font-semibold uppercase leading-none tracking-[-0.07em] text-black md:text-[2.625rem]">
              MAGIC SHOP
            </h1>
          </header>

          <div className="no-scrollbar -mx-[var(--page-padding-x)] mt-10 overflow-x-auto px-[var(--page-padding-x)] md:mx-0 md:overflow-visible md:px-0">
            <div className="mx-auto flex w-max max-w-full items-start justify-center gap-2 pb-2 sm:gap-3 md:max-w-none md:gap-4">
              {/* 1 Spielkarten — mid, etwas nach unten */}
              <a
                href="#spielkarten"
                className={`${HERO_GRAY_CARD} mt-8 h-[168px] w-[72px] bg-[#F0F0F0] sm:mt-10 sm:h-[188px] sm:w-[88px] md:mt-12 md:h-[200px] md:w-[100px]`}
              >
                <span className="text-[10px] font-medium leading-tight text-black sm:text-[11px]">
                  Spielkarten
                </span>
              </a>

              {/* 2 Pink CTA — am höchsten, stärker nach unten versetzt */}
              <a
                href="#shop-produkte"
                className={`${HERO_PINK_CARD} mt-14 h-[228px] w-[72px] bg-[#FF007F] sm:mt-16 sm:h-[252px] sm:w-[88px] md:mt-[4.5rem] md:h-[280px] md:w-[100px]`}
                aria-label="Alle Produkte anzeigen"
              >
                <span className="text-[9px] font-medium uppercase leading-snug tracking-wide text-white sm:text-[10px]">
                  SEE ALL
                  <br />
                  ACCESSORIES
                </span>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8"
                  aria-hidden
                >
                  <ArrowRight
                    className="h-3.5 w-3.5 text-[#FF007F] sm:h-4 sm:w-4"
                    strokeWidth={2}
                  />
                </span>
              </a>

              {/* 3 Trick-Anleitungen — hoch angesetzt, groß */}
              <Link
                href="/kartentricks"
                className={`${HERO_GRAY_CARD} mt-4 h-[200px] w-[72px] bg-[#F0F0F0] sm:mt-5 sm:h-[220px] sm:w-[88px] md:mt-6 md:h-[248px] md:w-[100px]`}
              >
                <span className="text-[10px] font-medium leading-tight text-black sm:text-[11px]">
                  Trick-Anleitungen
                </span>
              </Link>

              {/* 4 Bücher — kurz, tiefer */}
              <a
                href="#buecher"
                className={`${HERO_GRAY_CARD} mt-12 h-[148px] w-[72px] bg-[#F0F0F0] sm:mt-14 sm:h-[160px] sm:w-[88px] md:mt-16 md:h-[172px] md:w-[100px]`}
              >
                <span className="text-[10px] font-medium leading-tight text-black sm:text-[11px]">
                  Bücher
                </span>
              </a>

              {/* 5 Zauberkästen — mittelhoch */}
              <a
                href="#zauberkaesten"
                className={`${HERO_GRAY_CARD} mt-6 h-[188px] w-[72px] bg-[#F0F0F0] sm:mt-7 sm:h-[208px] sm:w-[88px] md:mt-8 md:h-[232px] md:w-[100px]`}
              >
                <span className="text-[10px] font-medium leading-tight text-black sm:text-[11px]">
                  Zauberkästen
                </span>
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-2 md:mt-14">
            <Mouse
              className="h-9 w-9 text-slate-400"
              strokeWidth={1.25}
              aria-hidden
            />
            <p className="text-center text-xs text-slate-500 sm:text-sm">
              Scroll down to discover more
            </p>
          </div>
        </div>
      </section>

      {/* Product sections */}
      <div id="shop-produkte" className="layout-page space-y-20 pb-20 pt-8">
        {SHOP_CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <div className="mb-8">
              <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-slate-800">
                {category.label}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {category.description}
              </p>
            </div>

            {category.products.some((p) => p.image) ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.products.map((product) => (
                  <ProductCard key={product.url} product={product} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {category.products.map((product) => (
                  <ProductCardCompact key={product.url} product={product} />
                ))}
              </div>
            )}

            {category.id === "spielkarten" && (
              <div className="mt-6">
                <Link
                  href="/spielkarten/vergleich"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FF007D] hover:underline"
                >
                  Ausführlicher Spielkarten-Vergleich
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {category.id === "zauberkaesten" && (
              <div className="mt-6">
                <Link
                  href="/spielkarten/zauberkaesten"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FF007D] hover:underline"
                >
                  Alle Zauberkästen im Detail-Test
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </section>
        ))}

        {/* Affiliate disclaimer */}
        <div className="rounded-2xl border border-amber-200/40 bg-amber-50/40 p-6 text-center backdrop-blur-sm">
          <p className="text-xs leading-relaxed text-[#6B3A18]/70">
            * Alle Links auf dieser Seite sind Affiliate-Links. Bei einem Kauf
            über diese Links erhalten wir eine kleine Provision – für dich
            entstehen keine Mehrkosten. So können wir karten-tricks.de
            weiterhin kostenlos betreiben.
          </p>
        </div>
      </div>
    </>
  );
}
