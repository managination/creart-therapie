/**
 * SEO helpers for per-route <head> tags.
 *
 * Architecture (CSR SPA — avoid duplicate tags):
 * - Router-managed (dynamic, per route): <title>, meta description, canonical.
 *   Set via each route's `head` option using this helper.
 * - Static in index.html (scrapers don't run JS): og:*, twitter:*, icons,
 *   theme-color, JSON-LD. Never set those from route `head` to avoid dupes.
 */

export const SITE_URL = "https://creart-therapie.ch";
export const SITE_NAME = "Atelier Créart-Thérapie";

interface SeoOptions {
  title: string;
  description: string;
  /** Path starting with "/" — used to build the canonical URL. */
  path: string;
}

export function seo({ title, description, path }: SeoOptions) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
  };
}
