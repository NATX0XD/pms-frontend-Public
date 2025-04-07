const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // background: "var(--background-light)",
        // backgroundDark: "var(--background-dark)",
        // foreground: "var(--foreground)",
        primary: "var(--colorPrimary)",
        background: "var(--colorBgBase)",
      },
      fontFamily: {
        mi: ["var(--fontMiSansThai)", "sans-serif"],
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            // default: "#fff",
          },
        },
        dark: {
          // ...
          colors: {
            // default: "white",
          },
        },
      },
    }),
  ],
};
