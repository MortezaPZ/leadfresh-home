import type { Logo, Stat } from "@/types";

export const socialProof = {
  heading: "Revenue teams use LeadFresh to fill their pipeline",
  // Replace each src with the real monochrome logo SVG exported from Figma.
  logos: [
    { name: "Northwind", src: "/images/logos/logo-northwind.svg", width: 132, height: 32 },
    { name: "Acme Corp", src: "/images/logos/logo-acme.svg", width: 120, height: 32 },
    { name: "Globex", src: "/images/logos/logo-globex.svg", width: 128, height: 32 },
    { name: "Umbrella", src: "/images/logos/logo-umbrella.svg", width: 140, height: 32 },
    { name: "Initech", src: "/images/logos/logo-initech.svg", width: 116, height: 32 },
    { name: "Hooli", src: "/images/logos/logo-hooli.svg", width: 108, height: 32 },
  ] satisfies Logo[],
  stats: [
    { value: "12M+", label: "Companies tracked" },
    { value: "3.4x", label: "More qualified meetings" },
    { value: "48 hrs", label: "From signal to outreach" },
  ] satisfies Stat[],
} as const;
