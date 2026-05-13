<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]">Equipment</NuxtLink>
      <span class="mx-2">/</span>
      <span>Forklift</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Forklift on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | 5T to 25T Industrial Forklift
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Saini Lifters provides industrial forklifts on rent in Navi Mumbai, Kalamboli, Panvel MIDC and Taloja.
          Our diesel and electric forklifts (5T to 25T capacity) are ideal for warehouse operations,
          MIDC factory material handling, port yard operations and heavy pallet shifting near JNPT.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
        <img src="/image/eq-forklift.png" alt="Industrial forklift on rent in Navi Mumbai — Saini Lifters" class="w-full h-auto object-contain max-h-[480px] mx-auto p-4" loading="eager" />
      </div>

      <h2 class="text-3xl font-bold mb-8">Forklift Fleet</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div v-for="item in specs" :key="item.name" class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors">
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">{{ item.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ item.desc }}</p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="s in item.data" :key="s.label" class="text-sm">
              <span class="text-gray-400 block text-xs uppercase tracking-wider">{{ s.label }}</span>
              <span class="font-semibold">{{ s.value }}</span>
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

      <h2 class="text-3xl font-bold mb-6">FAQs — Forklift Rental Navi Mumbai</h2>
      <div class="space-y-5 mb-12">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Forklift in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink to="/equipment/reach-stacker" class="text-[#FF4057] hover:underline">Reach Stacker</NuxtLink> |
          <NuxtLink to="/equipment/farana" class="text-[#FF4057] hover:underline">Farana Pick & Carry</NuxtLink> |
          <NuxtLink to="/crane-rental/navi-mumbai" class="text-[#FF4057] hover:underline">Crane Rental Navi Mumbai</NuxtLink>
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <a href="https://wa.me/919322296990?text=Hi%20I%20need%20forklift%20on%20rent%20in%20Navi%20Mumbai" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Forklift on Rent in Navi Mumbai | 5T to 25T Industrial Forklift | Saini Lifters",
  meta: [
    { name: "description", content: "Industrial forklift on rent in Navi Mumbai, Kalamboli & Panvel MIDC — diesel and electric forklifts 5T to 25T for warehouse, factory and port yard operations near JNPT. Call +91 9322296990." },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "forklift on rent navi mumbai, forklift rental panvel MIDC, industrial forklift navi mumbai, forklift hire kalamboli, forklift rental near JNPT" },
    { property: "og:url", content: "https://www.sainilifters.com/equipment/forklift" },
    { property: "og:title", content: "Forklift on Rent in Navi Mumbai | 5T to 25T Industrial Forklift" },
    { property: "og:description", content: "Forklift on rent in Navi Mumbai — diesel & electric forklifts 5T to 25T for MIDC factory and port yard operations. Call +91 9322296990." },
    { property: "og:image", content: "https://www.sainilifters.com/image/eq-forklift.png" },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/equipment/forklift" }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Forklift Rental Navi Mumbai", "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" }, "areaServed": ["Navi Mumbai", "Kalamboli", "Panvel MIDC", "Taloja", "JNPT"], "url": "https://www.sainilifters.com/equipment/forklift" }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sainilifters.com" }, { "@type": "ListItem", position: 2, name: "Equipment", item: "https://www.sainilifters.com/equipment" }, { "@type": "ListItem", position: 3, name: "Forklift", item: "https://www.sainilifters.com/equipment/forklift" }] }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What types of forklifts are available on rent in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Saini Lifters offers diesel and electric counterbalance forklifts ranging from 5T to 25T in Navi Mumbai. Diesel forklifts are used for outdoor yard operations near JNPT and MIDC, while electric forklifts are preferred for indoor warehouse operations." } }, { "@type": "Question", name: "Is a forklift available for MIDC factory operations?", acceptedAnswer: { "@type": "Answer", text: "Yes — we deploy forklifts to Panvel MIDC, Taloja MIDC, Kalamboli and all Navi Mumbai industrial zones. Our forklifts are used for machine shifting, pallet handling and raw material movement inside factories and warehouses." } }, { "@type": "Question", name: "What is the difference between a forklift and a reach stacker?", acceptedAnswer: { "@type": "Answer", text: "A forklift handles pallets, machinery and general warehouse loads at ground level using forks. A reach stacker is a specialised container handling machine designed to lift, move and stack ISO shipping containers. Both are available on rent from Saini Lifters in Navi Mumbai." } }] }) },
  ],
});

const specs = [
  { name: "Diesel Forklift 5T–10T", desc: "Standard diesel counterbalance forklift for outdoor yard, warehouse loading bays and MIDC factory operations in Navi Mumbai.", data: [{ label: "Capacity", value: "5T – 10T" }, { label: "Fuel", value: "Diesel" }, { label: "Mast Height", value: "Up to 6m" }, { label: "Operation", value: "Outdoor / Yard" }] },
  { name: "Heavy Forklift 15T–25T", desc: "Heavy-duty diesel forklift for port yard, steel plant, large machinery shifting and industrial project requirements in Navi Mumbai and Panvel.", data: [{ label: "Capacity", value: "15T – 25T" }, { label: "Fuel", value: "Diesel" }, { label: "Mast Height", value: "Up to 5m" }, { label: "Operation", value: "Heavy Industrial" }] },
];

const applications = [
  "Warehouse pallet and cargo handling",
  "MIDC factory machine shifting",
  "Port yard and container terminal operations near JNPT",
  "Steel plant and fabrication yard material movement",
  "Loading and unloading at factory docks",
  "Industrial raw material transport",
  "Heavy equipment and generator positioning",
  "Construction site material handling",
];

const faqs = [
  { q: "What types of forklifts are available on rent in Navi Mumbai?", a: "Saini Lifters offers diesel counterbalance forklifts from 5T to 25T in Navi Mumbai. Diesel forklifts suit outdoor yard operations near JNPT and MIDC zones." },
  { q: "Is a forklift available for MIDC factory operations?", a: "Yes — we deploy forklifts to Panvel MIDC, Taloja MIDC, Kalamboli and all Navi Mumbai industrial zones for machine shifting, pallet handling and raw material movement." },
  { q: "What is the difference between a forklift and a reach stacker?", a: "A forklift handles pallets, machinery and general loads using forks. A reach stacker lifts, moves and stacks ISO shipping containers. Both are available on rent from Saini Lifters in Navi Mumbai." },
];
</script>
