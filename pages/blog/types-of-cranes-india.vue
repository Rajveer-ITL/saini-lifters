<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>Types of Cranes in India</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span
        class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
        >Education</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        Types of Cranes Used in Construction in India
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/blog-types-of-cranes.png"
          alt="Types of cranes used in construction in India - complete visual guide"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        India's booming construction and infrastructure sector relies on a wide
        variety of crane types for different project requirements. Here's a
        comprehensive guide to the most common cranes used in Indian
        construction, industrial and port projects - with details on when and
        why to use each.
      </p>

      <div class="space-y-10">
        <div
          v-for="type in craneTypes"
          :key="type.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h2 class="text-2xl font-bold mb-3 text-[#FF4057]">
            {{ type.name }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ type.desc }}</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h3 class="font-semibold mb-2">Best For:</h3>
              <ul class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li v-for="use in type.uses" :key="use">✓ {{ use }}</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Typical Capacity:</h3>
              <p class="text-[#FF4057] font-bold text-lg">
                {{ type.capacity }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">Need a Crane in Navi Mumbai?</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters provides all types of cranes on rent in Navi Mumbai,
          Panvel and Kalamboli since 2001. Call us for a free quote.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/crane-rental/navi-mumbai"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Crane Rental Navi Mumbai</NuxtLink
          >
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title: "Types of Cranes Used in Construction in India | Saini Lifters Blog",
  meta: [
    {
      name: "description",
      content:
        "Complete guide to types of cranes used in construction in India - mobile cranes, hydra, all-terrain, crawler, tower cranes and more. Which crane is right for your project?",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "types of cranes in india, types of cranes used in construction, mobile crane types india, all terrain crane india, hydra crane types",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/blog/types-of-cranes-india",
    },
    {
      property: "og:title",
      content: "Types of Cranes Used in Construction in India",
    },
    {
      property: "og:description",
      content:
        "Complete guide to crane types used in Indian construction - mobile, hydra, all-terrain, crawler, tower cranes and more.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/blog-types-of-cranes.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/blog/types-of-cranes-india",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Types of Cranes Used in Construction in India",
        datePublished: "2025-05-13",
        dateModified: "2025-05-13",
        author: { "@type": "Organization", name: "Saini Lifters" },
        publisher: {
          "@type": "Organization",
          name: "Saini Lifters",
          logo: {
            "@type": "ImageObject",
            url: "https://www.sainilifters.com/favicon.png",
          },
        },
        image:
          "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
        url: "https://www.sainilifters.com/blog/types-of-cranes-india",
        description:
          "A guide to the most common types of cranes used in construction and infrastructure projects in India, with capacity and use case details.",
      }),
    },
  ],
});
const craneTypes = [
  {
    name: "1. Mobile Crane (All-Terrain Crane)",
    desc: "All-terrain cranes are the most versatile heavy cranes in India. They combine on-road speed with off-road capability, making them ideal for construction, bridge and infrastructure projects. Saini Lifters' XCMG QAY series (160T–300T) are among the most powerful all-terrain cranes available for rent in Navi Mumbai.",
    uses: [
      "Bridge construction",
      "Power plant erection",
      "Heavy industrial projects",
      "Infrastructure works",
    ],
    capacity: "50T to 500T+",
  },
  {
    name: "2. Hydra Crane (Pick & Carry)",
    desc: "Hydra cranes are India's most common small crane - compact, rubber-wheeled and able to drive with a load lifted. They are the workhorse of factory floors, construction sites and industrial zones across Navi Mumbai, Panvel and Kalamboli. Available in 8T, 10T and 14T variants.",
    uses: [
      "Factory machine shifting",
      "Industrial maintenance",
      "Small construction sites",
      "Confined spaces",
    ],
    capacity: "8T to 14T",
  },
  {
    name: "3. Crawler Crane",
    desc: "Crawler cranes run on steel tracks, providing maximum stability on soft ground without outriggers. Essential for bridge construction, dam projects and large power plant installations across India.",
    uses: [
      "Bridge segment lifting",
      "Power plant erection",
      "Dam construction",
      "Long-duration mega projects",
    ],
    capacity: "80T to 2000T+",
  },
  {
    name: "4. Tower Crane",
    desc: "Tower cranes are fixed to the ground and used for tall building construction. They offer excellent height but limited mobility. Common on high-rise residential and commercial projects across Mumbai and Navi Mumbai.",
    uses: [
      "High-rise buildings",
      "Residential towers",
      "Commercial construction",
      "Fixed-site long projects",
    ],
    capacity: "2T to 25T (at radius)",
  },
  {
    name: "5. Farana / Pick & Carry Crane",
    desc: "Farana cranes (pharana) are larger pick-and-carry cranes used in Indian industrial zones. They lift heavier loads than hydra cranes and can drive with the load, making them ideal for industrial zone operations in Navi Mumbai.",
    uses: [
      "Industrial zones",
      "Panvel MIDC operations",
      "Heavy factory shifting",
      "On-site load transport",
    ],
    capacity: "20T to 80T",
  },
  {
    name: "6. Manlift / Boom Lift",
    desc: "Not a crane per se, but classified as aerial work platforms (AWP). Essential for working safely at height - from simple scissor lifts to 185 ft telescopic boom lifts for high-rise and industrial applications across Navi Mumbai.",
    uses: [
      "High-rise construction",
      "Industrial maintenance",
      "Painting at height",
      "Electrical & telecom work",
    ],
    capacity: "200–500 kg (workers)",
  },
  {
    name: "7. Reach Stacker & Container Stacker",
    desc: "Specialised equipment for container handling, primarily used at ports, container yards and logistics facilities near JNPT, Navi Mumbai. Can stack containers 3-high and handle 20ft/40ft ISO containers.",
    uses: [
      "Port operations",
      "Container yards",
      "JNPT area logistics",
      "Inland container depots",
    ],
    capacity: "45T",
  },
];
</script>
