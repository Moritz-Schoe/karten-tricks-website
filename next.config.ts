import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Old WordPress category slugs
      { source: "/category/kartentricks-fuer-anfaenger", destination: "/kartentricks", permanent: true },
      { source: "/category/kartentricks-fuer-anfaenger/:path*", destination: "/kartentricks", permanent: true },
      { source: "/category/handgriffe", destination: "/fingerfertigkeit", permanent: true },
      { source: "/category/handgriffe/:path*", destination: "/fingerfertigkeit", permanent: true },
      { source: "/category/impromptu", destination: "/kartentricks", permanent: true },
      { source: "/category/impromptu/:path*", destination: "/kartentricks", permanent: true },
      { source: "/category/mathematische-kartentricks", destination: "/kartentricks", permanent: true },
      { source: "/category/mathematische-kartentricks/:path*", destination: "/kartentricks", permanent: true },

      // All 22 original WP post slugs → new routes
      { source: "/technik-top-3-forces", destination: "/fingerfertigkeit/forces", permanent: true },
      { source: "/misdirection", destination: "/fingerfertigkeit/misdirection", permanent: true },
      { source: "/zuschauer-findet-seine-eigene-karte", destination: "/kartentricks/zuschauer-findet-karte", permanent: true },
      { source: "/karte-erraten", destination: "/kartentricks/karte-erraten", permanent: true },
      { source: "/ambitious-card-routine", destination: "/kartentricks/ambitious-card-routine", permanent: true },
      { source: "/technik-pinky-break", destination: "/fingerfertigkeit/pinky-break", permanent: true },
      { source: "/any-card-at-any-number-acaan", destination: "/kartentricks/acaan", permanent: true },
      { source: "/mathematischer-kartentrick-3x-abheben", destination: "/kartentricks/dreimal-abheben", permanent: true },
      { source: "/der-beste-kartentrick-der-welt-chicago-opener", destination: "/kartentricks/chicago-opener", permanent: true },
      { source: "/double-lift", destination: "/fingerfertigkeit/double-lift", permanent: true },
      { source: "/three-card-monte", destination: "/kartentricks/three-card-monte", permanent: true },
      { source: "/mathematischer-kartentrick-drei-stapel-21-karten", destination: "/kartentricks/21-karten", permanent: true },
      { source: "/einfacher-kartentrick-umgedrehte-karte", destination: "/kartentricks/umgedrehte-karte", permanent: true },
      { source: "/einfacher-kartentrick-vier-asse", destination: "/kartentricks/vier-asse", permanent: true },
      { source: "/kartentrick-leitfaden-anfaenger", destination: "/kartentricks/anfaenger-guide", permanent: true },
      { source: "/einfacher-kartentrick-zuschauer-findet-karte-an-gewuenschter-position", destination: "/kartentricks/karte-an-position", permanent: true },
      { source: "/unglaublichste-kartentrick", destination: "/kartentricks/herz-sieben", permanent: true },
      { source: "/karten-mischen-6-einfache-methoden", destination: "/fingerfertigkeit/karten-mischen", permanent: true },
      { source: "/spielkarten-kartendeck", destination: "/spielkarten-vergleich", permanent: true },
      { source: "/spielkarten/vergleich", destination: "/spielkarten-vergleich", permanent: true },
      { source: "/zaubersprueche", destination: "/zaubertricks/zaubersprueche", permanent: true },
      { source: "/kartentricks/zaubersprueche", destination: "/zaubertricks/zaubersprueche", permanent: true },
      { source: "/die-besten-zauberkaesten-fuer-angehende-magier", destination: "/spielkarten/zauberkaesten", permanent: true },
      { source: "/kartenhaus-bauen", destination: "/party-tricks/kartenhaus-bauen", permanent: true },
      { source: "/kartentricks/kartenhaus-bauen", destination: "/party-tricks/kartenhaus-bauen", permanent: true },

      // Old WP slug variants
      { source: "/zaubertrick-nr-1", destination: "/kartentricks/zuschauer-findet-karte", permanent: true },
      { source: "/zaubertrick-nr-2", destination: "/kartentricks/karte-erraten", permanent: true },
      { source: "/kartentrick-karte-erraten", destination: "/kartentricks/karte-erraten", permanent: true },
      { source: "/einfacher-zaubertrick-ambitious-card-routine", destination: "/kartentricks/ambitious-card-routine", permanent: true },
      { source: "/einfacher-kartentrick-any-card-at-any-number-acaan", destination: "/kartentricks/acaan", permanent: true },
      { source: "/zaubern-lernen-misdirection", destination: "/fingerfertigkeit/misdirection", permanent: true },

      // Old WP pages
      { source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true },
      { source: "/ueber-mich-2", destination: "/ueber-mich", permanent: true },

      // Old WP image paths — strip year/month dirs since images are now flat
      { source: "/wp-content/uploads/:year/:month/:file", destination: "/images/:file", permanent: true },
      // Images still in year/month subfolders under /images/
      { source: "/images/:year/:month/:file", destination: "/images/:file", permanent: true },
    ];
  },
};

export default nextConfig;
