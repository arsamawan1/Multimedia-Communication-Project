/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
  // "./node_modules/tw-elements/dist/js/**/*.js",
],
  // darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["josefin sans", "sans-serif"],
        alata: ["alata"],
      },
    },
    // safelist: ['animate-[slide-right_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
  },
  // plugins: [require("tw-elements/dist/plugin")],
};

