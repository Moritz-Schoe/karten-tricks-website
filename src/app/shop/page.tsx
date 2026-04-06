import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

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

export default function ShopPage() {
  return (
    <>
      <section className="bg-white pt-[var(--floating-nav-gap)] pb-6 md:pb-8">
        <div className="layout-page">
          <header className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-sm font-normal lowercase tracking-normal text-slate-500">
              karten-tricks.de
            </p>
            <h1 className="mt-1 text-[clamp(3.5rem,10vw,6rem)] font-semibold uppercase leading-none tracking-[-0.07em] text-black md:text-[5rem]">
              MAGIC SHOP
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              Ausgewählte Produktfavoriten der Community. Handverlesene Empfehlungen für dein nächstes Level der Zauberkunst.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {SHOP_CATEGORIES.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-slate-100 px-5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  {category.label}
                </a>
              ))}
            </div>
          </header>
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
