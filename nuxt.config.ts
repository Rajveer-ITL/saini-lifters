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
      title:
        "Best Crane Rental Services - Reliable & Affordable | Saini Lifters",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Looking for crane rental services? We provide top-quality cranes for construction, industrial use, and heavy lifting. Available 24/7.",
        },
        {
          name: "keywords",
          content:
            "crane rental, crane services, heavy lifting, industrial cranes, mobile crane hire",
        },
        {
          property: "og:title",
          content: "Best Crane Rental Services - Saini Lifters",
        },
        {
          property: "og:description",
          content: "Reliable crane rental services for all your needs.",
        },
        {
          property: "og:image",
          content:
            "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
        },
        { property: "og:url", content: "https://www.sainilifters.com/" },
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
      script: [
        {
          type: "text/javascript",
          src: "https://www.googletagmanager.com/gtag/js?id=G-G2G9X0Y0DG",
          async: true,
          "data-partytown": true,
        },
        {
          type: "text/javascript",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-G2G9X0Y0DG');
          `,
          "data-partytown": true,
        },
        {
          type: "text/javascript",
          innerHTML: `
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-KPZBMV9J');
          `,
          "data-partytown": true,
        },
      ],
    },
  },
});
