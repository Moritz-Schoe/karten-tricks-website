import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import CategoryQuickNav from "@/components/CategoryQuickNav";
import NewsletterBox from "@/components/NewsletterBox";
import { getRecentArticles, getFeaturedArticles, getAllArticles } from "@/lib/content";

function SectionTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-2.5 text-[28px] font-medium text-slate-700">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600" aria-hidden>
        {icon}
      </span>
      {children}
    </h2>
  );
}

export default function HomePage() {
  const featured = getFeaturedArticles(3);
  const recent = getRecentArticles(6);
  const totalArticles = getAllArticles().length;

  return (
    <>
      {/* Hero: Referenz-Layout (weiche Karte, Bild | Copy, Pill-CTA + runde Links) — Farben laut Brand Guide */}
      <section className="bg-[#FAFAFA] pb-16 pt-6 md:pb-24 md:pt-8">
        <div className="layout-page">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-[#F1F5F9] p-6 shadow-[0_24px_64px_-28px_rgba(26,27,38,0.12)] ring-1 ring-[#1A1B26]/[0.04] md:rounded-[2.5rem] md:p-10 lg:rounded-[2.75rem] lg:p-14">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="relative aspect-[5/4] min-h-[220px] w-full overflow-hidden rounded-[1.75rem] md:aspect-auto md:min-h-[min(52vh,460px)]">
                <Image
                  src="/images/2020/09/cards2.jpg"
                  alt="Spielkarten als Flat Lay auf dunklem Untergrund"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center text-center md:text-left">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#64748B]">
                  Kartentricks &amp; Techniken
                </p>
                <h1 className="mb-4 text-[clamp(1.875rem,4.2vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[#1E293B]">
                  Dein Weg durch die Welt der Kartenmagie
                </h1>
                <p className="mb-6 text-lg font-medium leading-snug text-[#7C3AED] sm:text-xl">
                  Auf Deutsch. Kostenlos. Schritt für Schritt.
                </p>
                <p className="mb-10 max-w-xl text-base leading-[1.65] text-[#475569] sm:mb-11 sm:text-lg">
                  Willkommen bei karten-tricks.de: klare Anleitungen, echtes Handwerk und keine
                  Geheimniskrämerei – von der ersten Farbänderung bis zur Routine fürs nächste Treffen.
                </p>
                <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap md:justify-start">
                  <Link
                    href="/kartentricks"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] px-10 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#6D28D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                  >
                    Tricks entdecken
                  </Link>
                  <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                    <a
                      href="https://discord.gg/karten-tricks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E2E8F0] text-[#334155] transition-colors hover:bg-[#DDD6FE] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                      aria-label="Discord-Server"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    </a>
                    <Link
                      href="/community"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E2E8F0] text-[#334155] transition-colors hover:bg-[#DDD6FE] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                      aria-label="Community"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </Link>
                    <Link
                      href="/#newsletter"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E2E8F0] text-[#334155] transition-colors hover:bg-[#DDD6FE] hover:text-[#5B21B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C3AED]"
                      aria-label="Newsletter"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <p className="mt-8 text-sm text-[#64748B] md:mt-10">
                  <Link
                    href="/kartentricks/anfaenger-guide"
                    className="font-medium text-[#7C3AED] underline-offset-4 hover:underline"
                  >
                    Erste Schritte für Anfänger
                  </Link>
                  <span className="text-[#CBD5E1]" aria-hidden>
                    {" "}
                    ·{" "}
                  </span>
                  <Link href="/kartentricks" className="font-medium text-[#7C3AED] underline-offset-4 hover:underline">
                    Alle Anleitungen
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryQuickNav />

      <div className="layout-page py-16 space-y-16">

        {/* Featured Articles */}
        {featured.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <SectionTitle
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                }
              >
                Empfohlen
              </SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="featured" />
              ))}
            </div>
          </section>
        )}

        {/* Party Tricks CTA */}
        <section className="bg-[#FDF2F8] border border-rose-100 rounded-[16px] p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-sm ring-1 ring-rose-100" aria-hidden>
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-medium text-[#9D174D] mb-2">
                Party steht an? Wir haben den richtigen Trick.
              </h2>
              <p className="text-[#9D174D]/70 text-sm leading-relaxed mb-4">
                Geburtstag, Firmenfeier, Kinder – nicht jeder Trick funktioniert in jeder Situation.
                Wir zeigen dir welcher wann passt.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Link href="/party-tricks/geburtstag" className="text-sm bg-[#EC4899] text-white px-5 py-2 rounded-[8px] hover:bg-[#DB2777] transition-colors font-medium">
                  Geburtstag
                </Link>
                <Link href="/party-tricks/firmenfeier" className="text-sm bg-[#EC4899] text-white px-5 py-2 rounded-[8px] hover:bg-[#DB2777] transition-colors font-medium">
                  Firmenfeier
                </Link>
                <Link href="/party-tricks/kinder" className="text-sm bg-[#EC4899] text-white px-5 py-2 rounded-[8px] hover:bg-[#DB2777] transition-colors font-medium">
                  Für Kinder
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        {recent.length > 0 && (
          <section>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <SectionTitle
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75a3.375 3.375 0 00-3.375 3.375v1.5c0 .621-.504 1.125-1.125 1.125H3.75A3.375 3.375 0 00.375 11.625v2.25C0 15.316.684 16 1.5 16h21c.816 0 1.5-.684 1.5-1.5v-9.75c0-1.657-1.343-3-3-3h-6.75a3.375 3.375 0 00-3.375 3.375v1.5c0 .621-.504 1.125-1.125 1.125h-1.5a3.375 3.375 0 00-3.375 3.375v2.25" />
                  </svg>
                }
              >
                Neue Artikel
              </SectionTitle>
              <Link href="/kartentricks" className="inline-flex items-center gap-1 text-[#7C3AED] text-sm font-medium hover:underline shrink-0">
                <span>Alle ansehen</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((article) => (
                <ArticleCard key={`${article.category}/${article.slug}`} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* Cardistry Teaser */}
        <section className="bg-[#F5F3FF] border border-violet-100 rounded-[16px] p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm ring-1 ring-violet-100" aria-hidden>
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v8.25c0 .621.504 1.125 1.125 1.125h5.25m7.5-10.496a2.25 2.25 0 011.125 1.951V19.5a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 19.5V9.75a2.25 2.25 0 011.125-1.951" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-medium text-[#7C3AED] uppercase tracking-wider">Neu auf karten-tricks.de</span>
              <h2 className="text-xl font-medium text-[#4C1D95] mt-1 mb-2">Cardistry – Karten als Kunst</h2>
              <p className="text-[#5B21B6]/70 text-sm leading-relaxed mb-4">
                Keine Tricks, keine Illusion – nur pure Eleganz. Lerne Flourishes, Cuts und Fans.
                Der erste und einzige deutschsprachige Guide.
              </p>
              <Link href="/cardistry" className="inline-block text-sm bg-[#7C3AED] text-white px-6 py-2 rounded-[8px] hover:bg-[#6D28D9] transition-colors font-medium">
                Cardistry entdecken
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterBox />

        {/* Trust Section */}
        <section className="text-center py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-white px-4 py-5 shadow-sm ring-1 ring-slate-100">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="text-3xl font-semibold text-[#5B21B6]">{totalArticles}+</div>
              <div className="text-sm text-slate-500 mt-1">Anleitungen</div>
            </div>
            <div className="rounded-2xl bg-white px-4 py-5 shadow-sm ring-1 ring-slate-100">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="text-3xl font-semibold text-[#5B21B6]">500+</div>
              <div className="text-sm text-slate-500 mt-1">Community-Mitglieder</div>
            </div>
            <div className="rounded-2xl bg-white px-4 py-5 shadow-sm ring-1 ring-slate-100">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-semibold text-[#5B21B6]">100%</div>
              <div className="text-sm text-slate-500 mt-1">Kostenlos</div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
