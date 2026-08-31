import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out-soft " +
  "focus-visible:outline-none focus-visible:shadow-focus active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-ink/30 hover:bg-surface-subtle",
  ghost: "bg-transparent text-ink hover:bg-surface-subtle",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-body-sm",
  lg: "h-12 px-6 text-body",
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface LinkRest {
  href: string;
  /** External links open in a new tab with a safe `rel`. */
  external?: boolean;
}

type NativeButtonRest = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children"
> & {
  href?: never;
};

export type ButtonProps = SharedProps & (LinkRest | NativeButtonRest);

function isLink(rest: LinkRest | NativeButtonRest): rest is LinkRest {
  return typeof rest.href === "string";
}

/**
 * One visual treatment, three renderings: an in-app `next/link`, a plain
 * anchor (hash + external targets), or a native `<button>`. The rendered
 * element is chosen from the props, so callers never restyle a link to look
 * like a button.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (isLink(rest)) {
    const { href, external } = rest;

    if (external) {
      return (
        <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    // In-page anchors bypass the router so the browser handles the scroll.
    if (href.startsWith("#")) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
