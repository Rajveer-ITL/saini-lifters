<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]">Equipment</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crawler Crane</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crawler Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | SANY 100T to 400T
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Saini Lifters provides SANY crawler cranes on rent in Navi Mumbai, Maharashtra, Odisha, Madhya Pradesh
          and pan-India. Our 100T and 400T crawler cranes run on steel tracks — delivering maximum stability on
          soft ground without outriggers. Essential for bridge construction, power plants and long-duration mega projects.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
        <img src="/image/eq-crawler-crane.png" alt="SANY crawler crane 400T on rent in Navi Mumbai — Saini Lifters" class="w-full h-auto object-contain max-h-[480px] mx-auto p-4" loading="eager" />
      </div>

      <!-- Crawler vs Mobile comparison -->
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="border-2 border-[#FF4057] rounded-xl p-6">
          <h3 class="font-bold text-xl mb-4 text-[#FF4057]">Why Choose a Crawler Crane?</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li class="flex gap-2"><span class="text-[#FF4057] mt-0.5">✓</span>Maximum stability on soft or uneven ground</li>
            <li class="flex gap-2"><span class="text-[#FF4057] mt-0.5">✓</span>No outriggers needed — works in tight spaces</li>
            <li class="flex gap-2"><span class="text-[#FF4057] mt-0.5">✓</span>Can lift and travel with load on flat ground</li>
            <li class="flex gap-2"><span class="text-[#FF4057] mt-0.5">✓</span>Ideal for long-duration projects (weeks/months)</li>
            <li class="flex gap-2"><span class="text-[#FF4057] mt-0.5">✓</span>Very high capacities achievable with luffing jib</li>
          </ul>
        </div>
        <div class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6">
          <h3 class="font-bold text-xl mb-4">Setup & Transport</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li class="flex gap-2"><span class="text-gray-400 mt-0.5">→</span>Transported on lowboy trailers — requires route survey</li>
            <li class="flex gap-2"><span class="text-gray-400 mt-0.5">→</span>Assembly time: 2–5 days depending on size</li>
            <li class="flex gap-2"><span class="text-gray-400 mt-0.5">→</span>ODC permits obtained by Saini Lifters team</li>
            <li class="flex gap-2"><span class="text-gray-400 mt-0.5">→</span>Best suited for projects 30+ days duration</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-8">Crawler Crane Fleet</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div v-for="crane in cranes" :key="crane.name" class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors">
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">{{ crane.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ crane.desc }}</p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="spec in crane.specs" :key="spec.label" class="text-sm">
              <span class="text-gray-400 block text-xs uppercase tracking-wider">{{ spec.label }}</span>
              <span class="font-semibold">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">Applications</h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-12">
        <li v-for="app in applications" :key="app" class="flex items-center gap-3 text-gray-600 dark:text-gray-300">
          <span class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs">✓</span>
          {{ app }}
        </li>
      </ul>

      <h2 class="text-3xl font-bold mb-6">FAQs — Crawler Crane Rental</h2>
      <div class="space-y-5 mb-12">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Crawler Crane in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink to="/services/crawler-crane-rental" class="text-[#FF4057] hover:underline">Crawler Crane Service</NuxtLink> |
          <NuxtLink to="/equipment/all-terrain-crane" class="text-[#FF4057] hover:underline">All Terrain Crane</NuxtLink> |
          <NuxtLink to="/crane-rental/navi-mumbai" class="text-[#FF4057] hover:underline">Crane Rental Navi Mumbai</NuxtLink>
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <a href="https://wa.me/919322296990?text=Hi%20I%20need%20crawler%20crane%20on%20rent" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Crawler Crane on Rent in Navi Mumbai | SANY 100T–400T | Saini Lifters",
  meta: [
    { name: "description", content: "Crawler crane on rent in Navi Mumbai — SANY 100T and 400T crawler cranes for bridge construction, power plants and mega projects. Pan-India deployment. Call +91 9322296990." },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "crawler crane on rent navi mumbai, crawler crane rental india, SANY crawler crane navi mumbai, crawler crane for bridge construction india" },
    { property: "og:url", content: "https://www.sainilifters.com/equipment/crawler-crane" },
    { property: "og:title", content: "Crawler Crane on Rent in Navi Mumbai | SANY 100T–400T" },
    { property: "og:description", content: "Crawler crane on rent in Navi Mumbai & pan-India. SANY 100T–400T with certified operators. Call +91 9322296990." },
    { property: "og:image", content: "https://www.sainilifters.com/image/eq-crawler-crane.png" },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/equipment/crawler-crane" }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Crawler Crane Rental", "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" }, "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Maharashtra", "Odisha", "Madhya Pradesh", "Pan-India"], "url": "https://www.sainilifters.com/equipment/crawler-crane" }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sainilifters.com" }, { "@type": "ListItem", position: 2, name: "Equipment", item: "https://www.sainilifters.com/equipment" }, { "@type": "ListItem", position: 3, name: "Crawler Crane", item: "https://www.sainilifters.com/equipment/crawler-crane" }] }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the advantage of a crawler crane over a mobile crane?", acceptedAnswer: { "@type": "Answer", text: "Crawler cranes run on steel tracks, providing maximum ground stability without outriggers. They can lift and travel with a load on flat ground and are ideal for long-duration projects on soft or unstable ground where a mobile crane cannot operate safely." } }, { "@type": "Question", name: "How long does it take to set up a crawler crane?", acceptedAnswer: { "@type": "Answer", text: "Setup and assembly of a crawler crane typically takes 2–5 days depending on crane size and site conditions. Saini Lifters handles all ODC transportation permits and site preparation coordination." } }, { "@type": "Question", name: "Do you deploy crawler cranes pan-India — Odisha, Madhya Pradesh?", acceptedAnswer: { "@type": "Answer", text: "Yes, Saini Lifters deploys crawler cranes across India — including Odisha (Rourkela, Angul, Paradip), Madhya Pradesh (Singrauli, Satna, Pithampur) and other states for power plants, cement plants and infrastructure projects." } }] }) },
  ],
});

const cranes = [
  { name: "SANY SCC1000A — 100 Tonnes", desc: "Reliable crawler crane for medium-heavy lifts, bridge construction and industrial projects across Navi Mumbai and Maharashtra.", specs: [{ label: "Capacity", value: "100T" }, { label: "Main Boom", value: "64m" }, { label: "Max Radius", value: "54m" }, { label: "Drive", value: "Steel Tracks" }] },
  { name: "SANY SCC4000A — 400 Tonnes", desc: "High-capacity crawler crane for power plant erection, bridge segment lifting and long-duration mega projects across India.", specs: [{ label: "Capacity", value: "400T" }, { label: "Main Boom", value: "96m" }, { label: "Max Radius", value: "80m" }, { label: "Drive", value: "Steel Tracks" }] },
];

const applications = [
  "Bridge segment lifting and erection",
  "Power plant boiler and turbine installation",
  "Dam and waterfront construction",
  "Long-duration mega infrastructure projects",
  "Soft ground / marine site operations",
  "Steel plant equipment erection",
  "Cement plant projects (Singrauli, Satna)",
  "Port and jetty construction",
];

const faqs = [
  { q: "What is the advantage of a crawler crane over a mobile crane?", a: "Crawler cranes run on steel tracks, providing maximum ground stability without outriggers. They can lift and travel with a load on flat ground — ideal for long-duration projects on soft or unstable ground." },
  { q: "How long does it take to set up a crawler crane?", a: "Setup takes 2–5 days depending on crane size and site conditions. Saini Lifters handles all ODC transportation permits and site preparation coordination." },
  { q: "Do you deploy crawler cranes pan-India — Odisha, Madhya Pradesh?", a: "Yes — Saini Lifters deploys crawler cranes across India, including Odisha (Rourkela, Angul, Paradip), Madhya Pradesh (Singrauli, Satna, Pithampur) and other states." },
];
</script>
