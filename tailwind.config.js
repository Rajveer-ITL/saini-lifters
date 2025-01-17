/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue", // Main Nuxt entry point
    "./components/**/*.{vue,js}", // Your components
    "./layouts/**/*.vue", // Nuxt layouts
    "./pages/**/*.vue", // Nuxt pages
    "./plugins/**/*.{js,ts}", // Nuxt plugins
    "./nuxt.config.{js,ts}", // Nuxt config
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
