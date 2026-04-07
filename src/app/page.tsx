import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import CardSpring from "@/components/CardSpring";
import { getRecentArticles, getFeaturedArticles, getAllArticles, getArticlesByCategory } from "@/lib/content";
import { ArrowRight, Sparkles, Layers, Box, Star, PartyPopper, Hand } from "lucide-react";

function BentoCard({
  title,
  count,
  description,
  href,
  hasArrow = true,
  icon: Icon,
  className = "",
}: {
  title: string;
  count: string;
  description: string;
  href: string;
  hasArrow?: boolean;
  icon?: any;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-neutral-800 sm:text-xl">{title}</h3>
          <p className="text-sm text-neutral-400">{count}</p>
        </div>
        {hasArrow && (
          <ArrowRight className="h-5 w-5 shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-neutral-500" />
        )}
      </div>
      <p className="mt-4 mb-2 flex-1 text-sm leading-relaxed text-neutral-500">{description}</p>
      {Icon && (
        <div className="mt-2 flex justify-end">
          <Icon className="h-7 w-7 text-neutral-200 transition-all group-hover:-rotate-[10deg] group-hover:scale-110 group-hover:text-neutral-400" strokeWidth={1.5} />
        </div>
      )}
    </Link>
  );
}

export default function HomePage() {
  const featured = getFeaturedArticles(3);
  const recent = getRecentArticles(6);
  const totalArticles = getAllArticles().length;

  const partyTricks = getArticlesByCategory("party-tricks");

  const counts = {
    kartentricks: getArticlesByCategory("kartentricks").length,
    cardistry: getArticlesByCategory("cardistry").length,
    spielkarten: getArticlesByCategory("spielkarten").length,
    "party-tricks": partyTricks.length,
    fingerfertigkeit: getArticlesByCategory("fingerfertigkeit").length,
  };

  const kidsTricksCount = partyTricks.filter((a) => a.slug === "kinder").length;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-var(--floating-nav-gap))] flex-col overflow-hidden">
        {/* Gradient blob */}
        <div className="hero-blob" aria-hidden />

        {/* Card spring - decorative parallax background */}
        <CardSpring />

        {/* Left sidebar - scroll indicator */}
        <div className="pointer-events-none absolute bottom-12 left-6 hidden items-end gap-3 lg:flex">
          <span className="hero-scroll-line text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            Scroll
          </span>
          <span className="block h-14 w-px bg-neutral-300" aria-hidden />
        </div>

        {/* Right sidebar - follow links */}
        <div className="pointer-events-auto absolute bottom-12 right-6 hidden items-end gap-3 lg:flex">
          <span className="block h-14 w-px bg-neutral-300" aria-hidden />
          <div className="hero-scroll-line flex items-center gap-1.5 text-[11px] font-medium text-neutral-400">
            <span className="uppercase tracking-[0.15em]">Folge uns</span>
            <span className="mx-0.5">—</span>
            <a
              href="https://discord.gg/QQ2nDMPZ6p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition-colors hover:text-primary"
            >
              Dc.
            </a>
          </div>
        </div>

        {/* Center content — vertikal zentriert im freien Bereich (gleicher Raum oben/unten zum Rand der Bottom-Bar) */}
        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center py-6 sm:py-8 md:py-10">
          <div className="layout-page flex max-w-4xl flex-col items-center text-center">
            <h1 className="flex w-full flex-col items-center justify-center text-center">
              <span className="text-[clamp(2.125rem,9.5vw,6.5rem)] font-extrabold leading-[1.05] tracking-tight text-neutral-800 md:text-[clamp(3.5rem,10vw,6.5rem)] md:leading-[0.95]">
                <span className="hero-gradient-text">Kartentricks</span> lernen
              </span>
              <span className="mt-3 max-w-2xl text-base font-normal leading-snug text-neutral-500 sm:mt-4 sm:text-lg md:mt-6 md:text-2xl md:leading-normal">
                Von den Basics bis zur Profi-Performance
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom bar — Einleitung auf Mobile kleiner; Discord ab sm */}
        <div className="layout-page relative z-10 flex shrink-0 flex-col gap-4 pb-8 sm:gap-6 sm:pb-10 md:flex-row md:items-end md:justify-between md:gap-8">
          {/* Left - description + CTA */}
          <div className="mx-auto max-w-lg text-center md:mx-0 md:text-left">
            <p className="text-xs font-normal leading-relaxed text-neutral-600 sm:text-sm md:text-base md:font-medium">
              Entdecke detaillierte Schritt-für-Schritt Anleitungen, essenzielle Techniken und die besten Kartentricks für jeden Schwierigkeitsgrad - alles an einem Ort.
            </p>
            <Link
              href="/kartentricks"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-800 transition-colors hover:text-primary md:mt-4"
            >
              Tricks entdecken
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

          {/* Right - Discord CTA */}
          <div className="hidden items-center gap-3 sm:flex sm:self-auto">
              <a
                href="https://discord.gg/QQ2nDMPZ6p"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                </svg>
                Community
              </a>
          </div>
        </div>
      </section>

      {/* Sektion 1: Der strukturierte Einstieg */}
      <section className="py-12 md:py-20">
        <div className="layout-page">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold tracking-tight text-neutral-800 mb-6">
              Kartentricks für Anfänger: Dein Start in die Kartenzauberei
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600 mb-8 max-w-2xl">
              Du möchtest Kartentricks lernen, weißt aber nicht, wo du anfangen sollst? Keine Sorge. Du brauchst kein teures Zubehör - ein einfaches Kartendeck genügt. Auf dieser Seite findest du eine kuratierte Auswahl an Tricks, die einfach zu erlernen sind, aber eine maximale Wirkung auf dein Publikum haben.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kartentricks"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
              >
                Zu den Anfänger-Tricks
              </Link>
              <Link
                href="/fingerfertigkeit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors hover:bg-neutral-50"
              >
                Fingerfertigkeit trainieren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 2: Tiefer in die Materie */}
      <section className="pb-12 md:pb-20">
        <div className="layout-page">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
            {/* Left: copy (different feel than Sektion 1) */}
            <div className="md:col-span-5">
              <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-400 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                Dein Weg
              </p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold tracking-tight text-neutral-800">
                Mehr als nur &quot;eine Karte ziehen&quot;
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Kartenmagie ist extrem vielseitig. Wähle deinen Einstieg - je nachdem, ob du lieber mit Logik startest, mit Spezial-Decks arbeitest oder direkt an echten Profi-Griffen übst.
              </p>

              <div className="mt-6 rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.04]">
                <p className="text-sm font-semibold text-neutral-700">Tipp für Anfänger</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Starte mit <strong>mathematischen Tricks</strong> (fehlerfrei), nimm dann <strong>Präparation/System</strong> dazu und übe parallel 1–2 <strong>Fingerfertigkeits-Griffe</strong>.
                </p>
              </div>
            </div>

            {/* Right: path cards */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Link
                  href="/kartentricks#mathematisch"
                  className="glass-card group relative flex flex-col justify-between rounded-3xl p-7 overflow-hidden border-t-[3px] border-t-neutral-200 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 h-full"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Pfad 1</p>
                    <h3 className="mt-2 text-xl font-bold text-neutral-800 transition-colors group-hover:text-primary">
                      Mathematische Kartentricks
                    </h3>
                    <p className="mt-3 text-neutral-600 leading-relaxed text-sm">
                      Tricks, die &quot;von selbst&quot; funktionieren - ideal, um sicher vorzuführen und Selbstvertrauen aufzubauen.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <ArrowRight className="h-5 w-5 text-neutral-300 transition-all group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                </Link>

                <Link
                  href="/kartentricks#system"
                  className="glass-card group relative flex flex-col justify-between rounded-3xl p-7 overflow-hidden border-t-[3px] border-t-neutral-300 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 h-full"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Pfad 2</p>
                    <h3 className="mt-2 text-xl font-bold text-neutral-800 transition-colors group-hover:text-primary">
                      Kartentricks mit System
                    </h3>
                    <p className="mt-3 text-neutral-600 leading-relaxed text-sm">
                      Präparierte Decks (z.B. Stripper oder Svengali) sorgen für unmögliche Effekte - ohne schwere Moves.
                    </p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <ArrowRight className="h-5 w-5 text-neutral-300 transition-all group-hover:text-primary group-hover:translate-x-1" />
                  </div>
                </Link>

                <Link
                  href="/fingerfertigkeit"
                  className="glass-card group relative flex flex-col justify-between rounded-3xl p-7 overflow-hidden border-t-[3px] border-t-primary/20 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 h-full sm:col-span-2"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Pfad 3</p>
                      <h3 className="mt-2 text-xl font-bold text-neutral-800 transition-colors group-hover:text-primary">
                        Sleight of Hand{" "}
                        <span className="ml-2 align-middle text-xs font-medium text-neutral-400 uppercase tracking-wider">
                          Fingerfertigkeit
                        </span>
                      </h3>
                      <p className="mt-3 text-neutral-600 leading-relaxed text-sm max-w-[60ch]">
                        Lerne die echten Profi-Griffe wie Double Lift, Pinky Break und Falschmischungen - für visuelle, direkte Wunder.
                      </p>
                    </div>
                    <div className="mt-1 flex justify-end sm:mt-0">
                      <ArrowRight className="h-5 w-5 text-neutral-300 transition-all group-hover:text-primary group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Bridge */}
      <section className="pb-12 md:pb-20">
        <div className="layout-page">
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-10 rounded-3xl bg-neutral-950 overflow-hidden p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-white/[0.05]">
            {/* Luxury Gold ambient glows for shop bridge */}
            <div className="absolute top-0 right-0 bottom-0 w-[80%] sm:w-[60%] bg-gradient-to-l from-[#EECD5C]/40 via-[#D2A63C]/15 to-transparent pointer-events-none" />
            <div className="absolute top-[-30%] right-[-10%] h-[160%] w-[55%] rounded-full bg-[#D2A63C]/30 blur-[100px] pointer-events-none mix-blend-screen" />
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#EECD5C]">
                Welche Karten für Kartentricks?
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed mb-8 max-w-lg">
                Nicht jedes Kartendeck eignet sich zum Zaubern. Erfahre, warum Profis auf bestimmte Marken schwören, und finde das perfekte Equipment für deinen Einstieg in unserem Shop.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D2A63C] to-[#EECD5C] px-8 py-3.5 text-sm font-bold text-neutral-900 transition-all hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(238,205,92,0.5)] border border-[#EECD5C]/40"
              >
                Zum Kartendecks & Zubehör Shop <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="layout-page">
            <div className="mb-10 flex flex-col items-start gap-2">
              <h2 className="text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold tracking-tight text-neutral-800">
                Unsere Top-Empfehlungen
              </h2>
              <p className="text-neutral-500 text-lg">Die besten und beliebtesten Tutorials der Community</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Community CTA */}
      <section className="py-12 md:py-20">
        <div className="layout-page">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-16">
            <h2 className="text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold tracking-tight text-neutral-800">
              Werde Teil der Community
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
              Tausch dich mit anderen Kartentrick-Fans aus, zeig deine Fortschritte und lern von der Community - direkt auf Discord.
            </p>
            <div className="mt-8 inline-flex rounded-full bg-neutral-900 transition-colors hover:bg-neutral-800">
              <a
                href="https://discord.gg/QQ2nDMPZ6p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                </svg>
                Discord beitreten
              </a>
            </div>
            <p className="mt-4 text-xs text-neutral-400">
              Bereits über 500 Kartentrick-Fans dabei.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="pb-12 md:pb-20">
        <div className="layout-page">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="text-3xl font-bold tracking-tight text-neutral-800">{totalArticles}+</div>
              <div className="mt-1 text-sm text-neutral-400">Anleitungen</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="text-3xl font-bold tracking-tight text-neutral-800">500+</div>
              <div className="mt-1 text-sm text-neutral-400">Community-Mitglieder</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="text-3xl font-bold tracking-tight text-neutral-800">100%</div>
              <div className="mt-1 text-sm text-neutral-400">Kostenlos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Übersicht - Bento Grid */}
      <section className="py-12 md:py-20">
        <div className="layout-page">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-bold tracking-tight text-neutral-800">
              Alles im Überblick: Kartentricks, Techniken &amp; Kartenwissen
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Du hast noch nicht den richtigen Einstieg gefunden? Hier siehst du auf einen Blick, was es auf karten-tricks.de alles gibt - von{" "}
              <strong>Kartentricks lernen</strong> über <strong>Fingerfertigkeit</strong> bis zu <strong>Spielkarten</strong> und{" "}
              <strong>Party Tricks</strong>.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[repeat(5,minmax(72px,auto))]">
            <BentoCard
              title="Kartentricks"
              count={`${counts.kartentricks} Artikel`}
              description="Schritt-für-Schritt Anleitungen, um Kartentricks zu lernen - perfekt für Anfänger, aber auch mit starken Effekten für Fortgeschrittene."
              href="/kartentricks"
              icon={Sparkles}
              className="md:col-start-1 md:row-start-1 md:row-end-4"
            />
            <BentoCard
              title="Cardistry"
              count={`${counts.cardistry} Artikel`}
              description="Cardistry lernen: Cuts, Flourishes und Fans für saubere, visuelle Kartenmoves - ideal als Ergänzung zur Kartenmagie."
              href="/cardistry"
              icon={Layers}
              className="md:col-start-2 md:row-start-1 md:row-end-3"
            />
            <BentoCard
              title="Spielkarten"
              count={`${counts.spielkarten} Artikel`}
              description="Spielkarten-Guide: Welche Kartendecks eignen sich zum Zaubern oder für Cardistry? Empfehlungen, Unterschiede und Kaufberatung."
              href="/spielkarten"
              icon={Box}
              className="md:col-start-3 md:row-start-1 md:row-end-3"
            />
            <BentoCard
              title="Kartentricks für Kinder"
              count={`${kidsTricksCount} Artikel`}
              description="Einfache Kartentricks für Kinder: schnell erklärt, leicht vorzuführen und mit großer Wirkung - ohne schwierige Griffe."
              href="/party-tricks/kinder"
              icon={Star}
              className="md:col-start-1 md:row-start-4 md:row-end-6"
            />
            <BentoCard
              title="Party Tricks"
              count={`${counts["party-tricks"]} Artikel`}
              description="Tricks nach Anlass: Kartentricks für Geburtstag, Firmenfeier oder Freunde - mit Fokus auf Präsentation, Wirkung und Ablauf."
              href="/party-tricks"
              icon={PartyPopper}
              className="md:col-start-2 md:row-start-3 md:row-end-6"
            />
            <BentoCard
              title="Fingerfertigkeit"
              count={`${counts.fingerfertigkeit} Artikel`}
              description="Techniken für Kartenzauberei: Double Lift, Pinky Break, Forces und Mischtechniken - damit deine Kartentricks wirklich täuschen."
              href="/fingerfertigkeit"
              icon={Hand}
              className="md:col-start-3 md:row-start-3 md:row-end-6"
            />
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="pb-16 md:pb-24">
        <div className="layout-page">
          <div className="glass-card rounded-3xl border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="text-neutral-600 prose prose-neutral md:prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                    Kartentricks lernen: Der ultimative Guide für Anfänger und Fortgeschrittene
                  </h2>
                  <p>
                    Wer Kartentricks lernen möchte, findet auf karten-tricks.de die perfekte Anlaufstelle. Egal, ob du völlig am Anfang stehst oder bereits erste Erfahrungen mit{" "}
                    <strong>Sleight of Hand</strong> (Fingerfertigkeit) hast - unsere detaillierten Step-by-Step Anleitungen begleiten dich auf jedem Level. Die Faszination der Kartenmagie liegt darin, dass du kein extrem teures Equipment benötigst. Ein einfaches, gutes Kartendeck reicht vollkommen aus, um deine Freunde, Familie oder Kollegen ins Staunen zu versetzen.
                  </p>
                  <h3 className="text-xl font-bold text-neutral-800 mt-8 mb-4">
                    Warum jeder Zaubertricks mit Karten lernen kann
                  </h3>
                  <p>
                    Viele Menschen glauben fälschlicherweise, Kartenzauberei erfordere jahrelanges Training und unerreichbare Fingerfertigkeit. Das stimmt so nicht! Viele der stärksten Zaubertricks der Welt sind sogenannte{" "}
                    <em>mathematische Kartentricks</em>. Diese funktionieren &quot;von selbst&quot; anhand genauer logischer Prinzipien, ganz ohne spezielle Fingerfertigkeit. Sie sind der perfekte Einstieg für dich, da du dich zu 100 % auf deine Präsentation konzentrieren kannst. Hast du erst einmal das nötige Selbstvertrauen aufgebaut, kannst du dich souverän an die echten Profi-Griffe (wie den Double Lift oder den Pinky Break) wagen, um noch visuellere Wunder zu erschaffen.
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-4">
                <div className="rounded-2xl bg-white/70 border border-black/[0.04] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Schnell weiter
                  </p>
                  <div className="mt-4 space-y-2">
                    <Link href="/kartentricks" className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-neutral-50">
                      <span className="text-sm font-medium text-neutral-700">Kartentricks entdecken</span>
                      <ArrowRight className="h-4 w-4 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                    </Link>
                    <Link href="/fingerfertigkeit" className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-neutral-50">
                      <span className="text-sm font-medium text-neutral-700">Techniken lernen</span>
                      <ArrowRight className="h-4 w-4 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                    </Link>
                    <Link href="/spielkarten" className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-neutral-50">
                      <span className="text-sm font-medium text-neutral-700">Spielkarten-Guide</span>
                      <ArrowRight className="h-4 w-4 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                    </Link>
                    <Link href="/zaubertricks" className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-neutral-50">
                      <span className="text-sm font-medium text-neutral-700">Alle Zaubertricks</span>
                      <ArrowRight className="h-4 w-4 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                    </Link>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-neutral-400">
                    Tipp: Wenn du neu bist, starte mit einfachen Effekten und übe dann gezielt Fingerfertigkeit.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
