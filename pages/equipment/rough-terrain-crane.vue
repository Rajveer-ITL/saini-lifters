<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]">Equipment</NuxtLink>
      <span class="mx-2">/</span>
      <span>Rough Terrain Crane</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Rough Terrain Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | SANY 25T–130T
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Saini Lifters provides SANY rough terrain cranes on rent in Navi Mumbai, Panvel, Kalamboli and Raigad.
          Our 50T and 130T rough terrain cranes are built for uneven construction sites and MIDC industrial zones
          where standard road-going cranes cannot operate. Available 24/7 with certified operators.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
        <img src="/image/eq-rough-terrain-crane.png" alt="SANY rough terrain crane on rent in Navi Mumbai — Saini Lifters" class="w-full h-auto object-contain max-h-[480px] mx-auto p-4" loading="eager" />
      </div>

      <h2 class="text-3xl font-bold mb-8">Rough Terrain Crane Fleet</h2>
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

      <!-- Why Rent Section -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Why Choose a Rough Terrain Crane for Navi Mumbai Construction Sites?</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Navi Mumbai's construction landscape — from reclaimed coastal land in Panvel to rocky MIDC industrial zones in Taloja — presents ground conditions that standard road cranes struggle with. Rough terrain cranes are purpose-built for these environments. Their large rubber tyres and 4×4 drive allow them to position themselves precisely within a construction site without needing hard-standing or outrigger pads.</p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">SANY's rough terrain cranes (50T and 130T) are widely used across Navi Mumbai's construction zones for pre-engineered building (PEB) erection, equipment setting in power substations, bridge approach lifting and structural steel installation in tight MIDC yard configurations where an all terrain crane's footprint would be impractical.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden">
            <thead class="bg-[#FF4057] text-white">
              <tr>
                <th class="p-3 text-left font-semibold">Factor</th>
                <th class="p-3 text-left font-semibold">Rough Terrain Crane</th>
                <th class="p-3 text-left font-semibold">All Terrain Crane</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-zinc-700">
              <tr class="bg-white dark:bg-zinc-800"><td class="p-3 font-medium">Road Travel</td><td class="p-3 text-red-500">Trailer transport only</td><td class="p-3 text-green-600 dark:text-green-400">Highway speed ✓</td></tr>
              <tr class="bg-gray-50 dark:bg-zinc-900"><td class="p-3 font-medium">Soft Ground</td><td class="p-3 text-green-600 dark:text-green-400">Excellent — large tyres ✓</td><td class="p-3">Needs hard outrigger pads</td></tr>
              <tr class="bg-white dark:bg-zinc-800"><td class="p-3 font-medium">Capacity (Saini fleet)</td><td class="p-3">50T & 130T</td><td class="p-3">160T – 700T</td></tr>
              <tr class="bg-gray-50 dark:bg-zinc-900"><td class="p-3 font-medium">Day Rate</td><td class="p-3 text-green-600 dark:text-green-400">Lower ✓</td><td class="p-3">Higher</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">FAQs — Rough Terrain Crane Rental Navi Mumbai</h2>
      <div class="space-y-5 mb-12">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Rough Terrain Crane in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink to="/services/mobile-crane-rental" class="text-[#FF4057] hover:underline">Mobile Crane Rental</NuxtLink> |
          <NuxtLink to="/equipment/all-terrain-crane" class="text-[#FF4057] hover:underline">All Terrain Crane</NuxtLink> |
          <NuxtLink to="/crane-rental/panvel" class="text-[#FF4057] hover:underline">Crane Rental Panvel</NuxtLink>
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <a href="https://wa.me/919322296990?text=Hi%20I%20need%20rough%20terrain%20crane%20on%20rent%20in%20Navi%20Mumbai" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Rough Terrain Crane on Rent in Navi Mumbai | SANY 25T–130T | Saini Lifters",
  meta: [
    { name: "description", content: "Rough terrain crane on rent in Navi Mumbai, Panvel & Raigad. SANY 50T and 130T rough terrain cranes for uneven sites, MIDC and construction yards. 24/7. Call +91 9322296990." },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "rough terrain crane on rent navi mumbai, rough terrain crane rental panvel, SANY crane navi mumbai, crane for uneven terrain navi mumbai" },
    { property: "og:url", content: "https://www.sainilifters.com/equipment/rough-terrain-crane" },
    { property: "og:title", content: "Rough Terrain Crane on Rent in Navi Mumbai | SANY 25T–130T" },
    { property: "og:description", content: "Rough terrain crane on rent in Navi Mumbai. SANY 50T & 130T for construction sites, MIDC zones. 24/7. Call +91 9322296990." },
    { property: "og:image", content: "https://www.sainilifters.com/image/eq-rough-terrain-crane.png" },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/equipment/rough-terrain-crane" }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Rough Terrain Crane Rental", "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" }, "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Raigad", "Maharashtra"], "url": "https://www.sainilifters.com/equipment/rough-terrain-crane" }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sainilifters.com" }, { "@type": "ListItem", position: 2, name: "Equipment", item: "https://www.sainilifters.com/equipment" }, { "@type": "ListItem", position: 3, name: "Rough Terrain Crane", item: "https://www.sainilifters.com/equipment/rough-terrain-crane" }] }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the difference between a rough terrain crane and an all terrain crane?", acceptedAnswer: { "@type": "Answer", text: "A rough terrain crane is designed for off-road use only — it has large rubber tyres and a single engine driving both the undercarriage and crane. An all terrain crane can drive on public roads at highway speed. Rough terrain cranes are ideal for confined construction sites and MIDC zones where road transport is not needed." } }, { "@type": "Question", name: "What is the maximum capacity of your rough terrain cranes?", acceptedAnswer: { "@type": "Answer", text: "Saini Lifters operates SANY rough terrain cranes up to 130T capacity in Navi Mumbai and the surrounding region. For lifts above 130T, we recommend our all terrain or crawler crane fleet." } }, { "@type": "Question", name: "Are rough terrain cranes available in Panvel and Raigad?", acceptedAnswer: { "@type": "Answer", text: "Yes, our rough terrain cranes are available throughout Navi Mumbai, Panvel, Taloja MIDC, Raigad and the surrounding industrial areas. Call +91 9322296990 for availability and rates." } }, { "@type": "Question", name: "Can a rough terrain crane be used on soft or muddy ground?", acceptedAnswer: { "@type": "Answer", text: "Yes — rough terrain cranes are specifically designed for soft, uneven and muddy ground. Their large-diameter tyres spread the machine's weight over a wider area, reducing ground pressure compared to road cranes. For extremely soft waterfront or reclaimed land, a crawler crane on steel tracks offers even greater stability." } }, { "@type": "Question", name: "What is the approximate daily rental rate for a rough terrain crane in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "A SANY 50T rough terrain crane costs approximately ₹12,000–₹18,000 per day including operator. The 130T model is ₹22,000–₹32,000 per day. Monthly rates offer significant savings. Call +91 9322296990 for project-specific pricing." } }] }) },
  ],
});

const cranes = [
  { name: "SANY SRC550C — 50 Tonnes", desc: "Compact rough terrain crane for construction sites, industrial yards and confined spaces across Navi Mumbai and Panvel MIDC.", specs: [{ label: "Capacity", value: "50T" }, { label: "Main Boom", value: "38.5m" }, { label: "Max Radius", value: "32m" }, { label: "Drive", value: "4×4 Off-Road" }] },
  { name: "SANY SRC1300C — 130 Tonnes", desc: "High-capacity rough terrain crane for heavy lifts in challenging ground conditions — bridge approaches, dam sites, MIDC zones.", specs: [{ label: "Capacity", value: "130T" }, { label: "Main Boom", value: "60m" }, { label: "Max Radius", value: "50m" }, { label: "Drive", value: "4×4 Off-Road" }] },
];

const applications = [
  "Construction sites with uneven or soft ground",
  "Bridge approach and site yard lifts",
  "Panvel and Taloja MIDC operations",
  "Power substation equipment installation",
  "Remote infrastructure projects",
  "Confined spaces where all terrain can't manoeuvre",
  "Raigad district industrial projects",
  "Dam and waterfront construction",
];

const faqs = [
  { q: "What is the difference between a rough terrain crane and an all terrain crane?", a: "A rough terrain crane is designed for off-road use only — large rubber tyres, single engine. An all terrain crane drives on public roads. Rough terrain cranes are ideal for confined construction sites and MIDC zones." },
  { q: "What is the maximum capacity of your rough terrain cranes?", a: "Saini Lifters operates SANY rough terrain cranes up to 130T in Navi Mumbai. For lifts above 130T, we recommend our all terrain or crawler crane fleet." },
  { q: "Are rough terrain cranes available in Panvel and Raigad?", a: "Yes — our rough terrain cranes are available in Navi Mumbai, Panvel, Taloja MIDC, Raigad and surrounding industrial areas. Call +91 9322296990 for availability." },
  { q: "Can a rough terrain crane be used on a construction site with soft or muddy ground?", a: "Yes — rough terrain cranes are specifically designed for soft, uneven and muddy ground conditions. Their large-diameter tyres spread the machine's weight over a wider area, reducing ground pressure compared to road cranes. However, for extremely soft waterfront or reclaimed land, a crawler crane on steel tracks offers even greater stability." },
  { q: "What is the approximate daily rental rate for a rough terrain crane in Navi Mumbai?", a: "A SANY 50T rough terrain crane costs approximately ₹12,000–₹18,000 per day including operator. The 130T model is ₹22,000–₹32,000 per day. Monthly rates offer significant savings for site-based projects. Call Saini Lifters at +91 9322296990 for project-specific pricing." },
];
</script>
