# karten-tricks.de

Die deutschsprachige Ressource für Kartentricks und Kartenmagie — von Anfänger bis Fortgeschritten.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript 5
- **Styling:** Tailwind CSS 4 (PostCSS-Plugin)
- **Content:** MDX-Dateien in `content/`, verarbeitet mit `gray-matter` + `marked`
- **Deployment:** Vercel

## Projektstruktur

```
├── content/              # MDX-Artikel, nach Kategorie sortiert
│   ├── kartentricks/
│   ├── cardistry/
│   ├── techniken/
│   ├── party-tricks/
│   └── spielkarten/
├── docs/                 # Dokumentation & Migrationsdaten
│   ├── brand-guide.md
│   └── wp-migration/     # WordPress-Export (JSON, XML)
├── public/               # Statische Assets
│   ├── favicon.png       # Favicon / App-Icon (512x512)
│   ├── logo.png          # Website-Logo (400x123)
│   └── images/           # Artikelbilder (flach, ohne Unterordner)
├── src/
│   ├── app/              # Next.js App Router (Seiten, Layout, SEO)
│   ├── components/       # React-Komponenten
│   └── lib/              # Utilities (Content-Loader, Markdown, Types)
└── package.json
```

## Entwicklung

```bash
npm install
npm run dev          # Entwicklungsserver auf localhost:3000
npm run build        # Produktions-Build
npm run lint         # ESLint
```

## Bilder

Artikelbilder liegen flach in `public/images/` und werden in MDX-Dateien als `/images/dateiname.jpg` referenziert. Logo und Favicon liegen direkt in `public/`.
