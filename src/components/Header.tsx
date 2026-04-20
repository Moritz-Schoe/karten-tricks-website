"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";

const NAV_ITEMS = [
  { href: "/kartentricks", label: "Kartentricks" },
  { href: "/zaubertricks", label: "Zaubertricks" },
  { href: "/zaubersprüche", label: "Zaubersprüche" },
  { href: "/kartentricks/cardistry", label: "Cardistry" },
  { href: "/spielkarten-vergleich", label: "Spielkarten Vergleich" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-[var(--page-padding-x)] pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-[var(--space-grid-max)] overflow-hidden border border-black/[0.06] bg-white/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.8)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/[0.45] ${open ? "rounded-3xl" : "rounded-full"}`}
      >
        <div className="flex h-[52px] items-center justify-between gap-4 px-4 sm:h-14 sm:px-5">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-full px-2 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <Image
              src="/logo.svg"
              alt="Karten-tricks.de"
              width={160}
              height={40}
              className="h-6 w-auto sm:h-7"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "bg-black/[0.07] text-neutral-900"
                      : "text-neutral-500 hover:bg-black/[0.04] hover:text-neutral-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
                href="https://discord.gg/QQ2nDMPZ6p"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-neutral-800 transition-colors hover:bg-neutral-50 sm:flex"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                </svg>
                Discord
              </a>
            <Link
              href="/shop"
              className={`hidden items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[13px] font-medium transition-colors hover:bg-neutral-50 sm:flex ${
                pathname.startsWith("/shop")
                  ? "text-neutral-900 ring-1 ring-black/10"
                  : "text-neutral-800"
              }`}
            >
              <ShoppingBag className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Shop
            </Link>

            <button
              type="button"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-black/[0.05] hover:text-neutral-800 md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu — grid-rows trick for smooth height animation, no flash of circle */}
        <div
          className={`grid md:hidden transition-[grid-template-rows] duration-300 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-black/[0.06] px-4 py-3 sm:px-5">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-2xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-black/[0.07] text-neutral-900"
                        : "text-neutral-500 hover:bg-black/[0.04] hover:text-neutral-800"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="https://discord.gg/QQ2nDMPZ6p"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 mt-2 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                </svg>
                Discord beitreten
              </a>
              <Link
                href="/shop"
                className={`mx-1 mt-2 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50 ${
                  pathname.startsWith("/shop") ? "text-neutral-900 ring-1 ring-black/10" : "text-neutral-800"
                }`}
                onClick={() => setOpen(false)}
              >
                <ShoppingBag className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
