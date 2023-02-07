/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    backgroundImage: {
      aboge: "url('/src/aboge.jpg')",
      texture: "url('/src/texture.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
