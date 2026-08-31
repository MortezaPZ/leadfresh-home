import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge groups classes by prefix, so custom font-size utilities like
 * `text-body-sm` are indistinguishable from text *colors* like `text-white`
 * unless the scale is declared. Without this, merging "text-white" with
 * "text-body-sm" silently drops the colour. Keep this list in sync with
 * `theme.extend.fontSize` in tailwind.config.ts.
 */
const FONT_SIZES = [
  "display-lg",
  "display-md",
  "display-sm",
  "h2",
  "h3",
  "body-lg",
  "body",
  "body-sm",
  "overline",
] as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [...FONT_SIZES] }],
    },
  },
});

/** Merge conditional class names and de-duplicate conflicting Tailwind classes. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
