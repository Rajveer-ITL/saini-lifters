<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>Crane Rental Cost Per Day</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span
        class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
        >Pricing</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        Crane Rental Cost Per Day in India - 2024 Guide
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/blog-crane-rental-cost.png"
          alt="Crane rental cost per day in India - complete price guide with all crane types"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        One of the most common questions when planning a construction or
        industrial project: how much does crane rental cost per day in India?
        The answer depends on the crane type, capacity, shift duration, location
        and whether an operator is included. Here's a comprehensive breakdown.
      </p>

      <div class="overflow-x-auto mb-10">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#FF4057] text-white">
              <th class="p-3 text-left">Crane Type</th>
              <th class="p-3 text-left">Capacity</th>
              <th class="p-3 text-left">Approx. Daily Rate</th>
              <th class="p-3 text-left">Operator Included</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in pricing"
              :key="i"
              :class="i % 2 === 0 ? 'bg-gray-50 dark:bg-zinc-800/50' : ''"
            >
              <td class="p-3 font-semibold">{{ row.type }}</td>
              <td class="p-3">{{ row.capacity }}</td>
              <td class="p-3 text-[#FF4057] font-semibold">{{ row.rate }}</td>
              <td class="p-3">{{ row.operator }}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-xs text-gray-400 mt-2">
          *Rates are approximate indicative figures for Navi Mumbai /
          Maharashtra region. Actual rates vary by project specifics. Contact
          Saini Lifters for accurate quotes.
        </p>
      </div>

      <h2 class="text-2xl font-bold mb-4">
        Factors That Affect Crane Rental Cost
      </h2>
      <ul class="space-y-3 mb-8">
        <li
          v-for="factor in factors"
          :key="factor.title"
          class="flex items-start gap-3"
        >
          <span
            class="w-6 h-6 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
            >{{ factor.num }}</span
          >
          <div>
            <strong>{{ factor.title }}:</strong>
            <span class="text-gray-600 dark:text-gray-300 ml-1">{{
              factor.desc
            }}</span>
          </div>
        </li>
      </ul>

      <div class="mt-10 p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">
          Get a Free Quote from Saini Lifters
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters provides transparent, competitive crane rental rates in
          Navi Mumbai, Panvel and Kalamboli since 2001. Call us for an accurate
          project-specific quote.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/contact-us"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Send Enquiry</NuxtLink
          >
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title: "Crane Rental Cost Per Day in India 2024 | Navi Mumbai Rates",
  meta: [
    {
      name: "description",
      content:
        "Crane rental cost per day in India - hydra crane, mobile crane, all-terrain, manlift, crawler crane. Complete 2024 pricing guide for Navi Mumbai and Maharashtra.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane rental cost per day india, crane hire charges navi mumbai, hydra crane rental rate, mobile crane price per day, all terrain crane cost india",
    },
    {
      property: "og:url",
      content:
        "https://www.sainilifters.com/blog/crane-rental-cost-per-day-india",
    },
    {
      property: "og:title",
      content: "Crane Rental Cost Per Day in India 2024",
    },
    {
      property: "og:description",
      content:
        "Complete crane rental pricing guide for India - hydra cranes to 300T all-terrain cranes. Navi Mumbai rates included.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/blog-crane-rental-cost.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/blog/crane-rental-cost-per-day-india",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline:
          "Crane Rental Cost Per Day in India 2025 - Complete Price Guide",
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
        url: "https://www.sainilifters.com/blog/crane-rental-cost-per-day-india",
        description:
          "Complete guide to crane rental rates per day in India. Includes pricing for hydra cranes, mobile cranes, all-terrain cranes, boom lifts and more.",
      }),
    },
  ],
});
const pricing = [
  {
    type: "Hydra Crane",
    capacity: "8T–14T",
    rate: "₹4,000 – ₹8,000/day",
    operator: "Yes",
  },
  {
    type: "Mobile Crane",
    capacity: "50T–90T",
    rate: "₹20,000 – ₹35,000/day",
    operator: "Yes",
  },
  {
    type: "All-Terrain Crane",
    capacity: "160T (XCMG QAY160)",
    rate: "₹40,000 – ₹70,000/day",
    operator: "Yes",
  },
  {
    type: "All-Terrain Crane",
    capacity: "200T (XCMG QAY200)",
    rate: "₹60,000 – ₹1,00,000/day",
    operator: "Yes",
  },
  {
    type: "All-Terrain Crane",
    capacity: "300T (XCMG QAY300)",
    rate: "Project Basis",
    operator: "Yes",
  },
  {
    type: "Manlift / Boom Lift",
    capacity: "30–60 ft",
    rate: "₹3,000 – ₹6,000/day",
    operator: "Yes",
  },
  {
    type: "Boom Lift (Telescopic)",
    capacity: "150–185 ft",
    rate: "₹10,000 – ₹20,000/day",
    operator: "Yes",
  },
  {
    type: "Reach Stacker",
    capacity: "45T",
    rate: "₹25,000 – ₹50,000/day",
    operator: "Yes",
  },
  {
    type: "Crawler Crane",
    capacity: "80T–100T",
    rate: "₹50,000 – ₹1,00,000/day",
    operator: "Yes",
  },
];
const factors = [
  {
    num: "1",
    title: "Crane Type & Capacity",
    desc: "Higher-capacity cranes naturally cost more. A 300T all-terrain crane costs significantly more per day than an 8T hydra crane.",
  },
  {
    num: "2",
    title: "Shift Duration",
    desc: "Standard shifts are 8 or 12 hours. 24-hour operation requires two operator shifts and commands a higher rate.",
  },
  {
    num: "3",
    title: "Project Location",
    desc: "Mobilisation distance matters. Projects farther from the crane yard incur transportation and hotel costs for operators.",
  },
  {
    num: "4",
    title: "Rental Duration",
    desc: "Longer rental periods get better rates. Weekly and monthly contracts are significantly cheaper per day than daily hire.",
  },
  {
    num: "5",
    title: "Rigging & Accessories",
    desc: "Rigging equipment, shackles, slings and other accessories may be charged separately depending on the project.",
  },
  {
    num: "6",
    title: "Seasonal Demand",
    desc: "Peak construction season (October–March in Maharashtra) sees higher demand and potentially higher rates.",
  },
];
</script>
