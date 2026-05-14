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
      <span>All Terrain Telescopic Crane</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          All Terrain Telescopic Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | 50T to 700T
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides all terrain telescopic cranes on rent in Navi
          Mumbai, Panvel, Kalamboli and pan-India. Our XCMG QAY series
          (160T–300T) and heavy lift cranes up to 700T are available 24/7 with
          certified operators for bridge construction, power plant erection and
          mega industrial projects.
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
          src="/image/eq-all-terrain-crane.png"
          alt="All terrain telescopic crane 700T on rent in Navi Mumbai - Saini Lifters"
          class="w-full h-auto object-contain max-h-[480px] mx-auto p-4"
          loading="eager"
        />
      </div>

      <h2 class="text-3xl font-bold mb-8">Our All Terrain Crane Fleet</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="crane in cranes"
          :key="crane.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">
            {{ crane.name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {{ crane.desc }}
          </p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="spec in crane.specs" :key="spec.label" class="text-sm">
              <span
                class="text-gray-400 block text-xs uppercase tracking-wider"
                >{{ spec.label }}</span
              >
              <span class="font-semibold">{{ spec.value }}</span>
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

      <!-- Why Rent Section -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6">
          Why Rent an All Terrain Crane from Saini Lifters?
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters has operated all terrain telescopic cranes since 2001 -
          one of the longest-serving heavy lift fleets in Navi Mumbai. Our XCMG
          QAY160 and QAY300 cranes are maintained to manufacturer standards and
          come with certified, experienced operators who understand the specific
          ground conditions and site access challenges across Panvel, Kalamboli
          and the Raigad industrial corridor.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Every all terrain crane deployment includes a pre-lift site survey,
          outrigger pad planning, load chart verification and operator-rigger
          briefing. This eliminates surprises on lift day and ensures your
          project stays on schedule. For pan-India projects in Odisha, Madhya
          Pradesh or Gujarat, we handle all ODC transport permits and route
          surveys.
        </p>
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden"
          >
            <thead class="bg-[#FF4057] text-white">
              <tr>
                <th class="p-3 text-left font-semibold">Factor</th>
                <th class="p-3 text-left font-semibold">All Terrain Crane</th>
                <th class="p-3 text-left font-semibold">Crawler Crane</th>
                <th class="p-3 text-left font-semibold">Mobile Crane</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-zinc-700">
              <tr class="bg-white dark:bg-zinc-800">
                <td class="p-3 font-medium">Road Travel</td>
                <td class="p-3 text-green-600 dark:text-green-400">
                  Highway speed ✓
                </td>
                <td class="p-3 text-red-500">Trailer only</td>
                <td class="p-3 text-green-600 dark:text-green-400">
                  Highway speed ✓
                </td>
              </tr>
              <tr class="bg-gray-50 dark:bg-zinc-900">
                <td class="p-3 font-medium">Capacity</td>
                <td class="p-3">50T – 700T</td>
                <td class="p-3">100T – 400T+</td>
                <td class="p-3">50T – 500T</td>
              </tr>
              <tr class="bg-white dark:bg-zinc-800">
                <td class="p-3 font-medium">Setup Time</td>
                <td class="p-3">2–4 hours</td>
                <td class="p-3">2–5 days</td>
                <td class="p-3">1–3 hours</td>
              </tr>
              <tr class="bg-gray-50 dark:bg-zinc-900">
                <td class="p-3 font-medium">Best For</td>
                <td class="p-3">Multi-site, long reach</td>
                <td class="p-3">Long-duration, soft ground</td>
                <td class="p-3">Short lifts, urban sites</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">
        FAQs - All Terrain Crane Rental Navi Mumbai
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
          Book All Terrain Crane in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/all-terrain-crane-rental"
            class="text-[#FF4057] hover:underline"
            >All-Terrain Crane Service</NuxtLink
          >
          |
          <NuxtLink
            to="/services/mobile-crane-rental"
            class="text-[#FF4057] hover:underline"
            >Mobile Crane Rental</NuxtLink
          >
          |
          <NuxtLink
            to="/crane-rental/navi-mumbai"
            class="text-[#FF4057] hover:underline"
            >Crane Rental Navi Mumbai</NuxtLink
          >
          |
          <NuxtLink
            to="/equipment/crawler-crane"
            class="text-[#FF4057] hover:underline"
            >Crawler Crane</NuxtLink
          >
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <a
            href="https://wa.me/919322296990?text=Hi%20I%20need%20all%20terrain%20crane%20on%20rent%20in%20Navi%20Mumbai"
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
    "All Terrain Telescopic Crane on Rent in Navi Mumbai | 50T to 700T | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "All terrain telescopic crane on rent in Navi Mumbai. XCMG QAY160 (160T), QAY300 (300T) and 700T heavy lift cranes with certified operators. 24/7 availability. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "all terrain crane on rent navi mumbai, telescopic crane rental navi mumbai, XCMG crane navi mumbai, 300T crane rental navi mumbai, heavy lift crane navi mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/equipment/all-terrain-crane",
    },
    {
      property: "og:title",
      content: "All Terrain Telescopic Crane on Rent in Navi Mumbai | 50T–700T",
    },
    {
      property: "og:description",
      content:
        "All terrain crane on rent in Navi Mumbai. XCMG 160T–300T and 700T cranes available 24/7. Call +91 9322296990.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-all-terrain-crane.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/equipment/all-terrain-crane",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "All Terrain Telescopic Crane Rental",
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
          "Maharashtra",
          "Odisha",
          "Madhya Pradesh",
        ],
        url: "https://www.sainilifters.com/equipment/all-terrain-crane",
        description:
          "All terrain telescopic crane rental - XCMG QAY160 to 700T heavy lift cranes with certified operators, 24/7 availability from Kalamboli, Navi Mumbai.",
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
            name: "All Terrain Telescopic Crane",
            item: "https://www.sainilifters.com/equipment/all-terrain-crane",
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
            name: "What is an all terrain telescopic crane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An all terrain telescopic crane combines on-road mobility with off-road capability. It uses a telescoping boom to reach great heights and capacities from 50T up to 700T or more. Ideal for bridge construction, power plant erection and heavy industrial lifts.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a 300T crane rental cost per day in Navi Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The daily rate for a 300T all terrain crane in Navi Mumbai depends on the project scope, duration and site conditions. Call Saini Lifters at +91 9322296990 for an accurate quote specific to your project.",
            },
          },
          {
            "@type": "Question",
            name: "Do you deploy all terrain cranes pan-India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Saini Lifters deploys all terrain cranes across Maharashtra, Odisha, Madhya Pradesh and other Indian states for large infrastructure and industrial projects. Contact us for mobilisation details.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between an all terrain crane and a rough terrain crane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An all terrain crane travels on public highways at full speed and operates off-road - ideal for multi-site projects. A rough terrain crane is not road-legal and must be transported on a trailer, but has lower ground pressure for soft or muddy construction sites.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to set up a 160T all terrain crane on site?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A 160T XCMG QAY160 can typically be set up and ready to lift within 2–4 hours on a prepared site, including outrigger extension, boom erection and load chart verification. For a 300T crane, allow 4–6 hours. Saini Lifters coordinates all groundwork and safety checks.",
            },
          },
        ],
      }),
    },
  ],
});

const cranes = [
  {
    name: "XCMG QAY160 - 160 Tonnes",
    desc: "Versatile all-terrain crane for construction, industrial and civil projects across Navi Mumbai, Panvel and Raigad.",
    specs: [
      { label: "Capacity", value: "160T" },
      { label: "Main Boom", value: "78m" },
      { label: "JIB", value: "21m" },
      { label: "Total Reach", value: "162m" },
    ],
  },
  {
    name: "XCMG QAY300 - 300 Tonnes",
    desc: "Our most powerful crane for bridge construction, power plants and mega projects across Navi Mumbai and Maharashtra.",
    specs: [
      { label: "Capacity", value: "300T" },
      { label: "Main Boom", value: "90m" },
      { label: "JIB", value: "86m" },
      { label: "Total Reach", value: "270m" },
    ],
  },
  {
    name: "700T Heavy Lift Crane",
    desc: "Maximum capacity all terrain telescopic crane for the most demanding infrastructure, port and industrial projects pan-India.",
    specs: [
      { label: "Capacity", value: "700T" },
      { label: "Main Boom", value: "100m+" },
      { label: "Drive", value: "All-Wheel" },
      { label: "Deployment", value: "Pan-India" },
    ],
  },
];

const applications = [
  "Bridge construction and segment lifting",
  "Power plant equipment erection",
  "Heavy industrial machinery installation",
  "High-rise building construction",
  "Port and JNPT area operations",
  "Transformer and reactor lifting",
  "Infrastructure and civil engineering",
  "Oil & gas and petrochemical plants",
  "Wind turbine erection",
  "Pan-India mega project deployments",
];

const faqs = [
  {
    q: "What is an all terrain telescopic crane?",
    a: "An all terrain telescopic crane combines on-road mobility with off-road capability. It uses a telescoping boom to reach great heights and capacities from 50T up to 700T or more. Ideal for bridge construction, power plant erection and heavy industrial lifts.",
  },
  {
    q: "How much does a 300T crane rental cost per day in Navi Mumbai?",
    a: "The daily rate for a 300T all terrain crane in Navi Mumbai depends on project scope, duration and site conditions. Call Saini Lifters at +91 9322296990 for an accurate quote.",
  },
  {
    q: "Do you deploy all terrain cranes pan-India?",
    a: "Yes, Saini Lifters deploys all terrain cranes across Maharashtra, Odisha, Madhya Pradesh and other Indian states for large infrastructure and industrial projects.",
  },
  {
    q: "What is the difference between an all terrain crane and a rough terrain crane?",
    a: "An all terrain crane can travel on public highways at full speed and operate off-road, making it ideal for multi-site projects. A rough terrain crane is not road-legal and must be transported on a trailer - but it has lower ground pressure, making it better for soft or muddy construction sites and MIDC zones.",
  },
  {
    q: "How long does it take to set up a 160T all terrain crane on site?",
    a: "A 160T all terrain crane like the XCMG QAY160 can typically be set up and ready to lift within 2–4 hours on a prepared site. Setup includes positioning, outrigger extension, boom erection and load chart verification. For a 300T crane, allow 4–6 hours. Saini Lifters coordinates all groundwork and safety checks before the first lift.",
  },
];
</script>
