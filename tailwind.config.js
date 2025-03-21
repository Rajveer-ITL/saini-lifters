/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app.vue", // Main Nuxt entry point
    "./components/**/*.{vue,js,ts,jsx,tsx}", // Your components
    "./layouts/**/*.vue", // Nuxt layouts
    "./pages/**/*.vue", // Nuxt pages
    "./plugins/**/*.{js,ts}", // Nuxt plugins
    "./nuxt.config.{js,ts}", // Nuxt config
    "./index.html", // Include Vue 3 index file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include Vue 3 source files
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
};
