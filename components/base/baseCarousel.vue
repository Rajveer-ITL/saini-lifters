<template>
  <div class="pt-16 pb-36">
    <div class="container">
      <div class="text-center mb-10 px-4">
        <h2 class="text-3xl md:text-4xl font-bold">
          Our <span class="text-[#FF4057]">Equipment Fleet</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          Crane on rent in Navi Mumbai — All Terrain Cranes (50T–700T), Crawler Cranes, Manlifts, Reach Stackers, Forklifts and more.
        </p>
      </div>
      <div class="relative mx-auto max-w-7xl px-4">
        <div ref="emblaRoot" class="overflow-hidden">
          <div class="flex items-stretch">
            <div
              v-for="(crane, index) in cranes"
              :key="index"
              class="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] h-full"
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
import EmblaCarousel from "embla-carousel";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-vue-next";

const BaseCard = defineAsyncComponent(() =>
  import("@/components/base/baseCard.vue")
);

const cranes = [
  {
    name: "All Terrain Telescopic Crane",
    capacity: "50T – 700T",
    mainBoom: { value: "Up to 90m", label: "Main Boom" },
    jib: { value: "Up to 100m", label: "Max Radius" },
    luffing: { value: "All Terrain", label: "Drive" },
    totalBoom: { value: "XCMG / Grove", label: "Brand" },
    image: "eq-all-terrain-crane.png",
    link: "/equipment/all-terrain-crane",
  },
  {
    name: "Rough Terrain Crane",
    capacity: "25T – 130T",
    mainBoom: { value: "Up to 50m", label: "Main Boom" },
    jib: { value: "4x4 Drive", label: "Drive" },
    luffing: { value: "Rough Sites", label: "Terrain" },
    totalBoom: { value: "SANY", label: "Brand" },
    image: "eq-rough-terrain-crane.png",
    link: "/equipment/rough-terrain-crane",
  },
  {
    name: "Crawler Crane",
    capacity: "100T – 400T",
    mainBoom: { value: "52m+", label: "Main Boom" },
    jib: { value: "18m", label: "JIB" },
    luffing: { value: "360°", label: "Swing" },
    totalBoom: { value: "SANY", label: "Brand" },
    image: "eq-crawler-crane.png",
    link: "/equipment/crawler-crane",
  },
  {
    name: "Manlift & Boom Lift",
    capacity: "Up to 185 ft",
    mainBoom: { value: "185 ft (56m)", label: "Max Height" },
    jib: { value: "1–2 Persons", label: "Basket" },
    luffing: { value: "Electric / Diesel", label: "Power" },
    totalBoom: { value: "Artic / Tele / Scissor", label: "Types" },
    image: "eq-articulated-boomlift.png",
    link: "/equipment/manlift-boom-lift",
  },
  {
    name: "Reach Stacker",
    capacity: "45T",
    mainBoom: { value: "3 Rows Deep", label: "Stack Depth" },
    jib: { value: "20ft & 40ft", label: "Container" },
    luffing: { value: "360°", label: "Swing" },
    totalBoom: { value: "Kalmar", label: "Brand" },
    image: "eq-reach-stacker.png",
    link: "/equipment/reach-stacker",
  },
  {
    name: "Forklift",
    capacity: "5T – 25T",
    mainBoom: { value: "Up to 6m", label: "Mast Height" },
    jib: { value: "Diesel", label: "Fuel" },
    luffing: { value: "Counterbalance", label: "Type" },
    totalBoom: { value: "MIDC / Yard", label: "Use" },
    image: "eq-forklift.png",
    link: "/equipment/forklift",
  },
  {
    name: "Side Shifter",
    capacity: "20T – 40T",
    mainBoom: { value: "±600mm", label: "Shift Range" },
    jib: { value: "20ft & 40ft", label: "Container" },
    luffing: { value: "CFS / Terminal", label: "Use" },
    totalBoom: { value: "Kalmar", label: "Brand" },
    image: "eq-side-shifter.png",
    link: "/equipment/side-shifter",
  },
  {
    name: "Farana (Pick & Carry)",
    capacity: "20T – 50T",
    mainBoom: { value: "Telescopic", label: "Boom Type" },
    jib: { value: "Rubber Tyres", label: "Drive" },
    luffing: { value: "360°", label: "Swing" },
    totalBoom: { value: "Pick & Carry", label: "Type" },
    image: "eq-farana.png",
    link: "/equipment/farana",
  },
  {
    name: "Transport Trailer",
    capacity: "20ft / 40ft ISO",
    mainBoom: { value: "Up to 40T", label: "Payload" },
    jib: { value: "ODC / ISO", label: "Cargo" },
    luffing: { value: "Pan-India", label: "Coverage" },
    totalBoom: { value: "Flatbed", label: "Type" },
    image: "eq-transport-trailer.png",
    link: "/equipment/transport-trailer",
  },
];

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
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
