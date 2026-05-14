<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]">Equipment</NuxtLink>
      <span class="mx-2">/</span>
      <span>Farana (Pick & Carry Crane)</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Farana Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | Pick &amp; Carry 20T to 50T
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Saini Lifters provides Farana (pick &amp; carry) cranes on rent in Navi Mumbai, Panvel MIDC, Taloja
          and Kalamboli. Our 20T and 35T Farana cranes can lift loads and drive with them — ideal for factory
          machine shifting, MIDC industrial zone operations and on-site load transport.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
        <img src="/image/eq-farana.png" alt="Farana 35T pick and carry crane on rent in Navi Mumbai — Saini Lifters" class="w-full h-auto object-contain max-h-[480px] mx-auto p-4" loading="eager" />
      </div>

      <h2 class="text-3xl font-bold mb-8">Farana Crane Fleet</h2>
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
        <h2 class="text-3xl font-bold mb-6">Why Choose a Farana Crane for MIDC Industrial Operations?</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">Navi Mumbai's MIDC zones — Panvel, Taloja, Kalamboli — are packed with factories, steel markets and fabrication yards that require a crane capable of lifting heavy machinery and transporting it across the site without setting up outriggers every time. The Farana (pick and carry) crane is the standard solution for this requirement across Indian industrial estates.</p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">Our Farana 20T and 35T cranes are maintained for fast deployment — typically available within 4–6 hours of booking in the Navi Mumbai MIDC area. No road permits needed for intra-site operations, no time wasted repositioning outriggers between lifts. For machine installation, line-shaft shifting and equipment erection inside factory buildings or yard areas, the Farana is the most efficient tool available.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden">
            <thead class="bg-[#FF4057] text-white">
              <tr>
                <th class="p-3 text-left font-semibold">Factor</th>
                <th class="p-3 text-left font-semibold">Farana Crane</th>
                <th class="p-3 text-left font-semibold">Hydra Crane</th>
                <th class="p-3 text-left font-semibold">All Terrain Crane</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-zinc-700">
              <tr class="bg-white dark:bg-zinc-800"><td class="p-3 font-medium">Capacity</td><td class="p-3">20T – 50T</td><td class="p-3">8T – 14T</td><td class="p-3">50T – 700T</td></tr>
              <tr class="bg-gray-50 dark:bg-zinc-900"><td class="p-3 font-medium">Pick & Carry</td><td class="p-3 text-green-600 dark:text-green-400">Yes ✓</td><td class="p-3 text-green-600 dark:text-green-400">Yes ✓</td><td class="p-3 text-red-500">No</td></tr>
              <tr class="bg-white dark:bg-zinc-800"><td class="p-3 font-medium">Indoor Use</td><td class="p-3">Yes (min 8m height)</td><td class="p-3 text-green-600 dark:text-green-400">Best ✓</td><td class="p-3 text-red-500">No</td></tr>
              <tr class="bg-gray-50 dark:bg-zinc-900"><td class="p-3 font-medium">Day Rate</td><td class="p-3">₹10,000–₹20,000</td><td class="p-3">₹4,000–₹8,000</td><td class="p-3">₹25,000+</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">FAQs — Farana Crane Rental Navi Mumbai</h2>
      <div class="space-y-5 mb-12">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Farana Crane in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink to="/services/pick-carry-crane-rental" class="text-[#FF4057] hover:underline">Pick & Carry Crane Service</NuxtLink> |
          <NuxtLink to="/crane-rental/panvel" class="text-[#FF4057] hover:underline">Crane Rental Panvel</NuxtLink> |
          <NuxtLink to="/equipment/all-terrain-crane" class="text-[#FF4057] hover:underline">All Terrain Crane</NuxtLink>
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <a href="https://wa.me/919322296990?text=Hi%20I%20need%20farana%20crane%20on%20rent%20in%20Navi%20Mumbai" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Farana Crane on Rent in Navi Mumbai | Pick & Carry 20T–50T | Saini Lifters",
  meta: [
    { name: "description", content: "Farana (pick & carry) crane on rent in Navi Mumbai, Panvel MIDC & Kalamboli — 20T and 35T Farana cranes for factory shifting, MIDC industrial operations. Call +91 9322296990." },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "farana crane on rent navi mumbai, pick and carry crane navi mumbai, farana crane rental panvel MIDC, farana 35 ton navi mumbai" },
    { property: "og:url", content: "https://www.sainilifters.com/equipment/farana" },
    { property: "og:title", content: "Farana Crane on Rent in Navi Mumbai | Pick & Carry 20T–50T" },
    { property: "og:description", content: "Farana pick & carry crane on rent in Navi Mumbai — 20T & 35T for MIDC factory operations. Call +91 9322296990." },
    { property: "og:image", content: "https://www.sainilifters.com/image/eq-farana.png" },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/equipment/farana" }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Farana Pick & Carry Crane Rental", "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" }, "areaServed": ["Navi Mumbai", "Panvel", "Taloja MIDC", "Kalamboli", "Raigad"], "url": "https://www.sainilifters.com/equipment/farana" }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sainilifters.com" }, { "@type": "ListItem", position: 2, name: "Equipment", item: "https://www.sainilifters.com/equipment" }, { "@type": "ListItem", position: 3, name: "Farana Crane", item: "https://www.sainilifters.com/equipment/farana" }] }) },
    { type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is a Farana crane?", acceptedAnswer: { "@type": "Answer", text: "A Farana crane (also called pharana) is a pick and carry crane that can lift loads and drive with them in one motion. Unlike a fixed-boom crane that requires outriggers, a Farana drives on rubber tyres and is ideal for industrial zone operations, factory machine shifting and on-site load transport." } }, { "@type": "Question", name: "What is the difference between a Farana crane and a hydra crane?", acceptedAnswer: { "@type": "Answer", text: "Both are pick and carry cranes, but Farana cranes have higher capacities (20T–50T) and longer booms compared to hydra cranes (8T–14T). Farana cranes are used in industrial zones for heavier machine shifting and are more stable for longer lifts." } }, { "@type": "Question", name: "Is the Farana crane available in Panvel MIDC and Taloja?", acceptedAnswer: { "@type": "Answer", text: "Yes — Saini Lifters operates Farana cranes throughout Navi Mumbai, Panvel, Taloja MIDC and Kalamboli. Our base at Plot No. J-854, Kalamboli ensures fast response to any MIDC industrial zone call-out." } }, { "@type": "Question", name: "How much does Farana crane rental cost per day in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "A Farana 20T costs approximately ₹10,000–₹14,000 per day including operator. The 35T model is ₹15,000–₹20,000 per day. Monthly rates available for ongoing MIDC factory projects. Call +91 9322296990 for a firm quote." } }, { "@type": "Question", name: "What is the maximum weight a Farana crane can lift while driving?", acceptedAnswer: { "@type": "Answer", text: "The maximum pick and carry (travel with load) capacity is typically 50–70% of the crane's full rated lift capacity. For our 35T Farana, travel with load is possible up to approximately 20T on flat, firm ground. Always confirm with the operator before picking and driving." } }] }) },
  ],
});

const cranes = [
  { name: "Farana 20T — Pick & Carry", desc: "Mid-range pick and carry crane for factory machine shifting, industrial zone operations and on-site material handling in Navi Mumbai MIDC areas.", specs: [{ label: "Capacity", value: "20T" }, { label: "Boom Type", value: "Telescopic" }, { label: "Drive", value: "Rubber Tyres" }, { label: "Operation", value: "Pick & Carry" }] },
  { name: "Farana 35T — Pick & Carry", desc: "Heavy-duty Farana crane for large machine installation, transformer shifting and industrial project requirements in Panvel, Taloja and Kalamboli.", specs: [{ label: "Capacity", value: "35T" }, { label: "Boom Type", value: "Telescopic" }, { label: "Drive", value: "Rubber Tyres" }, { label: "Operation", value: "Pick & Carry" }] },
];

const applications = [
  "Factory machine installation and shifting",
  "Panvel and Taloja MIDC industrial operations",
  "Transformer and heavy equipment relocation",
  "On-site load transport without road permits",
  "Confined industrial yard operations",
  "Steel plant and fabrication yard lifts",
  "Chemical plant equipment installation",
  "Construction site material positioning",
];

const faqs = [
  { q: "What is a Farana crane?", a: "A Farana crane (pharana) is a pick and carry crane that lifts loads and drives with them on rubber tyres. No outriggers needed — ideal for industrial zone operations, factory machine shifting and on-site load transport." },
  { q: "What is the difference between a Farana crane and a hydra crane?", a: "Both are pick and carry cranes, but Farana cranes have higher capacities (20T–50T) and longer booms versus hydra cranes (8T–14T). Farana cranes are used for heavier machine shifting in industrial zones." },
  { q: "Is the Farana crane available in Panvel MIDC and Taloja?", a: "Yes — Saini Lifters operates Farana cranes throughout Navi Mumbai, Panvel, Taloja MIDC and Kalamboli. Our base at Plot No. J-854, Kalamboli ensures fast response to any MIDC call-out." },
  { q: "How much does Farana crane rental cost per day in Navi Mumbai?", a: "A Farana 20T costs approximately ₹10,000–₹14,000 per day including operator. The Farana 35T is ₹15,000–₹20,000 per day. Rates may vary based on shift duration and site location. Call +91 9322296990 for a firm quote — we offer competitive monthly rates for ongoing MIDC factory projects." },
  { q: "What is the maximum weight a Farana crane can lift while driving?", a: "The maximum pick and carry (driving with load) capacity is typically 50–70% of the crane's full rated lift capacity, as travel load limits are lower than static lift capacity. For our 35T Farana, travel with load is possible up to approximately 20T on flat, firm ground. Always confirm with the operator before picking and driving." },
];
</script>
