import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  "Tricks": [
    { href: "/kartentricks", label: "Kartentricks" },
    { href: "/cardistry", label: "Cardistry" },
    { href: "/techniken", label: "Techniken" },
    { href: "/party-tricks", label: "Party Tricks" },
  ],
  "Situationen": [
    { href: "/party-tricks/geburtstag", label: "Geburtstag" },
    { href: "/party-tricks/firmenfeier", label: "Firmenfeier" },
    { href: "/party-tricks/kinder", label: "Für Kinder" },
  ],
  "Seiten": [
    { href: "/spielkarten", label: "Spielkarten-Guide" },
    { href: "/ueber-mich", label: "Über mich" },
    { href: "/community", label: "Community & Discord" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1B26] text-white mt-20">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo.png"
                alt="Karten-tricks.de"
                width={160}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Die deutschsprachige Ressource für Kartentricks und Kartenmagie – von Anfänger bis Fortgeschritten.
            </p>
            <Link
              href="/community"
              className="inline-flex items-center gap-1 mt-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium px-5 py-2 rounded-[8px] transition-colors"
            >
              Discord beitreten
            </Link>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-medium text-slate-300 mb-3 text-sm uppercase tracking-wider font-[family-name:var(--font-inter)]">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} karten-tricks.de &ndash; Moritz Sch&ouml;bs</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
