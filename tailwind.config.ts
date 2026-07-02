import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strak, zakelijk maar warm: koele greige basis, diep saliegroen, terracotta als accent
        sand: {
          50: "#F7F8F4",
          100: "#EFF1EA",
          200: "#E2E5DC",
          300: "#CBD0C2",
          400: "#AEB6A2",
        },
        sage: {
          50: "#F1F4EE",
          100: "#E1E7DC",
          200: "#C4D0BB",
          300: "#9FB093",
          400: "#7E9070",
          500: "#5F7256",
          600: "#4A5B44",
          700: "#374533",
        },
        terracotta: {
          50: "#F8EEE8",
          100: "#EED7C9",
          200: "#DEB699",
          300: "#CB9573",
          400: "#BC7E5A",
          500: "#A5623C",
          600: "#8A4F30",
          700: "#6E3E26",
        },
        ink: {
          DEFAULT: "#23261F",
          soft: "#474C40",
          muted: "#6A6F62",
        },
        cream: "#FBFBF9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "1.5rem",
        "5xl": "2rem",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(58, 58, 52, 0.15)",
        card: "0 20px 60px -25px rgba(58, 58, 52, 0.22)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "float-slow": "float-slow 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
