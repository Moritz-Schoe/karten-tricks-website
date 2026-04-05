export type Difficulty = "Anfänger" | "Mittel" | "Fortgeschrittene";

export type Category =
  | "kartentricks"
  | "cardistry"
  | "techniken"
  | "party-tricks"
  | "spielkarten";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  category: Category;
  slug: string;
  difficulty?: Difficulty;
  readingTime?: number;
  featured?: boolean;
  affiliate?: { label: string; url: string }[];
  related?: string[];
  keywords?: string[];
  heroImage?: string;
  heroAlt?: string;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

export const CATEGORIES: Record<
  Category,
  { label: string; description: string; color: string }
> = {
  kartentricks: {
    label: "Kartentricks",
    description: "Schritt-für-Schritt Anleitungen für beeindruckende Kartentricks – vom Klassiker bis zum Geheimtipp.",
    color: "bg-[#F5F3FF] border-[#C4B5FD] text-[#5B21B6]",
  },
  cardistry: {
    label: "Cardistry",
    description: "Karten als Kunstform – lerne Flourishes, Cuts und Fans für ein beeindruckendes Kartenerlebnis.",
    color: "bg-[#F5F3FF] border-[#C4B5FD] text-[#5B21B6]",
  },
  techniken: {
    label: "Techniken",
    description: "Die handwerklichen Grundlagen: Forces, Double Lift, Kontrollen und Präsentation.",
    color: "bg-[#FFF7ED] border-[#FED7AA] text-[#9A3412]",
  },
  "party-tricks": {
    label: "Party Tricks",
    description: "Kartentricks im richtigen Kontext: Geburtstag, Firmenfeier, Kinder – wann welcher Trick funktioniert.",
    color: "bg-[#FCE7F3] border-[#F9A8D4] text-[#9D174D]",
  },
  spielkarten: {
    label: "Spielkarten",
    description: "Guides und Reviews: welche Karten für welchen Zweck – von Bicycle bis zu Cardistry-Decks.",
    color: "bg-[#E0F2FE] border-[#7DD3FC] text-[#0369A1]",
  },
};

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Anfänger: "bg-[#ECFDF5] text-[#065F46]",
  Mittel: "bg-[#FEF3C7] text-[#92400E]",
  Fortgeschrittene: "bg-[#FEE2E2] text-[#991B1B]",
};
