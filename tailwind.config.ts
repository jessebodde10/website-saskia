import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm & ingetogen: warme off-white basis, diep teal-groen, gedempte generatie-tinten
        sand: {
          50: "#F8F5EE",
          100: "#F0EBDF",
          200: "#E4DDCB", // hairline borders
          300: "#D2C9B2",
          400: "#A79C82",
        },
        // Primair: diep teal-groen
        sage: {
          50: "#EBF0ED",
          100: "#D3E0D9",
          200: "#A9C3B8",
          300: "#6E9585",
          400: "#3E6D5E",
          500: "#255544",
          600: "#1C4B40", // primaire accentkleur / CTA
          700: "#143830",
        },
        // Warm accent (klei) — spaarzaam
        terracotta: {
          50: "#F8EDE5",
          100: "#EED6C4",
          400: "#CE875F",
          500: "#C07350",
          600: "#9E5638",
        },
        // Generatie-spectrum: gedempte, volwassen tinten (het signatuur-element)
        gen: {
          boomer: "#6E7F8C",
          x: "#5E8A78",
          y: "#C6A15E",
          z: "#C07350",
          alpha: "#7E6E9E",
        },
        ink: {
          DEFAULT: "#1E2420",
          soft: "#4B5249",
          muted: "#6E7368",
        },
        cream: "#F4F1E9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "ui-sans-serif",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      borderRadius: {
        "4xl": "0.875rem",
        "5xl": "1.25rem",
      },
      maxWidth: {
        content: "75rem",
        prose: "42rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(30,36,32,0.04), 0 2px 8px -3px rgba(30,36,32,0.06)",
        card: "0 8px 30px -12px rgba(30,36,32,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
