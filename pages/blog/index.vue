<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <span>Blog</span>
    </nav>
    <section class="relative py-16 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Crane Rental <span class="text-[#FF4057]">Blog</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Expert guides, tips and insights on crane rental, heavy lifting and
          equipment in Navi Mumbai and Maharashtra.
        </p>
      </div>
    </section>
    <section class="max-w-5xl mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group block border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden hover:border-[#FF4057] hover:shadow-lg transition-all duration-300"
        >
          <div
            class="aspect-video bg-gray-100 dark:bg-zinc-800 overflow-hidden"
          >
            <NuxtImg
              :src="`/image/${post.image}`"
              :alt="post.title"
              class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              format="webp"
              loading="lazy"
              width="500"
              height="280"
            />
          </div>
          <div class="p-6">
            <span
              class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
              >{{ post.category }}</span
            >
            <h2
              class="font-bold text-xl mt-2 mb-3 group-hover:text-[#FF4057] transition-colors"
            >
              {{ post.title }}
            </h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ post.excerpt }}
            </p>
            <div
              class="mt-4 text-sm font-semibold text-[#FF4057] flex items-center gap-1"
            >
              Read More
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
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title: "Blog - Crane Rental Tips & Guides | Saini Lifters Navi Mumbai",
  meta: [
    {
      name: "description",
      content:
        "Expert crane rental guides and tips from Saini Lifters, Navi Mumbai. Learn about crane types, rental costs, safety rules and more.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:url", content: "https://www.sainilifters.com/blog" },
    {
      property: "og:title",
      content: "Blog - Crane Rental Tips | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane rental guides and tips from Saini Lifters. Navi Mumbai's trusted crane company since 2001.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/blog" }],
});
const posts = [
  {
    slug: "types-of-cranes-india",
    title: "Types of Cranes Used in Construction in India",
    category: "Education",
    excerpt:
      "A complete guide to the different types of cranes used in Indian construction, infrastructure and port projects.",
    image: "blog-types-of-cranes.png",
  },
  {
    slug: "crane-rental-cost-per-day-india",
    title: "Crane Rental Cost Per Day in India (2024 Guide)",
    category: "Pricing",
    excerpt:
      "What does crane rental actually cost in India? A breakdown of daily rates for hydra cranes, mobile cranes, all-terrain cranes and more.",
    image: "blog-crane-rental-cost.png",
  },
  {
    slug: "crane-rent-vs-buy",
    title: "Crane Rental vs Buying: Which is Better for Your Business?",
    category: "Guide",
    excerpt:
      "Should you rent or buy a crane? A practical analysis for construction and industrial businesses in India.",
    image: "blog-crane-rent-vs-buy.png",
  },
  {
    slug: "mobile-crane-vs-crawler-crane",
    title: "Mobile Crane vs Crawler Crane: Key Differences",
    category: "Education",
    excerpt:
      "Understanding when to choose a mobile crane and when a crawler crane is the better option for your project.",
    image: "blog-mobile-vs-crawler.png",
  },
  {
    slug: "crane-safety-rules-india",
    title: "Top 10 Crane Safety Rules Every Site Manager Must Know",
    category: "Safety",
    excerpt:
      "Essential crane safety rules and regulations for construction sites in India. Protect your workers and project.",
    image: "blog-crane-safety-rules.png",
  },
  {
    slug: "crane-rental-near-jnpt",
    title: "Crane on Rent Near JNPT Port — Complete Guide for Navi Mumbai",
    category: "Guide",
    excerpt:
      "Everything you need to know about renting a crane near JNPT — access routes, permit requirements, container yard operations and why Kalamboli is the key mobilisation base.",
    image: "eq-reach-stacker.png",
  },
  {
    slug: "hydra-crane-vs-farana-crane",
    title: "Hydra Crane vs Farana Crane — Which is Right for Your Factory?",
    category: "Education",
    excerpt:
      "Hydra or Farana? A practical comparison of India's two most popular pick and carry cranes — capacity, indoor use, cost and the right choice for your MIDC factory operation.",
    image: "eq-farana.png",
  },
  {
    slug: "all-terrain-vs-rough-terrain-crane",
    title: "All Terrain Crane vs Rough Terrain Crane — Key Differences",
    category: "Education",
    excerpt:
      "Understand the difference between all terrain and rough terrain cranes — when each is the better choice, how they compare on ground conditions and cost.",
    image: "eq-rough-terrain-crane.png",
  },
  {
    slug: "how-to-book-crane-navi-mumbai",
    title: "How to Book a Crane on Rent in Navi Mumbai — Step-by-Step 2026 Guide",
    category: "Guide",
    excerpt:
      "A step-by-step guide to booking crane rental in Navi Mumbai — from defining your lift requirements to confirming the operator and getting the crane on site.",
    image: "eq-all-terrain-crane.png",
  },
  {
    slug: "forklift-rent-vs-buy-navi-mumbai",
    title: "Forklift on Rent vs Buy — Best Option for Navi Mumbai Factories 2026",
    category: "Pricing",
    excerpt:
      "Should you rent or buy a forklift for your Navi Mumbai MIDC factory? A financial breakdown comparing upfront cost, maintenance, operator salary and breakeven point.",
    image: "eq-forklift.png",
  },
];
</script>
