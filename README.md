# COMCO portfolio

Portfolio site for COMCO, social media manager for local businesses. One goal: get visitors to **book a free call**.

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4 · shadcn/ui.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/, ready for any host
```

## Where things live

| What | File |
|---|---|
| Calendly, PayPal.me, email, Instagram and other links (**placeholders**) | `lib/site-config.ts` |
| All Spanish copy (`/`) | `lib/i18n/es.ts` |
| All English copy (`/en/`) | `lib/i18n/en.ts` |
| Colours of the liquid artwork | `lib/art.ts` |
| Theme tokens, glass and buttons | `app/globals.css` |
| Page sections | `components/sections/` |
| Glass folder component | `components/ui/glass-folder-cards.tsx` |

Clients, figures and testimonials in the copy files are examples and must be replaced with real ones before launch.

## Before launch

1. Put the real links in `lib/site-config.ts`: Calendly event, PayPal.me, email, socials, and the site's final address (`url`).
2. Replace the example clients, figures and testimonials in `lib/i18n/es.ts` and `lib/i18n/en.ts`, and remove the "example" notes.
3. Rebuild the share image if the hero changes: `public/og.jpg` is a 1200×630 screenshot of the hero.
4. Open a folder on a real phone. Its open state could only be checked in a software browser, where the glass blur breaks at phone pixel density.

## Deploy

`npm run build` writes a complete static site to `out/`. Upload the contents of `out/` to any static web host. No server is needed.

## Why `components/ui`

shadcn installs and updates components in `components/ui` (set in `components.json`). Keeping reusable building blocks there, separate from page sections, means `npx shadcn@latest add …` and imports such as `@/components/ui/glass-folder-cards` keep working.
