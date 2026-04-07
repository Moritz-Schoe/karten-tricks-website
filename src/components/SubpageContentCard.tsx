"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Compass, FileText, HeartHandshake, Users, Wand2 } from "lucide-react";
import { CATEGORIES, type Category } from "@/lib/types";

function shouldRender(pathname: string | null) {
  if (!pathname) return false;
  if (pathname === "/") return false;
  if (pathname === "/shop" || pathname.startsWith("/shop/")) return false;
  return true;
}

type CardContent = {
  badge: { label: string; icon: React.ReactNode };
  title: string;
  paragraphs: React.ReactNode[];
  bullets?: React.ReactNode[];
  footerLinks?: { href: string; label: string }[];
};

function isCategory(segment: string): segment is Category {
  return segment in CATEGORIES;
}

function contentForPathname(pathname: string): CardContent {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0] ?? "";
  const second = segments[1];

  // Article page: /[category]/[slug]
  if (isCategory(first) && typeof second === "string" && second.length > 0) {
    const cat = CATEGORIES[first];
    return {
      badge: { label: "Mini-Guide", icon: <Compass className="h-3.5 w-3.5" /> },
      title: "So wird aus dem Trick eine starke Vorführung",
      paragraphs: [
        <>
          Der Trick ist nur die Hälfte: Die Wirkung entsteht durch <strong>Tempo</strong>, <strong>Timing</strong> und
          eine klare <strong>Story</strong>. Übe zuerst den Ablauf ohne Worte, bis deine Hände automatisch wissen, was
          als Nächstes kommt.
        </>,
        <>
          Dann kommt das Script: Sag in einem Satz, <em>was</em> gleich passieren wird, und gib dem Zuschauer eine
          Aufgabe („halt die Karte fest“, „denk an die Karte“). Dadurch wird die Aufmerksamkeit sauber geführt –
          und das Handling wirkt „natürlich“.
        </>,
        <>
          Wenn du den Trick öfter zeigen willst, bau dir eine zweite Phase oder einen sauberen Abschluss dazu. Oft
          reicht schon eine kleine Variation oder ein Callback, damit es sich wie eine Routine anfühlt und nicht wie
          ein einzelner Effekt.
        </>,
      ],
      bullets: [
        <>2–3× langsam ohne Publikum (nur Ablauf)</>,
        <>1× mit Script (laut sprechen, Blickführung)</>,
        <>1× „unter Stress“: Timer 2 Minuten, als würdest du ihn spontan zeigen</>,
      ],
      footerLinks: [
        { href: `/${first}`, label: `Mehr ${cat.label}` },
        { href: "/community", label: "Feedback holen" },
      ],
    };
  }

  // Category page: /[category]
  if (isCategory(first)) {
    const cat = CATEGORIES[first];
    return {
      badge: { label: "Leitfaden", icon: <Compass className="h-3.5 w-3.5" /> },
      title: `So findest du die richtigen Inhalte in ${cat.label}`,
      paragraphs: [
        <>
          Diese Seite ist am nützlichsten, wenn du mit einem <strong>klaren Ziel</strong> startest: „Ich will heute
          einen Trick sicher vorführen“ oder „ich übe diese Woche eine Technik“. Such dir dann 1–2 Artikel aus, die
          genau dazu passen.
        </>,
        <>
          Viele machen den Fehler, zu viel Tricks auf einmal zu lernen. Besser: Weniger lesen, mehr wiederholen. Ein Trick, den
          du sauber zeigen kannst, ist mehr wert als zehn, die nur „halb sitzen“.
        </>,
      ],
      bullets: [
        <>
          <strong>Wirkung zuerst</strong>: nimm einfache Effekte, die ohne schwierige Griffe funktionieren
        </>,
        <>
          <strong>Dann Technik</strong>: ergänze 1–2 Basics aus{" "}
          <Link className="text-primary hover:underline font-medium" href="/fingerfertigkeit">
            Fingerfertigkeit
          </Link>
        </>,
        <>
          <strong>Kontext</strong>: für Auftritte vor Gruppen sind{" "}
          <Link className="text-primary hover:underline font-medium" href="/party-tricks">
            Party Tricks
          </Link>{" "}
          oft die bessere Wahl
        </>,
      ],
      footerLinks: [
        { href: "/zaubertricks", label: "Einsteiger-Übersicht" },
        { href: "/community", label: "Mit anderen üben" },
      ],
    };
  }

  // High-level guide page
  if (pathname === "/zaubertricks") {
    return {
      badge: { label: "Orientierung", icon: <Wand2 className="h-3.5 w-3.5" /> },
      title: "Zaubertricks lernen: Ein Plan, der wirklich funktioniert",
      paragraphs: [
        <>
          Wenn du gerade anfängst, brauchst du nicht „den besten Trick“, sondern einen <strong>einfachen</strong>, den
          du oft zeigen kannst. Die meisten lernen am schnellsten in drei Phasen: erst Effekte ohne Fingerfertigkeit,
          dann 1–2 Moves, dann eine kleine Routine.
        </>,
        <>
          Wichtig: Ein Trick ist erst „fertig“, wenn du ihn <strong>ohne Nachdenken</strong> erklären und zeigen
          kannst. Dafür ist Wiederholung entscheidend, nicht neues Material.
        </>,
      ],
      bullets: [
        <>Phase 1: 2–3 Effekte, die „von selbst“ funktionieren</>,
        <>Phase 2: 1 Technik (z.B. Double Lift) + 1 Kontrollgriff</>,
        <>Phase 3: Routine (2 Effekte kombinieren, sauberer Abschluss)</>,
      ],
      footerLinks: [
        { href: "/kartentricks/anfaenger-guide", label: "Anfänger-Guide" },
        { href: "/kartentricks/10-in-10-minuten", label: "Schneller Einstieg" },
      ],
    };
  }

  // Community page
  if (pathname === "/community") {
    return {
      badge: { label: "Community", icon: <Users className="h-3.5 w-3.5" /> },
      title: "So bekommst du gutes Feedback (und wirst schneller besser)",
      paragraphs: [
        <>
          Das beste Feedback bekommst du, wenn andere nicht nur den Effekt sehen, sondern auch dein Handling:
          Film kurz frontal, Hände gut sichtbar, 20–40 Sekunden reichen meist.
        </>,
        <>
          Frag konkret: „Wirkt das natürlich?“ „Sieht man irgendwo Spannung/Unsicherheit?“ „Ist mein Timing zu schnell?“
          Je präziser die Frage, desto hilfreicher die Antworten.
        </>,
      ],
      bullets: [
        <>Ein Take langsam + ein Take in Vorführtempo</>,
        <>Zeig Anfang/Ende klar (Deck vorher/nachher kurz in die Kamera)</>,
        <>Schreib dazu, was du gerade übst (z.B. Double Lift / Force / Kontrolle)</>,
      ],
      footerLinks: [
        { href: "/kartentricks", label: "Tricks zum Üben" },
        { href: "/fingerfertigkeit", label: "Techniken" },
      ],
    };
  }

  // About page
  if (pathname === "/ueber-mich") {
    return {
      badge: { label: "Über karten-tricks.de", icon: <HeartHandshake className="h-3.5 w-3.5" /> },
      title: "Wie du hier am schnellsten Fortschritte machst",
      paragraphs: [
        <>
          Die Seite ist so aufgebaut, dass du dir Schritt für Schritt ein Repertoire aufbauen kannst, ohne dich zu
          verzetteln. Wenn du neu bist: nimm erst Inhalte, die <strong>zuverlässig</strong> funktionieren, und ergänze
          dann Basics.
        </>,
        <>
          Eine einfache Formel, die fast immer klappt: <strong>1 Guide</strong> (Verständnis) + <strong>2 Tricks</strong>{" "}
          (Wirkung) + <strong>1 Technik</strong> (Handwerk) und das eine Woche lang wiederholen.
        </>,
      ],
      bullets: [
        <>
          Starte mit dem{" "}
          <Link className="text-primary hover:underline font-medium" href="/kartentricks/anfaenger-guide">
            Anfänger-Guide
          </Link>
        </>,
        <>Lern zwei „sichere“ Effekte und zeig sie mindestens 5×</>,
        <>
          Ergänze eine Technik aus{" "}
          <Link className="text-primary hover:underline font-medium" href="/fingerfertigkeit">
            Fingerfertigkeit
          </Link>
        </>,
      ],
      footerLinks: [
        { href: "/zaubertricks", label: "Einstieg" },
        { href: "/community", label: "Community" },
      ],
    };
  }

  // Legal pages (still show something, but low-key)
  if (pathname === "/impressum" || pathname === "/datenschutz") {
    return {
      badge: { label: "Weiter", icon: <FileText className="h-3.5 w-3.5" /> },
      title: "Zurück zu den Inhalten",
      paragraphs: [
        <>
          Wenn du einfach nur Kartentricks lernen willst, bist du hier richtig: Alle Anleitungen sind kostenlos und so
          aufgebaut, dass du schnell vorführen kannst, ohne Spezial-Equipment.
        </>,
      ],
      footerLinks: [
        { href: "/zaubertricks", label: "Einstieg" },
        { href: "/kartentricks", label: "Kartentricks" },
      ],
    };
  }

  // Fallback for other pages
  return {
    badge: { label: "Leitfaden", icon: <Compass className="h-3.5 w-3.5" /> },
    title: "Nächste Schritte",
    paragraphs: [
      <>
        Such dir ein konkretes Ziel für diese Woche: <strong>1 Trick vorführen</strong>, <strong>1 Technik üben</strong>
        , <strong>1 Feedback holen</strong>. Wenn du das durchziehst, bist du nach 7 Tagen spürbar sicherer.
      </>,
    ],
    bullets: [
      <>10 Minuten/Tag reichen. Hauptsache regelmäßig</>,
      <>Üb einmal langsam (sauber) und einmal in Vorführtempo</>,
    ],
    footerLinks: [
      { href: "/zaubertricks", label: "Einstieg" },
      { href: "/community", label: "Community" },
    ],
  };
}

export default function SubpageContentCard() {
  const pathname = usePathname();
  if (!shouldRender(pathname)) return null;

  const content = contentForPathname(pathname);

  return (
    <section className="mt-16">
      <div className="layout-page">
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.04]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl"
          />

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {content.badge.icon}
              {content.badge.label}
            </p>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-neutral-800 sm:text-2xl">
              {content.title}
            </h2>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-500 max-w-[75ch]">
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {content.bullets && content.bullets.length > 0 && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-neutral-600">
                {content.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2 rounded-2xl bg-neutral-50 px-4 py-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-white border border-black/[0.06] flex items-center justify-center">
                      <ArrowRight className="h-3.5 w-3.5 text-neutral-300" aria-hidden />
                    </span>
                    <span className="min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {content.footerLinks && content.footerLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                {content.footerLinks.map((l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                  >
                    {l.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

