# Karten-tricks.de Brand & Design Guide

**Version 1.0**  
*Modern Magic • Transparent Craft • Trusted Expertise*

---

## Inhaltsverzeichnis

1. [Brand Philosophy & Positionierung](#1-brand-philosophy--positionierung)
2. [Farbpalette](#2-farbpalette)
3. [Typografie](#3-typografie)
4. [UI-Komponenten](#4-ui-komponenten)
5. [Spacing & Layout](#5-spacing--layout)
6. [Quick Reference](#6-quick-reference)

---

## 1. Brand Philosophy & Positionierung

### Kernidee

**Magie entmystifiziert.** Wir zeigen, dass hinter jedem Trick Können, Übung und Handwerk steckt — keine dunklen Geheimnisse. Die Marke richtet sich an Menschen, die lernen wollen, beeindrucken wollen, und dabei auf Qualität und Transparenz setzen.

### Die drei Säulen

| Säule | Beschreibung |
|-------|-------------|
| **Modern** | Clean Design, keine Klischees, zeitgemäße UX, Digital-First |
| **Vertrauenswürdig** | Echte Expertise, Qualitätsprodukte, klare Kommunikation, Community-Fokus |
| **Transparent** | Tricks erklärt, keine Geheimniskrämerei, offene Preise, ehrliche Reviews |

### Zielgruppen

- **Hobbyisten** (18-35 Jahre) — Lernen Tricks für Freunde und Familie
- **Performer** (Semi-Profis) — Verbessern ihre Skills für Auftritte
- **Party-Hosts & Event-Planer** — Suchen Entertainment-Ideen
- **Sammler & Kartenliebhaber** — Interessieren sich für hochwertige Spielkarten

---

## 2. Farbpalette

### Primärfarben

| Name | Hex | RGB | Verwendung |
|------|-----|-----|------------|
| **Electric Violet** | `#7C3AED` | 124, 58, 237 | Primär, Brand Color, Buttons, Links |
| **Deep Slate** | `#1A1B26` | 26, 27, 38 | Dunkle Hintergründe, Header |
| **Soft White** | `#FAFAFA` | 250, 250, 250 | Helle Hintergründe |

### Akzentfarben

| Name | Hex | Verwendung |
|------|-----|------------|
| **Emerald** | `#10B981` | Erfolg, Tutorials, Fortschritt |
| **Coral** | `#F97316` | CTAs, Shop, Kaufen-Buttons |
| **Rose** | `#EC4899` | Party, Events, Specials |
| **Sky** | `#0EA5E9` | Info, Links, Hilfe |

### Violet-Skala (Primär)

```
50:  #F5F3FF  — Subtile Hintergründe
100: #EDE9FE  — Hover-States
200: #DDD6FE  — Light Fills
300: #C4B5FD  — Borders (light)
400: #A78BFA  — Secondary
500: #8B5CF6  — Medium
600: #7C3AED  — Primary ★
700: #6D28D9  — Hover
800: #5B21B6  — Active
900: #4C1D95  — Text auf hellem Hintergrund
```

### Slate-Skala (Neutrals)

```
50:  #F8FAFC  — Page Background
100: #F1F5F9  — Card Background
200: #E2E8F0  — Borders (light)
300: #CBD5E1  — Disabled
400: #94A3B8  — Placeholder Text
500: #64748B  — Secondary Text
600: #475569  — Body Text
700: #334155  — Headlines
800: #1E293B  — Dark Text
900: #0F172A  — Darkest
```

### Farbregeln

- Violet 600 für primäre Buttons und Links
- Slate 700-900 für Text
- Akzentfarben sparsam für Kategorien und Highlights
- Kein reines Schwarz (`#000`) verwenden
- Keine Farbverläufe als Hauptelement

---

## 3. Typografie

### Schriftfamilien

| Typ | Font | Quelle | Verwendung |
|-----|------|--------|------------|
| **Primär** | Inter | Google Fonts (Variable) | Headlines, Buttons, Navigation, UI |
| **Sekundär** | DM Sans | Google Fonts (Variable) | Fließtext, Beschreibungen |

### Gewichte

- **400 (Regular)** — Body Text, Beschreibungen
- **500 (Medium)** — Headlines, Labels, wichtige UI-Elemente
- **600 (Semibold)** — Display Headlines, CTAs

### Typografie-Skala

| Stufe | Größe | Gewicht | Line-Height | Verwendung |
|-------|-------|---------|-------------|------------|
| Display | 48px | 600 | 1.1 | Hero Headlines |
| H1 | 36px | 500 | 1.2 | Seitentitel |
| H2 | 28px | 500 | 1.3 | Sektionen |
| H3 | 22px | 500 | 1.4 | Untersektionen |
| Body | 16px | 400 | 1.6 | Fließtext |
| Small | 14px | 400 | 1.5 | Labels, Captions, Metadaten |

### CSS Import

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=DM+Sans:wght@400;500&display=swap');

:root {
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

---

## 4. UI-Komponenten

### Buttons

| Typ | Background | Text | Border | Verwendung |
|-----|------------|------|--------|------------|
| **Primary** | `#7C3AED` | White | None | Hauptaktionen |
| **Secondary** | Transparent | `#7C3AED` | 1.5px `#7C3AED` | Sekundäre Aktionen |
| **Ghost** | Transparent | Slate 500 | None | Abbrechen, Zurück |
| **CTA** | `#F97316` | White | None | Shop, Kaufen |
| **Success** | `#10B981` | White | None | Tutorial starten |

**Button Specs:**
- Padding: 12px 24px
- Border-Radius: 8px
- Font: 14px / 500

### Cards

#### Produkt-Card
- Background: White
- Border: 0.5px `border-tertiary`
- Border-Radius: 12px
- Bild oben, Content unten
- Marke als Label, Name bold, Preis prominent

#### Tutorial-Card
- Gradient-Header mit Play-Icon
- Dauer als Badge
- Schwierigkeits-Badge (farbcodiert)
- Kategorie-Tags

#### Artikel-Card
- Header mit Icon/Illustration
- Meta-Info: Kategorie, Lesezeit
- Titel und Teaser-Text

### Badges & Tags

#### Schwierigkeit
| Level | Background | Text |
|-------|------------|------|
| Anfänger | `#ECFDF5` | `#065F46` |
| Fortgeschritten | `#FEF3C7` | `#92400E` |
| Profi | `#FEE2E2` | `#991B1B` |

#### Kategorien
| Kategorie | Background | Text |
|-----------|------------|------|
| Kartentricks | `#F5F3FF` | `#5B21B6` |
| Münzen | `#FFF7ED` | `#9A3412` |
| Partytricks | `#FCE7F3` | `#9D174D` |
| Mentalismus | `#E0F2FE` | `#0369A1` |

#### Status
| Status | Background | Text |
|--------|------------|------|
| Neu | `#7C3AED` | White |
| Bestseller | `#F97316` | White |
| Premium | `#1A1B26` | White |

**Badge Specs:**
- Padding: 6px 12px
- Border-Radius: 6px
- Font: 12px / 500

### Formularelemente

**Text Input:**
- Height: 44px
- Padding: 12px 16px
- Border: 0.5px `border-secondary`
- Border-Radius: 8px
- Placeholder: Slate 400

**Search Input:**
- Wie Text Input
- Icon links (16px vom Rand)
- Extra Padding links: 40px

### Navigation

**Main Nav (Dark):**
- Background: `#1A1B26`
- Links: White
- Active: Violet 400 mit Underline
- CTA Button rechts

**Breadcrumb:**
- Separator: `/`
- Links: `text-info`
- Current: `text-primary`

---

## 5. Spacing & Layout

### Spacing-Skala (8px Basis)

| Token | Wert | Verwendung |
|-------|------|------------|
| `xs` | 4px | Inline-Elemente |
| `sm` | 8px | Kompakte Abstände |
| `md` | 12px | Standard-Gaps |
| `lg` | 16px | Card Padding |
| `xl` | 24px | Section Padding |
| `2xl` | 32px | Große Abstände |
| `3xl` | 48px | Section Spacing |
| `4xl` | 64px | Page Sections |
| `5xl` | 96px | Hero Spacing |

### Grid-System

- **Spalten:** 12
- **Gutter:** 16px (mobile), 24px (desktop)
- **Max Width:** 1280px
- **Außenabstand:** 24px

### Breakpoints

| Name | Breite | Spalten |
|------|--------|---------|
| Mobile | < 640px | 1 |
| Tablet | 640-1024px | 2-3 |
| Desktop | 1024-1440px | 3-4 |
| Wide | > 1440px | Max 1280px |

### Layout-Beispiele

```
// Content + Sidebar
[-------- 8 Spalten --------][-- 4 --]

// 3-Column Cards
[-- 4 --][-- 4 --][-- 4 --]

// 4-Column Grid
[- 3 -][- 3 -][- 3 -][- 3 -]
```

---

## 6. Quick Reference

### CSS Custom Properties

```css
:root {
  /* Farben */
  --color-primary: #7C3AED;
  --color-primary-light: #A78BFA;
  --color-primary-dark: #5B21B6;
  
  --color-dark: #1A1B26;
  --color-surface: #FAFAFA;
  
  --color-success: #10B981;
  --color-cta: #F97316;
  --color-info: #0EA5E9;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  
  /* Typografie */
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'DM Sans', sans-serif;
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  --space-4xl: 64px;
}
```

### Cheat Sheet

| Element | Wert |
|---------|------|
| Primary Color | `#7C3AED` |
| Dark Background | `#1A1B26` |
| Success | `#10B981` |
| CTA | `#F97316` |
| Heading Font | Inter |
| Body Font | DM Sans |
| Button Radius | 8px |
| Card Radius | 12px |
| Base Spacing | 8px |
| Max Width | 1280px |

---

## Anhang

### Font-Import (HTML)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

### Tailwind Config (Auszug)

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        dark: '#1A1B26',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
}
```

---

*Karten-tricks.de Brand Guide v1.0*  
*Erstellt: April 2026*
