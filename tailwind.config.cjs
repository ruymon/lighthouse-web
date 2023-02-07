/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-red-500/10",
    "bg-orange-500/10",
    "bg-amber-500/10",
    "bg-yellow-500/10",
    "bg-lime-500/10",
    "bg-green-500/10",
    "bg-emerald-500/10",
    "bg-teal-500/10",
    "bg-cyan-500/10",
    "bg-sky-500/10",
    "bg-blue-500/10",
    "bg-indigo-500/10",
    "bg-violet-500/10",
    "bg-purple-500/10",
    "bg-fuchsia-500/10",
    "bg-pink-500/10",
    "bg-rose-500/10",
    "text-red-500",
    "text-orange-500",
    "text-amber-500",
    "text-yellow-500",
    "text-lime-500",
    "text-green-500",
    "text-emerald-500",
    "text-teal-500",
    "text-cyan-500",
    "text-sky-500",
    "text-blue-500",
    "text-indigo-500",
    "text-violet-500",
    "text-purple-500",
    "text-fuchsia-500",
    "text-pink-500",
    "text-rose-500",
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
