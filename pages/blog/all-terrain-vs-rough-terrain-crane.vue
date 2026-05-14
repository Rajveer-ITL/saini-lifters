<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>All Terrain vs Rough Terrain Crane</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span
        class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
        >Comparison</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        All Terrain Crane vs Rough Terrain Crane - Key Differences Explained
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/eq-rough-terrain-crane.png"
          alt="All terrain crane vs rough terrain crane comparison - Saini Lifters Navi Mumbai"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Both all-terrain (AT) cranes and rough-terrain (RT) cranes are mobile
        cranes built for challenging conditions - but they are designed for
        fundamentally different scenarios. Picking the wrong type can result in
        a crane that cannot reach your site legally, cannot achieve the required
        lift radius, or costs far more than the job demands. Here is a clear,
        side-by-side breakdown to guide your decision.
      </p>

      <div class="space-y-8">
        <div
          v-for="row in comparisonRows"
          :key="row.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden hover:border-[#FF4057] transition-colors"
        >
          <div class="bg-gray-50 dark:bg-zinc-800 px-6 py-3">
            <h2 class="text-lg font-bold">{{ row.name }}</h2>
          </div>
          <div
            class="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-zinc-700"
          >
            <div class="px-6 py-4">
              <p class="text-xs text-gray-400 uppercase font-semibold mb-1">
                All Terrain Crane
              </p>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                {{ row.allTerrain }}
              </p>
            </div>
            <div class="px-6 py-4">
              <p class="text-xs text-gray-400 uppercase font-semibold mb-1">
                Rough Terrain Crane
              </p>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                {{ row.roughTerrain }}
              </p>
            </div>
            <div class="px-6 py-4 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
              <p class="text-xs text-[#FF4057] uppercase font-semibold mb-1">
                Verdict
              </p>
              <p class="text-gray-700 dark:text-gray-300 text-sm font-medium">
                {{ row.verdict }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-10 border border-gray-200 dark:border-zinc-700 rounded-xl p-6"
      >
        <h2 class="text-2xl font-bold mb-3 text-[#FF4057]">
          When Saini Lifters Recommends Each Type
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          For pan-India deployment - interstate infrastructure projects, bridge
          construction, power plant erection - Saini Lifters' XCMG all-terrain
          cranes (160T–300T) are the right choice. They travel under their own
          power, set up quickly and offer industry-leading lift capacities at
          height.
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          For local MIDC zone projects, construction site yards in Navi Mumbai
          and Panvel, and off-road heavy lifts where road travel is not
          required, a rough-terrain crane offers lower cost and superior ground
          handling. Talk to Saini Lifters about your site conditions and we will
          recommend the right crane for your specific job.
        </p>
      </div>

      <div class="mt-12 p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">
          Need a Mobile Crane in Navi Mumbai?
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters Crane Service has provided all-terrain and mobile cranes
          for construction, infrastructure and industrial projects since 2001.
          Call us for a free consultation and quote.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/equipment"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >View Our Full Fleet</NuxtLink
          >
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title:
    "All Terrain Crane vs Rough Terrain Crane - Key Differences | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "All terrain crane vs rough terrain crane - which mobile crane is right for your project? Compare road travel, capacity, ground pressure, cost and typical projects. Saini Lifters, Navi Mumbai.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "all terrain crane vs rough terrain crane india, difference between all terrain and rough terrain crane, which crane for construction navi mumbai",
    },
    {
      property: "og:url",
      content:
        "https://www.sainilifters.com/blog/all-terrain-vs-rough-terrain-crane",
    },
    {
      property: "og:title",
      content:
        "All Terrain Crane vs Rough Terrain Crane - Key Differences Explained",
    },
    {
      property: "og:description",
      content:
        "Side-by-side comparison of all terrain and rough terrain mobile cranes - road travel, capacity, ground pressure, cost and project suitability.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-rough-terrain-crane.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/blog/all-terrain-vs-rough-terrain-crane",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "All Terrain Crane vs Rough Terrain Crane - Key Differences Explained",
        datePublished: "2026-05-14",
        dateModified: "2026-05-14",
        author: {
          "@type": "Organization",
          name: "Saini Lifters Crane Service",
        },
        publisher: {
          "@type": "Organization",
          name: "Saini Lifters Crane Service",
          logo: {
            "@type": "ImageObject",
            url: "https://www.sainilifters.com/favicon.png",
          },
        },
        image: "https://www.sainilifters.com/image/eq-rough-terrain-crane.png",
        url: "https://www.sainilifters.com/blog/all-terrain-vs-rough-terrain-crane",
        description:
          "A detailed comparison of all-terrain cranes and rough-terrain cranes covering road travel, capacity, ground pressure, setup time, cost and typical project suitability in India.",
      }),
    },
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
            name: "Blog",
            item: "https://www.sainilifters.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "All Terrain vs Rough Terrain Crane",
            item: "https://www.sainilifters.com/blog/all-terrain-vs-rough-terrain-crane",
          },
        ],
      }),
    },
  ],
});

const comparisonRows = [
  {
    name: "Road Travel",
    allTerrain:
      "Highway legal. Multi-axle design allows self-propelled travel at road speed between sites across India.",
    roughTerrain:
      "Not road legal. Must be transported to site on a lowboy trailer - adds transport cost and planning time.",
    verdict:
      "Need to move between multiple sites or travel interstate? All terrain is the only option.",
  },
  {
    name: "Capacity Range",
    allTerrain:
      "50T to 1,200T+. Covers the full range from medium industrial lifts to mega infrastructure projects.",
    roughTerrain:
      "25T to 130T. Suitable for medium-weight structural, mechanical and construction lifts.",
    verdict:
      "Very heavy lifts above 130T → all terrain only. Mid-range lifts on confined off-road sites → rough terrain.",
  },
  {
    name: "Ground Pressure",
    allTerrain:
      "Requires solid, prepared ground. High point loads on outrigger pads need good bearing capacity.",
    roughTerrain:
      "Large, wide tyres distribute load more evenly. Lower effective ground pressure handles soft or unprepared ground better.",
    verdict:
      "Soft, muddy or unprepared sites → rough terrain. Hard-standing or road-adjacent → all terrain.",
  },
  {
    name: "Setup Time",
    allTerrain:
      "Both types use outrigger pads. Larger all-terrain cranes (200T+) have more complex counterweight and boom assembly.",
    roughTerrain:
      "Simpler setup for most RT models. Faster to get operational on smaller lifts.",
    verdict:
      "For fast-turnaround single lifts on confined sites, rough terrain is often quicker to set up.",
  },
  {
    name: "Day Rate Cost",
    allTerrain:
      "Higher day rate reflecting larger machine, greater capacity and more complex logistics.",
    roughTerrain:
      "Lower day rate. More economical for confined off-road sites where road travel is not needed.",
    verdict:
      "Confined off-road sites on a tighter budget → rough terrain. Complex multi-site projects → all terrain.",
  },
  {
    name: "Typical Projects",
    allTerrain:
      "Bridge construction, power plant and wind turbine erection, heavy industrial installations, port infrastructure.",
    roughTerrain:
      "MIDC construction site yards, industrial zone mechanical erection, off-road building sites, infrastructure within a single confined area.",
    verdict:
      "Project type is often the deciding factor - match the crane to the site conditions, not just the capacity.",
  },
];
</script>
