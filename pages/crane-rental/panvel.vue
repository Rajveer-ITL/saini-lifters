<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/crane-rental/navi-mumbai" class="hover:text-[#FF4057]"
        >Crane Rental Navi Mumbai</NuxtLink
      >
      <span class="mx-2">/</span>
      <span>Panvel</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Panvel</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides crane on rent in Panvel for construction, industrial, bridge and port projects. Searching for <strong>crane on rent near me</strong> in Panvel? Our Kalamboli base is just minutes away — ensuring the fastest response and same-day deployment across Panvel and surrounding areas.
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
      <h2 class="text-3xl font-bold mb-6">Crane Rental Services in Panvel</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Panvel is a major industrial and logistics hub in the Navi Mumbai
        Metropolitan Region. With the upcoming Navi Mumbai International
        Airport, expansion of NH-48, and a booming real estate sector, the
        demand for crane rental in Panvel is growing rapidly. Saini Lifters,
        based in Kalamboli (just minutes from central Panvel), is the top crane
        rental provider in the area.
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
            {{ service.desc }}
          </p>
          <p class="text-sm font-semibold mt-2">
            Capacity: {{ service.capacity }}
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">Areas Near Panvel We Serve</h2>
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-10">
        <li
          v-for="area in areas"
          :key="area"
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300"
        >
          <span class="w-2 h-2 rounded-full bg-[#FF4057] flex-shrink-0"></span
          >{{ area }}
        </li>
      </ul>

      <h2 class="text-3xl font-bold mb-6">FAQs - Crane on Rent in Panvel</h2>
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
        <h2 class="text-3xl font-bold mb-4">Need Crane on Rent in Panvel?</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-8">
          We also serve
          <NuxtLink
            to="/crane-rental/kalamboli"
            class="text-[#FF4057] hover:underline"
            >Kalamboli</NuxtLink
          >,
          <NuxtLink
            to="/crane-rental/navi-mumbai"
            class="text-[#FF4057] hover:underline"
            >Navi Mumbai</NuxtLink
          >
          and
          <NuxtLink
            to="/crane-rental/raigad"
            class="text-[#FF4057] hover:underline"
            >Raigad</NuxtLink
          >.
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.sainilifters.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Crane Rental Navi Mumbai",
      item: "https://www.sainilifters.com/crane-rental/navi-mumbai",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Crane Rental Panvel",
      item: "https://www.sainilifters.com/crane-rental/panvel",
    },
  ],
};

useHead({
  title: "Crane on Rent in Panvel | Saini Lifters - Call +91 9322296990",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Panvel - mobile cranes, hydra, manlift, all-terrain & reach stacker. Saini Lifters based in Kalamboli, serving Panvel since 2001. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in panvel, crane rental panvel, crane hire panvel, mobile crane panvel, hydra crane panvel, crane on hire panvel navi mumbai",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/panvel",
    },
    {
      property: "og:title",
      content: "Crane on Rent in Panvel | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane on rent in Panvel - mobile cranes, hydra, manlift & all-terrain. Call Saini Lifters: +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/panvel",
    },
  ],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(breadcrumbSchema) },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Saini Lifters Crane Service — Panvel",
        "telephone": "+91-9322296990",
        "url": "https://www.sainilifters.com/crane-rental/panvel",
        "address": { "@type": "PostalAddress", "addressLocality": "Panvel", "addressRegion": "Navi Mumbai, Maharashtra", "postalCode": "410206", "addressCountry": "IN" },
        "areaServed": "Panvel",
        "openingHours": "Mo-Su 00:00-24:00",
        "priceRange": "$$"
      }),
    },
  ],
});

const services = [
  {
    name: "Mobile Crane Rental",
    desc: "All-terrain and mobile cranes for construction projects in Panvel.",
    capacity: "90T – 300T",
  },
  {
    name: "Hydra Crane",
    desc: "Pick-and-carry hydra cranes for factory and industrial lifts in Panvel.",
    capacity: "8T – 14T",
  },
  {
    name: "Manlift / Boom Lift",
    desc: "Boom lifts for working at height in Panvel construction and commercial sites.",
    capacity: "30 ft – 185 ft",
  },
  {
    name: "Reach Stacker",
    desc: "Container reach stackers for logistics operations near Panvel.",
    capacity: "45T",
  },
  {
    name: "Crawler Crane",
    desc: "Heavy crawler cranes for bridge and civil projects in Panvel.",
    capacity: "80T – 400T",
  },
  {
    name: "Pick & Carry (Farana)",
    desc: "Farana cranes for on-site industrial lifting in Panvel industrial zones.",
    capacity: "20T – 50T",
  },
];

const areas = [
  "Panvel City",
  "Old Panvel",
  "New Panvel",
  "Kamothe",
  "Khandeshwar",
  "Kalamboli",
  "Kharghar",
  "Pushpak Nagar",
  "MIDC Panvel",
  "Roadpali",
  "Vichumbe",
  "Asudgaon",
];

const faqs = [
  {
    q: "Does Saini Lifters provide crane rental in Panvel?",
    a: "Yes, Saini Lifters is based in Kalamboli, just a few minutes from Panvel. We provide crane on rent across all of Panvel, including Old Panvel, New Panvel, Kamothe, MIDC and surrounding areas.",
  },
  {
    q: "What cranes are available in Panvel?",
    a: "Mobile cranes (90T–300T), hydra cranes (8T–14T), boom lifts (30–185 ft), reach stackers (45T), crawler cranes (80T–400T) and pick-and-carry/farana cranes (20T–50T) are all available in Panvel.",
  },
  {
    q: "How fast can a crane be deployed in Panvel?",
    a: "Since our base is in Kalamboli (near Panvel), we can typically deploy a crane in Panvel within 4-8 hours of booking confirmation.",
  },
];
</script>
