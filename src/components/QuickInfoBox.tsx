import { Clock, Layers, Sparkles, Wand2 } from "lucide-react";
import type { Difficulty } from "@/lib/types";

interface QuickInfoBoxProps {
  difficulty?: Difficulty;
  duration?: string;
  deck?: string;
  preparation?: string;
}

export default function QuickInfoBox({
  difficulty = "Anfänger",
  duration = "10 Minuten",
  deck = "Standard (z.B. Bicycle)",
  preparation = "Keine (Impromptu)",
}: QuickInfoBoxProps) {
  return (
    <div className="glass-card mb-8 overflow-hidden rounded-2xl p-5 shadow-sm">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
        Auf einen Blick
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <Sparkles className="h-4 w-4 text-primary" />
            Schwierigkeit
          </div>
          <span className="text-sm text-slate-500">{difficulty}</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <Clock className="h-4 w-4 text-amber-500" />
            Dauer zum Lernen
          </div>
          <span className="text-sm text-slate-500">{duration}</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <Layers className="h-4 w-4 text-blue-500" />
            Kartendeck
          </div>
          <span className="text-sm text-slate-500">{deck}</span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
            <Wand2 className="h-4 w-4 text-purple-500" />
            Vorbereitung
          </div>
          <span className="text-sm text-slate-500">{preparation}</span>
        </div>
      </div>
    </div>
  );
}
