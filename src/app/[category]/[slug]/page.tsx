import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import QuickInfoBox from "@/components/QuickInfoBox";
import WhyThisTrick from "@/components/WhyThisTrick";
import AffiliateRecommendations, { AffiliateInlineNotice } from "@/components/AffiliateRecommendations";
import { renderArticleMarkdown, articleContainsAffiliateLinks } from "@/lib/article-markdown";
import { getArticle, getAllArticles, getArticlesByCategory } from "@/lib/content";
import { estimateReadingTime } from "@/lib/reading";
import { CATEGORIES, DIFFICULTY_COLORS } from "@/lib/types";
import type { Category } from "@/lib/types";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category as Category, slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords ?? [],
    alternates: { canonical: `https://karten-tricks.de/${category}/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      ...(article.heroImage && {
        images: [{ url: `https://karten-tricks.de${article.heroImage}` }],
      }),
    },
  };
}

export async function generateStaticParams() {
  const all = getAllArticles();
  return all.map((a) => ({ category: a.category, slug: a.slug }));
}

function jsonLdHowTo(article: ReturnType<typeof getArticle>) {
  if (!article) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: "Moritz" },
    publisher: {
      "@type": "Organization",
      name: "karten-tricks.de",
      url: "https://karten-tricks.de",
    },
    datePublished: article.date,
    inLanguage: "de",
  };
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = getArticle(category as Category, slug);
  if (!article) notFound();

  const cat = CATEGORIES[category as Category];
  const readTime = estimateReadingTime(article.content);
  const htmlContent = renderArticleMarkdown(article.content);
  const hasFrontmatterAffiliate = Boolean(article.affiliate && article.affiliate.length > 0);
  const showInlineAffiliateNotice =
    articleContainsAffiliateLinks(article.content) && !hasFrontmatterAffiliate;

  const relatedArticles = getArticlesByCategory(category as Category)
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const jsonLd = jsonLdHowTo(article);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div className="layout-page py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-400 mb-6 flex flex-wrap gap-1 items-center">
          <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>/</span>
          <Link href={`/${category}`} className="hover:text-primary transition-colors">{cat.label}</Link>
          <span>/</span>
          <span className="text-neutral-600 font-medium">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Article */}
          <article className="lg:col-span-3">

            {/* ── Article header (Medium-style: constrained width) ── */}
            <header className="max-w-[680px] mb-8">
              {/* Category + difficulty pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className={`text-xs px-3 py-1 rounded-full border font-medium ${cat.color}`}>
                  {cat.label}
                </span>
                {article.difficulty && (
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${DIFFICULTY_COLORS[article.difficulty]}`}>
                    {article.difficulty}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-[clamp(1.875rem,4vw,2.75rem)] font-bold tracking-tight text-neutral-900 leading-[1.1] mb-4">
                {article.title}
              </h1>

              {/* Meta line: date · reading time */}
              <p className="text-sm text-neutral-400 mb-5">
                {new Date(article.date).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}{" "}
                · {readTime} Min. Lesezeit
              </p>

              {/* Lead / description */}
              <p className="text-[1.125rem] leading-relaxed text-neutral-500 pb-6 border-b border-neutral-100">
                {article.description}
              </p>
            </header>

            {/* Hero image — full article column width for visual impact */}
            {article.heroImage && (
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={article.heroImage}
                  alt={article.heroAlt ?? article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            )}

            {/* Prose content — constrained to reading width */}
            <div className="max-w-[680px]">
              {(article.difficulty || article.duration || article.deck || article.preparation) && (
                <QuickInfoBox 
                  difficulty={article.difficulty}
                  duration={article.duration}
                  deck={article.deck}
                  preparation={article.preparation}
                />
              )}

              {article.whyThisTrick && (
                <WhyThisTrick reason={article.whyThisTrick} />
              )}

              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>

            <div className="max-w-[680px]">
              {showInlineAffiliateNotice && (
                <AffiliateInlineNotice className="mt-10" />
              )}

              {hasFrontmatterAffiliate && article.affiliate && (
                <AffiliateRecommendations items={article.affiliate} className="mt-10" />
              )}

              {/* Author box */}
              <div className="mt-10 p-6 rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center text-white font-medium text-lg flex-shrink-0">
                  M
                </div>
                <div>
                  <p className="font-bold tracking-tight text-neutral-800">Moritz</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Seit über 10 Jahren beschäftige ich mich mit Kartentricks und Kartenmagie.
                    Auf karten-tricks.de teile ich alles was ich gelernt habe - kostenlos und auf Deutsch.
                  </p>
                  <Link href="/ueber-mich" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2 font-medium">
                    Mehr über mich <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 sticky top-[calc(var(--floating-nav-gap)+1rem)] self-start">
            <div className="flex flex-col gap-6">
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-bold tracking-tight text-neutral-800 mb-3 text-sm uppercase">
                  Verwandte Artikel
                </h3>
                <div className="space-y-1">
                  {relatedArticles.map((rel) => (
                    <ArticleCard key={rel.slug} article={rel} variant="compact" />
                  ))}
                </div>
                <Link
                  href={`/${category}`}
                  className="block mt-3 text-sm text-primary hover:underline font-medium"
                >
                  <span className="inline-flex items-center gap-1">Alle {cat.label} <ArrowRight className="h-3.5 w-3.5" /></span>
                </Link>
              </div>

              {/* Community CTA */}
              <div className="glass-card-elevated rounded-2xl p-5 text-center">
                <p className="font-medium text-sm text-neutral-700 mb-2">Fragen? Feedback?</p>
                <p className="text-neutral-400 text-xs mb-4">
                  Join unsere Discord-Community!
                </p>
                <a
                  href="https://discord.gg/QQ2nDMPZ6p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
                >
                  Discord beitreten
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles (bottom) */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold tracking-tight text-neutral-800 mb-6">Das könnte dich auch interessieren</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
