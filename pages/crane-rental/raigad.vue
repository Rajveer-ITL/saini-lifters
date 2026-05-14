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
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Raigad district is home to some of Maharashtra's most critical industrial corridors — Taloja MIDC, Patalganga MIDC, Khopoli MIDC, Pen industrial zone, and the growing JNPT port hinterland at Uran. These areas host petrochemical refineries, pharmaceutical plants, power transmission projects, automobile component manufacturers and large civil infrastructure projects that require heavy lifting solutions daily.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Saini Lifters is headquartered at Kalamboli, which falls within Raigad district — giving us the fastest mobilisation time for any crane rental requirement across Raigad. Our all terrain telescopic cranes, mobile cranes, hydra cranes and manlifts are available 24/7 for both short-duration and long-term project deployments.
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

      <!-- Industries served in Raigad -->
      <h2 class="text-3xl font-bold mb-4">Industries We Serve in Raigad</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Raigad's industrial base is diverse. Our crane and lifting solutions are used across the following sectors in the district:
      </p>
      <ul class="grid sm:grid-cols-2 gap-3 mb-10">
        <li
          v-for="ind in industries"
          :key="ind"
          class="flex items-center gap-3 text-gray-600 dark:text-gray-300"
        >
          <span class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs">✓</span>
          {{ ind }}
        </li>
      </ul>

      <!-- All terrain crane focus -->
      <div class="bg-gray-50 dark:bg-zinc-900/50 rounded-xl p-6 mb-10">
        <h2 class="text-2xl font-bold mb-3">All Terrain Telescopic Crane in Raigad</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-3">
          Raigad's infrastructure projects — including bridge construction along NH-66, power transmission tower erection and refinery plant maintenance — require high-capacity all terrain telescopic cranes. Our XCMG QAY160 (160T) and QAY300 (300T) cranes are available for Raigad deployments with quick mobilisation from our Kalamboli yard.
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          All terrain telescopic cranes are preferred in Raigad because they travel on public roads without trailer support and can reach heights of 78–90 metres main boom, making them ideal for power plant and bridge projects in Raigad's open industrial corridors.
        </p>
        <div class="mt-4">
          <NuxtLink
            to="/equipment/all-terrain-crane"
            class="inline-block text-[#FF4057] font-semibold hover:underline"
          >View All Terrain Crane Specifications →</NuxtLink>
        </div>
      </div>

      <!-- FAQs -->
      <h2 class="text-3xl font-bold mb-6">FAQs – Crane Rental in Raigad</h2>
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
  title: "Crane on Rent in Raigad | All Terrain Telescopic Crane | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Raigad district - Panvel, Taloja MIDC, Patalganga, Khopoli, Uran. All terrain telescopic cranes (160T–300T), mobile cranes, hydra, manlift. Based in Kalamboli. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in raigad, crane rental raigad, all terrain crane raigad, telescopic crane rental raigad, crane hire raigad district, mobile crane raigad, crane rental panvel raigad, crane taloja midc, crane patalganga midc",
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
    name: "All Terrain Telescopic Crane",
    desc: "XCMG QAY160 and QAY300 all terrain cranes for bridge, power plant and infrastructure projects in Raigad",
    capacity: "160T–300T",
  },
  {
    name: "Mobile Crane",
    desc: "All-terrain and mobile cranes for large construction projects across Raigad district",
    capacity: "90T–300T",
  },
  {
    name: "Hydra Crane",
    desc: "Pick-and-carry hydra cranes for factory and industrial operations at Taloja and Patalganga MIDC",
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
  {
    name: "Reach Stacker",
    desc: "Container and logistics equipment for JNPT hinterland and Uran port area operations",
    capacity: "45T",
  },
];

const industries = [
  "Petrochemical & Chemical Plants (Patalganga MIDC)",
  "Pharmaceutical & API Manufacturing (Taloja MIDC)",
  "Power Transmission & Substation Projects",
  "Bridge Construction (NH-66 Corridor)",
  "Automobile Component Manufacturing (Khopoli)",
  "Port & Logistics (JNPT, Uran, Dronagiri)",
  "Infrastructure & Civil Engineering",
  "Industrial Machinery Installation",
];

const faqs = [
  {
    q: "How quickly can a crane be mobilised in Raigad from Saini Lifters?",
    a: "Since our yard is in Kalamboli, which is within Raigad district itself, we can typically mobilise a crane to Panvel, Taloja MIDC or Patalganga within 2–4 hours. For Alibag, Pen or Mahad, mobilisation is typically within the same day. Call +91 9322296990 to confirm.",
  },
  {
    q: "Do you provide all terrain telescopic cranes in Raigad?",
    a: "Yes. Our XCMG QAY160 (160T) and QAY300 (300T) all terrain telescopic cranes are available for deployment across Raigad district for bridge, power plant, refinery and large infrastructure projects. These cranes travel on public roads and require no special transport, making them ideal for Raigad's industrial corridors.",
  },
  {
    q: "Which MIDC zones in Raigad do you cover?",
    a: "We regularly provide cranes at Taloja MIDC, Patalganga MIDC and Khopoli MIDC in Raigad. Our hydra cranes (8T–14T) are the most common choice for factory machine shifting within MIDC zones, while all terrain telescopic cranes are deployed for plant expansion and heavy equipment installation.",
  },
  {
    q: "What is the minimum hire period for crane rental in Raigad?",
    a: "The minimum hire period is one day (8 or 12-hour shift). Weekly and monthly rates are available for long-term Raigad project deployments at preferential pricing. Call +91 9322296990 for a project-specific quote.",
  },
];
</script>
