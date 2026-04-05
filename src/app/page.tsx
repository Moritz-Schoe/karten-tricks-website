import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import CategoryQuickNav from "@/components/CategoryQuickNav";
import NewsletterBox from "@/components/NewsletterBox";
import { getRecentArticles, getFeaturedArticles, getAllArticles } from "@/lib/content";

function SectionTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-2.5 text-[28px] font-medium text-slate-700 font-[family-name:var(--font-inter)]">
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F3FF] px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl md:h-96 md:w-96"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-fuchsia-100/50 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-[1280px] mx-auto grid gap-12 md:grid-cols-2 md:gap-14 md:items-center">
          <div className="text-center md:text-left">
            <Image
              src="/logo.png"
              alt="Karten-tricks.de"
              width={260}
              height={65}
              className="mx-auto md:mx-0 mb-7 h-auto w-[200px] md:w-[240px]"
              priority
            />
            <h1 className="text-4xl md:text-[46px] font-semibold mb-5 leading-[1.12] text-slate-800 font-[family-name:var(--font-inter)]">
              Kartentricks lernen.
              <br />
              <span className="text-[#7C3AED]">Auf Deutsch. Kostenlos.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-9 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Von der ersten einfachen Karte bis zur Cardistry-Routine – hier findest du
              alles was du brauchst, um andere zu beeindrucken.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/kartentricks"
                className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white font-medium px-8 py-3 rounded-[8px] hover:bg-[#6D28D9] transition-colors text-sm font-[family-name:var(--font-inter)]"
              >
                <svg className="w-4 h-4 shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
                Tricks entdecken
              </Link>
              <Link
                href="/kartentricks/anfaenger-guide"
                className="inline-flex items-center justify-center gap-2 border-[1.5px] border-[#C4B5FD] bg-white/80 text-[#5B21B6] font-medium px-8 py-3 rounded-[8px] hover:bg-violet-50 transition-colors text-sm font-[family-name:var(--font-inter)]"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                Für Anfänger starten
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl ring-1 ring-slate-200/80">
              <Image
                src="/images/2020/05/Aufgedeckte-Karten-1.jpg"
                alt="Aufgedeckte Spielkarten"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="mt-3 text-center text-xs text-slate-500 md:text-left">
              Praxisnah erklärt – Schritt für Schritt.
            </p>
          </div>
        </div>
      </section>

      <CategoryQuickNav />

      <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-16">

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
              <h2 className="text-xl font-medium text-[#9D174D] mb-2 font-[family-name:var(--font-inter)]">
                Party steht an? Wir haben den richtigen Trick.
              </h2>
              <p className="text-[#9D174D]/70 text-sm leading-relaxed mb-4">
                Geburtstag, Firmenfeier, Kinder – nicht jeder Trick funktioniert in jeder Situation.
                Wir zeigen dir welcher wann passt.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Link href="/party-tricks/geburtstag" className="text-sm bg-[#EC4899] text-white px-5 py-2 rounded-[8px] hover:bg-[#DB2777] transition-colors font-medium font-[family-name:var(--font-inter)]">
                  Geburtstag
                </Link>
                <Link href="/party-tricks/firmenfeier" className="text-sm bg-[#EC4899] text-white px-5 py-2 rounded-[8px] hover:bg-[#DB2777] transition-colors font-medium font-[family-name:var(--font-inter)]">
                  Firmenfeier
                </Link>
                <Link href="/party-tricks/kinder" className="text-sm bg-[#EC4899] text-white px-5 py-2 rounded-[8px] hover:bg-[#DB2777] transition-colors font-medium font-[family-name:var(--font-inter)]">
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
              <span className="text-xs font-medium text-[#7C3AED] uppercase tracking-wider font-[family-name:var(--font-inter)]">Neu auf karten-tricks.de</span>
              <h2 className="text-xl font-medium text-[#4C1D95] mt-1 mb-2 font-[family-name:var(--font-inter)]">Cardistry – Karten als Kunst</h2>
              <p className="text-[#5B21B6]/70 text-sm leading-relaxed mb-4">
                Keine Tricks, keine Illusion – nur pure Eleganz. Lerne Flourishes, Cuts und Fans.
                Der erste und einzige deutschsprachige Guide.
              </p>
              <Link href="/cardistry" className="inline-block text-sm bg-[#7C3AED] text-white px-6 py-2 rounded-[8px] hover:bg-[#6D28D9] transition-colors font-medium font-[family-name:var(--font-inter)]">
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
              <div className="text-3xl font-semibold text-[#5B21B6] font-[family-name:var(--font-inter)]">{totalArticles}+</div>
              <div className="text-sm text-slate-500 mt-1">Anleitungen</div>
            </div>
            <div className="rounded-2xl bg-white px-4 py-5 shadow-sm ring-1 ring-slate-100">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="text-3xl font-semibold text-[#5B21B6] font-[family-name:var(--font-inter)]">500+</div>
              <div className="text-sm text-slate-500 mt-1">Community-Mitglieder</div>
            </div>
            <div className="rounded-2xl bg-white px-4 py-5 shadow-sm ring-1 ring-slate-100">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-semibold text-[#5B21B6] font-[family-name:var(--font-inter)]">100%</div>
              <div className="text-sm text-slate-500 mt-1">Kostenlos</div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
