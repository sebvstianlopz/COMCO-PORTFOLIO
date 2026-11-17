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

## Why `components/ui`

shadcn installs and updates components in `components/ui` (set in `components.json`). Keeping reusable building blocks there, separate from page sections, means `npx shadcn@latest add …` and imports such as `@/components/ui/glass-folder-cards` keep working.
