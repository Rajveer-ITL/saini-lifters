<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink>
      <span class="mx-2">/</span>
      <span>Hydra Crane Rental</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Hydra Crane on Rent in <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides hydra crane (pick-and-carry crane) on rent in
          Navi Mumbai, Panvel, Kalamboli and across Raigad. Available in 8T, 10T
          and 14T capacity. Certified operators included. Ideal for factory
          operations, industrial maintenance and tight-space lifting.
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
    <div class="max-w-5xl mx-auto px-4 pt-8 pb-0">
      <div class="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700">
        <img
          src="/image/crane-1.webp"
          alt="Hydra crane rental in Navi Mumbai – pick and carry hydra crane for factory and site lifting from Saini Lifters"
          class="w-full h-auto max-h-[480px] object-contain p-4 bg-gray-50 dark:bg-zinc-800"
          loading="eager"
        />
      </div>
    </div>

    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-4">What is a Hydra Crane?</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        A hydra crane (also called a pick-and-carry crane) is a compact,
        all-terrain lifting machine that can pick up a load and carry it to a
        different location on its own rubber wheels - without disassembly.
        Unlike conventional cranes, hydra cranes are highly mobile and can
        operate in tight factory floors, construction sites and industrial zones
        where larger cranes cannot access.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div
          v-for="item in hydraModels"
          :key="item.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors text-center"
        >
          <h3 class="font-bold text-2xl text-[#FF4057] mb-1">
            {{ item.capacity }}
          </h3>
          <p class="font-semibold mb-3">{{ item.name }}</p>
          <ul
            class="text-sm text-gray-500 dark:text-gray-400 space-y-1 text-left"
          >
            <li v-for="s in item.specs" :key="s">✓ {{ s }}</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">Applications of Hydra Crane</h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-10">
        <li
          v-for="app in applications"
          :key="app"
          class="flex items-center gap-3 text-gray-600 dark:text-gray-300"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs"
            >✓</span
          >
          {{ app }}
        </li>
      </ul>

      <h2 class="text-3xl font-bold mb-6">
        FAQs - Hydra Crane Rental in Navi Mumbai
      </h2>
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
        <h2 class="text-3xl font-bold mb-4">Book Hydra Crane in Navi Mumbai</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/mobile-crane-rental"
            class="text-[#FF4057] hover:underline"
            >Mobile Crane</NuxtLink
          >
          |
          <NuxtLink
            to="/services/manlift-rental"
            class="text-[#FF4057] hover:underline"
            >Manlift Rental</NuxtLink
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
  title: "Hydra Crane on Rent in Navi Mumbai | 8T–14T | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Hydra crane on rent in Navi Mumbai, Panvel & Kalamboli. Pick-and-carry cranes 8T, 10T & 14T with certified operators. Available 24/7. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "hydra crane on rent navi mumbai, hydra crane rental panvel, hydra crane kalamboli, pick and carry crane navi mumbai, hydra crane hire maharashtra",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/hydra-crane-rental",
    },
    {
      property: "og:title",
      content: "Hydra Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Hydra crane on rent in Navi Mumbai, Panvel & Kalamboli. 8T–14T pick-and-carry cranes with operators. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/hydra-crane-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Hydra Crane Rental",
        provider: {
          "@type": "LocalBusiness",
          name: "Saini Lifters Crane Service",
          telephone: "+91-9322296990",
          url: "https://www.sainilifters.com",
        },
        areaServed: [
          "Navi Mumbai",
          "Panvel",
          "Kalamboli",
          "Raigad",
          "Mumbai",
          "Thane",
        ],
        url: "https://www.sainilifters.com/services/hydra-crane-rental",
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
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
            name: "Services",
            item: "https://www.sainilifters.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hydra Crane Rental",
            item: "https://www.sainilifters.com/services/hydra-crane-rental",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the difference between a hydra crane and a mobile crane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A hydra crane (pick-and-carry) can carry its load while moving on rubber wheels - ideal for factory floors and confined spaces. A mobile crane is larger, outriggered for stability, and suited for heavier lifts on open sites.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cost of hydra crane rental in Navi Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hydra crane rental costs approximately ₹4,000–₹8,000 per day depending on capacity (8T, 10T or 14T), shift duration and location. Call +91 9322296990 for an accurate quote.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide hydra cranes in Panvel and Kalamboli?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Saini Lifters provides hydra cranes across Navi Mumbai, Panvel, Kalamboli, Raigad and surrounding areas. Since our base is in Kalamboli, we can deploy hydra cranes within the same day for local requests.",
            },
          },
        ],
      }),
    },
  ],
});

const hydraModels = [
  {
    name: "Hydra Crane 14T",
    capacity: "14 Tonnes",
    specs: [
      "Boom: 14m",
      "360° swing",
      "All-terrain rubber wheels",
      "Pick & carry design",
      "Certified operator included",
    ],
  },
  {
    name: "Hydra Crane 10T",
    capacity: "10 Tonnes",
    specs: [
      "Boom: 12m",
      "360° swing",
      "Factory-friendly compact",
      "Pick & carry",
      "Certified operator included",
    ],
  },
  {
    name: "Hydra Crane 8T",
    capacity: "8 Tonnes",
    specs: [
      "Boom: 10m",
      "360° swing",
      "Very compact size",
      "Pick & carry",
      "Certified operator included",
    ],
  },
];

const applications = [
  "Factory floor machine shifting in Navi Mumbai MIDC",
  "Industrial equipment installation",
  "Tight-space lifting in Kalamboli Steel Market",
  "Factory maintenance operations",
  "Small construction site material handling",
  "Workshop and warehouse lifting",
  "Chemical plant and oil & gas facility operations",
  "Infrastructure maintenance",
];

const faqs = [
  {
    q: "What is the difference between a hydra crane and a mobile crane?",
    a: "A hydra crane (pick-and-carry) can carry its load while moving on rubber wheels - making it ideal for factory floors and confined spaces. A mobile crane is larger, outriggered for stability, and suited for heavier lifts on open sites.",
  },
  {
    q: "What is the cost of hydra crane rental in Navi Mumbai?",
    a: "Hydra crane rental costs approximately ₹4,000–₹8,000 per day depending on capacity (8T, 10T or 14T), shift duration and location. Call +91 9322296990 for an accurate quote.",
  },
  {
    q: "Do you provide hydra cranes in Panvel and Kalamboli?",
    a: "Yes. Saini Lifters provides hydra cranes across Navi Mumbai, Panvel, Kalamboli, Raigad and surrounding areas. Since our base is in Kalamboli, we can deploy hydra cranes within the same day for local requests.",
  },
];
</script>
