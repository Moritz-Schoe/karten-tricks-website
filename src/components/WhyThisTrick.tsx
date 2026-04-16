import { Lightbulb } from "lucide-react";
import type { Category } from "@/lib/types";

interface WhyThisTrickProps {
  reason: string;
  category?: Category;
}

export default function WhyThisTrick({ reason, category }: WhyThisTrickProps) {
  if (!reason) return null;

  let title = "Warum solltest du das lernen?";
  switch (category) {
    case "kartentricks":
      title = "Warum solltest du diesen Kartentrick lernen?";
      break;
    case "zaubertricks":
      title = "Warum solltest du diesen Zaubertrick lernen?";
      break;
    case "party-tricks":
      title = "Warum solltest du diesen Party-Trick lernen?";
      break;
    case "fingerfertigkeit":
      title = "Warum solltest du diese Technik lernen?";
      break;
    case "cardistry":
      title = "Warum solltest du diesen Move lernen?";
      break;
    case "spielkarten":
      title = "Was macht dieses Deck besonders?";
      break;
    default:
      title = "Warum solltest du diesen Kartentrick lernen?";
  }

  return (
    <div className="mb-8 rounded-2xl bg-primary/[0.06] p-6 border border-primary/20">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15">
          <Lightbulb className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h3 className="mb-1 text-[1.125rem] font-bold text-neutral-800">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-neutral-600">
            {reason}
          </p>
        </div>
      </div>
    </div>
  );
}
