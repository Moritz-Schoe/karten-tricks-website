import Link from "next/link";
import { CATEGORIES, type Category } from "@/lib/types";
import { Sparkles, Layers, BookOpen, Gift, Spade, type LucideIcon } from "lucide-react";

const ORDER: Category[] = [
  "kartentricks",
  "cardistry",
  "techniken",
  "party-tricks",
  "spielkarten",
];

const ACCENT: Record<
  Category,
  { iconColor: string }
> = {
  kartentricks: { iconColor: "text-violet-600" },
  cardistry: { iconColor: "text-fuchsia-600" },
  techniken: { iconColor: "text-orange-600" },
  "party-tricks": { iconColor: "text-rose-600" },
  spielkarten: { iconColor: "text-sky-600" },
};

const ICONS: Record<Category, LucideIcon> = {
  kartentricks: Sparkles,
  cardistry: Layers,
  techniken: BookOpen,
  "party-tricks": Gift,
  spielkarten: Spade,
};

export default function CategoryQuickNav() {
  return (
    <section className="border-b border-black/[0.04] py-10">
      <div className="layout-page">
        <p className="text-center text-sm font-medium text-slate-400 mb-6">
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
                className="group glass-card flex flex-col items-center gap-3 rounded-2xl px-4 py-5 text-center transition-all hover:shadow-[0_8px_32px_-8px_rgba(124,58,237,0.12)] hover:-translate-y-0.5"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 ${accent.iconColor} transition-transform group-hover:scale-105`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="font-medium text-sm text-slate-600 group-hover:text-violet-700">
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
