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

onMounted(() => {
  hasVisited.value =
    import.meta.client && sessionStorage.getItem("homepage-visited");
});
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
