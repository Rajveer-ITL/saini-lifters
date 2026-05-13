<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]"
        >Equipment</NuxtLink
      >
      <span class="mx-2">/</span>
      <span>Container Stacker</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Container Stacker on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | 45T Empty Container
          Handler
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides Kalmar 45T empty container handlers (container
          stackers) on rent in Navi Mumbai near JNPT. Designed specifically for
          empty ISO containers, they stack up to 5 containers high — maximising
          yard density for container depots, CFS and port operations.
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

    <section class="max-w-5xl mx-auto px-4 py-12">
      <div
        class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
      >
        <img
          src="/image/eq-container-stacker.png"
          alt="Kalmar empty container stacker on rent in Navi Mumbai near JNPT"
          class="w-full h-auto object-contain max-h-[480px] mx-auto p-4"
          loading="eager"
        />
      </div>

      <h2 class="text-3xl font-bold mb-8">Container Stacker Specifications</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="item in specs"
          :key="item.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">{{ item.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {{ item.desc }}
          </p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="s in item.data" :key="s.label" class="text-sm">
              <span
                class="text-gray-400 block text-xs uppercase tracking-wider"
                >{{ s.label }}</span
              >
              <span class="font-semibold">{{ s.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">Applications</h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-12">
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
        FAQs — Container Stacker Rental Navi Mumbai
      </h2>
      <div class="space-y-5 mb-12">
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
        <h2 class="text-3xl font-bold mb-4">
          Book Container Stacker in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/container-stacker-rental"
            class="text-[#FF4057] hover:underline"
            >Container Stacker Service</NuxtLink
          >
          |
          <NuxtLink
            to="/equipment/reach-stacker"
            class="text-[#FF4057] hover:underline"
            >Reach Stacker</NuxtLink
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
          <a
            href="https://wa.me/919322296990?text=Hi%20I%20need%20container%20stacker%20on%20rent%20in%20Navi%20Mumbai"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >WhatsApp Us</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title:
    "Container Stacker on Rent in Navi Mumbai | 45T Empty Container Handler | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Container stacker (empty container handler) on rent in Navi Mumbai near JNPT — Kalmar 45T, stacks empty containers 5 high. CFS, ICD, port depots. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "container stacker on rent navi mumbai, empty container handler navi mumbai, container stacker rental JNPT, kalmar container stacker navi mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/equipment/container-stacker",
    },
    {
      property: "og:title",
      content:
        "Container Stacker on Rent in Navi Mumbai | 45T Empty Container Handler",
    },
    {
      property: "og:description",
      content:
        "Container stacker on rent near JNPT Navi Mumbai — Kalmar 45T empty handler stacking 5 high. Call +91 9322296990.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-container-stacker.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/equipment/container-stacker",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Container Stacker Rental",
        provider: {
          "@type": "LocalBusiness",
          name: "Saini Lifters Crane Service",
          telephone: "+91-9322296990",
          url: "https://www.sainilifters.com",
        },
        areaServed: ["Navi Mumbai", "Kalamboli", "JNPT", "Panvel"],
        url: "https://www.sainilifters.com/equipment/container-stacker",
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
            name: "Equipment",
            item: "https://www.sainilifters.com/equipment",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Container Stacker",
            item: "https://www.sainilifters.com/equipment/container-stacker",
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
            name: "What is the difference between an empty container handler and a reach stacker?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An empty container handler (container stacker) is optimised for empty ISO containers — it can stack them 5+ high and handle them faster and more efficiently than a reach stacker. A reach stacker handles both laden and empty containers but typically stacks only 3 high.",
            },
          },
          {
            "@type": "Question",
            name: "How many containers high can the container stacker stack?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our Kalmar 45T empty container handler can stack empty ISO containers up to 5 containers high, maximising container yard density for CFS and port depot operations near JNPT Navi Mumbai.",
            },
          },
          {
            "@type": "Question",
            name: "Is the container stacker available near JNPT?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Saini Lifters is based in Kalamboli, Navi Mumbai — minutes from JNPT. Our container stackers are available 24/7 for empty container yards, CFS and inland container depots in the area.",
            },
          },
        ],
      }),
    },
  ],
});

const specs = [
  {
    name: "Kalmar ECH 45-31C5 — Empty Container Handler",
    desc: "High-speed empty container handler for CFS, port depots and container yards near JNPT, Navi Mumbai.",
    data: [
      { label: "Capacity (empty)", value: "45T" },
      { label: "Stack Height", value: "5 containers" },
      { label: "Container Size", value: "20ft & 40ft" },
      { label: "Cycle Time", value: "High-speed" },
    ],
  },
];

const applications = [
  "Empty container yards near JNPT",
  "Container freight stations (CFS) operations",
  "Inland container depots (ICD) near Kalamboli",
  "Port empty container terminal management",
  "High-density container stacking (5-high)",
  "Leasing depot operations",
  "Container washing and repair yard operations",
  "Rail container yard terminal operations",
];

const faqs = [
  {
    q: "What is the difference between an empty container handler and a reach stacker?",
    a: "An empty container handler is optimised for empty ISO containers — stacking 5+ high, faster and more efficient. A reach stacker handles laden and empty containers but typically stacks only 3 high.",
  },
  {
    q: "How many containers high can the container stacker stack?",
    a: "Our Kalmar 45T empty container handler stacks empty ISO containers up to 5 containers high, maximising yard density for CFS and port depot operations near JNPT.",
  },
  {
    q: "Is the container stacker available near JNPT?",
    a: "Yes — Saini Lifters is based in Kalamboli, minutes from JNPT. Our container stackers are available 24/7 for empty container yards, CFS and inland container depots.",
  },
];
</script>
