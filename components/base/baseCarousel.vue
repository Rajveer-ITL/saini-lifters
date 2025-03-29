<template>
  <div class="pt-28 pb-36">
    <div class="container">
      <div class="relative mx-auto max-w-7xl px-4">
        <div ref="emblaRoot" class="overflow-hidden">
          <div class="flex">
            <div
              v-for="(crane, index) in cranes"
              :key="index"
              class="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <BaseCard :crane="crane" />
            </div>
          </div>
        </div>

        <div class="mt-6 mb-4 flex items-center justify-center gap-6">
          <button
            aria-label="Previous slide"
            class="h-10 w-10 rounded-full border-2 flex items-center justify-center"
            @click="scrollPrev"
          >
            <ChevronLeft class="h-6 w-6" />
          </button>

          <button
            aria-label="Toggle autoplay"
            class="h-10 w-10 rounded-full border-2 flex items-center justify-center"
            @click="toggleAutoplay"
          >
            <component :is="isPlaying ? Pause : Play" class="h-6 w-6" />
          </button>

          <button
            aria-label="Next slide"
            class="h-10 w-10 rounded-full border-2 flex items-center justify-center"
            @click="scrollNext"
          >
            <ChevronRight class="h-6 w-6" />
          </button>
        </div>

        <div
          class="relative mt-8 mx-auto w-4/5 h-1 overflow-hidden rounded-full dark:bg-zinc-600 bg-zinc-200"
        >
          <div
            class="absolute h-full bg-red-500 transition-all duration-200 ease-out"
            :style="{ width: `${progress * 100}%` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";
// import { useHead } from "nuxt/app";
import EmblaCarousel from "embla-carousel";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-vue-next";
import { useState } from "#imports";

const BaseCard = defineAsyncComponent(() =>
  import("@/components/base/baseCard.vue")
);

const cranes = useState("cranes", () => [
  {
    name: "XCMG QAY160",
    capacity: "160 tonnes",
    mainBoom: { value: "78m", label: "Main Boom" },
    jib: { value: "21m", label: "JIB" },
    luffing: { value: "63m", label: "Luffing" },
    totalBoom: { value: "162m", label: "Total Boom" },
    image: "crane-1.png",
  },
  {
    name: "XCMG QAY300",
    capacity: "300 tonnes",
    mainBoom: { value: "90m", label: "Main Boom" },
    jib: { value: "86m", label: "JIB" },
    luffing: { value: "67m", label: "Luffing" },
    totalBoom: { value: "270m", label: "Total Boom" },
    image: "crane-2.png",
  },
  {
    name: "XCMG QAY200",
    capacity: "200 tonnes",
    mainBoom: { value: "84m", label: "Main Boom" },
    jib: { value: "56m", label: "JIB" },
    luffing: { value: "34m", label: "Luffing" },
    totalBoom: { value: "867m", label: "Total Boom" },
    image: "crane-4.png",
  },
  {
    name: "GROVE GMK90",
    capacity: "90 tonnes",
    mainBoom: { value: "56m", label: "Main Boom" },
    jib: { value: "24m", label: "JIB" },
    luffing: { value: "48m", label: "Luffing" },
    totalBoom: { value: "130m", label: "Total Boom" },
    image: "crane-5.png",
  },
]);

const emblaRoot = ref(null);
const emblaApi = ref(null);
const isPlaying = ref(true);
const progress = ref(0);
const autoplayDelay = 4000;
let autoplayInterval = null;

const initCarousel = () => {
  emblaApi.value = EmblaCarousel(emblaRoot.value, { loop: true });
  emblaApi.value.on("scroll", updateProgress);
  emblaApi.value.on("select", () => isPlaying.value && resetAutoplay());
  startAutoplay();
};

const startAutoplay = () => {
  autoplayInterval = setInterval(
    () => emblaApi.value?.scrollNext(),
    autoplayDelay
  );
};

const stopAutoplay = () => clearInterval(autoplayInterval);
const resetAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};
const updateProgress = () =>
  (progress.value = emblaApi.value?.scrollProgress() || 0);
const toggleAutoplay = () => {
  isPlaying.value = !isPlaying.value;
  isPlaying.value ? startAutoplay() : stopAutoplay();
};
const scrollPrev = () => emblaApi.value?.scrollPrev();
const scrollNext = () => emblaApi.value?.scrollNext();

onMounted(() => {
  if (process.client) initCarousel();
});
onUnmounted(() => {
  stopAutoplay();
  emblaApi.value?.destroy();
});

// useHead({
//   title: "Crane Showcase | Saini Lifters",
//   meta: [
//     {
//       name: "description",
//       content:
//         "Explore our range of cranes, including XCMG and GROVE models, ideal for heavy lifting and industrial projects.",
//     },
//   ],
// });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
