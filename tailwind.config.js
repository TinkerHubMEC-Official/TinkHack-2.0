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
        latohairline: ["var(--font-lato-hairline)", "lato-hairline"],
        latolight: ["var(--font-lato-light)", "lato-light"],
        latothin: ["var(--font-latothin)", "lato-thin"],
        candycolouredclown: ["var(--font-candycolouredclown)", "candycolouredclown"],

      },
      fontWeight: {
        hairline: 10,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 900,
        black: 900,
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },

      backgroundImage: {
        "gradient-rainbow":
          "linear-gradient(45deg, #f3f302, #e23be6, #0000ff, #ff6600)",
      },
      boxShadow: {
        glow: "0 0 10px #e23be6, 0 0 20px #0000ff",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
