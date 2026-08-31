import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Horizontal layout wrapper. Centers content, applies responsive gutters
 * (20 → 40px) and caps line length at the token max-width (1200px).
 */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
