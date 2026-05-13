<template>
  <div class="min-h-screen mt-[70px]">
    <nav class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink><span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink><span class="mx-2">/</span>
      <span>Reach Stacker Rental</span>
    </nav>
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Reach Stacker on Rent in <span class="text-[#FF4057]">Navi Mumbai</span></h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">Saini Lifters provides reach stacker rental for container handling and stacking operations in Navi Mumbai, near JNPT port, Panvel and across Raigad. 45-tonne capacity with experienced operators.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-6">What is a Reach Stacker?</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4 text-lg">
        A reach stacker is a heavy-duty wheeled vehicle used to move and stack ISO shipping containers in port terminals, container yards and inland container depots (ICDs). Unlike a straddle carrier or crane, a reach stacker uses a telescoping boom arm with a spreader to pick up containers and stack them up to 3 high and 3 rows deep — making it the most efficient machine for high-throughput container yard operations.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Saini Lifters' 45-tonne reach stackers are ISO-compatible, well-maintained and operated by drivers experienced in port and yard operations near JNPT, Nhava Sheva and container facilities across Navi Mumbai and Raigad. We offer daily, weekly and monthly rental contracts with full operator support.
      </p>
      <h2 class="text-3xl font-bold mb-6">Reach Stacker Specifications</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6">
          <h3 class="font-bold text-xl mb-4 text-[#FF4057]">Key Specifications</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>✓ Capacity: <strong>45 Tonnes</strong></li>
            <li>✓ Stack Height: <strong>3 containers high</strong></li>
            <li>✓ Stack Depth: <strong>3 rows deep</strong></li>
            <li>✓ Container Type: <strong>20ft and 40ft ISO</strong></li>
            <li>✓ Rotation: <strong>360° swing</strong></li>
            <li>✓ Operator: <strong>Included</strong></li>
          </ul>
        </div>
        <div class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6">
          <h3 class="font-bold text-xl mb-4 text-[#FF4057]">Applications</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>✓ Container yards and depots</li>
            <li>✓ JNPT port and logistics facilities</li>
            <li>✓ Inland container depots (ICD)</li>
            <li>✓ Rail freight terminals</li>
            <li>✓ Shipping company yards</li>
            <li>✓ Export/import warehouses</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">JNPT Area — Reach Stacker Deployment</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        The JNPT (Jawaharlal Nehru Port Trust) at Nhava Sheva is India's busiest container port and handles over 5 million TEUs annually. The surrounding area — including Uran, Dronagiri, Panvel and Kalamboli — has one of the highest concentrations of container handling facilities in India. Saini Lifters is strategically based in Kalamboli, making us the fastest and closest reach stacker provider for any JNPT-area operation.
      </p>
      <div class="grid md:grid-cols-3 gap-4 mb-10">
        <div class="p-4 border border-gray-200 dark:border-zinc-700 rounded-xl text-center">
          <p class="text-2xl font-bold text-[#FF4057]">45T</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Lift capacity — fully loaded containers</p>
        </div>
        <div class="p-4 border border-gray-200 dark:border-zinc-700 rounded-xl text-center">
          <p class="text-2xl font-bold text-[#FF4057]">3 × 3</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Stack 3 high, 3 rows deep</p>
        </div>
        <div class="p-4 border border-gray-200 dark:border-zinc-700 rounded-xl text-center">
          <p class="text-2xl font-bold text-[#FF4057]">24/7</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Available including weekends</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">FAQs — Reach Stacker Rental</h2>
      <div class="space-y-5">
        <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-200 dark:border-zinc-700 pb-4">
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>
    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Book Reach Stacker in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">Also see: <NuxtLink to="/services/container-stacker-rental" class="text-[#FF4057] hover:underline">Container Stacker</NuxtLink> | <NuxtLink to="/services/side-shifter-rental" class="text-[#FF4057] hover:underline">Side Shifter</NuxtLink></p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919322296990" class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call: +91 9322296990</a>
          <NuxtLink to="/contact-us" class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Send Enquiry</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title: "Reach Stacker on Rent in Navi Mumbai | JNPT Area | Saini Lifters",
  meta: [
    { name: "description", content: "Reach stacker on rent in Navi Mumbai, near JNPT & Panvel. 45T capacity, 3-high stacking, ISO container. Experienced operators. Call +91 9322296990." },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "reach stacker rental navi mumbai, reach stacker on rent panvel, container handling equipment navi mumbai, JNPT reach stacker rental" },
    { property: "og:url", content: "https://www.sainilifters.com/services/reach-stacker-rental" },
    { property: "og:title", content: "Reach Stacker on Rent in Navi Mumbai | Saini Lifters" },
    { property: "og:description", content: "Reach stacker on rent near JNPT, Navi Mumbai & Panvel. 45T capacity. Call +91 9322296990." },
    { property: "og:image", content: "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp" },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/services/reach-stacker-rental" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Reach Stacker Rental",
        "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990", "url": "https://www.sainilifters.com" },
        "areaServed": ["Navi Mumbai", "Panvel", "Kalamboli", "Raigad", "Mumbai", "Thane"],
        "url": "https://www.sainilifters.com/services/reach-stacker-rental"
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
          { "@type": "ListItem", "position": 3, "name": "Reach Stacker Rental", "item": "https://www.sainilifters.com/services/reach-stacker-rental" }
        ]
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a reach stacker?", "acceptedAnswer": { "@type": "Answer", "text": "A reach stacker is a heavy-duty wheeled vehicle with a telescoping boom and spreader, used to lift and stack ISO shipping containers (20ft/40ft) up to 3 high and 3 rows deep in container yards, ports and ICDs. It's the most efficient container handling machine for high-throughput yard operations." } },
          { "@type": "Question", "name": "What is the daily rental rate for a reach stacker in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Reach stacker rental rates depend on shift duration and project location. Contact Saini Lifters at +91 9322296990 for a precise daily, weekly or monthly quote." } },
          { "@type": "Question", "name": "What is the minimum hire period for a reach stacker?", "acceptedAnswer": { "@type": "Answer", "text": "The minimum hire period is one day (8 or 12-hour shift). We also offer weekly and monthly contracts at discounted rates for longer deployments." } },
          { "@type": "Question", "name": "Which areas near JNPT do you serve with reach stackers?", "acceptedAnswer": { "@type": "Answer", "text": "Saini Lifters deploys reach stackers across Navi Mumbai, Panvel, Kalamboli, Nhava Sheva (JNPT), Uran, Dronagiri and container yards across the Raigad district." } },
        ]
      }),
    },
  ],
});

const faqs = [
  {
    q: "What is a reach stacker used for?",
    a: "A reach stacker lifts and stacks ISO shipping containers (20ft/40ft) using a telescoping boom arm with a spreader. It can stack up to 3 containers high and reach 3 rows deep — making it ideal for container yards, ports, ICDs and rail freight terminals where space efficiency is critical.",
  },
  {
    q: "What is the daily rental rate for a reach stacker?",
    a: "Reach stacker rates vary by shift duration and project location. Call +91 9322296990 for a precise daily, weekly or monthly quote. Minimum hire is one day (8 or 12-hour shift).",
  },
  {
    q: "What types of containers can the reach stacker handle?",
    a: "Saini Lifters' reach stackers handle standard 20ft and 40ft ISO containers, including both empty and fully loaded containers up to 45 tonnes.",
  },
  {
    q: "Which areas near JNPT do you serve?",
    a: "We serve Nhava Sheva (JNPT), Uran, Dronagiri, Panvel, Kalamboli, Navi Mumbai and container yards across Raigad district. Our Kalamboli base puts us closest to the JNPT corridor.",
  },
];
</script>
