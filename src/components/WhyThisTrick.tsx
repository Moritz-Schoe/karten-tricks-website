import { Lightbulb } from "lucide-react";

interface WhyThisTrickProps {
  reason: string;
}

export default function WhyThisTrick({ reason }: WhyThisTrickProps) {
  if (!reason) return null;

  return (
    <div className="mb-8 rounded-2xl bg-primary/[0.06] p-6 border border-primary/20">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15">
          <Lightbulb className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h3 className="mb-1 text-[1.125rem] font-bold text-neutral-800">
            Warum solltest du diesen Kartentrick lernen?
          </h3>
          <p className="text-base leading-relaxed text-neutral-600">
            {reason}
          </p>
        </div>
      </div>
    </div>
  );
}
