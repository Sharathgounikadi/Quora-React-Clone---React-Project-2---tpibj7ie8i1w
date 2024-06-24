/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "xs" : "320px",
        "sm" : "375px",
        "md" : "425px",
        "lg" : "768px",
        "xl" : "1024px",
        "2xl": "1440px",
        "3xl": "2560px"
      },
    },
  },
  plugins: [],
});
