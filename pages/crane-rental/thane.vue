<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crane Rental Thane</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Thane</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides crane rental services in Thane for
          construction, industrial, MIDC and infrastructure projects. Mobile
          cranes, hydra cranes, manlifts and all-terrain cranes available for
          immediate booking.
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
        Crane Rental in Thane - Full Fleet Available
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Thane is one of Maharashtra's fastest-growing industrial cities with
        major MIDC estates, manufacturing hubs and residential construction
        projects. Saini Lifters serves Thane with mobile cranes, hydra cranes,
        manlifts and heavy lifting equipment. We provide certified operators and
        24/7 support for all project types.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="service in services"
          :key="service.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-5 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-lg mb-1 text-[#FF4057]">
            {{ service.name }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            {{ service.desc }} - <strong>{{ service.capacity }}</strong>
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">Areas in Thane We Serve</h2>
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-10">
        <li
          v-for="area in areas"
          :key="area"
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
        >
          <span class="w-2 h-2 rounded-full bg-[#FF4057] flex-shrink-0"></span
          >{{ area }}
        </li>
      </ul>
    </section>

    <!-- Expanded content for Thane -->
    <section class="max-w-5xl mx-auto px-4 pb-16">
      <h2 class="text-3xl font-bold mb-6">
        Crane on Rent Near Me — Thane & MIDC Areas
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Searching for <strong>crane on rent near me</strong> in Thane? Saini Lifters deploys from our Navi Mumbai base and can reach most Thane MIDC locations within 1–2 hours. Thane is home to major industrial estates including Wagle Estate MIDC, Bhiwandi warehousing hub, Dombivli MIDC, and Ambernath industrial area — all requiring regular crane and heavy equipment support.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Whether you need a mobile crane for a residential high-rise in Thane West, a hydra crane for factory equipment relocation in Wagle Estate, or a boom lift for façade maintenance in Ghodbunder Road's commercial buildings — Saini Lifters provides the right equipment with certified operators and competitive daily rates.
      </p>
      <div class="grid md:grid-cols-3 gap-4 mt-8">
        <div class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl text-center">
          <p class="text-3xl font-bold text-[#FF4057]">50T–300T</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Mobile crane capacity range</p>
        </div>
        <div class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl text-center">
          <p class="text-3xl font-bold text-[#FF4057]">24/7</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Availability including holidays</p>
        </div>
        <div class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl text-center">
          <p class="text-3xl font-bold text-[#FF4057]">1–2 hrs</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Typical mobilisation to Thane</p>
        </div>
      </div>
      <div class="mt-8 p-5 bg-gray-50 dark:bg-zinc-800 rounded-xl">
        <h3 class="font-bold text-lg mb-3">Common Thane Projects We Serve</h3>
        <ul class="grid md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
          <li class="flex items-center gap-2"><span class="text-[#FF4057]">✓</span> Wagle Estate MIDC factory installations</li>
          <li class="flex items-center gap-2"><span class="text-[#FF4057]">✓</span> Dombivli MIDC chemical plant equipment</li>
          <li class="flex items-center gap-2"><span class="text-[#FF4057]">✓</span> Bhiwandi warehouse steel structure erection</li>
          <li class="flex items-center gap-2"><span class="text-[#FF4057]">✓</span> Ambernath industrial heavy lifts</li>
          <li class="flex items-center gap-2"><span class="text-[#FF4057]">✓</span> Ghodbunder Road high-rise construction</li>
          <li class="flex items-center gap-2"><span class="text-[#FF4057]">✓</span> Kalyan-Dombivli infrastructure projects</li>
        </ul>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book a Crane in Thane Today</h2>
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
  title: "Crane on Rent in Thane | Saini Lifters - Call +91 9322296990",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Thane - mobile cranes, hydra, manlift, boom lift & all-terrain cranes. Saini Lifters, Navi Mumbai based. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in thane, crane rental thane, crane hire thane, mobile crane thane, hydra crane thane, manlift thane",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/thane",
    },
    { property: "og:title", content: "Crane on Rent in Thane | Saini Lifters" },
    {
      property: "og:description",
      content:
        "Crane on rent in Thane - mobile cranes, hydra, manlift & all-terrain. Call Saini Lifters: +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/thane",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sainilifters.com" },
          { "@type": "ListItem", "position": 2, "name": "Crane Rental Thane", "item": "https://www.sainilifters.com/crane-rental/thane" }
        ]
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Saini Lifters Crane Service — Thane",
        "telephone": "+91-9322296990",
        "url": "https://www.sainilifters.com/crane-rental/thane",
        "address": { "@type": "PostalAddress", "addressLocality": "Thane", "addressRegion": "Maharashtra", "addressCountry": "IN" },
        "areaServed": "Thane",
        "openingHours": "Mo-Su 00:00-24:00",
        "priceRange": "$$"
      }),
    },
  ],
});

const services = [
  {
    name: "Mobile Crane Rental",
    desc: "Mobile cranes for construction and industrial projects in Thane",
    capacity: "90T–300T",
  },
  {
    name: "Hydra Crane",
    desc: "Hydra pick-and-carry cranes for factory operations in Thane MIDC",
    capacity: "8T–14T",
  },
  {
    name: "Manlift / Boom Lift",
    desc: "Articulating and telescopic boom lifts for Thane construction sites",
    capacity: "30–185 ft",
  },
  {
    name: "All-Terrain Crane",
    desc: "XCMG QAY all-terrain cranes for heavy infrastructure in Thane",
    capacity: "160T–300T",
  },
];

const areas = [
  "Thane City",
  "Thane West",
  "Thane East",
  "Bhiwandi",
  "Kalyan",
  "Dombivli",
  "Ulhasnagar",
  "Ambernath",
  "Badlapur",
  "Murbad",
  "Shahapur",
  "MIDC Thane",
  "Wagle Estate",
  "Majiwada",
  "Manpada",
];
</script>
