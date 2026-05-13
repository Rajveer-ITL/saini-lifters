<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]">Equipment</NuxtLink>
      <span class="mx-2">/</span>
      <span>Transport Trailer</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Flatbed Transport Trailer on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | 20ft &amp; 40ft ISO
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Saini Lifters provides flatbed transport trailers on rent in Navi Mumbai for crane mobilisation,
          heavy equipment transport, ODC (over-dimensional cargo) and container delivery. Our 20ft and 40ft
          flatbed trailers operate from Kalamboli to project sites across Navi Mumbai, Maharashtra and pan-India.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
        <img src="/image/eq-transport-trailer.png" alt="Flatbed transport trailer on rent in Navi Mumbai for crane and ODC cargo — Saini Lifters" class="w-full h-auto object-contain max-h-[480px] mx-auto p-4" loading="eager" />
      </div>

      <h2 class="text-3xl font-bold mb-8">Transport Trailer Fleet</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div v-for="trailer in trailers" :key="trailer.name" class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors">
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">{{ trailer.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ trailer.desc }}</p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="spec in trailer.specs" :key="spec.label" class="text-sm">
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

      <h2 class="text-3xl font-bold mb-6">FAQs — Transport Trailer Rental Navi Mumbai</h2>
      <div class="space-y-5 mb-12">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Transport Trailer in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink to="/crane-rental/navi-mumbai" class="text-[#FF4057] hover:underline">Crane Rental Navi Mumbai</NuxtLink> |
          <NuxtLink to="/equipment/all-terrain-crane" class="text-[#FF4057] hover:underline">All Terrain Crane</NuxtLink> |
          <NuxtLink to="/contact-us" class="text-[#FF4057] hover:underline">Contact Us</NuxtLink>
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <a href="https://wa.me/919322296990?text=Hi%20I%20need%20transport%20trailer%20on%20rent%20in%20Navi%20Mumbai" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Transport Trailer on Rent in Navi Mumbai | 20ft & 40ft Flatbed | Saini Lifters",
  meta: [
    { name: "description", content: "Flatbed transport trailer on rent in Navi Mumbai — 20ft and 40ft trailers for crane mobilisation, ODC cargo, heavy equipment transport. Pan-India. Call +91 9322296990." },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "transport trailer on rent navi mumbai, flatbed trailer rental navi mumbai, ODC transport navi mumbai, heavy equipment transport navi mumbai" },
    { property: "og:url", content: "https://www.sainilifters.com/equipment/transport-trailer" },
    { property: "og:title", content: "Transport Trailer on Rent in Navi Mumbai | 20ft & 40ft Flatbed" },
    { property: "og:description", content: "Flatbed transport trailer on rent in Navi Mumbai — crane mobilisation, ODC cargo, heavy equipment. Call +91 9322296990." },
    { property: "og:image", content: "https://www.sainilifters.com/image/eq-transport-trailer.png" },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/equipment/transport-trailer" }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Flatbed Transport Trailer Rental", "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" }, "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Maharashtra", "Pan-India"], "url": "https://www.sainilifters.com/equipment/transport-trailer" }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sainilifters.com" }, { "@type": "ListItem", position: 2, name: "Equipment", item: "https://www.sainilifters.com/equipment" }, { "@type": "ListItem", position: 3, name: "Transport Trailer", item: "https://www.sainilifters.com/equipment/transport-trailer" }] }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What cargo can a flatbed transport trailer carry?", acceptedAnswer: { "@type": "Answer", text: "Flatbed trailers carry heavy machinery, crane components, steel structures, ISO containers (20ft/40ft), construction equipment, generators and over-dimensional cargo (ODC). They are the primary means of mobilising crawler cranes and all-terrain cranes to project sites." } }, { "@type": "Question", name: "Are transport trailers available for long-distance ODC transport?", acceptedAnswer: { "@type": "Answer", text: "Yes — Saini Lifters provides flatbed transport trailers for ODC cargo across Maharashtra and pan-India, including Odisha, Madhya Pradesh and other states. We coordinate route surveys and ODC permits for over-dimensional loads." } }, { "@type": "Question", name: "What permits are required for ODC transport?", acceptedAnswer: { "@type": "Answer", text: "Over-dimensional cargo (ODC) transport requires special permits from the state highway department, police escort coordination and route surveys. Saini Lifters handles all permit applications and ODC transport coordination for our clients." } }] }) },
  ],
});

const trailers = [
  { name: "20ft Flatbed Trailer", desc: "Standard flatbed for 20ft ISO containers, machinery up to 25T and construction equipment transport across Navi Mumbai and Maharashtra.", specs: [{ label: "Length", value: "20ft (6m)" }, { label: "Payload", value: "Up to 25T" }, { label: "Use", value: "20ft ISO / Machinery" }, { label: "Coverage", value: "Pan-India" }] },
  { name: "40ft Flatbed Trailer", desc: "Extended flatbed for 40ft ISO containers, large crane components, transformers and over-dimensional cargo transport.", specs: [{ label: "Length", value: "40ft (12m)" }, { label: "Payload", value: "Up to 40T" }, { label: "Use", value: "40ft ISO / ODC Cargo" }, { label: "Coverage", value: "Pan-India" }] },
];

const applications = [
  "Crane mobilisation to project sites",
  "40ft ISO container port-to-site transport",
  "Heavy machinery and equipment transport",
  "Over-dimensional cargo (ODC) movement",
  "Steel structure and fabrication delivery",
  "Generator and transformer transport",
  "Construction equipment relocation",
  "Pan-India industrial project logistics",
];

const faqs = [
  { q: "What cargo can a flatbed transport trailer carry?", a: "Flatbed trailers carry heavy machinery, crane components, steel structures, ISO containers (20ft/40ft), construction equipment, generators and over-dimensional cargo (ODC). They are the primary means of mobilising crawler cranes and all-terrain cranes." },
  { q: "Are transport trailers available for long-distance ODC transport?", a: "Yes — Saini Lifters provides flatbed trailers for ODC cargo across Maharashtra and pan-India, including Odisha, Madhya Pradesh and other states. We coordinate route surveys and ODC permits for over-dimensional loads." },
  { q: "What permits are required for ODC transport?", a: "ODC transport requires special permits from the state highway department, police escort coordination and route surveys. Saini Lifters handles all permit applications and ODC transport coordination for our clients." },
];
</script>
