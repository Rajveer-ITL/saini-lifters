<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crane Rental Raigad</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Raigad</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides crane rental services across Raigad district
          including Panvel, Pen, Alibag, Khopoli, Uran and surrounding
          industrial areas. Available 24/7 for construction, infrastructure and
          industrial projects.
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
        Crane Rental Across Raigad District
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Raigad district is home to major industrial estates, power plants,
        chemical industries and growing infrastructure projects. Saini Lifters,
        based in Kalamboli (within Raigad district), serves the entire Raigad
        region with a full fleet of mobile cranes, hydra cranes, manlifts and
        heavy lifting equipment.
      </p>

      <div class="grid md:grid-cols-3 gap-4 mb-10">
        <div
          v-for="area in areas"
          :key="area"
          class="flex items-center gap-2 p-3 border border-gray-200 dark:border-zinc-700 rounded-lg"
        >
          <span class="w-2 h-2 rounded-full bg-[#FF4057]"></span>
          <span class="text-sm">{{ area }}</span>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">Available Equipment in Raigad</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div
          v-for="s in services"
          :key="s.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-5 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-lg mb-1 text-[#FF4057]">{{ s.name }}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            {{ s.desc }} - Capacity: <strong>{{ s.capacity }}</strong>
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">
          Crane Rental in Raigad - Contact Us
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
  title: "Crane on Rent in Raigad | Saini Lifters - Call +91 9322296990",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Raigad district - Panvel, Pen, Alibag, Khopoli, Uran. Mobile cranes, hydra, manlift & reach stacker. Saini Lifters. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in raigad, crane rental raigad, crane hire raigad district, mobile crane raigad, crane rental panvel raigad",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/raigad",
    },
    {
      property: "og:title",
      content: "Crane on Rent in Raigad | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane on rent in Raigad - Panvel, Pen, Alibag, Khopoli. Call Saini Lifters: +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/raigad",
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
            name: "Crane Rental Raigad",
            item: "https://www.sainilifters.com/crane-rental/raigad",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Saini Lifters Crane Service - Raigad",
        telephone: "+91-9322296990",
        url: "https://www.sainilifters.com/crane-rental/raigad",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Raigad",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        areaServed: "Raigad District",
        openingHours: "Mo-Su 00:00-24:00",
        priceRange: "$$",
      }),
    },
  ],
});

const areas = [
  "Panvel",
  "Kalamboli",
  "Pen",
  "Alibag",
  "Khopoli",
  "Uran",
  "Roha",
  "Mahad",
  "Mangaon",
  "Poladpur",
  "Murud",
  "Tala",
  "Dronagiri",
  "JNPT Area",
  "Taloja MIDC",
  "Patalganga MIDC",
];

const services = [
  {
    name: "Mobile Crane",
    desc: "All-terrain and mobile cranes for large construction projects in Raigad",
    capacity: "90T–300T",
  },
  {
    name: "Hydra Crane",
    desc: "Pick-and-carry hydra cranes for factory and industrial operations in Raigad",
    capacity: "8T–14T",
  },
  {
    name: "Manlift / Boom Lift",
    desc: "Boom lifts for infrastructure maintenance and industrial work in Raigad",
    capacity: "30–185 ft",
  },
  {
    name: "Crawler Crane",
    desc: "Heavy crawler cranes for bridge, dam and large civil projects in Raigad",
    capacity: "80T–400T",
  },
];
</script>
