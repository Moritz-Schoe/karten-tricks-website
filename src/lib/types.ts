export type Difficulty = "Anfänger" | "Mittel" | "Fortgeschrittene";

export type Category =
  | "kartentricks"
  | "cardistry"
  | "fingerfertigkeit"
  | "party-tricks"
  | "spielkarten";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  category: Category;
  slug: string;
  difficulty?: Difficulty;
  duration?: string;
  deck?: string;
  preparation?: string;
  whyThisTrick?: string;
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
  { label: string; description: string; color: string; metaTitle: string; metaDescription: string; keywords: string[] }
> = {
  kartentricks: {
    label: "Kartentricks",
    description: "Schritt-für-Schritt Anleitungen für beeindruckende Kartentricks – vom Klassiker bis zum Geheimtipp.",
    metaTitle: "Kartentricks lernen - Schritt-für-Schritt Anleitungen",
    metaDescription: "Lerne Kartentricks Schritt für Schritt – einfache Tricks für Anfänger bis hin zu fortgeschrittenen Techniken. Kostenlose Anleitungen auf Deutsch mit Spielkarten.",
    keywords: ["Kartentricks", "Kartentricks lernen", "einfache Kartentricks", "Kartentricks Anfänger", "Kartentricks Anleitung"],
    color: "bg-[#FFFBEB] border-[#EECD5C] text-[#B28D33]",
  },
  cardistry: {
    label: "Cardistry",
    description: "Karten als Kunstform – lerne Flourishes, Cuts und Fans für ein beeindruckendes Kartenerlebnis.",
    metaTitle: "Cardistry lernen - Cuts, Flourishes & Fans auf Deutsch",
    metaDescription: "Lerne Cardistry auf Deutsch – von ersten Cuts und Flourishes bis zu beeindruckenden Fans. Schritt-für-Schritt Anleitungen für Anfänger und Fortgeschrittene.",
    keywords: ["Cardistry", "Cardistry lernen", "Cardistry Anfänger", "Kartenkunst", "Flourishes lernen", "Cuts lernen"],
    color: "bg-[#FFFBEB] border-[#EECD5C] text-[#B28D33]",
  },
  fingerfertigkeit: {
    label: "Fingerfertigkeit",
    description: "Die handwerklichen Grundlagen: Forces, Double Lift, Kontrollen und Präsentation.",
    metaTitle: "Fingerfertigkeit & Kartentrick-Techniken lernen",
    metaDescription: "Lerne die Grundlagen der Kartenmagie: Double Lift, Pinky Break, Forces und Misdirection. Techniken-Anleitungen für Anfänger und Fortgeschrittene auf Deutsch.",
    keywords: ["Kartentrick Techniken", "Double Lift lernen", "Pinky Break", "Kartentricks Grundlagen", "Fingerfertigkeit Karten", "Forces Kartentricks"],
    color: "bg-[#FFF7ED] border-[#FED7AA] text-[#9A3412]",
  },
  "party-tricks": {
    label: "Party Tricks",
    description: "Kartentricks im richtigen Kontext: Geburtstag, Firmenfeier, Kinder – wann welcher Trick funktioniert.",
    metaTitle: "Kartentricks für Partys & Geburtstage",
    metaDescription: "Die besten Kartentricks für Partys, Geburtstage und Feiern. Einfache Zaubertricks mit Karten, die vor Gruppen garantiert funktionieren – kostenlos erklärt.",
    keywords: ["Party Tricks", "Zaubertricks Geburtstag", "Kartentricks für Kinder", "Tricks für Gruppen", "Party Zaubertricks", "Kartentricks Party"],
    color: "bg-[#FFFBEB] border-[#EECD5C] text-[#B28D33]",
  },
  spielkarten: {
    label: "Spielkarten",
    description: "Guides und Reviews: welche Karten für welchen Zweck – von Bicycle bis zu Cardistry-Decks.",
    metaTitle: "Spielkarten kaufen - Tests, Tipps & Vergleiche",
    metaDescription: "Welche Spielkarten sind am besten für Kartentricks, Cardistry und Poker? Ausführliche Tests und Vergleiche von Bicycle bis NOC – für Anfänger und Profis.",
    keywords: ["Spielkarten kaufen", "beste Spielkarten", "Spielkarten Vergleich", "Bicycle Karten", "Kartentricks Spielkarten", "Cardistry Karten"],
    color: "bg-[#E0F2FE] border-[#7DD3FC] text-[#0369A1]",
  },
};

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Anfänger: "bg-[#ECFDF5] text-[#065F46]",
  Mittel: "bg-[#FEF3C7] text-[#92400E]",
  Fortgeschrittene: "bg-[#FEE2E2] text-[#991B1B]",
};
