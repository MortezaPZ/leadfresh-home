import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";
type HeadingSize = "display-lg" | "display-md" | "display-sm" | "h2" | "h3";

const headingSizeClass: Record<HeadingSize, string> = {
  "display-lg": "text-display-sm sm:text-display-md lg:text-display-lg",
  "display-md": "text-display-sm sm:text-display-md",
  "display-sm": "text-h2 sm:text-display-sm",
  h2: "text-h2",
  h3: "text-h3",
};

interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Heading({ as: Tag = "h2", size = "h2", id, className, children }: HeadingProps) {
  return (
    <Tag id={id} className={cn("text-balance text-ink", headingSizeClass[size], className)}>
      {children}
    </Tag>
  );
}

type TextSize = "body-lg" | "body" | "body-sm";

interface TextProps {
  as?: ElementType;
  size?: TextSize;
  tone?: "default" | "muted";
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Text({
  as: Tag = "p",
  size = "body",
  tone = "muted",
  id,
  className,
  children,
}: TextProps) {
  return (
    <Tag
      id={id}
      className={cn(
        size === "body-lg" && "text-body-lg",
        size === "body" && "text-body",
        size === "body-sm" && "text-body-sm",
        tone === "muted" ? "text-muted" : "text-ink",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

interface EyebrowProps {
  className?: string;
  children: ReactNode;
}

/** Small uppercase label above a heading. */
export function Eyebrow({ className, children }: EyebrowProps) {
  return (
    <span className={cn("text-overline uppercase text-brand-700", className)}>{children}</span>
  );
}
