<template>
  <section class="py-20 bg-gray-50 dark:bg-zinc-900/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">
          Crane & Equipment
          <span class="text-[#FF4057]">Rental Services</span> in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          From 8-tonne hydra cranes to 300-tonne all-terrain cranes - Saini
          Lifters has the right equipment for every project in Navi Mumbai,
          Panvel and Kalamboli.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="service in services"
          :key="service.title"
          :to="service.link"
          class="group relative rounded-xl border border-gray-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900 hover:border-[#FF4057] hover:shadow-lg transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FF4057]/10 flex items-center justify-center group-hover:bg-[#FF4057] transition-colors"
            >
              <component
                :is="service.icon"
                class="w-6 h-6 text-[#FF4057] group-hover:text-white transition-colors"
              />
            </div>
            <div>
              <h3
                class="font-bold text-lg mb-1 group-hover:text-[#FF4057] transition-colors"
              >
                {{ service.title }}
              </h3>
              <p
                class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                {{ service.desc }}
              </p>
            </div>
          </div>
          <div
            class="mt-4 text-sm font-semibold text-[#FF4057] flex items-center gap-1"
          >
            Learn More
            <svg
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center mt-10">
        <NuxtLink
          to="/services"
          class="inline-flex items-center gap-2 bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          View All Services
          <svg
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Construction,
  Truck,
  ChevronsUp,
  Anchor,
  ArrowUpCircle,
  Layers,
  MoveHorizontal,
  PackageOpen,
  Container,
} from "lucide-vue-next";

const services = [
  {
    title: "Mobile Crane Rental",
    desc: "XCMG QAY series 90T–300T mobile cranes for construction and industrial projects.",
    icon: Construction,
    link: "/services/mobile-crane-rental",
  },
  {
    title: "Hydra Crane Rental",
    desc: "8T–14T pick-and-carry hydra cranes for factory and tight-space lifting.",
    icon: Truck,
    link: "/services/hydra-crane-rental",
  },
  {
    title: "Manlift & Boom Lift",
    desc: "Articulating and telescopic boom lifts from 30 ft to 185 ft working height.",
    icon: ChevronsUp,
    link: "/services/manlift-rental",
  },
  {
    title: "All-Terrain Crane",
    desc: "XCMG QAY160/200/300 all-terrain cranes for heavy infrastructure projects.",
    icon: Anchor,
    link: "/services/all-terrain-crane-rental",
  },
  {
    title: "Reach Stacker Rental",
    desc: "45-tonne reach stackers for container handling and port operations.",
    icon: ArrowUpCircle,
    link: "/services/reach-stacker-rental",
  },
  {
    title: "Container Stacker",
    desc: "Heavy-duty container stackers for yard and port logistics near JNPT.",
    icon: Layers,
    link: "/services/container-stacker-rental",
  },
  {
    title: "Side Shifter Rental",
    desc: "Precision side shifters for horizontal container positioning in terminals.",
    icon: MoveHorizontal,
    link: "/services/side-shifter-rental",
  },
  {
    title: "Crawler Crane Rental",
    desc: "80T–400T crawler cranes for bridge construction and power plant projects.",
    icon: PackageOpen,
    link: "/services/crawler-crane-rental",
  },
  {
    title: "Pick & Carry (Farana)",
    desc: "20T–50T farana and pick-and-carry cranes for industrial zone operations.",
    icon: Container,
    link: "/services/pick-carry-crane-rental",
  },
];
</script>
