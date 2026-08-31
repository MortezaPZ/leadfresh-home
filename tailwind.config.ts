import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS
 * -----------------------------------------------------------------------------
 * These values are the single source of truth for the UI. They are currently a
 * coherent placeholder system for a B2B SaaS product. When the Figma Dev Mode
 * spec is available, replace ONLY the values below (hex, font sizes/weights,
 * spacing, radius, shadow). No component reads raw hex or px values from JSX.
 *
 * Figma mapping checklist (fill in when spec arrives):
 *   - colors.brand.*          -> Figma "Primary / Green" ramp
 *   - colors.ink / muted      -> Figma text styles
 *   - fontSize.*              -> Figma text styles (size / line-height / tracking)
 *   - spacing.section*         -> Figma section vertical padding
 *   - borderRadius.*           -> Figma corner radius tokens
 *   - boxShadow.*              -> Figma effect styles
 * -----------------------------------------------------------------------------
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brand: {
          50: "#EDFBF3",
          100: "#D3F5E1",
          200: "#A8EAC5",
          300: "#71D9A3",
          400: "#3FC182",
          500: "#1FA968", // primary
          600: "#158354",
          700: "#136A46",
          800: "#12543A",
          900: "#0F4531",
        },
        ink: "#0B1220",
        muted: {
          // Both pass WCAG AA (>= 4.5:1) on surface and surface-subtle.
          DEFAULT: "#5A6472", // 6.4:1 on #FFFFFF
          soft: "#626B78", // 5.0:1 on #F5F8F6
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F5F8F6",
        },
        line: {
          DEFAULT: "#E5EAE7",
          strong: "#D3DAD6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing, fontWeight }]
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        h2: ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        h3: ["1.25rem", { lineHeight: "1.35", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        overline: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "600" }],
      },
      spacing: {
        "section-y": "4rem", // 64px  – mobile section padding
        "section-y-md": "6rem", // 96px  – >= md
        "section-y-lg": "7.5rem", // 120px – >= lg
      },
      maxWidth: {
        prose: "42rem",
        content: "1200px",
      },
      borderRadius: {
        sm: "0.5rem", // 8px
        md: "0.75rem", // 12px
        lg: "1rem", // 16px
        xl: "1.5rem", // 24px
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 18, 32, 0.04), 0 8px 24px rgba(11, 18, 32, 0.06)",
        "card-hover": "0 2px 4px rgba(11, 18, 32, 0.06), 0 16px 40px rgba(11, 18, 32, 0.10)",
        focus: "0 0 0 3px rgba(31, 169, 104, 0.35)",
      },
      transitionTimingFunction: {
        // Shared easing curve; mirrored in Framer Motion as [0.22, 1, 0.36, 1].
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(31, 169, 104, 0.10) 0%, rgba(31, 169, 104, 0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
