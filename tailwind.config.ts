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
        basic: "rgb(var(--color-bg-basic) / <alpha-value>)",
        "basic-grid": "rgb(var(--color-bg-basic-grid) / <alpha-value>)",
        light: "rgb(var(--color-bg-light)/<alpha-value>)",
        "light-dots": "rgb(var(--color-bg-light-dots) / <alpha-value>)",
        dark: "rgb(var(--color-bg-dark) / <alpha-value>)",
        "dark-dots": "rgb(var(--color-bg-dark-dots) / <alpha-value>)",
      },
      data: {
        active: "active=''",
      },
      typography: {
        DEFAULT: {
          css: {
            dt: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
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
