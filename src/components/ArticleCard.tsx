import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/types";
import { CATEGORIES } from "@/lib/types";
import { estimateReadingTime } from "@/lib/reading";
import { ArrowRight } from "lucide-react";

interface Props {
  article: Article;
  variant?: "default" | "compact" | "featured";
}

const cardShell =
  "group block overflow-hidden rounded-2xl bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.09)] hover:-translate-y-0.5";

export default function ArticleCard({ article, variant = "default" }: Props) {
  const cat = CATEGORIES[article.category];
  const readTime = article.readingTime ?? estimateReadingTime(article.content ?? "");
  const href = `/${article.category}/${article.slug}`;

  const metaLine = [
    cat.label,
    ...(article.difficulty ? [article.difficulty] : []),
    `${readTime} Min. Lesezeit`,
  ].join(" · ");

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group flex gap-3 rounded-xl p-2.5 -mx-2.5 transition-colors hover:bg-slate-50/80"
      >
        {article.heroImage ? (
          <div className="relative h-14 w-[5.5rem] shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={article.heroImage}
              alt={article.heroAlt ?? article.title}
              fill
              className="object-cover"
              sizes="88px"
            />
          </div>
        ) : (
          <div className="h-14 w-[5.5rem] shrink-0 rounded-xl bg-slate-100" />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="line-clamp-2 text-sm font-semibold leading-snug tracking-tight text-slate-900">
              {article.title}
            </p>
            <ArrowRight
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-400 opacity-70 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </div>
          <p className="mt-1 line-clamp-1 text-xs text-[#A0AEC0]">{metaLine}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className={cardShell}>
      {article.heroImage ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <Image
            src={article.heroImage}
            alt={article.heroAlt ?? article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100" />
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-slate-800 sm:text-xl">
            {article.title}
          </h3>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-slate-500" aria-hidden />
        </div>
        <p className="mt-1 text-sm text-slate-400">{metaLine}</p>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-500">
          {article.description}
        </p>
      </div>
    </Link>
  );
}
