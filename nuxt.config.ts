import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import viteCompression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["./assets/css/tailwind.css"],

  runtimeConfig: {
    public: {
      googleAnalyticsId: "G-G2G9X0Y0DG", // Replace with your GA ID
      googleTagManagerId: "GTM-KPZBMV9J", // Replace with your GTM ID
      clarityId: "qtqa1sk6lw", // Replace with your Clarity ID
    },
  },

  modules: ["@nuxt/image"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: true,
  vite: {
    plugins: [viteCompression({ algorithm: "brotliCompress" })],
    build: {
      rollupOptions: { treeshake: true },
      minify: "esbuild", // Ensure esbuild is used for minification
    },
  },

  alias: {
    "~": resolve(__dirname, "./"),
    "@": resolve(__dirname, "./"),
  },

  nitro: {
    routeRules: {
      "/": { cache: { swr: true } },
      "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/image/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/fonts/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/video/**": { headers: { "cache-control": "public, max-age=86400" } },
      "/equipment/container-stacker": { redirect: { to: "/equipment/forklift", statusCode: 301 } },
    },
    compressPublicAssets: { gzip: true, brotli: true },
  },

  image: {
    quality: 80,
    format: ["webp", "avif", "png", "jpg"],
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1920 },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    head: {
      title:
        "Crane on Rent in Navi Mumbai | Saini Lifters",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Saini Lifters — crane on rent in Navi Mumbai, Panvel & Kalamboli since 2001. Mobile cranes, hydra, manlift, reach stacker & container stacker. Call +91 9322296990.",
        },
        {
          name: "keywords",
          content:
            "crane on rent in navi mumbai, crane on rent in panvel, crane rental navi mumbai, crane hire navi mumbai, crane on hire panvel, crane service near me, heavy crane on rent, mobile crane rental, hydra crane rental, manlift rental, boom lift rental, container stacker rental, reach stacker rental, side shifter rental, crawler crane rental, all terrain crane rental, pick and carry crane, crane rental kalamboli, crane rental raigad, crane rental thane, crane rental mumbai",
        },
        {
          property: "og:title",
          content: "Crane on Rent in Navi Mumbai | Saini Lifters",
        },
        {
          property: "og:description",
          content: "Crane on rent in Navi Mumbai, Panvel & Kalamboli. Mobile cranes, hydra, manlift & more. Call Saini Lifters: +91 9322296990.",
        },
        {
          property: "og:image",
          content:
            "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
        },
        { property: "og:url", content: "https://www.sainilifters.com/" },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "Saini Lifters" },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preload",
          as: "image",
          href: "/image/eq-all-terrain-crane-poster.jpg",
          fetchpriority: "high",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
          sizes: "32x32",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon-180x180.png",
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
      script: [],
    },
  },
});
