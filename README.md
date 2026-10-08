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

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repository to GitHub (or another Git provider).
2. Import the project in Vercel — no special configuration is required.
3. (Optional) Set the environment variable `NEXT_PUBLIC_SITE_URL` to your
   final production domain (e.g. `https://your-domain.com`) to make canonical
   URLs in page metadata fully explicit. If omitted, Vercel's own
   `VERCEL_URL` build variable is used automatically.

No domain is hard-coded anywhere in the source.

## Google Auth Platform configuration

Once deployed, use your production domain (replace `your-domain.com` with the
actual domain connected in Vercel) for the OAuth consent screen branding:

- **App homepage**: `https://your-domain.com`
- **Privacy policy link**: `https://your-domain.com/privacy`
- **Terms of service link**: `https://your-domain.com/terms`
