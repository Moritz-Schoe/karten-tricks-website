import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von karten-tricks.de - Angaben gemäß § 5 TMG.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="layout-page py-12">
      <div className="mx-auto max-w-3xl">
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">Impressum</span>
      </nav>

      <h1 className="text-[36px] font-medium text-slate-800 mb-8 leading-[1.2]">Impressum</h1>

      <div className="prose">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Moritz Schöbs<br />
          karten-tricks.de<br />
          [Adresse auf Anfrage]
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: kontakt@karten-tricks.de
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Moritz Schöbs<br />
          [Adresse auf Anfrage]
        </p>

        <h2>Haftungsausschluss</h2>

        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
          und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h3>Affiliate-Links</h3>
        <p>
          Diese Website enthält Affiliate-Links zu Produkten. Bei einem Kauf über diese Links erhalten wir
          eine kleine Provision - für dich entstehen keine Mehrkosten. Wir empfehlen nur Produkte, die wir
          selbst verwenden oder getestet haben.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </div>
      </div>
    </div>
  );
}
