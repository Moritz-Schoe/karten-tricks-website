import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import CategoryArticleGrid from "@/components/CategoryArticleGrid";
import { getArticlesByCategory } from "@/lib/content";
import { CATEGORIES } from "@/lib/types";
import type { Category } from "@/lib/types";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category as Category];
  if (!cat) return {};
  return {
    title: cat.label,
    description: cat.description,
    alternates: { canonical: `https://karten-tricks.de/${category}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES[category as Category];
  if (!cat) notFound();

  const articles = getArticlesByCategory(category as Category);

  return (
    <div className="layout-page py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-[#FF007D] transition-colors">Startseite</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 font-medium">{cat.label}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-10">
        <h1 className="text-[36px] font-medium text-slate-700 mb-3 leading-[1.2]">{cat.label}</h1>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">{cat.description}</p>
      </div>

      <CategoryArticleGrid articles={articles} />
    </div>
  );
}
