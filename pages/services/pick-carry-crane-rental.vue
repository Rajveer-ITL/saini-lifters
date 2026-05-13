<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink
      ><span class="mx-2">/</span>
      <span>Pick & Carry (Farana) Crane</span>
    </nav>
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Farana / Pick &amp; Carry Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides farana (pick-and-carry) crane rental in Navi
          Mumbai, Panvel and Kalamboli. Available in 20T and 50T capacity with
          360° swing and high on-site mobility for industrial zone operations.
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
    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-6">
        What is a Farana (Pick &amp; Carry) Crane?
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        A farana crane (also called pharana or pick-and-carry crane) is a mobile
        crane designed to lift and transport heavy loads across an industrial
        site without fixed setup. Unlike tower or all-terrain cranes that
        require outriggers, the farana can pick up a load and drive it to a
        different location - making it ideal for industrial zones, construction
        sites and factories in Navi Mumbai.
      </p>
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div
          v-for="model in models"
          :key="model.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl text-[#FF4057] mb-4">
            {{ model.name }}
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li v-for="s in model.specs" :key="s">✓ {{ s }}</li>
          </ul>
        </div>
      </div>
      <h2 class="text-3xl font-bold mb-6">Applications</h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-10">
        <li
          v-for="app in applications"
          :key="app"
          class="flex items-center gap-3 text-gray-600 dark:text-gray-300"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs"
            >✓</span
          >{{ app }}
        </li>
      </ul>
    </section>
    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">
          Book Farana Crane in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/hydra-crane-rental"
            class="text-[#FF4057] hover:underline"
            >Hydra Crane</NuxtLink
          >
          |
          <NuxtLink
            to="/crane-rental/navi-mumbai"
            class="text-[#FF4057] hover:underline"
            >Crane Rental Navi Mumbai</NuxtLink
          >
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
            >Send Enquiry</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title: "Farana / Pick & Carry Crane on Rent in Navi Mumbai | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Farana (pick and carry) crane on rent in Navi Mumbai, Panvel & Kalamboli. 20T–50T, 360° swing. Industrial zone operations. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "farana crane rental navi mumbai, pick and carry crane panvel, pharana crane rental, farana crane on rent kalamboli",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/pick-carry-crane-rental",
    },
    {
      property: "og:title",
      content: "Farana Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Farana (pick & carry) crane on rent in Navi Mumbai. 20T–50T. Call +91 9322296990.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/services/pick-carry-crane-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Pick & Carry (Farana) Crane Rental",
        "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" },
        "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Raigad", "Mumbai", "Thane"],
        "url": "https://www.sainilifters.com/services/pick-carry-crane-rental"
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sainilifters.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sainilifters.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Pick & Carry Crane Rental", "item": "https://www.sainilifters.com/services/pick-carry-crane-rental" }
        ]
      }),
    },
  ],
});
const models = [
  {
    name: "Farana Crane 50T",
    specs: [
      "Capacity: 50 Tonnes",
      "Boom: 32m",
      "360° full swing",
      "On-site load transport",
      "Rubber-wheeled mobility",
    ],
  },
  {
    name: "Farana Crane 20T",
    specs: [
      "Capacity: 20 Tonnes",
      "Boom: 20m",
      "360° full swing",
      "Compact site access",
      "Fast setup & teardown",
    ],
  },
];
const applications = [
  "Panvel and Kalamboli MIDC industrial zones",
  "Factory machinery installation",
  "On-site load transport without rigging resets",
  "Tight industrial site operations",
  "Construction site material shifting",
  "Port auxiliary lifting operations",
  "Fabrication yard heavy lifting",
  "Steel market operations - Kalamboli",
];
</script>
