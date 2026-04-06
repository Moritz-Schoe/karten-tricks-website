import Link from "next/link";
import { CircleHelp } from "lucide-react";

export default function NotFound() {
  return (
    <div className="layout-page py-24">
      <div className="mx-auto max-w-2xl text-center">
      <div className="glass-card w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
        <CircleHelp className="w-10 h-10 text-[#FF007D]" strokeWidth={1.5} />
      </div>
      <h1 className="text-3xl font-medium text-slate-800 mb-3">Diese Seite gibt es nicht</h1>
      <p className="text-slate-500 mb-8">
        Vielleicht war der Link falsch oder die Seite wurde verschoben.
      </p>
      <div className="flex gap-3 justify-center">
        <div className="accent-border rounded-full p-[2px]">
          <Link
            href="/"
            className="block bg-white hover:bg-slate-50 text-slate-800 font-medium px-6 py-3 rounded-full transition-colors text-sm"
          >
            Zur Startseite
          </Link>
        </div>
        <Link
          href="/kartentricks"
          className="glass-card font-medium px-6 py-3 rounded-full text-[#FF007D] text-sm transition-colors hover:shadow-[0_8px_32px_-8px_rgba(255,0,125,0.15)]"
        >
          Tricks entdecken
        </Link>
      </div>
      </div>
    </div>
  );
}
