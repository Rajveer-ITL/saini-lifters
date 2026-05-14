<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crane Rental Rates</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane Rental Rates in <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Indicative crane on rent rates for Navi Mumbai, Panvel and Kalamboli.
          Exact pricing depends on project requirements, duration, location and
          lift complexity. Call us for a precise quote.
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
      <h2 class="text-3xl font-bold mb-8">
        Crane on Rent Rate Per Day - Navi Mumbai
      </h2>

      <div class="overflow-x-auto mb-12">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-[#FF4057] text-white">
              <th class="p-4 text-left">Equipment Type</th>
              <th class="p-4 text-left">Capacity</th>
              <th class="p-4 text-left">Indicative Daily Rate</th>
              <th class="p-4 text-left">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in rates"
              :key="i"
              :class="i % 2 === 0 ? 'bg-gray-50 dark:bg-zinc-800/40' : ''"
            >
              <td class="p-4 font-semibold">{{ row.equipment }}</td>
              <td class="p-4">{{ row.capacity }}</td>
              <td class="p-4 text-[#FF4057] font-semibold">{{ row.rate }}</td>
              <td class="p-4 text-gray-500 dark:text-gray-400">
                {{ row.includes }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="p-5 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl mb-12"
      >
        <p class="text-sm text-yellow-800 dark:text-yellow-300 font-medium">
          ⚠️ Important: Rates above are indicative only. Final pricing depends
          on lift height, load weight, ground conditions, project location,
          rigging requirements, and rental duration. Mobilisation charges may
          apply outside Navi Mumbai. Call
          <a href="tel:+919322296990" class="underline">+91 9322296990</a> for
          an exact quote.
        </p>
      </div>

      <h2 class="text-3xl font-bold mb-6">
        Factors That Affect Crane Rental Price
      </h2>
      <div class="grid md:grid-cols-2 gap-4 mb-12">
        <div
          v-for="factor in factors"
          :key="factor.title"
          class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl"
        >
          <h3 class="font-bold mb-2 text-[#FF4057]">{{ factor.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ factor.desc }}
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">
        Frequently Asked Questions - Crane Rental Rates
      </h2>
      <div class="space-y-5">
        <div
          v-for="faq in faqs"
          :key="faq.q"
          class="border-b border-gray-200 dark:border-zinc-700 pb-5"
        >
          <h3 class="font-bold mb-2">{{ faq.q }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">{{ faq.a }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">
          Get an Exact Quote for Your Project
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Tell us your lift requirements - equipment type, load weight, height
          and location. We'll give you a precise, no-obligation quote within
          minutes.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Call: +91 9322296990
          </a>
          <NuxtLink
            to="/contact-us"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Enquiry
          </NuxtLink>
        </div>
        <div class="mt-6 text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p>
            Also see:
            <NuxtLink
              to="/services/mobile-crane-rental"
              class="text-[#FF4057] hover:underline"
              >Mobile Crane Rental</NuxtLink
            >
            |
            <NuxtLink
              to="/services/hydra-crane-rental"
              class="text-[#FF4057] hover:underline"
              >Hydra Crane Rental</NuxtLink
            >
            |
            <NuxtLink to="/faq" class="text-[#FF4057] hover:underline"
              >Crane Rental FAQ</NuxtLink
            >
          </p>
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
      name: "Crane Rental Rates",
      item: "https://www.sainilifters.com/pricing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the crane rental rate per day in Navi Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crane rental rates in Navi Mumbai range from ₹4,000–₹8,000/day for hydra cranes (8–14T), ₹20,000–₹35,000/day for mobile cranes (50–90T), and higher for all-terrain cranes (160T–300T) quoted on project basis. Call Saini Lifters at +91 9322296990 for an exact quote.",
      },
    },
    {
      "@type": "Question",
      name: "Does crane rental price include the operator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all Saini Lifters crane rentals include a certified operator at no additional charge. The operator is experienced in the specific crane model and follows all safety protocols.",
      },
    },
    {
      "@type": "Question",
      name: "Are there extra charges for crane mobilisation in Navi Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within Navi Mumbai, Panvel and Kalamboli, mobilisation is generally included in the rate. For sites in Mumbai, Thane, Raigad or further distances, a mobilisation charge may apply depending on the distance. We will quote this upfront.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum rental period for a crane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum rental period is typically 1 day (8-hour shift). We also offer half-day rates for certain equipment types. For ongoing projects, weekly and monthly rates are available at a discount. Contact us to discuss your project timeline.",
      },
    },
  ],
};

useHead({
  title: "Crane Rental Rates in Navi Mumbai | Price Per Day | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent rate per day in Navi Mumbai, Panvel & Kalamboli. Hydra crane ₹4,000–₹8,000/day. Mobile crane ₹20,000+/day. XCMG 160T–300T on project basis. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane rental rates navi mumbai, crane on rent price per day india, hydra crane rental cost, mobile crane rental rate, crane hire cost navi mumbai, crane rental price panvel",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/pricing" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    {
      property: "og:title",
      content: "Crane Rental Rates in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane on rent rate per day in Navi Mumbai. Hydra crane ₹4,000–₹8,000/day. Mobile crane ₹20,000+/day. Call +91 9322296990 for exact quote.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Crane Rental Rates in Navi Mumbai | Saini Lifters",
    },
    {
      name: "twitter:description",
      content:
        "Crane on rent rate per day in Navi Mumbai. Call +91 9322296990.",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/pricing" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
    { type: "application/ld+json", innerHTML: JSON.stringify(faqSchema) },
  ],
});

const rates = [
  {
    equipment: "Hydra Crane (Pick & Carry)",
    capacity: "8T",
    rate: "₹4,000 – ₹5,000/day",
    includes: "Operator, fuel",
  },
  {
    equipment: "Hydra Crane (Pick & Carry)",
    capacity: "10T",
    rate: "₹5,000 – ₹6,500/day",
    includes: "Operator, fuel",
  },
  {
    equipment: "Hydra Crane (Pick & Carry)",
    capacity: "14T",
    rate: "₹6,500 – ₹8,000/day",
    includes: "Operator, fuel",
  },
  {
    equipment: "Mobile / All-Terrain Crane",
    capacity: "50T – 90T",
    rate: "₹20,000 – ₹35,000/day",
    includes: "Operator, outrigger pads",
  },
  {
    equipment: "Mobile / All-Terrain Crane",
    capacity: "160T (XCMG QAY160)",
    rate: "Quote on request",
    includes: "Operator, rigging crew",
  },
  {
    equipment: "Mobile / All-Terrain Crane",
    capacity: "200T (XCMG QAY200)",
    rate: "Quote on request",
    includes: "Operator, rigging crew",
  },
  {
    equipment: "Mobile / All-Terrain Crane",
    capacity: "300T (XCMG QAY300)",
    rate: "Quote on request",
    includes: "Operator, rigging crew",
  },
  {
    equipment: "Articulating Boom Lift (Manlift)",
    capacity: "30–80 ft",
    rate: "₹3,500 – ₹6,000/day",
    includes: "Operator, fuel",
  },
  {
    equipment: "Telescopic Boom Lift",
    capacity: "80–185 ft",
    rate: "₹6,000 – ₹15,000/day",
    includes: "Operator, fuel",
  },
  {
    equipment: "Scissor Lift (Electric)",
    capacity: "19–50 ft",
    rate: "₹2,500 – ₹5,000/day",
    includes: "Operator",
  },
  {
    equipment: "Reach Stacker",
    capacity: "45T",
    rate: "Quote on request",
    includes: "Operator",
  },
  {
    equipment: "Container Stacker",
    capacity: "45T",
    rate: "Quote on request",
    includes: "Operator",
  },
  {
    equipment: "Side Shifter",
    capacity: "20–40T",
    rate: "Quote on request",
    includes: "Operator",
  },
  {
    equipment: "Crawler Crane",
    capacity: "80T – 400T",
    rate: "Quote on request",
    includes: "Operator, assembly crew",
  },
];

const factors = [
  {
    title: "Crane Capacity & Type",
    desc: "Higher capacity cranes cost more. An 8T hydra crane is far cheaper than a 300T all-terrain crane. Crawler cranes also have higher assembly and transport costs.",
  },
  {
    title: "Rental Duration",
    desc: "Day rates are standard, but weekly and monthly rentals attract 10–20% discounts. Shift-based pricing (8 or 12 hours) may also apply for some equipment.",
  },
  {
    title: "Project Location",
    desc: "Rates within Navi Mumbai, Panvel and Kalamboli are base rates. Sites further away in Mumbai, Thane or Raigad will incur mobilisation charges.",
  },
  {
    title: "Lift Complexity",
    desc: "Simple picks are priced differently from tandem lifts, blind picks, lifts over live infrastructure, or lifts in confined spaces requiring special rigging.",
  },
  {
    title: "Ground Conditions",
    desc: "Soft ground requiring additional outrigger pads or ground preparation may add to cost. Crane positioning and access road conditions are assessed on-site.",
  },
  {
    title: "Rigging & Accessories",
    desc: "Specialised rigging equipment (spreader beams, custom slings, shackles) may be charged separately for complex lifts not covered by standard rigging.",
  },
];

const faqs = [
  {
    q: "What is the crane rental rate per day in Navi Mumbai?",
    a: "Indicative rates: Hydra cranes (8–14T) ₹4,000–₹8,000/day; mobile cranes (50–90T) ₹20,000–₹35,000/day; larger all-terrain cranes (160T–300T) are quoted on project basis depending on lift requirements. Call +91 9322296990 for your specific project.",
  },
  {
    q: "Does crane rental price include the operator?",
    a: "Yes, all Saini Lifters crane rentals include a certified, experienced operator at no extra charge. Our operators are trained in safety protocols for all crane types we operate.",
  },
  {
    q: "Are there mobilisation charges for crane rental in Navi Mumbai?",
    a: "Within Navi Mumbai, Panvel and Kalamboli, mobilisation is generally included. Sites in Mumbai, Thane or Raigad may attract a mobilisation charge depending on distance. We quote this transparently upfront.",
  },
  {
    q: "What is the minimum rental period?",
    a: "The minimum period is 1 day (8-hour shift). Half-day rates are available for some equipment. Weekly and monthly rates are offered at a discount for longer projects - contact us to discuss.",
  },
];
</script>
