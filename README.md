# Prynce Home Assistant

Minimal, production-ready Next.js (App Router) website that serves as the public
presence for the **Prynce Home Assistant** Google OAuth application: a private,
non-commercial integration between Home Assistant and Google Nest / Google
Device Access.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (system font stack only, no external fonts)
- No database, no cookies, no tracking, no analytics
- Minimal dependencies

## Pages

| Route      | Purpose                                      |
| ---------- | --------------------------------------------- |
| `/`        | Homepage: what the app does, Google API usage |
| `/privacy` | Privacy Policy                                |
| `/terms`   | Terms of Service                              |
| `/contact` | Simple contact page                           |

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

The site builds as a static export (`output: "export"` in
[next.config.ts](/Users/alidaneshvar/Desktop/Claude/HomeAssistant/next.config.ts)), so `next start` does not apply.

```bash
npm run build   # writes static HTML/CSS/JS to ./out
npm run serve   # preview the exported ./out folder locally
```

To build locally with the same base path GitHub Pages uses in production:

```bash
NEXT_PUBLIC_BASE_PATH=/HomeAssistant \
NEXT_PUBLIC_SITE_URL=https://alidnshx.github.io/HomeAssistant \
npm run build
```

## Deployment (GitHub Pages)

This repository deploys automatically via
[.github/workflows/deploy.yml](/Users/alidaneshvar/Desktop/Claude/HomeAssistant/.github/workflows/deploy.yml) on every push to `main`:

1. **Enable Pages once** (manual, one-time step): in the repository on GitHub,
   go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main` — the workflow builds the site with `NEXT_PUBLIC_BASE_PATH`
   and `NEXT_PUBLIC_SITE_URL` derived automatically from the repository name
   and owner, then publishes the `out/` folder via
   `actions/upload-pages-artifact` + `actions/deploy-pages`.
3. The site becomes available at:
   `https://<owner>.github.io/<repo-name>/` — for this repository, that is
   `https://alidnshx.github.io/HomeAssistant/`.

No domain is hard-coded anywhere in the source — `basePath`, `assetPrefix`,
and `SITE_URL` are all derived from environment variables set by the
workflow at build time (see
[lib/site.ts](/Users/alidaneshvar/Desktop/Claude/HomeAssistant/lib/site.ts) and
[next.config.ts](/Users/alidaneshvar/Desktop/Claude/HomeAssistant/next.config.ts)). If you later connect a
custom domain via GitHub Pages, just set `NEXT_PUBLIC_SITE_URL` to that domain
(and `NEXT_PUBLIC_BASE_PATH` to an empty string) in the workflow.

A `public/.nojekyll` file disables GitHub Pages' default Jekyll processing so
that the `_next/` asset folder is served correctly.

## Google Auth Platform configuration

Once deployed, use the following URLs for the OAuth consent screen branding:

- **App homepage**: `https://alidnshx.github.io/HomeAssistant/`
- **Privacy policy link**: `https://alidnshx.github.io/HomeAssistant/privacy`
- **Terms of service link**: `https://alidnshx.github.io/HomeAssistant/terms`
