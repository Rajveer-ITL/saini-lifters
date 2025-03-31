/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}", // Nuxt config might not need Tailwind scanning
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roslindale: ["roslindale"],
        mint: ["mint"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  important: true,
};
