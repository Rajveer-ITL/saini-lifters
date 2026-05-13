<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]">Equipment</NuxtLink>
      <span class="mx-2">/</span>
      <span>Reach Stacker</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Reach Stacker on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | Kalmar 45T
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Saini Lifters provides Kalmar 45T reach stackers on rent in Navi Mumbai, Kalamboli and near JNPT.
          Our reach stackers handle 20ft and 40ft ISO containers — stacking 3 containers high — and are available
          24/7 for port yards, container depots and logistics operations.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
        <img src="/image/eq-reach-stacker.png" alt="Kalmar reach stacker on rent near JNPT Navi Mumbai — Saini Lifters" class="w-full h-auto object-contain max-h-[480px] mx-auto p-4" loading="eager" />
      </div>

      <h2 class="text-3xl font-bold mb-8">Reach Stacker Specifications</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div v-for="spec in specs" :key="spec.name" class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors">
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">{{ spec.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ spec.desc }}</p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="s in spec.data" :key="s.label" class="text-sm">
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

      <h2 class="text-3xl font-bold mb-6">FAQs — Reach Stacker Rental Navi Mumbai</h2>
      <div class="space-y-5 mb-12">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Reach Stacker in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink to="/services/reach-stacker-rental" class="text-[#FF4057] hover:underline">Reach Stacker Service</NuxtLink> |
          <NuxtLink to="/equipment/forklift" class="text-[#FF4057] hover:underline">Forklift</NuxtLink> |
          <NuxtLink to="/crane-rental/kalamboli" class="text-[#FF4057] hover:underline">Crane Rental Kalamboli</NuxtLink>
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <a href="https://wa.me/919322296990?text=Hi%20I%20need%20reach%20stacker%20on%20rent%20near%20JNPT%20Navi%20Mumbai" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Reach Stacker on Rent in Navi Mumbai | Kalmar 45T | Saini Lifters",
  meta: [
    { name: "description", content: "Reach stacker on rent in Navi Mumbai near JNPT — Kalmar 45T reach stacker for 20ft & 40ft ISO containers. Container yards, ICD, port operations. Call +91 9322296990." },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "reach stacker on rent navi mumbai, reach stacker rental JNPT, kalmar reach stacker navi mumbai, container handling equipment navi mumbai" },
    { property: "og:url", content: "https://www.sainilifters.com/equipment/reach-stacker" },
    { property: "og:title", content: "Reach Stacker on Rent in Navi Mumbai | Kalmar 45T" },
    { property: "og:description", content: "Reach stacker on rent near JNPT Navi Mumbai — Kalmar 45T for 20ft & 40ft containers. Call +91 9322296990." },
    { property: "og:image", content: "https://www.sainilifters.com/image/eq-reach-stacker.png" },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/equipment/reach-stacker" }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Reach Stacker Rental", "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" }, "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "JNPT", "Raigad"], "url": "https://www.sainilifters.com/equipment/reach-stacker" }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sainilifters.com" }, { "@type": "ListItem", position: 2, name: "Equipment", item: "https://www.sainilifters.com/equipment" }, { "@type": "ListItem", position: 3, name: "Reach Stacker", item: "https://www.sainilifters.com/equipment/reach-stacker" }] }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is the difference between a reach stacker and a container stacker?", acceptedAnswer: { "@type": "Answer", text: "A reach stacker can handle laden (loaded) containers up to 45T and reach into the second and third row of a container stack. A container stacker (empty container handler) is designed for empty containers only, stacking them 5 high or more. Reach stackers are more versatile but more expensive to operate." } }, { "@type": "Question", name: "Can a reach stacker handle laden 40ft containers?", acceptedAnswer: { "@type": "Answer", text: "Yes — our Kalmar 45T reach stacker can handle fully laden 20ft and 40ft ISO containers. It can stack containers 3 high and reach into the second row of a container block, making it ideal for container yards near JNPT." } }, { "@type": "Question", name: "Is the reach stacker available near JNPT Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Yes, Saini Lifters operates from Kalamboli, Navi Mumbai — just minutes from JNPT. Our reach stackers are available 24/7 for container yards, ICDs and logistics operations near JNPT." } }] }) },
  ],
});

const specs = [
  { name: "Kalmar DRF 450-60S5 — 45T Reach Stacker", desc: "Our primary reach stacker for laden container handling in port yards, ICD and logistics facilities near JNPT Navi Mumbai.", data: [{ label: "Lift Capacity", value: "45T" }, { label: "Stack Height", value: "3 containers" }, { label: "Container Size", value: "20ft & 40ft" }, { label: "Row Reach", value: "2nd row" }] },
];

const applications = [
  "JNPT area container yard operations",
  "Inland container depots (ICD) near Kalamboli",
  "Port logistics and container terminal operations",
  "Laden container stacking 3-high",
  "Container repositioning across yard rows",
  "Export cargo loading and discharge",
  "Rail-road container transfer operations",
  "Private container yard management",
];

const faqs = [
  { q: "What is the difference between a reach stacker and a container stacker?", a: "A reach stacker handles laden containers up to 45T and reaches into the 2nd and 3rd row. A container stacker handles empty containers only, stacking them 5+ high. Reach stackers are more versatile for mixed laden/empty operations." },
  { q: "Can a reach stacker handle laden 40ft containers?", a: "Yes — our Kalmar 45T reach stacker handles fully laden 20ft and 40ft ISO containers, stacking 3 high and reaching the 2nd row — ideal for container yards near JNPT." },
  { q: "Is the reach stacker available near JNPT Navi Mumbai?", a: "Yes, Saini Lifters is based in Kalamboli, minutes from JNPT. Our reach stackers are available 24/7 for container yards, ICDs and logistics operations near JNPT." },
];
</script>
