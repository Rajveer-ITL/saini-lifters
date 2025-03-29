<template>
  <div class="min-h-screen mt-[70px]">
    <!-- Hero Section -->
    <section
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div class="text-center space-y-4 px-4 z-10">
        <h1 class="text-4xl md:text-6xl font-bold">
          <span class="text-red-500">Professional</span> Lifting Solutions
        </h1>
        <p
          class="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Comprehensive range of heavy lifting and material handling equipment
          for rent
        </p>
      </div>
      <DotPattern
        :class="'[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'"
      />
    </section>

    <!-- Services Grid -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Need Heavy Lifting Solutions?
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-8">
          Contact us today to discuss your requirements and get a customized
          rental solution
        </p>
        <NuxtLink
          to="/contact-us"
          class="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Get a Quote
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "#imports";
import {
  Construction,
  Container,
  Forklift as ForkliftTruck,
  ArrowUpCircle,
} from "lucide-vue-next";
import DotPattern from "@/components/inspiraUi/dottedBackground.vue";
import ServiceCard from "@/components/base/serviceCard.vue";

useHead({
  title: "Professional Lifting Solutions - Crane & Equipment Rentals",
  meta: [
    {
      name: "description",
      content:
        "Rent high-quality lifting equipment, cranes, and forklifts with professional service and nationwide coverage.",
    },
    {
      property: "og:title",
      content: "Professional Lifting Solutions - Crane & Equipment Rentals",
    },
    {
      property: "og:description",
      content:
        "Find the best lifting and material handling solutions for your business with our top-tier rental services.",
    },
  ],
});

const services = ref([
  {
    title: "Mobile Crane Rental",
    description:
      "High-capacity mobile cranes for construction and industrial projects.",
    icon: Construction,
    features: [
      "24/7 availability",
      "Experienced operators",
      "Various capacity options",
      "Nationwide service",
    ],
  },
  {
    title: "Side Shifter Rental",
    description:
      "Efficient side shifters for precise container handling and positioning.",
    icon: Container,
    features: [
      "Precise control",
      "Multiple attachment options",
      "Regular maintenance",
      "Technical support",
    ],
  },
  {
    title: "Reach Stacker Rental",
    description:
      "Versatile reach stackers for container handling and stacking operations.",
    icon: ArrowUpCircle,
    features: [
      "High stacking capability",
      "Container handling",
      "Reliable performance",
      "Expert operators",
    ],
  },
  {
    title: "Forklift Rental",
    description: "Modern forklift fleet for various material handling needs.",
    icon: ForkliftTruck,
    features: [
      "Various capacities",
      "Indoor/outdoor use",
      "Flexible rental terms",
      "Maintenance included",
    ],
  },
]);
</script>
