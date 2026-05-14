<template>
  <div class="min-h-screen mt-[70px]">
    <!-- Breadcrumb -->
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crane Rental Navi Mumbai</span>
    </nav>

    <!-- Hero -->
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters is the leading crane rental company in Navi Mumbai. Searching for <strong>crane on rent near me</strong>? Our Kalamboli yard is minutes from most Navi Mumbai project sites. We provide mobile cranes, hydra cranes, manlifts, boom lifts, reach stackers, container stackers and all-terrain cranes for construction, industrial and port projects across Navi Mumbai.
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
            Get Free Quote
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="max-w-5xl mx-auto px-4 py-16">
      <div class="prose dark:prose-invert max-w-none">
        <h2 class="text-3xl font-bold mb-6">
          Crane Rental Services Available in Navi Mumbai
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          Navi Mumbai is one of the fastest-growing industrial and
          infrastructure hubs in Maharashtra. From JNPT port operations to
          Kharghar construction sites, from Belapur industrial zones to Airoli
          factories - heavy lifting is at the heart of every major project here.
          Saini Lifters has been serving Navi Mumbai with reliable crane rental
          since 2001.
        </p>

        <div class="grid md:grid-cols-2 gap-8 my-10">
          <div
            v-for="service in services"
            :key="service.name"
            class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
          >
            <h3 class="font-bold text-xl mb-2 text-[#FF4057]">
              {{ service.name }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-3">
              {{ service.desc }}
            </p>
            <p class="text-sm font-semibold">
              Capacity:
              <span class="text-[#FF4057]">{{ service.capacity }}</span>
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-4 mt-10">
          Areas We Serve in Navi Mumbai
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters provides crane on rent across all nodes and sectors of
          Navi Mumbai including:
        </p>
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
          <li
            v-for="area in navimumbaiAreas"
            :key="area"
            class="flex items-center gap-2 text-gray-600 dark:text-gray-300"
          >
            <span
              class="w-2 h-2 rounded-full bg-[#FF4057] flex-shrink-0"
            ></span>
            {{ area }}
          </li>
        </ul>

        <h2 class="text-3xl font-bold mb-4">
          Why Choose Saini Lifters in Navi Mumbai?
        </h2>
        <ul class="space-y-3 mb-8">
          <li
            v-for="point in whyUs"
            :key="point"
            class="flex items-start gap-3 text-gray-600 dark:text-gray-300"
          >
            <span
              class="mt-1 w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs"
              >✓</span
            >
            {{ point }}
          </li>
        </ul>

        <h2 class="text-3xl font-bold mb-6">
          Frequently Asked Questions - Crane Rental in Navi Mumbai
        </h2>
        <div class="space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.q"
            class="border-b border-gray-200 dark:border-zinc-700 pb-4"
          >
            <h3 class="font-bold mb-2">{{ faq.q }}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">
          Ready to Book a Crane in Navi Mumbai?
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-8">
          Call us now or send an enquiry. We respond within 1 hour during
          business hours.
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
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Saini Lifters Crane Service",
  telephone: "+91-9322296990",
  email: "charanjit@sainilifters.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. J-854, Steel Market Rd, Sector AWC",
    addressLocality: "Kalamboli",
    addressRegion: "Navi Mumbai, Maharashtra",
    postalCode: "410218",
    addressCountry: "IN",
  },
  areaServed: "Navi Mumbai",
  url: "https://www.sainilifters.com/crane-rental/navi-mumbai",
};

useHead({
  title: "Crane on Rent in Navi Mumbai | Saini Lifters - Call Now",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Navi Mumbai - mobile cranes, hydra, manlift, boom lift, reach stacker & all-terrain cranes. Saini Lifters, serving Navi Mumbai since 2001. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in navi mumbai, crane rental navi mumbai, crane hire navi mumbai, mobile crane navi mumbai, hydra crane navi mumbai, manlift navi mumbai, boom lift navi mumbai, all terrain crane navi mumbai",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/navi-mumbai",
    },
    {
      property: "og:title",
      content: "Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane on rent in Navi Mumbai - mobile cranes, hydra, manlift, reach stacker & all-terrain cranes. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/navi-mumbai",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(localBusinessSchema),
    },
  ],
});

const services = [
  {
    name: "Mobile Crane Rental",
    desc: "High-capacity mobile cranes for construction, industrial and infrastructure projects across Navi Mumbai.",
    capacity: "90T – 300T",
  },
  {
    name: "Hydra Crane Rental",
    desc: "Pick-and-carry hydra cranes for factory operations, tight-space lifts and industrial zones in Navi Mumbai.",
    capacity: "8T – 14T",
  },
  {
    name: "Manlift / Boom Lift",
    desc: "Articulating and telescopic boom lifts for working at height in factories, warehouses and construction sites.",
    capacity: "30 ft – 185 ft",
  },
  {
    name: "All-Terrain Crane",
    desc: "XCMG QAY series all-terrain cranes for heavy bridge and infrastructure projects in Navi Mumbai.",
    capacity: "160T – 300T",
  },
  {
    name: "Reach Stacker",
    desc: "Container reach stackers for port operations and logistics yards near JNPT, Navi Mumbai.",
    capacity: "45T",
  },
  {
    name: "Crawler Crane",
    desc: "Heavy crawler cranes for civil engineering, power plants and large-scale construction in Navi Mumbai.",
    capacity: "80T – 400T",
  },
];

const navimumbaiAreas = [
  "Panvel",
  "Kalamboli",
  "Kharghar",
  "Belapur",
  "Airoli",
  "Nerul",
  "Vashi",
  "Turbhe",
  "Ghansoli",
  "Kopar Khairane",
  "Sanpada",
  "JNPT",
  "Ulwe",
  "Dronagiri",
  "Taloja",
  "Rabale",
  "CBD Belapur",
  "Seawoods",
];

const whyUs = [
  "Established in 2001 - over 20 years of crane rental experience in Navi Mumbai",
  "Modern XCMG QAY160, QAY200, QAY300 and Grove GMK90 fleet",
  "Certified and experienced crane operators included with every rental",
  "Available 24/7 - rapid mobilisation within 24-48 hours across Navi Mumbai",
  "Competitive daily, weekly and monthly rates with no hidden charges",
  "Experienced in bridge construction, port operations, factory setups and civil engineering",
  "Base located in Kalamboli - central access to all Navi Mumbai nodes",
];

const faqs = [
  {
    q: "How much does crane rental cost in Navi Mumbai?",
    a: "Crane rental rates in Navi Mumbai vary by equipment type. Hydra cranes cost ₹4,000–₹8,000/day, mobile cranes ₹20,000–₹50,000/day, and all-terrain cranes are priced on project basis. Contact Saini Lifters at +91 9322296990 for an accurate quote.",
  },
  {
    q: "Which cranes are available on rent in Navi Mumbai?",
    a: "Saini Lifters offers mobile cranes (90T–300T), hydra cranes (8T–14T), all-terrain cranes (XCMG QAY series), manlifts (30–185 ft), reach stackers, container stackers, side shifters, crawler cranes and pick-and-carry (farana) cranes.",
  },
  {
    q: "Do you provide crane operators in Navi Mumbai?",
    a: "Yes, all crane rentals from Saini Lifters include certified and experienced operators trained in safety protocols and heavy lifting operations.",
  },
  {
    q: "How quickly can a crane be deployed in Navi Mumbai?",
    a: "Saini Lifters can typically mobilise a crane within 24-48 hours anywhere in Navi Mumbai. For urgent requirements, same-day deployment may be possible based on fleet availability.",
  },
  {
    q: "What areas in Navi Mumbai do you cover?",
    a: "We cover all of Navi Mumbai including Panvel, Kalamboli, Kharghar, Belapur, Airoli, Vashi, Turbhe, Nerul, Ghansoli, Ulwe, Dronagiri, Taloja, JNPT and all surrounding industrial zones.",
  },
];
</script>
