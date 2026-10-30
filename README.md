# LeadFresh Marketing Site Prototype

A responsive front-end prototype for a marketing home page, built with Next.js 16, TypeScript, and Tailwind CSS. It includes navigation, a hero concept, and a feature section. It is not a production release and is not connected to a backend.

The dashboard artwork is illustrative. The prototype includes no customer names, logos, endorsements, or performance claims.

Design tokens are centralised in tailwind.config.ts so the visual system can be aligned with an approved brand spec.

## Stack & why

| Choice | Reason |
| --- | --- |
| **Next.js 16 (App Router)** | Server components by default, file-based metadata/OG, `next/image` + `next/font` for zero-CLS loading, first-class Vercel deploy. |
| **TypeScript (strict, `noUncheckedIndexedAccess`, no `any`)** | Explicit contracts for content and component props. |
| **Tailwind CSS** | Design tokens declared once in `tailwind.config.ts`; utilities keep spacing/type/colour consistent with the design. |
| **Framer Motion** | Small, purposeful scroll-in reveals; honours `prefers-reduced-motion` at the source, not just via CSS. |
| **No UI kit** | All primitives (`Container`, `Section`, `Button`, `Typography`, `Wordmark`) are hand-built and reusable. |

## Project structure

```
.
├── public/images/hero-product-concept.svg
├── src/
│   ├── app/          routes, metadata, and generated Open Graph image
│   ├── components/   accessible navigation, hero, features, and UI primitives
│   ├── content/      prototype copy, navigation, hero, and features
│   ├── lib/          shared utilities
│   └── types/        shared TypeScript contracts
└── tailwind.config.ts
```

Content is fully separated from markup: every string, link, and feature
lives in `src/content/*`. Components receive typed data and never inline copy.

### One implementation note worth flagging

`src/lib/utils.ts` extends `tailwind-merge` with the project's custom font-size
scale. Without it, merging `text-white` with `text-body-sm` makes tailwind-merge
treat both as the same `text-*` group and silently drop the colour — which
rendered the primary CTA as dark navy on green (3.93:1, an AA failure) instead
of white. Declaring the scale fixes the whole token system, not just that
button. If you add a size to `theme.extend.fontSize`, add it to `FONT_SIZES` too.

## Responsive strategy

Breakpoints (Tailwind): `xs 375` · `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`.
Designed for viewport widths from **320px to 1920px**; recheck layout after integrating approved brand assets.

- **Container**: fluid width with 20 → 24 → 32px gutters, content capped at 1200px; beyond that the page fills to 1920px via gutters only.
- **Section**: vertical padding scales 64 → 96 → 120px at `md` / `lg`.
- **Navbar**: below `lg`, links + CTAs collapse into a hamburger that opens a full-width overlay menu — focus is trapped, `Esc` closes, body scroll locks, focus returns to the trigger. At `lg`+ the full inline nav shows.
- **Hero**: single centered column at every width; CTAs stack on mobile and sit inline from `sm`; the product image is `priority` and uses responsive `sizes` to avoid layout shift.
- **Features**: card grid 1 col → 2 (`sm`) → 3 (`lg`).

## Accessibility

Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), a skip link that
moves real focus (`main` is `tabIndex={-1}`), `aria-labelledby` on every
section, `alt` text on all images, visible `:focus-visible` rings, and a global
`prefers-reduced-motion` reset alongside a motion-aware `Reveal`.

The mobile menu is a proper dialog: `aria-expanded` / `aria-controls` on the
trigger, `role="dialog"` + `aria-modal`, focus moved to the first link on open,
a Tab focus trap, `Esc` to close, body scroll lock, and focus returned to the
trigger on close.

The implementation includes visible focus styles, keyboard handling in the mobile menu, and reduced-motion support. Run a contrast and keyboard audit before using the prototype in production.

## Performance & SEO

The hero uses `next/image`, Inter is loaded with `next/font`, and the project
generates Open Graph and Twitter images. Canonical URLs and the sitemap are
emitted only when `NEXT_PUBLIC_SITE_URL` is set to the actual deployed origin.
No Lighthouse score is claimed for this prototype.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts:

```bash
npm run build && npm run start   # production build
npm run lint                     # eslint
npm run typecheck                # tsc --noEmit (strict, no `any`)
```

The repository provides separate build, lint, and strict TypeScript checks.

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel: **New Project → Import** the repo. Framework preset **Next.js** is auto-detected.
3. Deploy. Every push to the default branch ships to production; PRs get preview URLs.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

After a real deployment domain is assigned, set `NEXT_PUBLIC_SITE_URL` to that
origin so canonical, Open Graph, robots, and sitemap URLs use the deployed site.

## Prototype boundaries

This repository is a front-end concept. It has no backend, live company data, authentication, CRM connection, or working demo-booking flow. Copy and account data are illustrative and must be replaced with approved, verified information before deployment.
## Prototype assets

The dashboard illustration is a concept image and does not represent a live product or real customer data. The repository contains no customer logos or customer endorsements. The brand mark and feature icons are drawn locally in source.
