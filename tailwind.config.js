/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    backgroundImage: {
      aboge: "url('/src/aboge.jpg')",
      texture: "url('/src/texture.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
