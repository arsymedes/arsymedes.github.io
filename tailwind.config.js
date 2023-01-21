/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "chivo": ["Chivo", "sans-serif"],
      },
      backgroundImage: {
        "logo": "url('./img/logo-black.png')"
      }
    },
  },
  plugins: [],
};
