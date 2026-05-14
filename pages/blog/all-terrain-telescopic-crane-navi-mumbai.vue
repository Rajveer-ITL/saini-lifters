<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>All Terrain Telescopic Crane Navi Mumbai</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider">Guide</span>
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        All Terrain Telescopic Crane on Rent in Navi Mumbai – Complete 2026 Guide
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/eq-all-terrain-crane.png"
          alt="All terrain telescopic crane on rent in Navi Mumbai – XCMG QAY300 from Saini Lifters"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        When project managers in Navi Mumbai, Panvel and Raigad need to lift more than 100 tonnes — across construction sites, power plants and JNPT port operations — the all terrain telescopic crane is almost always the first call. This guide covers everything you need to know about renting one in Navi Mumbai: what it is, when to use it, how much it costs and how to book it.
      </p>

      <h2 class="text-2xl font-bold mb-4">What is an All Terrain Telescopic Crane?</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        An all terrain telescopic crane (often called an AT crane or all-terrain mobile crane) is a heavy lift crane mounted on a multi-axle, all-wheel-drive carrier. The key features that set it apart from other crane types:
      </p>
      <ul class="space-y-2 mb-8">
        <li v-for="pt in atFeatures" :key="pt" class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
          <span class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</span>
          {{ pt }}
        </li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Saini Lifters All Terrain Crane Fleet in Navi Mumbai</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Saini Lifters operates one of the most capable all terrain crane fleets in Navi Mumbai, based at Kalamboli — the heart of Navi Mumbai's industrial zone:
      </p>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden">
          <thead class="bg-[#FF4057] text-white">
            <tr>
              <th class="p-3 text-left">Model</th>
              <th class="p-3 text-left">Capacity</th>
              <th class="p-3 text-left">Main Boom</th>
              <th class="p-3 text-left">Best For</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-zinc-700">
            <tr v-for="crane in craneTable" :key="crane.model" class="bg-white dark:bg-zinc-800">
              <td class="p-3 font-semibold">{{ crane.model }}</td>
              <td class="p-3">{{ crane.capacity }}</td>
              <td class="p-3">{{ crane.boom }}</td>
              <td class="p-3">{{ crane.bestFor }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mb-4">When Do You Need an All Terrain Telescopic Crane?</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Not every lift requires an all terrain crane. Here's when it's the right choice for Navi Mumbai projects:
      </p>
      <ul class="space-y-2 mb-8">
        <li v-for="use in useCases" :key="use" class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
          <span class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</span>
          {{ use }}
        </li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">All Terrain Crane vs Mobile Crane vs Crawler Crane</h2>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden">
          <thead class="bg-[#FF4057] text-white">
            <tr>
              <th class="p-3 text-left">Factor</th>
              <th class="p-3 text-left">All Terrain Crane</th>
              <th class="p-3 text-left">Mobile Crane</th>
              <th class="p-3 text-left">Crawler Crane</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-zinc-700">
            <tr v-for="row in comparisonTable" :key="row.factor" class="bg-white dark:bg-zinc-800">
              <td class="p-3 font-semibold">{{ row.factor }}</td>
              <td class="p-3">{{ row.at }}</td>
              <td class="p-3">{{ row.mobile }}</td>
              <td class="p-3">{{ row.crawler }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mb-4">All Terrain Crane Rental Rates in Navi Mumbai</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        All terrain telescopic crane rental costs depend on the crane capacity, project duration, shift hours and site location. General indicative rates for Navi Mumbai:
      </p>
      <ul class="space-y-2 mb-4">
        <li v-for="rate in rates" :key="rate" class="flex items-start gap-3 text-gray-600 dark:text-gray-300">
          <span class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">₹</span>
          {{ rate }}
        </li>
      </ul>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Monthly contracts and long-term project rates are available at preferential pricing. Call Saini Lifters at <a href="tel:+919322296990" class="text-[#FF4057] font-semibold">+91 9322296990</a> for an accurate, project-specific quote.
      </p>

      <h2 class="text-2xl font-bold mb-4">Key Projects Using All Terrain Cranes in Navi Mumbai</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        All terrain telescopic cranes from Saini Lifters have been deployed on projects including bridge segment erection along the Navi Mumbai–Pune expressway, transformer and reactor installation at power substations in Raigad, structural steel erection for high-rise buildings in Kharghar and Belapur, heavy machinery installation at Taloja and Patalganga MIDC pharmaceutical plants, and container yard operations near JNPT port.
      </p>

      <div class="mt-10 p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">
          Book All Terrain Telescopic Crane in Navi Mumbai
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters operates XCMG QAY160 and QAY300 all terrain telescopic cranes from our Kalamboli base. Available 24/7. Certified operators included. Call now for rates and availability.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/equipment/all-terrain-crane"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >View Crane Specs</NuxtLink
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "All Terrain Telescopic Crane on Rent in Navi Mumbai | 2026 Guide | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Complete guide to all terrain telescopic crane rental in Navi Mumbai. XCMG QAY160 (160T) & QAY300 (300T) available 24/7 from Kalamboli. Rates, uses, comparison & booking guide. Saini Lifters +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "all terrain telescopic crane on rent navi mumbai, telescopic crane rental navi mumbai, all terrain crane navi mumbai, XCMG QAY300 rental navi mumbai, 300T crane rental navi mumbai, heavy crane rental navi mumbai",
    },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://www.sainilifters.com/blog/all-terrain-telescopic-crane-navi-mumbai" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    { property: "og:title", content: "All Terrain Telescopic Crane on Rent in Navi Mumbai | 2026 Guide" },
    { property: "og:description", content: "Complete guide to all terrain telescopic crane rental in Navi Mumbai. XCMG QAY160 & QAY300 available 24/7 from Kalamboli. Rates, uses & booking." },
    { property: "og:image", content: "https://www.sainilifters.com/image/eq-all-terrain-crane.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "All Terrain Telescopic Crane Rental Navi Mumbai | Guide" },
    { name: "twitter:description", content: "Complete guide to all terrain telescopic crane rental in Navi Mumbai. XCMG QAY160 & QAY300 from Kalamboli. Call Saini Lifters +91 9322296990." },
    { name: "twitter:image", content: "https://www.sainilifters.com/image/eq-all-terrain-crane.png" },
  ],
  link: [
    { rel: "canonical", href: "https://www.sainilifters.com/blog/all-terrain-telescopic-crane-navi-mumbai" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "All Terrain Telescopic Crane on Rent in Navi Mumbai – Complete 2026 Guide",
        datePublished: "2026-05-14",
        dateModified: "2026-05-14",
        author: { "@type": "Organization", name: "Saini Lifters" },
        publisher: {
          "@type": "Organization",
          name: "Saini Lifters",
          logo: { "@type": "ImageObject", url: "https://www.sainilifters.com/favicon.png" },
        },
        image: "https://www.sainilifters.com/image/eq-all-terrain-crane.png",
        url: "https://www.sainilifters.com/blog/all-terrain-telescopic-crane-navi-mumbai",
        description: "Complete guide to all terrain telescopic crane rental in Navi Mumbai — uses, rates, crane models and how to book from Saini Lifters.",
        keywords: "all terrain telescopic crane navi mumbai, XCMG QAY300, telescopic crane rental",
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sainilifters.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.sainilifters.com/blog" },
          { "@type": "ListItem", position: 3, name: "All Terrain Telescopic Crane Navi Mumbai", item: "https://www.sainilifters.com/blog/all-terrain-telescopic-crane-navi-mumbai" },
        ],
      }),
    },
  ],
});

const atFeatures = [
  "Highway-capable: travels at full road speed without a lowboy trailer — no special transport permit needed within Maharashtra",
  "All-wheel drive and steering for rough, uneven or muddy terrain at construction and industrial sites",
  "Telescoping multi-section boom reaching 78m–100m+ main boom length",
  "High lift capacities from 50T up to 700T depending on model",
  "Fast setup: ready to lift in 2–4 hours (vs 2–5 days for a crawler crane)",
  "Outrigger-based stability for maximum rated capacity lifts",
  "Multi-site flexibility — can move between sites within the same day",
];

const craneTable = [
  { model: "XCMG QAY160", capacity: "160T", boom: "78m", bestFor: "Bridge work, industrial machinery, high-rise construction" },
  { model: "XCMG QAY300", capacity: "300T", boom: "90m", bestFor: "Power plant, heavy reactor lifts, large bridge segments" },
  { model: "700T Heavy Lift", capacity: "700T", boom: "100m+", bestFor: "Mega infrastructure, port equipment, pan-India projects" },
];

const useCases = [
  "Lifts above 100T — where mobile cranes reach their capacity limits",
  "Projects requiring highway travel between multiple sites in Navi Mumbai and Raigad",
  "Bridge segment erection along NH-66, Panvel–Pune corridor and MIDC ring roads",
  "Power plant and substation transformer installation in Raigad and Maharashtra",
  "High-rise building construction above 15 storeys in Kharghar, Belapur and Panvel",
  "Industrial machinery installation at Taloja MIDC, Patalganga MIDC and Khopoli MIDC",
  "Port and JNPT area operations requiring high-capacity container and cargo lifts",
];

const comparisonTable = [
  { factor: "Road Travel", at: "Highway speed — self-driven", mobile: "Highway speed", crawler: "Lowboy trailer required" },
  { factor: "Capacity", at: "50T – 700T", mobile: "50T – 500T", crawler: "100T – 400T+" },
  { factor: "Setup Time", at: "2–4 hours", mobile: "1–3 hours", crawler: "2–5 days" },
  { factor: "Ground Pressure", at: "Medium (outriggers)", mobile: "Medium (outriggers)", crawler: "Low (tracks — best for soft ground)" },
  { factor: "Multi-site Use", at: "Excellent", mobile: "Good", crawler: "Poor" },
  { factor: "Best For", at: "Heavy lifts, multi-site, highway travel", mobile: "Light-medium lifts, urban sites", crawler: "Long-duration, soft ground, very heavy lifts" },
];

const rates = [
  "XCMG QAY160 (160T): ₹50,000 – ₹80,000 per day (8-hour shift, Navi Mumbai area)",
  "XCMG QAY300 (300T): ₹80,000 – ₹1,50,000 per day depending on project scope",
  "700T heavy lift crane: Project-specific pricing — call for quote",
  "Monthly contracts: 15–25% discount on daily rates for long-term projects",
  "Mobilisation charges may apply for sites outside Navi Mumbai / Raigad",
];
</script>
