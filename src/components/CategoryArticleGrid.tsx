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
      <div className="text-center py-20 text-neutral-400">
        <p className="text-lg font-medium">Hier entstehen gerade neue Artikel.</p>
        <p className="text-sm mt-2">Schau bald wieder vorbei!</p>
      </div>
    );
  }

  const showFilter = articles.some((a) => a.difficulty);

  return (
    <>
      {showFilter && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-sm text-neutral-400 mr-1">Filtern:</span>
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`text-xs px-4 py-1.5 rounded-full font-medium transition-colors ${
              filter === null
                ? "bg-primary text-white shadow-sm"
                : "glass-card text-neutral-600 hover:text-primary"
            }`}
          >
            Alle
          </button>
          {LEVELS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setFilter(d)}
              className={`text-xs px-4 py-1.5 rounded-full font-medium transition-colors ${
                filter === d
                  ? "bg-primary text-white shadow-sm"
                  : "glass-card text-neutral-600 hover:text-primary"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-neutral-400 glass-card rounded-3xl">
          <p className="text-sm font-medium text-neutral-600">
            Keine Artikel mit diesem Schwierigkeitsgrad.
          </p>
          <button
            type="button"
            onClick={() => setFilter(null)}
            className="text-xs text-primary font-medium mt-3 hover:underline"
          >
            Alle anzeigen
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, idx) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant="default"
              imageLoading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      )}
    </>
  );
}
