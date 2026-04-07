import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";
import { CATEGORIES } from "@/lib/types";

const BASE_URL = "https://karten-tricks.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleUrls: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/${a.category}/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "monthly",
    priority: a.featured ? 0.9 : 0.7,
  }));

  const categoryUrls: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map((cat) => ({
    url: `${BASE_URL}/${cat}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 1.0 },
    {
      url: `${BASE_URL}/zaubertricks`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    { url: `${BASE_URL}/ueber-mich`, lastModified: new Date().toISOString(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/community`, lastModified: new Date().toISOString(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/impressum`, lastModified: new Date().toISOString(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/datenschutz`, lastModified: new Date().toISOString(), changeFrequency: "yearly", priority: 0.2 },
    ...categoryUrls,
    ...articleUrls,
  ];
}
