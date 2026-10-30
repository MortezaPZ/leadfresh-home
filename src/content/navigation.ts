import type { CtaLink, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Overview", href: "#hero" },
  { label: "Features", href: "#features" },
];

export const navCtaSecondary: CtaLink = { label: "Features", href: "#features" };
export const navCtaPrimary: CtaLink = {
  label: "View source",
  href: "https://github.com/MortezaPZ/leadfresh-home",
  external: true,
};
