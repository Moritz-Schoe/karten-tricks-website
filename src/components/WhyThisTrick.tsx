import { Lightbulb } from "lucide-react";

interface WhyThisTrickProps {
  reason: string;
}

export default function WhyThisTrick({ reason }: WhyThisTrickProps) {
  if (!reason) return null;

  return (
    <div className="mb-8 rounded-2xl bg-amber-50/50 p-6 border border-amber-100">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100">
          <Lightbulb className="h-4 w-4 text-amber-600" />
        </div>
        <div>
          <h3 className="mb-1 text-[1.125rem] font-bold text-slate-800">
            Warum solltest du diesen Kartentrick lernen?
          </h3>
          <p className="text-base leading-relaxed text-slate-600">
            {reason}
          </p>
        </div>
      </div>
    </div>
  );
}
