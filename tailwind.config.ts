import type { Config } from "tailwindcss";
const { themeVariants } = require("tailwindcss-theme-variants");

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css,scss,sass,less,stylus}",
    "./tailwind.config.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto-flex)"],
        serif: ["var(--font-roboto-slab)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        basic: "var(--color-bg-basic)",
        "basic-grid": "var(--color-bg-basic-grid)",
        light: "var(--color-bg-light)",
        "light-dots": "var(--color-bg-light-dots)",
        dark: "var(--color-bg-dark)",
        "dark-dots": "var(--color-bg-dark-dots)",
      },
      data: {
        active: "active=''",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-3d"),
    themeVariants({
      themes: {
        light: {
          selector: ".light",
        },
        dark: {
          selector: ".dark",
        },
        basic: {
          selector: ".basic",
        },
        fun: {
          selector: ".fun",
        },
      },
    }),
  ],
} satisfies Config;

export default config;
