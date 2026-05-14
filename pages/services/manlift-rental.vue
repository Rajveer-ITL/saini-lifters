<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink>
      <span class="mx-2">/</span>
      <span>Manlift & Boom Lift Rental</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Manlift & Boom Lift on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides manlift (aerial work platform) and boom lift
          rental in Navi Mumbai, Panvel and Kalamboli. Available from 30 ft to
          185 ft working height - articulating, telescopic and scissor lifts
          with trained operators.
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
    <div class="max-w-5xl mx-auto px-4 pt-8 pb-0">
      <div class="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700">
        <img
          src="/image/eq-manlift-boom-lift.png"
          alt="Manlift and boom lift rental in Navi Mumbai – aerial work platform for elevated maintenance from Saini Lifters"
          class="w-full h-auto max-h-[480px] object-contain p-4 bg-gray-50 dark:bg-zinc-800"
          loading="eager"
        />
      </div>
    </div>

    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-8">
        Types of Manlift & Boom Lift Available
      </h2>
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="item in lifts"
          :key="item.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <span
            class="text-xs bg-[#FF4057]/10 text-[#FF4057] px-2 py-1 rounded-full font-medium"
            >{{ item.type }}</span
          >
          <h3 class="font-bold text-xl mt-3 mb-2">{{ item.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {{ item.desc }}
          </p>
          <ul class="text-sm space-y-1">
            <li
              v-for="s in item.specs"
              :key="s"
              class="text-gray-600 dark:text-gray-300"
            >
              ✓ {{ s }}
            </li>
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
          >
          {{ app }}
        </li>
      </ul>

      <h2 class="text-3xl font-bold mb-6">
        FAQs - Manlift Rental in Navi Mumbai
      </h2>
      <div class="space-y-5">
        <div
          v-for="faq in faqs"
          :key="faq.q"
          class="border-b border-gray-200 dark:border-zinc-700 pb-4"
        >
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Manlift in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/equipment/manlift-boom-lift"
            class="text-[#FF4057] hover:underline"
            >Full Manlift Specs</NuxtLink
          >
          |
          <NuxtLink
            to="/services/hydra-crane-rental"
            class="text-[#FF4057] hover:underline"
            >Hydra Crane</NuxtLink
          >
          |
          <NuxtLink
            to="/services/mobile-crane-rental"
            class="text-[#FF4057] hover:underline"
            >Mobile Crane</NuxtLink
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
  title:
    "Manlift & Boom Lift on Rent in Navi Mumbai | 30–185 ft | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Manlift & boom lift on rent in Navi Mumbai, Panvel & Kalamboli. Articulating, telescopic & scissor lifts - 30 ft to 185 ft. With operator. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "manlift on rent navi mumbai, boom lift rental navi mumbai, aerial work platform rental panvel, scissor lift rental navi mumbai, manlift hire kalamboli",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/manlift-rental",
    },
    {
      property: "og:title",
      content: "Manlift & Boom Lift on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Manlift & boom lift on rent in Navi Mumbai, Panvel & Kalamboli. 30–185 ft. With operator. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/manlift-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Manlift & Boom Lift Rental",
        "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" },
        "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Raigad", "Mumbai", "Thane"],
        "url": "https://www.sainilifters.com/services/manlift-rental"
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
          { "@type": "ListItem", "position": 3, "name": "Manlift & Boom Lift Rental", "item": "https://www.sainilifters.com/services/manlift-rental" }
        ]
      }),
    },
  ],
});

const lifts = [
  {
    name: "Telescopic Boom Lift (185 ft)",
    type: "Boom Lift",
    desc: "JLG 1850SJ - 185 ft (56m) telescopic boom lift for very tall structures, high-rise buildings and large industrial facilities.",
    specs: [
      "Working Height: 185 ft",
      "Capacity: 340 kg (2 persons)",
      "Power: Diesel",
      "Drive: 4WD All-terrain",
    ],
  },
  {
    name: "Telescopic Boom Lift (60–150 ft)",
    type: "Boom Lift",
    desc: "Mid-range telescopic boom lifts for construction, bridge maintenance and industrial plant work.",
    specs: [
      "Working Height: 60–150 ft",
      "Capacity: 250–300 kg",
      "Power: Diesel",
      "Reach: Straight arm",
    ],
  },
  {
    name: "Articulating Boom Lift (30–120 ft)",
    type: "Manlift",
    desc: "Articulating boom lift for working around obstacles and into tight spaces. Electric and diesel variants available.",
    specs: [
      "Working Height: 30–120 ft",
      "Capacity: 200–230 kg",
      "Power: Electric/Diesel",
      "Reach: Around obstacles",
    ],
  },
  {
    name: "Scissor Lift (Electric 19–26 ft)",
    type: "Scissor Lift",
    desc: "Electric scissor lifts for indoor factory and warehouse maintenance. Zero emissions.",
    specs: [
      "Working Height: 19–26 ft",
      "Capacity: 500 kg",
      "Power: Electric",
      "Use: Indoor",
    ],
  },
  {
    name: "Scissor Lift (Diesel 33–50 ft)",
    type: "Scissor Lift",
    desc: "Rough-terrain diesel scissor lifts for outdoor construction sites and industrial yards.",
    specs: [
      "Working Height: 33–50 ft",
      "Capacity: 500–680 kg",
      "Power: Diesel",
      "Use: Outdoor/Rough terrain",
    ],
  },
];

const applications = [
  "High-rise building construction in Navi Mumbai",
  "Bridge maintenance and inspection",
  "Factory ceiling and roof maintenance",
  "Painting and coating at height",
  "Electrical wiring and lighting installation",
  "Industrial plant inspection",
  "Telecommunications tower work",
  "Signage and billboard installation",
  "Aircraft maintenance (Navi Mumbai airport projects)",
  "Warehouse racking installation",
];

const faqs = [
  {
    q: "What is the difference between a manlift and a boom lift?",
    a: "Manlift is a general term for any aerial work platform (AWP). Boom lift specifically refers to the type with an extendable arm (articulating or telescopic). Scissor lifts are another type of manlift that go straight up. All are used to safely elevate workers to height.",
  },
  {
    q: "What is the cost of manlift rental in Navi Mumbai?",
    a: "Manlift rental in Navi Mumbai costs from ₹3,000–₹15,000/day depending on working height and type. Scissor lifts are cheaper; 185 ft telescopic boom lifts are at the higher end. Call +91 9322296990 for exact pricing.",
  },
  {
    q: "Do you provide operators with manlift rental?",
    a: "Yes. All manlift and boom lift rentals from Saini Lifters include trained operators certified in working-at-height safety.",
  },
  {
    q: "What heights are available for manlift rental in Navi Mumbai?",
    a: "Saini Lifters offers boom lifts and scissor lifts from 19 ft (scissor lift) to 185 ft (JLG 1850SJ telescopic boom lift) working height.",
  },
];
</script>
