/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clean-green": "#28a745",
        "clean-green-dark": "#218838",
        "clean-brown": "#3f0a00",
        "clean-brown-dark": "#2a0700",
        "tree-green": "#2c5530",
        "tree-green-light": "#4a7c59",
      },
      fontFamily: {
        inter: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
