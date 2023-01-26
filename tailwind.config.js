/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
      },
      backgroundImage: {
        logo: "url('./img/logo-black.png')",
      },
      colors: {
        cyan: { 950: "#24ece7" },
        red: { 950: "#f7004d" },
        green: { 950: "#67BF63" },
      },
    },
  },
  plugins: [],
};
