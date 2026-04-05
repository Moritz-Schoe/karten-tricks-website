"use client";

import { useMemo, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/lib/types";
import type { Difficulty } from "@/lib/types";

const LEVELS: Difficulty[] = ["Anfänger", "Mittel", "Fortgeschrittene"];

interface Props {
  articles: Article[];
}

export default function CategoryArticleGrid({ articles }: Props) {
  const [filter, setFilter] = useState<Difficulty | null>(null);

  const filtered = useMemo(() => {
    if (!filter) return articles;
    return articles.filter((a) => a.difficulty === filter);
  }, [articles, filter]);

  if (articles.length === 0) {
    return (
      <div className="text-center py-20 text-slate-400">
        <p className="text-lg font-medium font-[family-name:var(--font-inter)]">Hier entstehen gerade neue Artikel.</p>
        <p className="text-sm mt-2">Schau bald wieder vorbei!</p>
      </div>
    );
  }

  const showFilter = articles.some((a) => a.difficulty);

  return (
    <>
      {showFilter && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-sm text-slate-500 mr-1">Filtern:</span>
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`text-xs px-4 py-1.5 rounded-[6px] border font-medium font-[family-name:var(--font-inter)] transition-colors ${
              filter === null
                ? "border-[#7C3AED] bg-[#F5F3FF] text-[#5B21B6]"
                : "border-slate-200 text-slate-600 hover:border-[#7C3AED] hover:text-[#7C3AED]"
            }`}
          >
            Alle
          </button>
          {LEVELS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setFilter(d)}
              className={`text-xs px-4 py-1.5 rounded-[6px] border font-medium font-[family-name:var(--font-inter)] transition-colors ${
                filter === d
                  ? "border-[#7C3AED] bg-[#F5F3FF] text-[#5B21B6]"
                  : "border-slate-200 text-slate-600 hover:border-[#7C3AED] hover:text-[#7C3AED]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 rounded-[12px] border border-dashed border-slate-200 bg-slate-50/80">
          <p className="text-sm font-medium text-slate-600 font-[family-name:var(--font-inter)]">
            Keine Artikel mit diesem Schwierigkeitsgrad.
          </p>
          <button
            type="button"
            onClick={() => setFilter(null)}
            className="text-xs text-[#7C3AED] font-medium mt-3 hover:underline"
          >
            Alle anzeigen
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant={article.featured ? "featured" : "default"}
            />
          ))}
        </div>
      )}
    </>
  );
}
