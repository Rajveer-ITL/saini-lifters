<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/crane-rental/navi-mumbai" class="hover:text-[#FF4057]"
        >Navi Mumbai</NuxtLink
      >
      <span class="mx-2">/</span>
      <span>Kalamboli</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Kalamboli</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters is headquartered in Kalamboli, Navi Mumbai — your closest crane rental company. Searching for <strong>crane on rent near me</strong> in Kalamboli? We're right here. Mobile cranes, hydra cranes, manlifts and more, available for immediate same-day deployment in Kalamboli and surrounding areas.
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
        Crane Rental in Kalamboli - Our Home Base
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
        Saini Lifters is located at Plot No. J-854, Steel Market Rd, Sector AWC,
        Kalamboli, Navi Mumbai 410218. Being based in Kalamboli means we can
        deploy cranes faster than any other provider - right to your doorstep in
        the Steel Market, MIDC zones, construction sites and logistics hubs of
        Kalamboli.
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
        </div>
      </div>

      <div class="bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl p-6 mb-10">
        <h2 class="text-2xl font-bold mb-3">Our Address in Kalamboli</h2>
        <p class="text-gray-600 dark:text-gray-300">
          <strong>Saini Lifters Crane Service</strong><br />
          Plot No. J-854, Steel Market Rd, Sector AWC<br />
          Kalamboli, Panvel, Navi Mumbai, Maharashtra 410218<br />
          <a href="tel:+919322296990" class="text-[#FF4057] font-semibold"
            >+91 9322296990</a
          >
        </p>
      </div>

      <h2 class="text-3xl font-bold mb-6">FAQs - Crane Rental in Kalamboli</h2>
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
        <h2 class="text-3xl font-bold mb-4">Book a Crane in Kalamboli Today</h2>
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
      name: "Navi Mumbai",
      item: "https://www.sainilifters.com/crane-rental/navi-mumbai",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kalamboli",
      item: "https://www.sainilifters.com/crane-rental/kalamboli",
    },
  ],
};

useHead({
  title: "Crane on Rent in Kalamboli | Saini Lifters - Navi Mumbai",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Kalamboli, Navi Mumbai. Saini Lifters is based in Kalamboli - fastest deployment. Mobile cranes, hydra, manlift & more. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in kalamboli, crane rental kalamboli, crane hire kalamboli navi mumbai, hydra crane kalamboli",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/kalamboli",
    },
    {
      property: "og:title",
      content: "Crane on Rent in Kalamboli | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane on rent in Kalamboli. Saini Lifters is based in Kalamboli - fastest crane deployment. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/kalamboli",
    },
  ],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(breadcrumbSchema) },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Saini Lifters Crane Service — Kalamboli",
        "telephone": "+91-9322296990",
        "url": "https://www.sainilifters.com/crane-rental/kalamboli",
        "address": { "@type": "PostalAddress", "streetAddress": "Plot No. J-854, Steel Market Rd, Sector AWC", "addressLocality": "Kalamboli", "addressRegion": "Navi Mumbai, Maharashtra", "postalCode": "410218", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": 19.0319, "longitude": 73.1042 },
        "areaServed": "Kalamboli",
        "openingHours": "Mo-Su 00:00-24:00",
        "priceRange": "$$"
      }),
    },
  ],
});

const services = [
  {
    name: "Mobile Crane Rental in Kalamboli",
    desc: "XCMG and Grove mobile cranes deployed same-day from our Kalamboli yard.",
  },
  {
    name: "Hydra Crane in Kalamboli",
    desc: "8T–14T hydra cranes for factory operations and industrial lifts in Kalamboli Steel Market area.",
  },
  {
    name: "Manlift Rental in Kalamboli",
    desc: "Boom lifts (30–185 ft) for construction and maintenance work in Kalamboli.",
  },
  {
    name: "Reach Stacker in Kalamboli",
    desc: "45T reach stackers for container and logistics operations in Kalamboli.",
  },
];

const faqs = [
  {
    q: "Where is Saini Lifters located in Kalamboli?",
    a: "Saini Lifters is located at Plot No. J-854, Steel Market Rd, Sector AWC, Kalamboli, Panvel, Navi Mumbai 410218.",
  },
  {
    q: "Can I get a crane on rent in Kalamboli today?",
    a: "Yes - since our yard is in Kalamboli, we can often deploy a crane on the same day for local requirements. Call +91 9322296990 to check availability.",
  },
  {
    q: "What is the minimum hire duration for a crane in Kalamboli?",
    a: "The minimum hire duration is one day (8 or 12 hours). We also offer weekly and monthly rates at discounted pricing.",
  },
];
</script>
