<template>
  <!-- <NuxtLink
    to="/contact-us"
    class="base-line w-full bg-[#ff4056] flex justify-start md:justify-center items-center overflow-hidden cursor-pointer"
    role="button"
    aria-label="Navigate to contact page"
  > -->
  <div
    class="dark:text-black text-[30px] font-serif text-white py-6 font-extrabold flex items-center whitespace-nowrap scroll-animation"
  >
    <Construction class="ml-3 w-12 h-12 mr-4 md:mr-6 flex-shrink-0" />
    Elevate Your Next Project With Our Best Heavy Lifting Services.
  </div>
  <!-- </NuxtLink> -->
</template>

<script setup>
import { Construction } from "lucide-vue-next";
</script>

<style scoped>
/* Define the scrolling animation */
@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Apply animation only for smaller screens */
.scroll-animation {
  display: flex;
  align-items: center;
  justify-content: start;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .scroll-animation {
    animation: scroll 20s linear infinite;
  }
}
</style>
