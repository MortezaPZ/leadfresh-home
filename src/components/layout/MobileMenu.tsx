"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/primitives/icons";
import { cn } from "@/lib/utils";
import { navCtaPrimary, navCtaSecondary, navLinks } from "@/content/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Element to return focus to when the menu closes (the trigger button). */
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ open, onClose, returnFocusRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // Move focus into the panel on open, restore it on close. The `hasOpened`
  // guard keeps the initial mount (open === false) from stealing focus to the
  // trigger on page load.
  const hasOpened = useRef(false);
  useEffect(() => {
    if (open) {
      hasOpened.current = true;
      firstLinkRef.current?.focus();
    } else if (hasOpened.current) {
      returnFocusRef.current?.focus();
    }
  }, [open, returnFocusRef]);

  // Escape to close + simple focus trap within the panel.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.15 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 h-full w-full bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={cn(
              "absolute inset-x-0 top-0 mx-auto flex max-h-full flex-col gap-6 overflow-y-auto",
              "bg-surface px-5 pb-8 pt-4 shadow-card",
            )}
            initial={{ y: reduceMotion ? 0 : "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: reduceMotion ? 0 : "-100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={onClose}
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-surface-subtle"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <nav aria-label="Primary">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-md px-2 py-3 text-h3 font-semibold text-ink transition-colors hover:bg-surface-subtle"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-2 flex flex-col gap-3 border-t border-line pt-6">
              <Button href={navCtaSecondary.href} variant="secondary" size="lg" className="w-full">
                {navCtaSecondary.label}
              </Button>
              <Button href={navCtaPrimary.href} variant="primary" size="lg" className="w-full">
                {navCtaPrimary.label}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
