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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Karten-tricks.de"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-[8px] text-sm font-medium text-slate-600 hover:text-[#7C3AED] hover:bg-violet-50 transition-colors font-[family-name:var(--font-inter)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/community"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#7C3AED] text-white text-sm font-medium px-5 py-2 rounded-[8px] hover:bg-[#6D28D9] transition-colors font-[family-name:var(--font-inter)]"
            >
              <svg className="w-4 h-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              Community
            </Link>
            <button
              className="md:hidden p-2 rounded-[8px] text-slate-600 hover:bg-slate-100"
              onClick={() => setOpen(!open)}
              aria-label="Menü öffnen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden py-3 border-t border-slate-200">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-violet-50 rounded-[8px]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/community"
              className="block mt-2 mx-3 text-center text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-4 py-2.5 rounded-[8px] transition-colors"
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
