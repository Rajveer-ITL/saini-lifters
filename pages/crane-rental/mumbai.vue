<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crane Rental Mumbai</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides crane rental services in Mumbai for
          construction, industrial and port projects. Based in Navi Mumbai
          (Kalamboli), we serve Mumbai including Kurla, Andheri, Worli, Bandra,
          Thane and all surrounding areas.
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
      <h2 class="text-3xl font-bold mb-6">Crane Rental Services in Mumbai</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Mumbai is India's commercial capital and home to some of the largest
        construction, infrastructure and port projects. Saini Lifters serves
        Mumbai with a modern fleet of mobile cranes, hydra cranes, manlifts,
        boom lifts, reach stackers and all-terrain cranes. Our Navi Mumbai base
        ensures quick deployment across the Mumbai Metropolitan Region (MMR).
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

      <h2 class="text-3xl font-bold mb-4">Areas in Mumbai We Serve</h2>
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-10">
        <li
          v-for="area in areas"
          :key="area"
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
        >
          <span class="w-2 h-2 rounded-full bg-[#FF4057] flex-shrink-0"></span
          >{{ area }}
        </li>
      </ul>
    </section>

    <!-- Expanded content for Mumbai -->
    <section class="max-w-5xl mx-auto px-4 pb-16">
      <h2 class="text-3xl font-bold mb-6">
        Why Choose Saini Lifters for Crane on Rent in Mumbai?
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        When you search for <strong>crane on rent near me</strong> in Mumbai,
        Saini Lifters is your closest and most trusted option. Operating from
        our base in Kalamboli (Navi Mumbai), we can reach most Mumbai locations
        within 1–2 hours. Our XCMG all-terrain crane fleet - including the
        QAY160 (160T), QAY200 (200T) and QAY300 (300T) - is among the most
        modern in the Mumbai Metropolitan Region.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Mumbai's construction industry is one of the most demanding in India.
        From high-rise residential towers in Worli and Bandra to industrial
        plant installations in Bhiwandi and Turbhe, and from port machinery at
        JNPT to infrastructure work on the Mumbai Trans Harbour Link - every
        major project requires heavy lifting expertise. With 20+ years of
        experience and certified operators, Saini Lifters has the equipment and
        know-how to handle any lift safely.
      </p>
      <div class="grid md:grid-cols-2 gap-4 mt-8">
        <div class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl">
          <h3 class="font-bold text-lg mb-2 text-[#FF4057]">
            Project Types We Handle in Mumbai
          </h3>
          <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• High-rise building construction & topping out</li>
            <li>• Industrial plant and machinery installation</li>
            <li>• Bridge girder erection and launching</li>
            <li>• Port and container yard operations</li>
            <li>• Transformer and generator installation</li>
            <li>• HVAC and rooftop equipment placement</li>
          </ul>
        </div>
        <div class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl">
          <h3 class="font-bold text-lg mb-2 text-[#FF4057]">Our Advantage</h3>
          <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• 24/7 availability, including weekends and holidays</li>
            <li>• Certified operators with safety training</li>
            <li>• Modern XCMG fleet (50T–300T) with full maintenance</li>
            <li>• Competitive rates with no hidden charges</li>
            <li>• Fast mobilisation from Navi Mumbai base</li>
            <li>• Pre-lift risk assessment and lift planning</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">
          Crane Rental in Mumbai - Get a Quote
        </h2>
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
  title: "Crane on Rent in Mumbai | Saini Lifters - Navi Mumbai Based",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Mumbai - mobile cranes, hydra, manlift, boom lift, all-terrain & reach stacker. Saini Lifters based in Navi Mumbai. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in mumbai, crane rental mumbai, crane hire mumbai, mobile crane mumbai, hydra crane mumbai, manlift mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/mumbai",
    },
    {
      property: "og:title",
      content: "Crane on Rent in Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane on rent in Mumbai - mobile cranes, hydra, manlift & all-terrain. Saini Lifters based in Navi Mumbai. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/mumbai",
    },
  ],
  script: [
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
            name: "Crane Rental Mumbai",
            item: "https://www.sainilifters.com/crane-rental/mumbai",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Saini Lifters Crane Service - Mumbai",
        telephone: "+91-9322296990",
        url: "https://www.sainilifters.com/crane-rental/mumbai",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        areaServed: "Mumbai",
        openingHours: "Mo-Su 00:00-24:00",
        priceRange: "$$",
      }),
    },
  ],
});

const services = [
  {
    name: "Mobile Crane Rental",
    desc: "High-capacity mobile cranes for Mumbai's large-scale construction and port projects.",
    capacity: "90T – 300T",
  },
  {
    name: "Hydra Crane",
    desc: "Pick-and-carry hydra cranes for industrial factories and tight urban spaces in Mumbai.",
    capacity: "8T – 14T",
  },
  {
    name: "Manlift / Boom Lift",
    desc: "Boom lifts for high-rise building maintenance, construction and events in Mumbai.",
    capacity: "30 ft – 185 ft",
  },
  {
    name: "All-Terrain Crane",
    desc: "XCMG QAY all-terrain cranes for bridge and infrastructure projects in Mumbai.",
    capacity: "160T – 300T",
  },
  {
    name: "Reach Stacker",
    desc: "Container reach stackers for Mumbai port and logistics operations.",
    capacity: "45T",
  },
  {
    name: "Crawler Crane",
    desc: "Heavy crawler cranes for major civil engineering and power projects in Mumbai.",
    capacity: "80T – 400T",
  },
];

const areas = [
  "Kurla",
  "Andheri",
  "Worli",
  "Bandra",
  "Dharavi",
  "BKC",
  "Lower Parel",
  "Chembur",
  "Ghatkopar",
  "Vikhroli",
  "Mulund",
  "Bhandup",
  "Thane",
  "Wadala",
  "Sion",
  "Dadar",
  "Parel",
  "Mazgaon",
  "Sewri",
  "Chunabhatti",
];
</script>
