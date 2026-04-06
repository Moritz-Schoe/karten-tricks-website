import { marked } from "marked";
import type { Tokens } from "marked";

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizeHttpHref(href: string): string | null {
  try {
    const u = new URL(href);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.href;
  } catch {
    return null;
  }
}

function isAffiliateProductUrl(href: string): boolean {
  const normalized = normalizeHttpHref(href);
  if (!normalized) return false;
  const host = new URL(normalized).hostname.replace(/^www\./i, "").toLowerCase();
  return host === "amzn.to" || host.endsWith("amazon.de") || host.endsWith("amazon.com");
}

/** True if markdown contains affiliate product URLs (typically as link targets). */
export function articleContainsAffiliateLinks(markdown: string): boolean {
  return /https?:\/\/(?:www\.)?amzn\.to\/\S+/i.test(markdown) ||
    /https?:\/\/(?:www\.)?amazon\.(de|com)\/\S+/i.test(markdown);
}

marked.use({
  renderer: {
    link(this: { parser: { parseInline: (tokens: Tokens.Generic[]) => string } }, token: Tokens.Link) {
      if (!isAffiliateProductUrl(token.href)) {
        return false as unknown as string;
      }
      const safeHref = normalizeHttpHref(token.href);
      if (!safeHref) return false as unknown as string;

      const inner = this.parser.parseInline(token.tokens);
      const title = token.title ? ` title="${escapeHtmlAttr(token.title)}"` : "";

      return `<a href="${escapeHtmlAttr(safeHref)}" class="prose-affiliate-link" rel="sponsored noopener noreferrer" target="_blank"${title}>${inner}</a>`;
    },
  },
});

export function renderArticleMarkdown(content: string): string {
  return marked(content, { async: false }) as string;
}
