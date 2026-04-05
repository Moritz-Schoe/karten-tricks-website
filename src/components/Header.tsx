"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/kartentricks", label: "Kartentricks" },
  { href: "/party-tricks", label: "Party Tricks" },
  { href: "/cardistry", label: "Cardistry" },
  { href: "/techniken", label: "Techniken" },
  { href: "/spielkarten", label: "Spielkarten" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const shellRadius = open ? "rounded-3xl" : "rounded-full";

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-[var(--page-padding-x)] pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-[var(--space-grid-max)] overflow-hidden border border-white/65 bg-white/50 shadow-[0_12px_48px_-16px_rgba(15,23,42,0.18),inset_0_1px_0_0_rgba(255,255,255,0.8)] backdrop-blur-2xl backdrop-saturate-150 transition-[border-radius] duration-200 supports-[backdrop-filter]:bg-white/[0.38] ${shellRadius}`}
      >
        <div className="flex min-h-14 items-center justify-between gap-3 px-4 sm:min-h-[3.25rem] sm:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7C3AED]"
          >
            <Image
              src="/logo.png"
              alt="Karten-tricks.de"
              width={160}
              height={40}
              className="h-7 w-auto sm:h-8"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-violet-500/[0.12] hover:text-[#7C3AED]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/community"
              className="hidden items-center gap-1.5 rounded-full bg-[#7C3AED] px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#6D28D9] sm:inline-flex"
            >
              <svg className="h-4 w-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              Community
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-500/10 md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-200/50 bg-white/35 px-3 py-3 backdrop-blur-md md:hidden">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-500/10 hover:text-[#7C3AED]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/community"
              className="mx-1 mt-2 block rounded-full bg-[#7C3AED] px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#6D28D9]"
              onClick={() => setOpen(false)}
            >
              Community beitreten
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
