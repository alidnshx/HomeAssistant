/**
 * Central place for site-wide constants.
 * Keeping these in one file avoids duplicating strings across pages
 * and makes it easy to update contact details or copy in one spot.
 */

export const SITE_NAME = "Prynce Home Assistant";

export const SITE_DESCRIPTION =
  "Private Home Assistant integration for accessing and controlling Google Nest devices through Google Device Access.";

export const CONTACT_EMAIL = "adnshvr@gmail.com";

export const LAST_UPDATED = "October 8, 2026";

/**
 * Base URL of the deployed site (including any base path), used for
 * canonical links and metadata. Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` – set explicitly by the GitHub Actions workflow
 *    (e.g. "https://<owner>.github.io/<repo-name>") or a custom domain.
 * 2. `VERCEL_URL` – set automatically on Vercel deployments, if ever used.
 * 3. localhost – used during local development.
 * No domain is hard-coded in source.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

/**
 * Builds an absolute canonical URL for a given site-root-relative path
 * (e.g. "/privacy"). Using SITE_URL directly (rather than relying on
 * Next.js's metadataBase + relative-URL resolution) avoids the leading
 * slash in the path being resolved against the domain root, which would
 * silently drop any base path (e.g. "/HomeAssistant") on GitHub Pages.
 */
export function canonicalUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  return `${base}${normalizedPath}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;
