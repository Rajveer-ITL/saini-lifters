<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink
      ><span class="mx-2">/</span>
      <span>Pick & Carry (Farana) Crane</span>
    </nav>
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Farana / Pick &amp; Carry Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides farana (pick-and-carry) crane rental in Navi
          Mumbai, Panvel and Kalamboli. Available in 20T and 50T capacity with
          360° swing and high on-site mobility for industrial zone operations.
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
          src="/image/eq-farana.png"
          alt="Farana pick and carry crane rental in Navi Mumbai – on-site lifting for MIDC factories from Saini Lifters"
          class="w-full h-auto max-h-[480px] object-contain p-4 bg-gray-50 dark:bg-zinc-800"
          loading="eager"
        />
      </div>
    </div>
    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-6">
        What is a Farana (Pick &amp; Carry) Crane?
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        A farana crane (also called pharana or pick-and-carry crane) is a mobile
        crane designed to lift and transport heavy loads across an industrial
        site without fixed setup. Unlike tower or all-terrain cranes that
        require outriggers, the farana can pick up a load and drive it to a
        different location - making it ideal for industrial zones, construction
        sites and factories in Navi Mumbai.
      </p>
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div
          v-for="model in models"
          :key="model.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl text-[#FF4057] mb-4">
            {{ model.name }}
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li v-for="s in model.specs" :key="s">✓ {{ s }}</li>
          </ul>
        </div>
      </div>
      <h2 class="text-3xl font-bold mb-6">Applications</h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-10">
        <li
          v-for="app in applications"
          :key="app"
          class="flex items-center gap-3 text-gray-600 dark:text-gray-300"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs"
            >✓</span
          >{{ app }}
        </li>
      </ul>

      <h2 class="text-3xl font-bold mb-6">
        FAQs - Farana / Pick &amp; Carry Crane Rental
      </h2>
      <div class="space-y-5 mb-10">
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
          Book Farana Crane in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/equipment/farana"
            class="text-[#FF4057] hover:underline"
            >Full Farana Specs</NuxtLink
          >
          |
          <NuxtLink
            to="/services/hydra-crane-rental"
            class="text-[#FF4057] hover:underline"
            >Hydra Crane</NuxtLink
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
  title: "Farana / Pick & Carry Crane on Rent in Navi Mumbai | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Farana (pick and carry) crane on rent in Navi Mumbai, Panvel & Kalamboli. 20T–50T, 360° swing. Industrial zone operations. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "farana crane rental navi mumbai, pick and carry crane panvel, pharana crane rental, farana crane on rent kalamboli",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/pick-carry-crane-rental",
    },
    {
      property: "og:title",
      content: "Farana Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Farana (pick & carry) crane on rent in Navi Mumbai. 20T–50T. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/pick-carry-crane-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Pick & Carry (Farana) Crane Rental",
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
        url: "https://www.sainilifters.com/services/pick-carry-crane-rental",
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
            name: "Pick & Carry Crane Rental",
            item: "https://www.sainilifters.com/services/pick-carry-crane-rental",
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
            name: "What is the difference between a farana crane and a hydra crane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both are pick-and-carry cranes but they serve different weight ranges. A hydra crane handles 8T–14T loads and is compact, ideal for light machine shifting inside factories. A farana (pharana) crane handles 20T–50T loads with a longer boom - suited for heavier industrial machinery, transformer shifting and operations in larger MIDC zones where a hydra cannot handle the load.",
            },
          },
          {
            "@type": "Question",
            name: "What is the daily rate for farana crane rental in Navi Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Farana crane rental rates in Navi Mumbai depend on the capacity and shift duration. A 20T farana crane typically costs ₹10,000–₹14,000 per day (8-hour shift), while a 50T farana is ₹15,000–₹20,000 per day. Call Saini Lifters at +91 9322296990 for a firm quote based on your specific requirement.",
            },
          },
          {
            "@type": "Question",
            name: "Can farana cranes be used inside factory buildings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, farana cranes can be used inside factory buildings provided the ceiling height and floor loading capacity are sufficient. The crane's raised boom requires a minimum clearance of approximately 8–12 metres depending on the model. Saini Lifters conducts a site check before deployment to confirm access. For tighter indoor spaces, a hydra crane may be more suitable.",
            },
          },
        ],
      }),
    },
  ],
});
const faqs = [
  {
    q: "What is the difference between a farana crane and a hydra crane?",
    a: "Both are pick-and-carry cranes but serve different weight ranges. A hydra handles 8T–14T and is compact for light machine shifting inside factories. A farana handles 20T–50T with a longer boom - suited for heavier machinery, transformer shifting and larger MIDC zone operations.",
  },
  {
    q: "What is the daily rate for farana crane rental in Navi Mumbai?",
    a: "A 20T farana crane typically costs ₹10,000–₹14,000 per day (8-hour shift); a 50T farana is ₹15,000–₹20,000 per day. Call +91 9322296990 for a firm quote based on your specific requirement.",
  },
  {
    q: "Can farana cranes be used inside factory buildings?",
    a: "Yes - farana cranes can work inside factory buildings if ceiling height (min ~8–12m depending on model) and floor loading are sufficient. Saini Lifters conducts a site check before deployment to confirm access. For tighter indoor spaces, a hydra crane may be more suitable.",
  },
];

const models = [
  {
    name: "Farana Crane 50T",
    specs: [
      "Capacity: 50 Tonnes",
      "Boom: 32m",
      "360° full swing",
      "On-site load transport",
      "Rubber-wheeled mobility",
    ],
  },
  {
    name: "Farana Crane 20T",
    specs: [
      "Capacity: 20 Tonnes",
      "Boom: 20m",
      "360° full swing",
      "Compact site access",
      "Fast setup & teardown",
    ],
  },
];
const applications = [
  "Panvel and Kalamboli MIDC industrial zones",
  "Factory machinery installation",
  "On-site load transport without rigging resets",
  "Tight industrial site operations",
  "Construction site material shifting",
  "Port auxiliary lifting operations",
  "Fabrication yard heavy lifting",
  "Steel market operations - Kalamboli",
];
</script>
