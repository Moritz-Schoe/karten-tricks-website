import { ArrowRight } from "lucide-react";

const boxClass =
  "rounded-2xl border border-primary/25 bg-primary/[0.05] backdrop-blur-sm p-6 sm:p-7 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)]";

const headingClass =
  "font-semibold text-neutral-800 text-base sm:text-lg mb-3";

const linkClass =
  "text-neutral-700 hover:text-primary font-medium text-sm hover:underline";

const disclaimerClass =
  "text-xs text-neutral-500 mt-4 leading-relaxed";

const disclaimerText =
  "* Affiliate-Links. Bei einem Kauf erhalte ich eine kleine Provision. Für dich entstehen keine Mehrkosten.";

interface AffiliateItem {
  label: string;
  url: string;
}

type Props = {
  items: AffiliateItem[];
  className?: string;
};

export default function AffiliateRecommendations({ items, className = "" }: Props) {
  if (items.length === 0) return null;

  return (
    <div className={`${boxClass} ${className}`.trim()}>
      <h3 className={headingClass}>Empfohlene Produkte</h3>
      <ul className="space-y-2 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item.url} className="pl-0 before:content-none">
            <a
              href={item.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className={linkClass}
            >
              <ArrowRight className="inline h-3.5 w-3.5 mr-1" />{item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className={disclaimerClass}>{disclaimerText}</p>
    </div>
  );
}

export function AffiliateInlineNotice({ className = "" }: { className?: string }) {
  return (
    <div className={`${boxClass} ${className}`.trim()}>
      <p className={`${disclaimerClass} mt-0`}>{disclaimerText}</p>
    </div>
  );
}
