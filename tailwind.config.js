/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '350px',
      // => @media (min-width: 576px) { ... }

      'md': '601px',
      // => @media (min-width: 960px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require("daisyui")],
}

