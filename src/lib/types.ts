export type Difficulty = "Anfänger" | "Mittel" | "Fortgeschrittene";

export type Category =
  | "kartentricks"
  | "cardistry"
  | "fingerfertigkeit"
  | "spielkarten"
  | "zaubertricks";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  lastModified?: string;
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
  { label: string; h1: string; description: string; color: string; metaTitle: string; metaDescription: string; keywords: string[] }
> = {
  kartentricks: {
    label: "Kartentricks",
    h1: "Kartentricks lernen",
    description: "Schritt-für-Schritt Anleitungen für beeindruckende Kartentricks. Von Klassikern bis zum Geheimtipp.",
    metaTitle: "Kartentricks lernen mit Schritt-für-Schritt Anleitungen",
    metaDescription: "Lerne Kartentricks Schritt für Schritt. Von einfachen Tricks für Anfänger bis hin zu fortgeschrittenen Techniken. Kostenlose Anleitungen auf Deutsch mit Spielkarten.",
    keywords: ["Kartentricks", "Kartentricks lernen", "einfache Kartentricks", "Kartentricks Anfänger", "Kartentricks Anleitung"],
    color: "bg-[#F4F7FF] border-[#9BB0D2] text-[#5872A0]",
  },
  cardistry: {
    label: "Cardistry",
    h1: "Cardistry lernen: Karten als Kunstform",
    description: "Karten als Kunstform: Lerne Flourishes, Cuts und Fans für ein beeindruckendes Kartenerlebnis.",
    metaTitle: "Cardistry lernen: Cuts, Flourishes & Fans auf Deutsch",
    metaDescription: "Lerne Cardistry auf Deutsch. Von ersten Cuts und Flourishes bis zu beeindruckenden Fans. Schritt-für-Schritt Anleitungen für Anfänger und Fortgeschrittene.",
    keywords: ["Cardistry", "Cardistry lernen", "Cardistry Anfänger", "Kartenkunst", "Flourishes lernen", "Cuts lernen"],
    color: "bg-[#F4F7FF] border-[#9BB0D2] text-[#5872A0]",
  },
  fingerfertigkeit: {
    label: "Fingerfertigkeit",
    h1: "Fingerfertigkeit & Kartentrick-Techniken",
    description: "Die handwerklichen Grundlagen: Forces, Double Lift, Kontrollen und Präsentation.",
    metaTitle: "Fingerfertigkeit & Kartentrick-Techniken lernen",
    metaDescription: "Lerne die Grundlagen der Kartenmagie: Double Lift, Pinky Break, Forces und Misdirection. Techniken-Anleitungen für Anfänger und Fortgeschrittene auf Deutsch.",
    keywords: ["Kartentrick Techniken", "Double Lift lernen", "Pinky Break", "Kartentricks Grundlagen", "Fingerfertigkeit Karten", "Forces Kartentricks"],
    color: "bg-[#FFF7ED] border-[#FED7AA] text-[#9A3412]",
  },
  spielkarten: {
    label: "Spielkarten",
    h1: "Spielkarten für Zauberer & Cardistry",
    description: "Guides und Reviews: welche Karten für welchen Zweck. Von Bicycle bis zu Cardistry-Decks.",
    metaTitle: "Spielkarten kaufen: Tests, Tipps & Vergleiche",
    metaDescription: "Welche Spielkarten sind am besten für Kartentricks, Cardistry und Poker? Ausführliche Tests und Vergleiche von Bicycle bis NOC. Für Anfänger und Profis.",
    keywords: ["Spielkarten kaufen", "beste Spielkarten", "Spielkarten Vergleich", "Bicycle Karten", "Kartentricks Spielkarten", "Cardistry Karten"],
    color: "bg-[#E0F2FE] border-[#7DD3FC] text-[#0369A1]",
  },
  zaubertricks: {
    label: "Zaubertricks",
    h1: "Zaubertricks lernen",
    description: "Mentalmagie, Münzmagie und mehr: Zaubertricks abseits der Karten, Schritt für Schritt erklärt.",
    metaTitle: "Zaubertricks lernen: Mentalmagie, Münzmagie & mehr",
    metaDescription: "Lerne Zaubertricks aus den Bereichen Mentalmagie und Münzmagie. Schritt-für-Schritt Anleitungen für Anfänger auf Deutsch, kostenlos.",
    keywords: ["Zaubertricks", "Mentalmagie", "Münzmagie", "Zaubertricks lernen", "Mentalzauberei", "Münze verschwinden lassen"],
    color: "bg-[#F0FDF4] border-[#86EFAC] text-[#166534]",
  },
};

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Anfänger: "bg-[#ECFDF5] text-[#065F46]",
  Mittel: "bg-[#FEF3C7] text-[#92400E]",
  Fortgeschrittene: "bg-[#FEE2E2] text-[#991B1B]",
};
