import type { ComponentType, SVGProps } from "react";

/** A lightweight icon component: an SVG that accepts standard SVG props. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Logo {
  name: string;
  /** Path under /public. Replace with the real asset from Figma. */
  src: string;
  width: number;
  height: number;
}

export interface Feature {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
}
