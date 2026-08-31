"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealTag = "div" | "li" | "span";

const MOTION = {
  div: motion.div,
  li: motion.li,
  span: motion.span,
} as const;

interface RevealProps {
  as?: RevealTag;
  /** Stagger index for lists; multiplies the base delay. */
  index?: number;
  className?: string;
  children: ReactNode;
}

const DISTANCE = 12;
const STEP = 0.06;

/**
 * Subtle scroll-in: fade + 12px rise, once, when ~20% enters the viewport.
 * When the user prefers reduced motion, content renders immediately with no
 * transform (respects prefers-reduced-motion at the source, not just via CSS).
 */
export function Reveal({ as = "div", index = 0, className, children }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = MOTION[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : index * STEP,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
