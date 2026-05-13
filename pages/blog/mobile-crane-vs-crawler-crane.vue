<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>Mobile vs Crawler Crane</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span
        class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
        >Education</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        Mobile Crane vs Crawler Crane: Key Differences
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/blog-mobile-vs-crawler.png"
          alt="Mobile crane vs crawler crane — key differences comparison guide"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        When planning a heavy lifting project in Navi Mumbai or across
        Maharashtra, one of the first questions is: should you use a mobile
        (all-terrain) crane or a crawler crane? Both are powerful - but they
        serve very different purposes. Here's a complete comparison.
      </p>

      <div class="overflow-x-auto mb-10">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#FF4057] text-white">
              <th class="p-3 text-left">Feature</th>
              <th class="p-3 text-left">Mobile / All-Terrain Crane</th>
              <th class="p-3 text-left">Crawler Crane</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in comparison"
              :key="i"
              :class="i % 2 === 0 ? 'bg-gray-50 dark:bg-zinc-800/50' : ''"
            >
              <td class="p-3 font-semibold">{{ row.feature }}</td>
              <td class="p-3">{{ row.mobile }}</td>
              <td class="p-3">{{ row.crawler }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mb-4">
        When to Choose a Mobile Crane in Navi Mumbai
      </h2>
      <ul class="space-y-2 mb-8">
        <li
          v-for="pt in mobileBest"
          :key="pt"
          class="flex items-start gap-3 text-gray-600 dark:text-gray-300"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
            >✓</span
          >{{ pt }}
        </li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">
        When to Choose a Crawler Crane in Navi Mumbai
      </h2>
      <ul class="space-y-2 mb-10">
        <li
          v-for="pt in crawlerBest"
          :key="pt"
          class="flex items-start gap-3 text-gray-600 dark:text-gray-300"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
            >✓</span
          >{{ pt }}
        </li>
      </ul>

      <div class="p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">Not Sure Which Crane You Need?</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters' expert team can assess your project and recommend the
          right crane. We provide both mobile cranes (XCMG QAY160/200/300) and
          crawler cranes for rent in Navi Mumbai.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/services/mobile-crane-rental"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Mobile Crane Rental</NuxtLink
          >
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title: "Mobile Crane vs Crawler Crane: Key Differences | Saini Lifters Blog",
  meta: [
    {
      name: "description",
      content:
        "Mobile crane vs crawler crane - complete comparison of setup time, mobility, capacity and cost. Understand which crane is right for your project in Navi Mumbai.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "mobile crane vs crawler crane, difference between mobile and crawler crane india, which crane to use navi mumbai, all terrain vs crawler crane",
    },
    {
      property: "og:url",
      content:
        "https://www.sainilifters.com/blog/mobile-crane-vs-crawler-crane",
    },
    {
      property: "og:title",
      content: "Mobile Crane vs Crawler Crane: Key Differences",
    },
    {
      property: "og:description",
      content:
        "Mobile crane vs crawler crane comparison - mobility, capacity, setup and cost. Which is right for your project in Navi Mumbai?",
    },
    { property: "og:image", content: "https://www.sainilifters.com/image/blog-mobile-vs-crawler.png" },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/blog/mobile-crane-vs-crawler-crane",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Mobile Crane vs Crawler Crane: Key Differences",
        "datePublished": "2025-05-13",
        "dateModified": "2025-05-13",
        "author": { "@type": "Organization", "name": "Saini Lifters" },
        "publisher": { "@type": "Organization", "name": "Saini Lifters", "logo": { "@type": "ImageObject", "url": "https://www.sainilifters.com/favicon.png" } },
        "image": "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
        "url": "https://www.sainilifters.com/blog/mobile-crane-vs-crawler-crane",
        "description": "Mobile crane vs crawler crane — complete comparison of setup time, mobility, capacity and cost for Indian construction projects."
      }),
    },
  ],
});
const comparison = [
  {
    feature: "Mobility",
    mobile: "Drives on public roads on rubber tyres",
    crawler:
      "Moves on crawler tracks - needs transport truck for long distances",
  },
  {
    feature: "Setup Time",
    mobile: "30–60 minutes (outriggers)",
    crawler: "Half day to 2 days (assembly required)",
  },
  {
    feature: "Ground Pressure",
    mobile: "High (outriggers concentrate load)",
    crawler: "Low (tracks spread load over large area)",
  },
  {
    feature: "Typical Capacity",
    mobile: "50T to 300T",
    crawler: "80T to 2000T+",
  },
  {
    feature: "Max Boom Length",
    mobile: "Up to 162m (XCMG QAY300)",
    crawler: "140m+ (extendable)",
  },
  {
    feature: "Project Duration",
    mobile: "Better for short/medium projects",
    crawler: "Better for long-duration projects",
  },
  {
    feature: "Ground Conditions",
    mobile: "Needs solid, level ground",
    crawler: "Handles soft, uneven ground well",
  },
  {
    feature: "Rental Cost",
    mobile: "Lower mobilisation + daily rate",
    crawler: "Higher - transport + assembly costs",
  },
];
const mobileBest = [
  "Short to medium projects (days to weeks)",
  "Multiple lift locations in one day",
  "Road-accessible project sites in Navi Mumbai",
  "Medium capacity requirements (50T–300T)",
  "Time-sensitive projects requiring quick setup",
  "Projects across multiple locations in Raigad",
];
const crawlerBest = [
  "Long-duration bridge or dam construction projects",
  "Very heavy lifts exceeding 300 tonnes",
  "Soft ground conditions where outriggers would sink",
  "Projects requiring crane mobility while loaded",
  "Power plant equipment erection",
  "Sites with restricted hard-standing area",
];
</script>
