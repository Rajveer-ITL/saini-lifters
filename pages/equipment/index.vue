<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Equipment</span>
    </nav>

    <!-- Hero -->
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane &amp; Lifting Equipment on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters operates a comprehensive fleet - All Terrain Cranes
          (50T–700T), Rough Terrain Cranes, Crawler Cranes, Manlifts &amp; Boom
          Lifts, Reach Stackers, Forklifts, Side Shifters, Farana Pick &amp;
          Carry Cranes, and Transport Trailers. Serving Navi Mumbai, Panvel,
          Kalamboli and pan-India.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/contact-us"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >Get Free Quote</NuxtLink
          >
        </div>
      </div>
    </section>

    <!-- Filter + Grid -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <!-- Filter buttons -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="cat in filterCategories"
          :key="cat"
          @click="activeFilter = cat"
          :class="[
            'px-4 py-2 rounded-full text-sm font-semibold border transition-colors',
            activeFilter === cat
              ? 'bg-[#FF4057] text-white border-[#FF4057]'
              : 'border-gray-300 dark:border-zinc-600 text-gray-600 dark:text-gray-300 hover:border-[#FF4057] hover:text-[#FF4057]',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Equipment cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="item in filteredItems"
          :key="item.slug"
          :to="`/equipment/${item.slug}`"
          class="group border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden hover:border-[#FF4057] hover:shadow-lg transition-all duration-300 bg-white dark:bg-zinc-900"
        >
          <div
            class="aspect-video bg-gray-50 dark:bg-zinc-800 overflow-hidden flex items-center justify-center"
          >
            <img
              :src="`/image/${item.image}`"
              :alt="`${item.name} on rent in Navi Mumbai`"
              class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div class="p-5">
            <span
              class="text-xs bg-[#FF4057]/10 text-[#FF4057] px-2 py-1 rounded-full font-semibold"
              >{{ item.category }}</span
            >
            <h2
              class="font-bold text-lg mt-3 mb-1 group-hover:text-[#FF4057] transition-colors"
            >
              {{ item.name }}
            </h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Fleet:
              <span class="font-semibold text-gray-700 dark:text-gray-300">{{
                item.fleet
              }}</span>
            </p>
            <div
              class="flex items-center gap-1 text-sm font-semibold text-[#FF4057]"
            >
              View Details
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
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">
          Need Equipment on Rent in Navi Mumbai?
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Call us 24/7 for availability, rates and same-day deployment from our
          Kalamboli yard.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <a
            href="https://wa.me/919322296990?text=Hi%20I%20need%20equipment%20on%20rent%20in%20Navi%20Mumbai"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >WhatsApp Us</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useHead } from "#imports";

const filterCategories = [
  "All",
  "Cranes",
  "Manlifts & AWP",
  "Container Handling",
  "Pick & Carry",
  "Transport",
];
const activeFilter = ref("All");

const equipmentItems = [
  {
    name: "All Terrain Telescopic Crane",
    slug: "all-terrain-crane",
    fleet: "50T – 700T",
    category: "Cranes",
    image: "eq-all-terrain-crane.png",
  },
  {
    name: "Rough Terrain Crane",
    slug: "rough-terrain-crane",
    fleet: "25T – 130T",
    category: "Cranes",
    image: "eq-rough-terrain-crane.png",
  },
  {
    name: "Crawler Crane",
    slug: "crawler-crane",
    fleet: "100T – 400T",
    category: "Cranes",
    image: "eq-crawler-crane.png",
  },
  {
    name: "Manlift & Boom Lift",
    slug: "manlift-boom-lift",
    fleet: "Up to 185 ft",
    category: "Manlifts & AWP",
    image: "eq-articulated-boomlift.png",
  },
  {
    name: "Reach Stacker",
    slug: "reach-stacker",
    fleet: "45T capacity",
    category: "Container Handling",
    image: "eq-reach-stacker.png",
  },
  {
    name: "Forklift",
    slug: "forklift",
    fleet: "Up to 25T",
    category: "Container Handling",
    image: "eq-forklift.png",
  },
  {
    name: "Side Shifter",
    slug: "side-shifter",
    fleet: "20T – 40T",
    category: "Container Handling",
    image: "eq-side-shifter.png",
  },
  {
    name: "Farana (Pick & Carry)",
    slug: "farana",
    fleet: "20T – 50T",
    category: "Pick & Carry",
    image: "eq-farana.png",
  },
  {
    name: "Transport Trailer",
    slug: "transport-trailer",
    fleet: "20ft / 40ft ISO",
    category: "Transport",
    image: "eq-transport-trailer.png",
  },
];

const filteredItems = computed(() =>
  activeFilter.value === "All"
    ? equipmentItems
    : equipmentItems.filter((e) => e.category === activeFilter.value),
);

useHead({
  title: "Crane & Lifting Equipment on Rent in Navi Mumbai | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Crane and lifting equipment on rent in Navi Mumbai - All Terrain Cranes (50T–700T), Rough Terrain, Crawler, Manlift, Boom Lift, Scissor Lift, Reach Stacker, Forklift, Side Shifter, Farana, Transport Trailer. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent navi mumbai, all terrain crane rental navi mumbai, manlift on rent navi mumbai, boom lift rental navi mumbai, reach stacker rental, forklift on rent navi mumbai, crawler crane rental, farana crane navi mumbai",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/equipment" },
    {
      property: "og:title",
      content:
        "Crane & Lifting Equipment on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "All Terrain Cranes, Rough Terrain, Crawler Cranes, Manlifts, Boom Lifts, Reach Stackers, Forklifts - full fleet available for rent in Navi Mumbai. Call +91 9322296990.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-all-terrain-crane.png",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/equipment" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sainilifters.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Equipment",
            item: "https://www.sainilifters.com/equipment",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Crane & Lifting Equipment on Rent - Saini Lifters Navi Mumbai",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "All Terrain Telescopic Crane",
            url: "https://www.sainilifters.com/equipment/all-terrain-crane",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Rough Terrain Crane",
            url: "https://www.sainilifters.com/equipment/rough-terrain-crane",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Crawler Crane",
            url: "https://www.sainilifters.com/equipment/crawler-crane",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Manlift & Boom Lift",
            url: "https://www.sainilifters.com/equipment/manlift-boom-lift",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Reach Stacker",
            url: "https://www.sainilifters.com/equipment/reach-stacker",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Forklift",
            url: "https://www.sainilifters.com/equipment/forklift",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Side Shifter",
            url: "https://www.sainilifters.com/equipment/side-shifter",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Farana Pick & Carry Crane",
            url: "https://www.sainilifters.com/equipment/farana",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Transport Trailer",
            url: "https://www.sainilifters.com/equipment/transport-trailer",
          },
        ],
      }),
    },
  ],
});
</script>
