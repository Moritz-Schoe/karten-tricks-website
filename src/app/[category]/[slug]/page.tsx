import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { marked } from "marked";
import ArticleCard from "@/components/ArticleCard";
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
    author: { "@type": "Person", name: "Moritz Schöbs" },
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
  const htmlContent = marked(article.content, { async: false });

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

      <div className="max-w-[1280px] mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-6 flex flex-wrap gap-1 items-center">
          <Link href="/" className="hover:text-[#7C3AED] transition-colors">Startseite</Link>
          <span>/</span>
          <Link href={`/${category}`} className="hover:text-[#7C3AED] transition-colors">{cat.label}</Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Article */}
          <article className="lg:col-span-3">
            {/* Meta Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs px-3 py-1 rounded-[6px] border font-medium ${cat.color}`}>
                {cat.label}
              </span>
              {article.difficulty && (
                <span className={`text-xs px-3 py-1 rounded-[6px] font-medium ${DIFFICULTY_COLORS[article.difficulty]}`}>
                  {article.difficulty}
                </span>
              )}
              <span className="text-xs px-3 py-1 rounded-[6px] bg-[#F1F5F9] text-slate-500 font-medium">
                {readTime} Min. Lesezeit
              </span>
            </div>

            {/* Hero Image */}
            {article.heroImage && (
              <div className="relative w-full aspect-[2/1] rounded-[12px] overflow-hidden mb-6">
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

            {/* Title */}
            <h1 className="text-3xl md:text-[36px] font-medium text-slate-800 leading-[1.2] mb-4 font-[family-name:var(--font-inter)]">
              {article.title}
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 border-b border-slate-200 pb-6">
              {article.description}
            </p>

            {/* Content */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Affiliate Box */}
            {article.affiliate && article.affiliate.length > 0 && (
              <div className="mt-10 p-6 bg-[#FFF7ED] border border-[#FED7AA] rounded-[12px]">
                <h3 className="font-medium text-[#9A3412] mb-3 font-[family-name:var(--font-inter)]">Empfohlene Produkte</h3>
                <ul className="space-y-2">
                  {article.affiliate.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="nofollow noopener"
                        className="text-[#9A3412] hover:text-[#7C2D12] font-medium text-sm hover:underline"
                      >
                        → {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#C2410C] mt-3">
                  * Affiliate-Links. Bei einem Kauf erhalte ich eine kleine Provision – für dich entstehen keine Mehrkosten.
                </p>
              </div>
            )}

            {/* Author Box */}
            <div className="mt-10 p-6 bg-white border border-slate-200 rounded-[12px] flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] rounded-[12px] flex items-center justify-center text-white font-medium text-lg flex-shrink-0 font-[family-name:var(--font-inter)]">
                M
              </div>
              <div>
                <p className="font-medium text-slate-800 font-[family-name:var(--font-inter)]">Moritz Schöbs</p>
                <p className="text-sm text-slate-500 mt-1">
                  Seit über 10 Jahren beschäftige ich mich mit Kartentricks und Kartenmagie.
                  Auf karten-tricks.de teile ich alles was ich gelernt habe – kostenlos und auf Deutsch.
                </p>
                <Link href="/ueber-mich" className="text-sm text-[#7C3AED] hover:underline mt-2 inline-block font-medium">
                  Mehr über mich →
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="sticky top-24">
              <div className="bg-white border border-slate-200 rounded-[12px] p-5 mb-6">
                <h3 className="font-medium text-slate-800 mb-3 text-sm uppercase tracking-wider font-[family-name:var(--font-inter)]">
                  Verwandte Artikel
                </h3>
                <div className="space-y-1">
                  {relatedArticles.map((rel) => (
                    <ArticleCard key={rel.slug} article={rel} variant="compact" />
                  ))}
                </div>
                <Link
                  href={`/${category}`}
                  className="block mt-3 text-sm text-[#7C3AED] hover:underline font-medium"
                >
                  Alle {cat.label} →
                </Link>
              </div>

              {/* Community CTA */}
              <div className="bg-[#1A1B26] text-white rounded-[12px] p-5 text-center">
                <p className="font-medium text-sm mb-2 font-[family-name:var(--font-inter)]">Fragen? Feedback?</p>
                <p className="text-slate-400 text-xs mb-4">
                  Join unsere Discord-Community!
                </p>
                <Link
                  href="/community"
                  className="block bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium px-4 py-2 rounded-[8px] transition-colors font-[family-name:var(--font-inter)]"
                >
                  Discord beitreten
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles (bottom) */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-medium text-slate-700 mb-6 font-[family-name:var(--font-inter)]">Das könnte dich auch interessieren</h2>
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
