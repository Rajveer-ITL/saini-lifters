<script setup>
import TheHeader from "@/components/TheHeader.vue";
import PreLoader from "~/components/PreLoader.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "#imports"; // Using Nuxt's built-in useRoute
import { useSeoMeta } from "#imports";

useSeoMeta({
  title: "Saini Lifters - Best Crane Services",
  description: "Providing top-notch crane services for all industries.",
  ogLocale: "en_US", // Open Graph locale
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
});

const hasVisited = ref(false);
const route = useRoute();
const config = useRuntimeConfig();

onMounted(() => {
  hasVisited.value =
    import.meta.client && sessionStorage.getItem("homepage-visited");
  if (import.meta.client) {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      if (y) y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", config.public.clarityId);
  }
});

watch(
  () => route.fullPath,
  () => {
    if (import.meta.client && window.clarity) {
      window.clarity("trackPageView");
    }
  }
);
</script>

<template>
  <div>
    <ClientOnly>
      <PreLoader
        v-if="!hasVisited && (route.path === '/' || route.path === '/home')"
      />
    </ClientOnly>
    <ClientOnly>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KPZBMV9J"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
          title="Google Tag Manager"
        ></iframe>
      </noscript>
    </ClientOnly>
    <div>
      <TheHeader />
      <NuxtPage />
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}

html.dark {
  color-scheme: dark;
}
body {
  @apply bg-white dark:bg-[#161719] dark:text-[#ffffff] text-[#234a76];
}
</style>
