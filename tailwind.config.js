/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./components/**/*.js", "./layouts/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      black: "#030303",
      cyan: "#61C4B7",
      pink: "#F39E9E",
      "medium-brown": "#7A746E",
      "light-cream": "#FFF7F0",
      "galactic-blue": "#755CDE",
      "summer-yellow": "#F6A560",
      "light-red": "#EB7565",
      "dark-purple": "#552049",
    },
  },
  plugins: [require("tailwind-scrollbar")],
  safelist: [
    "html.has-scroll-smooth",
    "html.has-scroll-dragging",
    `[data-scroll-direction="horizontal"]`,
    ".c-scrollbar",
    ".c-scrollbar_thumb",
  ],
};
