/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        secondary: "#FF6347",
        black: "#1E1E1E",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
