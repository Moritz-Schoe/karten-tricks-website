import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/types";
import { CATEGORIES, DIFFICULTY_COLORS } from "@/lib/types";
import { estimateReadingTime } from "@/lib/reading";
import { ArrowRight } from "lucide-react";

interface Props {
  article: Article;
  variant?: "default" | "compact" | "featured";
}

export default function ArticleCard({ article, variant = "default" }: Props) {
  const cat = CATEGORIES[article.category];
  const readTime = article.readingTime ?? estimateReadingTime(article.content ?? "");
  const href = `/${article.category}/${article.slug}`;

  if (variant === "featured") {
    return (
      <Link href={href} className="group block glass-card rounded-2xl hover:shadow-[0_12px_40px_-10px_rgba(255,0,125,0.15)] transition-all overflow-hidden">
        {article.heroImage ? (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={article.heroImage}
              alt={article.heroAlt ?? article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">{cat.label}</span>
                {article.difficulty && (
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium">{article.difficulty}</span>
                )}
              </div>
              <h3 className="text-lg font-medium leading-snug">{article.title}</h3>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-[#FF007D] to-[#CC0064] p-8 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">{cat.label}</span>
              {article.difficulty && (
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">{article.difficulty}</span>
              )}
            </div>
            <h3 className="text-xl font-medium leading-snug group-hover:underline">{article.title}</h3>
          </div>
        )}
        <div className="p-5">
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{article.description}</p>
          <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
            <span>{readTime} Min. Lesezeit</span>
            <span className="inline-flex items-center gap-1 font-medium text-[#FF007D] group-hover:underline">Lesen <ArrowRight className="h-3 w-3" /></span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={href} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-black/[0.03] transition-colors">
        <div className="min-w-0">
          <p className="font-medium text-sm text-slate-700 group-hover:text-[#FF007D] transition-colors line-clamp-2">
            {article.title}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">{readTime} Min.</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block glass-card rounded-2xl hover:shadow-[0_12px_40px_-10px_rgba(255,0,125,0.15)] transition-all overflow-hidden"
    >
      {article.heroImage ? (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={article.heroImage}
            alt={article.heroAlt ?? article.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className={`text-xs px-3 py-1 rounded-full border font-medium ${cat.color}`}>{cat.label}</span>
          <div className="flex flex-wrap gap-1">
            {article.difficulty && (
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${DIFFICULTY_COLORS[article.difficulty]}`}>
                {article.difficulty}
              </span>
            )}
          </div>
        </div>
        <h3 className="font-medium text-slate-700 group-hover:text-[#FF007D] transition-colors leading-snug mb-2">
          {article.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {article.description}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{readTime} Min. Lesezeit</span>
          <span className="inline-flex items-center gap-1 font-medium text-[#FF007D] group-hover:underline">Lesen <ArrowRight className="h-3 w-3" /></span>
        </div>
      </div>
    </Link>
  );
}
