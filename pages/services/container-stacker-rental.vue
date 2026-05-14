<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink
      ><span class="mx-2">/</span>
      <span>Container Stacker Rental</span>
    </nav>
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Container Stacker on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Heavy-duty container stacker rental in Navi Mumbai for port logistics,
          container yards and warehousing near JNPT. Saini Lifters provides
          45-tonne container stackers with experienced operators for 20ft and
          40ft ISO containers.
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
      <h2 class="text-3xl font-bold mb-6">
        Container Stacker Features & Specs
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4 text-lg">
        Our container stackers are designed for high-intensity port and
        logistics operations. With 45-tonne lift capacity, they can handle fully
        loaded 20ft and 40ft containers at major container yards near JNPT, Navi
        Mumbai.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        A container stacker (also called an empty container handler or loaded
        container handler depending on specification) is purpose-built for
        stacking ISO containers in yards efficiently. Unlike a reach stacker -
        which stacks in multiple rows - a container stacker is typically used
        for single-row stacking to 3 or 4 high, making it ideal for high-density
        container storage near port facilities. Saini Lifters operates these
        machines around the JNPT/Nhava Sheva zone where container traffic is
        among the highest in India.
      </p>
      <div class="grid md:grid-cols-3 gap-6 mb-10">
        <div
          v-for="feat in features"
          :key="feat.title"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-5 hover:border-[#FF4057] transition-colors text-center"
        >
          <h3 class="font-bold text-[#FF4057] text-2xl mb-1">
            {{ feat.value }}
          </h3>
          <p class="font-semibold mb-2">{{ feat.title }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ feat.desc }}
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">Where Container Stackers Are Used</h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-10">
        <li
          v-for="use in useCases"
          :key="use"
          class="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs"
            >✓</span
          >{{ use }}
        </li>
      </ul>

      <h2 class="text-3xl font-bold mb-4">FAQs - Container Stacker Rental</h2>
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
        <h2 class="text-3xl font-bold mb-4">
          Book Container Stacker in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/reach-stacker-rental"
            class="text-[#FF4057] hover:underline"
            >Reach Stacker</NuxtLink
          >
          |
          <NuxtLink
            to="/services/side-shifter-rental"
            class="text-[#FF4057] hover:underline"
            >Side Shifter</NuxtLink
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
  title: "Container Stacker on Rent in Navi Mumbai | JNPT | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Container stacker on rent in Navi Mumbai near JNPT - 45T capacity, 20ft/40ft ISO containers. Experienced operators. Call Saini Lifters: +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "container stacker rental navi mumbai, container stacker JNPT, container handling equipment panvel, ISO container stacker rental",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/container-stacker-rental",
    },
    {
      property: "og:title",
      content: "Container Stacker on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Container stacker on rent near JNPT Navi Mumbai. 45T capacity. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/container-stacker-rental",
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
        areaServed: [
          "Navi Mumbai",
          "Panvel",
          "Kalamboli",
          "Raigad",
          "Mumbai",
          "Thane",
        ],
        url: "https://www.sainilifters.com/services/container-stacker-rental",
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
            name: "Container Stacker Rental",
            item: "https://www.sainilifters.com/services/container-stacker-rental",
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
            name: "What is a container stacker?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A container stacker is a heavy-duty machine designed to lift and stack ISO containers (20ft/40ft) in port yards and logistics facilities. With 45T capacity, it stacks containers up to 3 high, maximising yard space.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a container stacker and a reach stacker?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A reach stacker can reach across multiple rows of containers to stack them (typically 6 containers deep), while a container stacker stacks within a single row to a greater height. Container stackers are ideal for tight yard layouts where width is limited.",
            },
          },
          {
            "@type": "Question",
            name: "Where does Saini Lifters deploy container stackers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Saini Lifters deploys container stackers at JNPT/Nhava Sheva area, Navi Mumbai container yards, CFS facilities near Panvel, and logistics parks in Raigad district.",
            },
          },
        ],
      }),
    },
  ],
});
const features = [
  {
    title: "Lift Capacity",
    value: "45T",
    desc: "Handles fully loaded 20ft and 40ft ISO containers.",
  },
  {
    title: "Stack Height",
    value: "3 High",
    desc: "Stacks containers up to 3 high for efficient yard utilisation.",
  },
  {
    title: "Container Types",
    value: "20ft/40ft",
    desc: "Compatible with standard ISO 20ft and 40ft containers.",
  },
];

const useCases = [
  "JNPT / Nhava Sheva container terminals",
  "CFS (Container Freight Stations) near Panvel",
  "Logistics parks and inland container depots (ICDs)",
  "Export cargo consolidation yards",
  "Port-side warehouses in Navi Mumbai",
  "Raigad district logistics and industrial parks",
];

const faqs = [
  {
    q: "What is a container stacker?",
    a: "A container stacker is a heavy-duty machine purpose-built to lift and stack ISO containers (20ft/40ft) in port yards and logistics facilities. With 45T capacity and up to 3-high stacking, it maximises yard density in tight spaces.",
  },
  {
    q: "What is the difference between a container stacker and a reach stacker?",
    a: "A reach stacker can pick containers from multiple rows (typically up to 6 deep) using an extendable boom. A container stacker works within a single row but can stack higher - ideal for facilities where horizontal space is constrained but vertical stacking is preferred.",
  },
  {
    q: "Where does Saini Lifters deploy container stackers?",
    a: "We deploy container stackers primarily around JNPT/Nhava Sheva, Navi Mumbai container yards, CFS facilities near Panvel and Uran, and logistics/industrial parks in Raigad district. Call +91 9322296990 to check availability for your location.",
  },
];
</script>
