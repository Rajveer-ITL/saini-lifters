<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink>
      <span class="mx-2">/</span>
      <span>Mobile Crane Rental</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Mobile Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides mobile crane rental in Navi Mumbai, Panvel and
          Kalamboli. Our XCMG QAY series (90T–300T) and Grove GMK90 mobile
          cranes are available 24/7 with certified operators for construction,
          industrial and infrastructure projects.
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
          src="/image/eq-all-terrain-crane.png"
          alt="Mobile crane rental in Navi Mumbai – XCMG all terrain mobile crane from Saini Lifters"
          class="w-full h-auto max-h-[480px] object-contain p-4 bg-gray-50 dark:bg-zinc-800"
          loading="eager"
        />
      </div>
    </div>

    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-8">Mobile Crane Fleet - Navi Mumbai</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="crane in cranes"
          :key="crane.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">
            {{ crane.name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {{ crane.desc }}
          </p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="spec in crane.specs" :key="spec.label" class="text-sm">
              <span class="text-gray-400 block">{{ spec.label }}</span>
              <span class="font-semibold">{{ spec.value }}</span>
            </div>
          </div>
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

      <h2 class="text-3xl font-bold mb-6">FAQs</h2>
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
        <h2 class="text-3xl font-bold mb-4">
          Book Mobile Crane in Navi Mumbai
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
            to="/services/all-terrain-crane-rental"
            class="text-[#FF4057] hover:underline"
            >All-Terrain Crane</NuxtLink
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
  title: "Mobile Crane on Rent in Navi Mumbai | XCMG 90T–300T | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Mobile crane on rent in Navi Mumbai, Panvel & Kalamboli. XCMG QAY160/200/300 (160T–300T) & Grove GMK90 (90T). Certified operators. 24/7. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "mobile crane on rent navi mumbai, mobile crane rental panvel, XCMG crane rental navi mumbai, all terrain crane on rent, crane hire navi mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/mobile-crane-rental",
    },
    {
      property: "og:title",
      content: "Mobile Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Mobile crane on rent in Navi Mumbai, Panvel & Kalamboli. XCMG 90T–300T. Certified operators. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/mobile-crane-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobile Crane Rental",
        "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" },
        "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Raigad", "Mumbai", "Thane"],
        "url": "https://www.sainilifters.com/services/mobile-crane-rental"
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
          { "@type": "ListItem", "position": 3, "name": "Mobile Crane Rental", "item": "https://www.sainilifters.com/services/mobile-crane-rental" }
        ]
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What mobile cranes are available on rent in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Saini Lifters offers XCMG QAY160 (160T), XCMG QAY200 (200T), XCMG QAY300 (300T) all-terrain cranes and Grove GMK90 (90T) mobile crane for rent in Navi Mumbai, Panvel and Kalamboli." } },
          { "@type": "Question", "name": "Do you provide operators with mobile crane rental?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all mobile crane rentals include certified, experienced operators at no extra charge." } },
          { "@type": "Question", "name": "What is the daily rate for mobile crane rental in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Mobile crane rates range from ₹20,000–₹50,000 per day for smaller cranes, with larger 200T–300T cranes quoted on project basis. Call +91 9322296990 for a precise quote." } },
        ]
      }),
    },
  ],
});

const cranes = [
  {
    name: "XCMG QAY300 - 300 Tonnes",
    desc: "Our most powerful crane for bridge construction, power plants and mega projects across Navi Mumbai and Maharashtra.",
    specs: [
      { label: "Capacity", value: "300T" },
      { label: "Main Boom", value: "90m" },
      { label: "JIB", value: "86m" },
      { label: "Total Reach", value: "270m" },
    ],
  },
  {
    name: "XCMG QAY200 - 200 Tonnes",
    desc: "Heavy all-terrain crane for factory installations, bridge segments and infrastructure projects in Navi Mumbai.",
    specs: [
      { label: "Capacity", value: "200T" },
      { label: "Main Boom", value: "84m" },
      { label: "JIB", value: "56m" },
      { label: "Luffing JIB", value: "34m" },
    ],
  },
  {
    name: "XCMG QAY160 - 160 Tonnes",
    desc: "Versatile all-terrain crane for construction, industrial and civil projects across Navi Mumbai, Panvel and Raigad.",
    specs: [
      { label: "Capacity", value: "160T" },
      { label: "Main Boom", value: "78m" },
      { label: "JIB", value: "21m" },
      { label: "Total Reach", value: "162m" },
    ],
  },
  {
    name: "Grove GMK90 - 90 Tonnes",
    desc: "Compact mobile crane ideal for mid-range lifts in construction and industrial settings across Navi Mumbai.",
    specs: [
      { label: "Capacity", value: "90T" },
      { label: "Main Boom", value: "56m" },
      { label: "JIB", value: "24m" },
      { label: "Total Reach", value: "130m" },
    ],
  },
];

const applications = [
  "Bridge construction across Navi Mumbai and Raigad",
  "Power plant equipment erection",
  "Industrial machinery installation",
  "High-rise building construction",
  "Port and JNPT area operations",
  "Factory equipment setup",
  "Infrastructure and civil engineering projects",
  "Petrochemical plant projects",
];

const faqs = [
  {
    q: "What mobile cranes are available on rent in Navi Mumbai?",
    a: "Saini Lifters offers XCMG QAY160 (160T), XCMG QAY200 (200T), XCMG QAY300 (300T) all-terrain cranes and Grove GMK90 (90T) mobile crane for rent in Navi Mumbai, Panvel and Kalamboli.",
  },
  {
    q: "Do you provide operators with mobile crane rental?",
    a: "Yes, all mobile crane rentals include certified, experienced operators at no extra charge.",
  },
  {
    q: "What is the daily rate for mobile crane rental in Navi Mumbai?",
    a: "Mobile crane rates range from ₹20,000–₹50,000 per day for smaller cranes, with larger 200T–300T cranes quoted on project basis. Call +91 9322296990 for a precise quote.",
  },
];
</script>
