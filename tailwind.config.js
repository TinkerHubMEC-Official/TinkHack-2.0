/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-dark": "#171519",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        khuja: ["var(--font-khuja)", "sans-serif"],
        productsansregular: ["var(--font-product-sans-regular)", "sans-serif"],
        productsansbold: ["var(--font-product-sans-bold)", "sans-serif"],

      },
      animation: {
        marquee: "marquee 20s linear infinite", // Define the animation
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0)", // Initial position
          },
          "100%": {
            transform: "translateX(-50%)", // Final position (scrolls horizontally)
          },
        },
      },
    },
  },
  plugins: [],
};
