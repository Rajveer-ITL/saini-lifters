<template>
  <div class="min-h-screen mt-[70px]">
    <!-- Hero Section -->
    <section
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div class="text-center space-y-4 px-4 z-10">
        <h1 class="text-4xl md:text-6xl font-bold">
          <span class="text-[#FF4057]">Professional</span> Lifting Solutions
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
  title:
    "Crane Rental Services | Professional Lifting Solutions - Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Saini Lifters offers professional crane rental services with a wide range of lifting solutions, including mobile cranes, tower cranes, forklifts, and heavy-duty lifting equipment. Trusted nationwide for industrial, construction, and infrastructure projects.",
    },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/services" },
    {
      property: "og:title",
      content: "Crane Rental & Heavy Lifting Services - Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Get reliable crane rental services for industrial and construction projects. Saini Lifters provides mobile cranes, forklifts, reach stackers, and specialized lifting equipment with expert operators and nationwide coverage.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/services-page-LhYMfOojrB74W0Isy9D8xlumW5mMy3.webp",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.sainilifters.com/services" },
    {
      name: "twitter:title",
      content: "Crane Rental & Heavy Lifting Services - Saini Lifters",
    },
    {
      name: "twitter:description",
      content:
        "Explore our professional crane rental services with a range of lifting solutions for construction, industrial, and heavy-duty applications. Trusted by top industries nationwide.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/services-page-LhYMfOojrB74W0Isy9D8xlumW5mMy3.webp",
    },

    // Additional SEO Boosters
    {
      name: "keywords",
      content:
        "crane rental, heavy lifting, lifting equipment, mobile cranes, tower cranes, forklift rental, industrial lifting services",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
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
