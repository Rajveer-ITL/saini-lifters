<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink
      ><span class="mx-2">/</span>
      <span>Crawler Crane Rental</span>
    </nav>
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Crawler Crane on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides crawler crane rental in Navi Mumbai and across
          Maharashtra for bridge construction, power plants, dam projects and
          large civil engineering work. 80T to 400T capacity with certified
          operators.
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
          src="/image/eq-crawler-crane.png"
          alt="Crawler crane rental in Navi Mumbai – heavy lift crawler crane from Saini Lifters"
          class="w-full h-auto max-h-[480px] object-contain p-4 bg-gray-50 dark:bg-zinc-800"
          loading="eager"
        />
      </div>
    </div>
    <section class="max-w-5xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold mb-6">Why Choose a Crawler Crane?</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4 text-lg">
        Crawler cranes operate on tracks instead of wheels, providing
        exceptional stability on soft or uneven ground and the ability to lift
        at full rated capacity without outriggers. They are the preferred choice
        for long-duration projects - particularly bridge construction, power
        plant erection and dam projects - where the crane needs to stay in
        position for weeks or months.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Unlike mobile cranes which must be repositioned and re-outriggered for
        each lift, a crawler crane can slew and travel with a suspended load
        (within its travel limits), making it more efficient for repetitive
        lifts such as placing precast bridge segments or erecting steel columns.
        The tracks also distribute the crane's weight over a larger area -
        critical for soft ground near river banks, coastal areas and reclaimed
        land around the Mumbai region.
      </p>
      <h2 class="text-3xl font-bold mb-6">
        Crawler vs Mobile Crane - Key Differences
      </h2>
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div class="border border-gray-200 dark:border-zinc-700 rounded-xl p-5">
          <h3 class="font-bold text-lg mb-3 text-[#FF4057]">
            Crawler Crane Advantages
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>✓ Full capacity without outriggers</li>
            <li>✓ Can travel with load suspended</li>
            <li>✓ Lower ground pressure via tracks</li>
            <li>✓ Ideal for long-duration site stays</li>
            <li>✓ Greater capacity at full boom extension</li>
          </ul>
        </div>
        <div class="border border-gray-200 dark:border-zinc-700 rounded-xl p-5">
          <h3 class="font-bold text-lg mb-3 text-[#FF4057]">
            Setup & Transport
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>✓ Transported on lowbed trailers</li>
            <li>✓ On-site assembly: 1–3 days depending on size</li>
            <li>✓ Requires level, prepared ground</li>
            <li>✓ Mats/pads provided for soft ground</li>
            <li>✓ Saini Lifters handles all transport & setup</li>
          </ul>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="model in models"
          :key="model.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl text-[#FF4057] mb-2">
            {{ model.name }}
          </h3>
          <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
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

      <h2 class="text-3xl font-bold mb-4">FAQs - Crawler Crane Rental</h2>
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
          Book Crawler Crane in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/equipment/crawler-crane"
            class="text-[#FF4057] hover:underline"
            >Full Crawler Specs</NuxtLink
          >
          |
          <NuxtLink
            to="/services/all-terrain-crane-rental"
            class="text-[#FF4057] hover:underline"
            >All-Terrain Crane</NuxtLink
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
  title: "Crawler Crane on Rent in Navi Mumbai | 80T–400T | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Crawler crane on rent in Navi Mumbai - 80T to 400T for bridge, power plant & civil projects. Certified operators. Call Saini Lifters: +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crawler crane rental navi mumbai, heavy crane on rent panvel, crawler crane hire maharashtra, 400 tonne crane rental",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/crawler-crane-rental",
    },
    {
      property: "og:title",
      content: "Crawler Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crawler crane on rent in Navi Mumbai. 80T–400T for bridge, power plant & civil projects. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/crawler-crane-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Crawler Crane Rental",
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
        url: "https://www.sainilifters.com/services/crawler-crane-rental",
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
            name: "Crawler Crane Rental",
            item: "https://www.sainilifters.com/services/crawler-crane-rental",
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
            name: "What is a crawler crane and when should I use one?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A crawler crane runs on tracks instead of wheels, giving it exceptional stability on soft or uneven ground. Use a crawler crane when you need a large-capacity crane (80T–400T) to stay on site for a long duration - bridge construction, power plant erection or dam projects - and when the ground conditions won't support a wheeled mobile crane.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to set up a crawler crane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Setup time depends on the crane size: smaller 80T–100T crawlers take 1 day to assemble; larger 260T–400T cranes can take 2–3 days. Saini Lifters handles all transport, lowbed delivery and on-site assembly with our own crew.",
            },
          },
          {
            "@type": "Question",
            name: "Can crawler cranes operate outside Maharashtra?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Saini Lifters deploys crawler cranes pan-India, including Odisha (steel plants, power projects), Madhya Pradesh (cement plants, bridge construction) and other states. Call +91 9322296990 to discuss mobilisation to your project site.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a crawler crane and a mobile crane?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A crawler crane travels on tracks (no outriggers needed), can carry a suspended load while moving, and applies lower ground pressure - ideal for soft ground. A mobile crane travels faster on roads but needs outriggers and firm ground for each lift. Mobile cranes suit projects with many locations; crawler cranes suit one location with many repeated lifts.",
            },
          },
        ],
      }),
    },
  ],
});
const models = [
  {
    name: "Crawler Crane 400T",
    specs: [
      "Capacity: 400 Tonnes",
      "Boom reach: 140m",
      "Ideal for mega projects",
      "On-site mobility via crawler tracks",
    ],
  },
  {
    name: "Crawler Crane 260T",
    specs: [
      "Capacity: 260 Tonnes",
      "Composite boom: 62+42m",
      "Bridge segment erection",
      "Power plant projects",
    ],
  },
  {
    name: "Crawler Crane 100T",
    specs: [
      "Capacity: 100 Tonnes",
      "Boom: 52m + 18m JIB",
      "Civil engineering projects",
      "All terrain stability",
    ],
  },
  {
    name: "Crawler Crane 80T",
    specs: [
      "Capacity: 80 Tonnes",
      "Boom: 48m + 18m JIB",
      "Medium civil projects",
      "Compact crawler footprint",
    ],
  },
];
const applications = [
  "Bridge construction across Navi Mumbai & Raigad",
  "Power plant equipment erection",
  "Dam and water project construction",
  "High-tension pylon erection",
  "Refinery and petrochemical plants",
  "Metro rail infrastructure",
  "Jetty and port construction",
  "Heavy machinery installation in industrial plants",
];

const faqs = [
  {
    q: "What is a crawler crane and when should I use one?",
    a: "A crawler crane runs on tracks for exceptional stability on soft or uneven ground without outriggers. It's the right choice when you need high capacity (80T–400T) on site for weeks or months - bridge construction, power plant erection, dam work - and when ground conditions won't support a wheeled crane.",
  },
  {
    q: "How long does it take to set up a crawler crane?",
    a: "Smaller 80T–100T crawlers assemble in 1 day; larger 260T–400T cranes take 2–3 days. Saini Lifters manages all lowbed transport and on-site assembly with our own crew - you don't need to arrange anything separately.",
  },
  {
    q: "What is the difference between a crawler crane and a mobile crane?",
    a: "A crawler crane uses tracks (no outriggers), can carry a load while moving, and applies lower ground pressure - ideal for soft ground, repeated lifts at one location. A mobile crane travels faster on roads but needs firm ground and outrigger setup for each lift. Mobile suits multi-location projects; crawler suits sustained heavy lifting in one spot.",
  },
  {
    q: "Do you deploy crawler cranes outside Maharashtra?",
    a: "Yes. Saini Lifters deploys crawler cranes pan-India - Odisha (steel plants, power projects), Madhya Pradesh (cement plants, bridge work) and more. Call +91 9322296990 to discuss mobilisation to your state.",
  },
];
</script>
