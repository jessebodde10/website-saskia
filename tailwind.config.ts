import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial & zakelijk: schoon wit, neutrale grijzen, één diepe groene accentkleur
        sand: {
          50: "#F7F7F4",
          100: "#EFEFEB",
          200: "#E3E3DD", // hairline borders
          300: "#CFCFC7",
          400: "#A2A299",
        },
        sage: {
          50: "#EDF2EE",
          100: "#D8E4DC",
          200: "#B3C9BB",
          300: "#83A791",
          400: "#4F8064",
          500: "#356049",
          600: "#234C38", // primair accent
          700: "#173829",
        },
        // Spaarzaam gebruikt warm accent (klei), voor de enkele menselijke touch
        terracotta: {
          50: "#F7EEE8",
          100: "#EAD7C8",
          400: "#B87F5B",
          500: "#9A5C34",
          600: "#7E4826",
        },
        ink: {
          DEFAULT: "#15150F",
          soft: "#42423A",
          muted: "#707066",
        },
        cream: "#FBFBFA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Editorial display: strak grotesk voor koppen en het woordmerk
        display: [
          "var(--font-display)",
          "var(--font-inter)",
          "ui-sans-serif",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        "4xl": "0.75rem",
        "5xl": "1rem",
      },
      maxWidth: {
        content: "75rem",
        prose: "42rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(21,21,15,0.04), 0 2px 6px -2px rgba(21,21,15,0.06)",
        card: "0 6px 24px -10px rgba(21,21,15,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
