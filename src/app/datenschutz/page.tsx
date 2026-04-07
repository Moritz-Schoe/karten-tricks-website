import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von karten-tricks.de – Informationen zur Erhebung und Verarbeitung personenbezogener Daten.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="layout-page py-12">
      <div className="mx-auto max-w-3xl">
      <nav className="text-sm text-neutral-400 mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-600">Datenschutz</span>
      </nav>

      <h1 className="text-[36px] font-medium text-neutral-800 mb-8 leading-[1.2]">Datenschutzerklärung</h1>

      <div className="prose">
        <h2>1. Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
          Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
          Sie persönlich identifiziert werden können.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Impressum dieser Website entnehmen.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
          werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
          Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
          und sonstige Daten, die über eine Website generiert werden, handeln.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
          Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerklärung.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
          Moritz<br />
          E-Mail: kontakt@karten-tricks.de
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>

        <h3>Cookies</h3>
        <p>
          Diese Website verwendet derzeit keine Cookies zur Analyse oder Werbung. Technisch notwendige
          Cookies können durch das Hosting gesetzt werden.
        </p>

        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>

        <h2>5. Affiliate-Links</h2>
        <p>
          Diese Website enthält Affiliate-Links. Wenn Sie auf einen solchen Link klicken und einen
          Kauf tätigen, erhalten wir eine Provision. Es werden dabei keine personenbezogenen Daten
          von uns an den Affiliate-Partner übermittelt. Der Affiliate-Partner kann seinerseits Cookies setzen.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
          oder Löschung dieser Daten zu verlangen.
        </p>
        <p>
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit
          für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </p>
      </div>
      </div>
    </div>
  );
}
