import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, ArticleFrontmatter, Category } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getContentDir(category?: Category): string {
  return category ? path.join(CONTENT_DIR, category) : CONTENT_DIR;
}

export function getAllArticles(): Article[] {
  const categories = fs.readdirSync(CONTENT_DIR).filter((f) =>
    fs.statSync(path.join(CONTENT_DIR, f)).isDirectory()
  );

  const articles: Article[] = [];

  for (const cat of categories) {
    const catDir = path.join(CONTENT_DIR, cat);
    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(catDir, file), "utf-8");
      const { data, content } = matter(raw);
      articles.push({
        ...(data as ArticleFrontmatter),
        category: cat as Category,
        slug: file.replace(/\.(mdx|md)$/, ""),
        content,
      });
    }
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticlesByCategory(category: Category): Article[] {
  const catDir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(catDir)) return [];

  const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(catDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        ...(data as ArticleFrontmatter),
        category,
        slug: file.replace(/\.(mdx|md)$/, ""),
        content,
      } as Article;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(category: Category, slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, category, `${slug}.md`);

  const resolvedPath = fs.existsSync(filePath)
    ? filePath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!resolvedPath) return null;

  const raw = fs.readFileSync(resolvedPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...(data as ArticleFrontmatter),
    category,
    slug,
    content,
  };
}

export function getFeaturedArticles(limit = 6): Article[] {
  return getAllArticles()
    .filter((a) => a.featured)
    .slice(0, limit);
}

export function getRecentArticles(limit = 6): Article[] {
  return getAllArticles().slice(0, limit);
}

