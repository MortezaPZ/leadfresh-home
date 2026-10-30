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
  external?: boolean;
}

export interface Feature {
  id: string;
  icon: IconComponent;
  title: string;
  description: string;
}
