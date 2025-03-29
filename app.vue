<script setup>
import TheHeader from "@/components/TheHeader.vue";
import PreLoader from "~/components/PreLoader.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "#imports"; // Using Nuxt's built-in useRoute

const hasVisited = ref(false);
const route = useRoute();

onMounted(() => {
  hasVisited.value =
    import.meta.client && sessionStorage.getItem("homepage-visited");
});
</script>

<template>
  <div>
    <PreLoader
      v-if="!hasVisited && (route.path === '/' || route.path === '/home')"
    />
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
