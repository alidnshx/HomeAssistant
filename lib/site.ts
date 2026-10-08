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
 * Base URL of the deployed site, used for canonical links and metadata.
 * Falls back to the Vercel-provided URL during preview/production builds,
 * and to localhost during local development. No domain is hard-coded.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;
