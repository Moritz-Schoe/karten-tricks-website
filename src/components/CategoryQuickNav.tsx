import type { FC } from "react";
import Link from "next/link";
import { CATEGORIES, type Category } from "@/lib/types";

const ORDER: Category[] = [
  "kartentricks",
  "cardistry",
  "techniken",
  "party-tricks",
  "spielkarten",
];

const ACCENT: Record<
  Category,
  { iconWrap: string; iconColor: string }
> = {
  kartentricks: {
    iconWrap: "bg-violet-50 ring-violet-100",
    iconColor: "text-violet-600",
  },
  cardistry: {
    iconWrap: "bg-fuchsia-50 ring-fuchsia-100",
    iconColor: "text-fuchsia-600",
  },
  techniken: {
    iconWrap: "bg-orange-50 ring-orange-100",
    iconColor: "text-orange-600",
  },
  "party-tricks": {
    iconWrap: "bg-rose-50 ring-rose-100",
    iconColor: "text-rose-600",
  },
  spielkarten: {
    iconWrap: "bg-sky-50 ring-sky-100",
    iconColor: "text-sky-600",
  },
};

function IconKartentricks({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L18.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09z"
      />
    </svg>
  );
}

function IconCardistry({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v8.25c0 .621.504 1.125 1.125 1.125h5.25m7.5-10.496a2.25 2.25 0 011.125 1.951V19.5a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 19.5V9.75a2.25 2.25 0 011.125-1.951"
      />
    </svg>
  );
}

function IconTechniken({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

function IconParty({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  );
}

function IconSpielkarten({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v11.25A2.25 2.25 0 009 16.5h11.25M6.75 3h-1.5a1.5 1.5 0 00-1.5 1.5v11.25a1.5 1.5 0 001.5 1.5h1.5m-3-15h12a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-12a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5z"
      />
    </svg>
  );
}

const ICONS: Record<Category, FC<{ className?: string }>> = {
  kartentricks: IconKartentricks,
  cardistry: IconCardistry,
  techniken: IconTechniken,
  "party-tricks": IconParty,
  spielkarten: IconSpielkarten,
};

export default function CategoryQuickNav() {
  return (
    <section className="py-10 px-6 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-sm font-medium text-slate-500 mb-6 font-[family-name:var(--font-inter)]">
          Wähle ein Thema
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {ORDER.map((key) => {
            const cat = CATEGORIES[key];
            const accent = ACCENT[key];
            const Icon = ICONS[key];
            return (
              <Link
                key={key}
                href={`/${key}`}
                className="group flex flex-col items-center gap-3 rounded-2xl bg-slate-50/80 px-4 py-5 text-center shadow-sm ring-1 ring-slate-100 transition-all hover:bg-white hover:shadow-md hover:ring-violet-200/80 hover:-translate-y-0.5"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${accent.iconWrap} ${accent.iconColor} transition-transform group-hover:scale-105`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-medium text-sm text-slate-700 group-hover:text-violet-700 font-[family-name:var(--font-inter)]">
                  {cat.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
