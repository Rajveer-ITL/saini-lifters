<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">
          Why Choose <span class="text-[#FF4057]">Saini Lifters</span>?
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          The most trusted crane rental company in Navi Mumbai - serving Panvel,
          Kalamboli, Raigad, Mumbai and Thane since 2001.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="usp in usps"
          :key="usp.title"
          class="flex flex-col items-start p-6 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-[#FF4057] hover:shadow-md transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-lg bg-[#FF4057]/10 flex items-center justify-center mb-4"
          >
            <component :is="usp.icon" class="w-6 h-6 text-[#FF4057]" />
          </div>
          <h3 class="font-bold text-lg mb-2">{{ usp.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {{ usp.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Clock, Shield, Layers, Truck, Award, MapPin } from "lucide-vue-next";

const usps = [
  {
    title: "24/7 Availability",
    desc: "Round-the-clock crane rental service in Navi Mumbai, Panvel and Kalamboli. Emergency deployments handled within hours.",
    icon: Clock,
  },
  {
    title: "Certified Operators",
    desc: "All cranes come with trained, certified and experienced operators ensuring safe and precise lifting operations.",
    icon: Shield,
  },
  {
    title: "50T – 400T Capacity",
    desc: "From compact hydra cranes to 300-tonne all-terrain cranes - we have the right equipment for every project size.",
    icon: Layers,
  },
  {
    title: "Modern XCMG Fleet",
    desc: "XCMG QAY160, QAY200, QAY300 and Grove GMK90 - regularly serviced, well-maintained heavy lifting machines.",
    icon: Truck,
  },
  {
    title: "20+ Years Experience",
    desc: "Founded in 2001 by Mr. Charanjit Singh. Over two decades of expertise in crane rental and heavy lifting across Maharashtra.",
    icon: Award,
  },
  {
    title: "Pan-Maharashtra Service",
    desc: "Serving Navi Mumbai, Panvel, Kalamboli, Raigad, Mumbai, Thane and surrounding areas. Rapid mobilisation within 24-48 hours.",
    icon: MapPin,
  },
];
</script>
