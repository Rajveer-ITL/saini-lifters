<script setup>
import TheHeader from "@/components/TheHeader.vue";
// import PreLoader from "~/components/PreLoader.vue";
// import { ref, onMounted } from "vue";

// const hasVisited = ref(false);

// onMounted(() => {
//   hasVisited.value =
//     process.client && sessionStorage.getItem("homepage-visited");
// });
</script>

<template>
  <div>
    <!-- <PreLoader
      v-if="
        !hasVisited && (useRoute().path === '/' || useRoute().path === '/home')
      "
    /> -->
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
