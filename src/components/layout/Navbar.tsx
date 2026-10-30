"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { Container } from "@/components/ui/Container";
import { MenuIcon } from "@/components/primitives/icons";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { navCtaPrimary, navCtaSecondary, navLinks } from "@/content/navigation";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-200",
        scrolled ? "border-line bg-surface/90 backdrop-blur" : "border-transparent bg-surface",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="shrink-0 rounded-md" aria-label={`${site.name} — home`}>
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex h-10 items-center rounded-md px-3 text-body-sm font-medium text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href={navCtaSecondary.href} external={navCtaSecondary.external} variant="ghost" size="md">
              {navCtaSecondary.label}
            </Button>
            <Button href={navCtaPrimary.href} external={navCtaPrimary.external} variant="primary" size="md">
              {navCtaPrimary.label}
            </Button>
          </div>

          <button
            ref={triggerRef}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface-subtle lg:hidden"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusRef={triggerRef}
      />
    </header>
  );
}
