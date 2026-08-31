import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  /** Accessible label for the landmark when there is no visible heading id. */
  "aria-labelledby"?: string;
  "aria-label"?: string;
  className?: string;
  /** Optional surface tint; defaults to the page background. */
  tone?: "default" | "subtle";
  /** Set false to render children full-bleed (no Container). */
  contained?: boolean;
  children: ReactNode;
}

/**
 * Vertical rhythm wrapper: a semantic <section> with token-based vertical
 * padding (64 → 96 → 120px across md/lg) and an optional centered Container.
 */
export function Section({
  id,
  className,
  tone = "default",
  contained = true,
  children,
  ...aria
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-section-y md:py-section-y-md lg:py-section-y-lg",
        tone === "subtle" && "bg-surface-subtle",
        className,
      )}
      {...aria}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
