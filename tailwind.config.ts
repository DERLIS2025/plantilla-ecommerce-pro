import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Colores originales: no eliminar */
        primary: "#2E9644",
        "dark-green": "#1F6E32",
        "soft-green": "#EAF6ED",
        "page-bg": "#F7F8F5",
        card: "#FFFFFF",
        "text-strong": "#1F2A1F",
        "text-soft": "#5F6B5F",
        border: "#DDE5DD",

        /* Nuevo Design System */
        brand: {
          50: "#f2faf4",
          100: "#e1f4e6",
          200: "#c5e8ce",
          300: "#99d5a8",
          400: "#64ba7b",
          500: "#369c55",
          600: "#247c40",
          700: "#1e6336",
          800: "#1b4f2e",
          900: "#174127",
          950: "#0b2415",
        },

        sand: {
          50: "#fcfaf5",
          100: "#f5efe2",
          200: "#e9dcc4",
        },

        earth: {
          500: "#80684a",
          700: "#574630",
        },
      },

      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        card: "0 10px 30px -20px rgba(31, 42, 31, 0.35)",
        soft: "0 8px 24px rgb(15 35 20 / 0.08)",
        elevated: "0 16px 40px rgb(15 35 20 / 0.12)",
      },

      transitionDuration: {
        250: "250ms",
        400: "400ms",
      },
    },
  },
  plugins: [animate],
};

export default config;
