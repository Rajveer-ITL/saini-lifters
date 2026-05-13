<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink
      ><span class="mx-2">/</span>
      <span>All-Terrain Crane Rental</span>
    </nav>
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          All-Terrain Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          XCMG QAY160 (160T), QAY200 (200T) and QAY300 (300T) all-terrain cranes
          for construction, bridge, industrial and power plant projects across
          Navi Mumbai and Maharashtra. Certified operators included.
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
      <h2 class="text-3xl font-bold mb-8">XCMG All-Terrain Crane Fleet</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="crane in cranes"
          :key="crane.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl text-[#FF4057] mb-2">
            {{ crane.name }}
          </h3>
          <p class="text-2xl font-bold mb-4">{{ crane.capacity }}</p>
          <div class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Main Boom:
              <strong class="text-current">{{ crane.mainBoom }}</strong>
            </p>
            <p>
              JIB: <strong class="text-current">{{ crane.jib }}</strong>
            </p>
            <p>
              Luffing: <strong class="text-current">{{ crane.luffing }}</strong>
            </p>
          </div>
        </div>
      </div>
      <h2 class="text-3xl font-bold mb-6">Best Suited For</h2>
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
      <h2 class="text-3xl font-bold mb-4">FAQs — All-Terrain Crane Rental</h2>
      <div class="space-y-5 mb-4">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>
    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">
          Book All-Terrain Crane in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/crawler-crane-rental"
            class="text-[#FF4057] hover:underline"
            >Crawler Crane</NuxtLink
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
    "All-Terrain Crane on Rent in Navi Mumbai | XCMG 160T–300T | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "All-terrain crane on rent in Navi Mumbai - XCMG QAY160 (160T), QAY200 (200T), QAY300 (300T). Bridge & infrastructure projects. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "all terrain crane navi mumbai, XCMG crane rental navi mumbai, heavy crane on rent panvel, 300 tonne crane rental maharashtra",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/all-terrain-crane-rental",
    },
    {
      property: "og:title",
      content: "All-Terrain Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "XCMG all-terrain cranes (160T–300T) on rent in Navi Mumbai. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/all-terrain-crane-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "All-Terrain Crane Rental",
        "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" },
        "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Raigad", "Mumbai", "Thane"],
        "url": "https://www.sainilifters.com/services/all-terrain-crane-rental"
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
          { "@type": "ListItem", "position": 3, "name": "All-Terrain Crane Rental", "item": "https://www.sainilifters.com/services/all-terrain-crane-rental" }
        ]
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is an all-terrain crane and when should I use it?", "acceptedAnswer": { "@type": "Answer", "text": "An all-terrain crane combines the road mobility of a truck crane with off-road capability, making it ideal for project sites with rough or uneven terrain. It's the best choice when you need high capacity (160T–300T) and fast mobilisation between sites." } },
          { "@type": "Question", "name": "What XCMG all-terrain cranes does Saini Lifters operate?", "acceptedAnswer": { "@type": "Answer", "text": "Saini Lifters operates the XCMG QAY160 (160 tonne), QAY200 (200 tonne) and QAY300 (300 tonne) all-terrain cranes — among the most modern heavy crane fleet in the Navi Mumbai region." } },
          { "@type": "Question", "name": "Can the all-terrain crane be deployed outside Maharashtra?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Saini Lifters deploys all-terrain cranes pan-India, including Odisha, Madhya Pradesh, Gujarat and other states for major industrial and infrastructure projects. Call +91 9322296990 to discuss mobilisation." } },
        ]
      }),
    },
  ],
});
const cranes = [
  {
    name: "XCMG QAY300",
    capacity: "300 Tonnes",
    mainBoom: "90m",
    jib: "86m",
    luffing: "67m",
  },
  {
    name: "XCMG QAY200",
    capacity: "200 Tonnes",
    mainBoom: "84m",
    jib: "56m",
    luffing: "34m",
  },
  {
    name: "XCMG QAY160",
    capacity: "160 Tonnes",
    mainBoom: "78m",
    jib: "21m",
    luffing: "63m",
  },
];
const applications = [
  "Bridge construction across Navi Mumbai & Raigad",
  "Power plant equipment erection",
  "Heavy industrial machinery installation",
  "Port and JNPT area operations",
  "Factory setup and expansion",
  "Civil engineering infrastructure",
  "Refinery and petrochemical plants",
  "High-tension power line erection",
];
const faqs = [
  {
    q: "What is an all-terrain crane and when should I use it?",
    a: "An all-terrain crane combines the road mobility of a truck crane with the ability to operate on rough or uneven terrain. It's the best choice when you need high lifting capacity (160T–300T) and the flexibility to move quickly between project sites without special road permits for short distances.",
  },
  {
    q: "What XCMG all-terrain cranes does Saini Lifters operate?",
    a: "Saini Lifters operates the XCMG QAY160 (160T, 78m main boom), QAY200 (200T, 84m main boom) and QAY300 (300T, 90m main boom) — among the most modern heavy all-terrain crane fleet in the Mumbai Metropolitan Region.",
  },
  {
    q: "Can the all-terrain crane be deployed outside Maharashtra?",
    a: "Yes. Saini Lifters deploys all-terrain cranes pan-India for major industrial projects — including Odisha (steel plants, power projects), Madhya Pradesh (cement plants, infrastructure) and other states. Call +91 9322296990 to discuss mobilisation costs and timelines.",
  },
];
</script>
