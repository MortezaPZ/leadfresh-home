import type { CtaLink } from "@/types";

export const hero = {
  eyebrow: "B2B sales intelligence",
  title: "Find companies before they start buying",
  description:
    "LeadFresh watches hiring activity, team growth and buying signals across millions of companies — then scores your best-fit accounts and hands you the decision makers to reach out to.",
  primaryCta: { label: "Book a demo", href: "#demo" } satisfies CtaLink,
  secondaryCta: { label: "See how it works", href: "#how-it-works" } satisfies CtaLink,
  trustNote: "Free 14-day trial · No credit card required",
  // Replace with the real product screenshot exported from Figma.
  media: {
    src: "/images/hero-product-placeholder.svg",
    alt: "LeadFresh dashboard showing scored target accounts and their decision makers",
    width: 1120,
    height: 720,
  },
} as const;
