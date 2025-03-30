import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import viteCompression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      googleAnalyticsId: "G-G2G9X0Y0DG", // Replace with your GA ID
      googleTagManagerId: "GTM-KPZBMV9J", // Replace with your GTM ID
    },
  },

  modules: ["@nuxt/image"],

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
      title: "Saini Lifters - Best Crane Services",
      htmlAttrs: {
        lang: "en",
      },
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
      script: [
        {
          type: "text/javascript",
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,
          async: true,
          "data-partytown": true, // ✅ Offloads to Partytown
        },
        {
          type: "text/javascript",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `,
          "data-partytown": true, // ✅ Ensures Partytown processes this script
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
            })(window, document, 'script', 'dataLayer', '${process.env.NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `,
          "data-partytown": true, // ✅ Uses Partytown correctly
        },
      ],
    },
  },
});
