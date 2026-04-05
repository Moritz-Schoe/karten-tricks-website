import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="w-20 h-20 bg-[#F5F3FF] rounded-[16px] flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </div>
      <h1 className="text-3xl font-medium text-slate-800 mb-3 font-[family-name:var(--font-inter)]">Diese Seite gibt es nicht</h1>
      <p className="text-slate-500 mb-8">
        Vielleicht war der Link falsch oder die Seite wurde verschoben.
      </p>
      <div className="flex gap-3 justify-center">
        <Link
          href="/"
          className="bg-[#7C3AED] text-white font-medium px-6 py-3 rounded-[8px] hover:bg-[#6D28D9] transition-colors text-sm font-[family-name:var(--font-inter)]"
        >
          Zur Startseite
        </Link>
        <Link
          href="/kartentricks"
          className="border-[1.5px] border-[#7C3AED] text-[#7C3AED] font-medium px-6 py-3 rounded-[8px] hover:bg-[#F5F3FF] transition-colors text-sm font-[family-name:var(--font-inter)]"
        >
          Tricks entdecken
        </Link>
      </div>
    </div>
  );
}
