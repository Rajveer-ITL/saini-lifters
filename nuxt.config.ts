import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: {
    "~": resolve(__dirname, "./"),
    "@": resolve(__dirname, "./"),
  },

  app: {
    head: {
      title: "Saini Lifters - Best Crane Services", // Default title
      meta: [
        {
          name: "description",
          content: "Providing top-notch crane services for all industries.",
        },
      ],
      link: [
        {
          rel: "preload",
          as: "video",
          href: "/public/video/headerCardMainVideo.mp4",
          type: "video/mp4",
        },
        {
          rel: "preload",
          as: "video",
          href: "/public/video/cranesWorking.mp4",
          type: "video/mp4",
        },
      ],
    },
  },

  modules: ["@nuxt/image"],
});
