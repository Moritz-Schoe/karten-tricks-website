const boxClass =
  "rounded-[18px] border border-[#E8B589] bg-[#FFF9F0] p-6 sm:p-7";

const headingClass =
  "font-semibold text-[#5C2E0A] text-base sm:text-lg mb-3";

const linkClass =
  "text-[#5C2E0A] hover:text-[#3D1F06] font-medium text-sm hover:underline";

const disclaimerClass =
  "text-xs text-[#6B3A18] mt-4 leading-relaxed";

const disclaimerText =
  "* Affiliate-Links. Bei einem Kauf erhalte ich eine kleine Provision – für dich entstehen keine Mehrkosten.";

export interface AffiliateItem {
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
              → {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className={disclaimerClass}>{disclaimerText}</p>
    </div>
  );
}

/** Hinweis unter Artikeln mit Affiliate-Links nur im Fließtext (ohne Frontmatter-Box). */
export function AffiliateInlineNotice({ className = "" }: { className?: string }) {
  return (
    <div className={`${boxClass} ${className}`.trim()}>
      <p className={`${disclaimerClass} mt-0`}>{disclaimerText}</p>
    </div>
  );
}
