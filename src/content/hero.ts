import type { CtaLink } from "@/types";

export const hero = {
  eyebrow: "Responsive sales-intelligence concept",
  title: "A clear interface for account research",
  description:
    "A front-end concept for reviewing company signals, comparing accounts, and planning outreach. All displayed data is illustrative; no live data source or product backend is connected.",
  primaryCta: { label: "Explore features", href: "#features" } satisfies CtaLink,
  secondaryCta: {
    label: "View source",
    href: "https://github.com/MortezaPZ/leadfresh-home",
    external: true,
  } satisfies CtaLink,
  trustNote: "UI prototype · Illustrative content only",
  media: {
    src: "/images/hero-product-concept.svg",
    alt: "Illustrative LeadFresh dashboard concept showing sample company accounts",
    width: 1120,
    height: 720,
  },
} as const;
