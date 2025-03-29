import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import viteCompression from "vite-plugin-compression";

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
  components: true,
  vite: {
    plugins: [viteCompression({ algorithm: "brotliCompress" })],
  },

  alias: {
    "~": resolve(__dirname, "./"),
    "@": resolve(__dirname, "./"),
  },

  nitro: {
    routeRules: {
      "/": { cache: { swr: true } },
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

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
          href: "/video/headerCardMainVideo.mp4",
          type: "video/mp4",
        },
        {
          rel: "preload",
          as: "video",
          href: "/video/cranesWorking.mp4",
          type: "video/mp4",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Roslindale/Roslindale_Desktop/Roslindale-DeckNarrowBold-Testing.otf",
          type: "font/otf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/mint-grotesk-font-family-1721994350-0/MintGroteskTrial-RegularDisplay-BF64336b1cd46bb.otf",
          type: "font/otf",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  modules: ["@nuxt/image"],
});
