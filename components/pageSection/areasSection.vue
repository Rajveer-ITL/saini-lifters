<template>
  <section class="py-20 bg-gray-50 dark:bg-zinc-900/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">
          Crane on Rent <span class="text-[#FF4057]">Near You</span> — Areas We Serve
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Saini Lifters provides crane rental services across Navi Mumbai and the wider MMR region. Rapid mobilisation within 24–48 hours.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <NuxtLink
          v-for="area in areas"
          :key="area.name"
          :to="area.link"
          class="group flex flex-col items-center text-center p-5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-[#FF4057] hover:shadow-md transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-full bg-[#FF4057]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF4057] transition-colors">
            <MapPin class="w-5 h-5 text-[#FF4057] group-hover:text-white transition-colors" />
          </div>
          <h3 class="font-semibold text-sm group-hover:text-[#FF4057] transition-colors">{{ area.name }}</h3>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">{{ area.sub }}</p>
        </NuxtLink>
      </div>

      <div class="text-center mt-10">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Can't find your area? <a href="tel:+919322296990" class="text-[#FF4057] font-semibold hover:underline">Call us at +91 9322296990</a> — we deploy across all of Maharashtra.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin } from "lucide-vue-next";

const areas = [
  { name: "Navi Mumbai", sub: "Primary area", link: "/crane-rental/navi-mumbai" },
  { name: "Panvel", sub: "Crane hub", link: "/crane-rental/panvel" },
  { name: "Kalamboli", sub: "Base location", link: "/crane-rental/kalamboli" },
  { name: "Raigad", sub: "District", link: "/crane-rental/raigad" },
  { name: "Mumbai", sub: "MMR region", link: "/crane-rental/mumbai" },
  { name: "Thane", sub: "MMR region", link: "/crane-rental/thane" },
];
</script>
