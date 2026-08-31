# LeadFresh — Home Page (first sections)

A standalone, deployable implementation of the first sections of the LeadFresh
marketing home page: **Navbar + Hero**, **Social proof**, and **Features**.
Built to be extended into the full Home Page and Dashboard later.

> Design values in `tailwind.config.ts` are a coherent placeholder system.
> When the Figma Dev Mode spec is provided, only the token values (colors,
> type scale, spacing, radius, shadow) need to change — no component reads raw
> hex/px from JSX.

## Stack & why

| Choice | Reason |
| --- | --- |
| **Next.js 14 (App Router)** | Server components by default, file-based metadata/OG, `next/image` + `next/font` for zero-CLS loading, first-class Vercel deploy. |
| **TypeScript (strict, `noUncheckedIndexedAccess`, no `any`)** | Explicit contracts for content and component props. |
| **Tailwind CSS** | Design tokens declared once in `tailwind.config.ts`; utilities keep spacing/type/colour consistent with the design. |
| **Framer Motion** | Small, purposeful scroll-in reveals; honours `prefers-reduced-motion` at the source, not just via CSS. |
| **No UI kit** | All primitives (`Container`, `Section`, `Button`, `Typography`, `Wordmark`) are hand-built and reusable. |

## Project structure

```
.
├── public/
│   ├── images/
│   │   ├── hero-product-placeholder.svg      # ASSET: replace with Figma export
│   │   └── logos/logo-*.svg                  # ASSET: replace with real logos
├── src/
│   ├── app/
│   │   ├── layout.tsx                        # <html>, fonts, metadata, OG, skip link
│   │   ├── page.tsx                          # composes the three sections
│   │   ├── globals.css                       # Tailwind layers + reduced-motion reset
│   │   ├── opengraph-image.tsx               # generated 1200×630 OG/Twitter image
│   │   ├── robots.ts / sitemap.ts            # SEO
│   ├── components/
│   │   ├── ui/            Container, Section, Button, Typography, Wordmark
│   │   ├── layout/        Navbar, MobileMenu, Footer
│   │   ├── sections/      Hero, SocialProof, Features
│   │   ├── motion/        Reveal (scroll-in, reduced-motion aware)
│   │   └── primitives/    icons.tsx (hand-built SVG icon set)
│   ├── content/           site, navigation, hero, social-proof, features  ← all copy/data
│   ├── lib/               utils.ts (cn)
│   └── types/             shared TS types
├── tailwind.config.ts     ← design tokens (single source of truth)
```

Content is fully separated from markup: every string, link, stat and feature
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
Verified from **320px to 1920px** — no horizontal overflow, no text breakage.

- **Container**: fluid width with 20 → 24 → 32px gutters, content capped at 1200px; beyond that the page fills to 1920px via gutters only.
- **Section**: vertical padding scales 64 → 96 → 120px at `md` / `lg`.
- **Navbar**: below `lg`, links + CTAs collapse into a hamburger that opens a full-width overlay menu — focus is trapped, `Esc` closes, body scroll locks, focus returns to the trigger. At `lg`+ the full inline nav shows.
- **Hero**: single centered column at every width; CTAs stack on mobile and sit inline from `sm`; the product image is `priority` and uses responsive `sizes` to avoid layout shift.
- **Social proof**: logo grid is 2 cols (mobile) → 3 (`sm`) → 6 (`lg`); stats stack on mobile, 3-up from `sm`.
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

**Measured in-browser** (values read from `getComputedStyle`, not estimated):

| Check | Result |
| --- | --- |
| Body copy on white | 6.00:1 ✓ AA |
| Secondary text on `surface-subtle` | 5.04:1 ✓ AA |
| Eyebrow (`brand-700`) on white | 6.61:1 ✓ AA |
| Primary CTA (white on `brand-600`) | 4.77:1 ✓ AA |
| Secondary CTA | 18.72:1 ✓ AAA |
| Horizontal overflow at 320px / 1920px | none (0 overflowing elements) |
| Focus on page load | `body` — nothing steals focus |

## Performance & SEO

`next/image` (sized, `priority` hero), `next/font` (Inter, `display: swap`,
self-hosted), no CLS, generated OG/Twitter image, `robots` + `sitemap`,
canonical URL, Open Graph / Twitter metadata. Target: Lighthouse ≥ 95 on all
four categories.

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

All three pass clean on the committed tree.

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel: **New Project → Import** the repo. Framework preset **Next.js** is auto-detected — no env vars needed.
3. Deploy. Every push to the default branch ships to production; PRs get preview URLs.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

Set `site.url` in `src/content/site.ts` to the production domain so canonical /
OG URLs are absolute.

## Where the API connection lands next

The backend already exists; this stage is static marketing UI. Integration points:

- **Content layer** (`src/content/*`) is the seam. Swap the static exports for
  data fetched in server components (e.g. `async function Features()` calling
  `lib/api`), keeping the same typed shapes from `src/types`.
- Add a typed `src/lib/api.ts` client (fetch wrapper + zod/DTO parsing) and an
  `.env` (`NEXT_PUBLIC_API_BASE_URL`, server-only keys).
- Form CTAs ("Book a demo", "Log in") become real routes / server actions
  hitting the backend; the `Button` primitive already supports `href` and
  `onClick`.
- Dashboard becomes an authenticated route group (`src/app/(app)/`) sharing the
  same tokens and primitives.

## Assets to replace (from Figma)

| Placeholder | Location |
| --- | --- |
| Hero product screenshot | `public/images/hero-product-placeholder.svg` |
| Customer logos (×6) | `public/images/logos/logo-*.svg` |
| Brand logo mark | inline SVG in `src/components/ui/Wordmark.tsx` |
| Feature icons | `src/components/primitives/icons.tsx` |
