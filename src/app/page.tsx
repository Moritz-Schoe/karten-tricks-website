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
          <h3 className="text-lg font-bold tracking-tight text-slate-800 sm:text-xl">{title}</h3>
          <p className="text-sm text-slate-400">{count}</p>
        </div>
        {hasArrow && (
          <ArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-slate-500" />
        )}
      </div>
      <p className="mt-4 mb-2 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
      {Icon && (
        <div className="mt-2 flex justify-end">
          <Icon className="h-7 w-7 text-slate-200 transition-all group-hover:-rotate-[10deg] group-hover:scale-110 group-hover:text-slate-400" strokeWidth={1.5} />
        </div>
      )}
    </Link>
  );
}

export default function HomePage() {
  const featured = getFeaturedArticles(3);
  const recent = getRecentArticles(6);
  const totalArticles = getAllArticles().length;

  const counts = {
    kartentricks: getArticlesByCategory("kartentricks").length,
    cardistry: getArticlesByCategory("cardistry").length,
    spielkarten: getArticlesByCategory("spielkarten").length,
    "party-tricks": getArticlesByCategory("party-tricks").length,
    techniken: getArticlesByCategory("techniken").length,
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-var(--floating-nav-gap))] flex-col overflow-hidden">
        {/* Gradient blob */}
        <div className="hero-blob" aria-hidden />

        {/* Card spring – decorative parallax background */}
        <CardSpring />

        {/* Left sidebar – scroll indicator */}
        <div className="pointer-events-none absolute bottom-12 left-6 hidden items-end gap-3 lg:flex">
          <span className="hero-scroll-line text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Scroll
          </span>
          <span className="block h-14 w-px bg-slate-300" aria-hidden />
        </div>

        {/* Right sidebar – follow links */}
        <div className="pointer-events-auto absolute bottom-12 right-6 hidden items-end gap-3 lg:flex">
          <span className="block h-14 w-px bg-slate-300" aria-hidden />
          <div className="hero-scroll-line flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
            <span className="uppercase tracking-[0.15em]">Folge uns</span>
            <span className="mx-0.5">—</span>
            <a
              href="https://discord.gg/QQ2nDMPZ6p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-[#FF007D]"
            >
              Dc.
            </a>
          </div>
        </div>

        {/* Center content – flex-1 so the headline is truly centered */}
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="layout-page flex flex-col items-center text-center">
            <h1 className="text-[clamp(3rem,10vw,7.5rem)] font-semibold leading-[0.95] tracking-tight text-slate-800">
              Erlerne
              <br />
              <span className="hero-gradient-text">Kartenmagie.</span>
            </h1>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="layout-page relative z-10 flex flex-col gap-8 pb-10 sm:flex-row sm:items-end sm:justify-between">
          {/* Left – description + CTA */}
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed text-slate-500">
              Klare Anleitungen, echtes Handwerk und keine Geheimniskrämerei – kostenlos, auf Deutsch, Schritt für Schritt.
            </p>
            <Link
              href="/kartentricks"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-800 transition-colors hover:text-[#FF007D]"
            >
              Tricks entdecken
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

          {/* Right – Discord CTA */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
              <a
                href="https://discord.gg/QQ2nDMPZ6p"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                </svg>
                Community
              </a>
          </div>
        </div>
      </section>

      {/* Cardistry Banner */}
      <section className="pt-20 pb-4 md:pt-28">
        <div className="layout-page">
          <div className="relative flex items-center overflow-hidden rounded-3xl bg-[#F6F6F8] p-8 sm:p-14 md:min-h-[340px]">
            {/* Text Content */}
            <div className="relative z-10 w-full sm:w-1/2 lg:w-3/5">
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Jetzt neu auf Karten-tricks.de:<br />
                <span className="text-[#FF007D]">Cardistry</span>!
              </h2>
              <Link
                href="/cardistry"
                className="mt-8 inline-flex items-center rounded-full bg-[#8A4CFF] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#7836f5] hover:shadow-lg"
              >
                Cardistry entdecken!
              </Link>
            </div>

            {/* Media Asset */}
            <div className="pointer-events-none absolute -right-10 top-1/2 w-4/5 max-w-[280px] -translate-y-1/2 sm:right-0 sm:w-1/2 md:max-w-[400px] lg:right-10">
              <Image
                src="/cardistry-illustration.png"
                alt="Cardistry Illustration"
                width={800}
                height={800}
                className="h-auto w-full object-contain mix-blend-multiply"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Übersicht – Bento Grid */}
      <section className="py-20 md:py-28">
        <div className="layout-page">
          <h2 className="mb-10 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-slate-800">
            Übersicht
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[repeat(5,minmax(72px,auto))]">
            <BentoCard
              title="Kartentricks"
              count={`${counts.kartentricks} Artikel`}
              description="Schritt-für-Schritt Anleitungen für beeindruckende Kartentricks – vom Klassiker bis zum Geheimtipp."
              href="/kartentricks"
              icon={Sparkles}
              className="md:col-start-1 md:row-start-1 md:row-end-4"
            />
            <BentoCard
              title="Cardistry"
              count={`${counts.cardistry} Artikel`}
              description="Karten als Kunstform – lerne Flourishes, Cuts und Fans."
              href="/cardistry"
              icon={Layers}
              className="md:col-start-2 md:row-start-1 md:row-end-3"
            />
            <BentoCard
              title="Spielkarten"
              count={`${counts.spielkarten} Artikel`}
              description="Finde hier das beste Equipment für deinen nächsten Trick!"
              href="/spielkarten"
              icon={Box}
              className="md:col-start-3 md:row-start-1 md:row-end-3"
            />
            <BentoCard
              title="Kartentricks für Kinder"
              count={`${counts["party-tricks"]} Artikel`}
              description="Einfache Tricks, die Kinderaugen strahlen lassen – ohne komplizierte Handgriffe."
              href="/party-tricks/kinder"
              icon={Star}
              className="md:col-start-1 md:row-start-4 md:row-end-6"
            />
            <BentoCard
              title="Party Tricks"
              count={`${counts["party-tricks"]} Artikel`}
              description="Kartentricks für jede Gelegenheit: Geburtstag, Firmenfeier oder gemütlicher Abend."
              href="/party-tricks"
              icon={PartyPopper}
              className="md:col-start-2 md:row-start-3 md:row-end-6"
            />
            <BentoCard
              title="Handgriffe"
              count={`${counts.techniken} Artikel`}
              description="Lerne Techniken zum Zaubern – Forces, Double Lifts und mehr."
              href="/techniken"
              icon={Hand}
              className="md:col-start-3 md:row-start-4 md:row-end-6"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="layout-page">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-slate-800">
                Empfohlen
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      {recent.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="layout-page">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-slate-800">
                Neue Artikel
              </h2>
              <Link
                href="/kartentricks"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-800 transition-colors hover:text-[#FF007D]"
              >
                Alle ansehen
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((article) => (
                <ArticleCard key={`${article.category}/${article.slug}`} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Community CTA */}
      <section className="py-20 md:py-28">
        <div className="layout-page">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-16">
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight text-slate-800">
              Werde Teil der Community
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              Tausch dich mit anderen Kartentrick-Fans aus, zeig deine Fortschritte und lern von der Community – direkt auf Discord.
            </p>
            <div className="mt-8 inline-flex rounded-full bg-slate-900 transition-colors hover:bg-slate-800">
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
            <p className="mt-4 text-xs text-slate-400">
              Bereits über 500 Kartentrick-Fans dabei.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="pb-20 md:pb-28">
        <div className="layout-page">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="text-3xl font-bold tracking-tight text-slate-800">{totalArticles}+</div>
              <div className="mt-1 text-sm text-slate-400">Anleitungen</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="text-3xl font-bold tracking-tight text-slate-800">500+</div>
              <div className="mt-1 text-sm text-slate-400">Community-Mitglieder</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="text-3xl font-bold tracking-tight text-slate-800">100%</div>
              <div className="mt-1 text-sm text-slate-400">Kostenlos</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
