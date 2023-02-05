/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      animation: {
        "hand-wave": "hand-wave 3s ease-in-out infinite",
      },
      keyframes: {
        "hand-wave": {
          "0%": { transform: "rotate( 0.0deg)", },
          "10%": { transform: "rotate(14.0deg)", },
          "20%": { transform: "rotate(-8.0deg)", },
          "30%": { transform: "rotate(14.0deg)", },
          "40%": { transform: "rotate(-4.0deg)", },
          "50%": { transform: "rotate(10.0deg)", },
          "60%": { transform: "rotate( 0.0deg)", },
          "100%": { transform: "rotate( 0.0deg)", },
        },
      }
    },
  },
  plugins: [],
}
