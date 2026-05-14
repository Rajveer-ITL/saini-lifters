<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crane Rental Madhya Pradesh</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Madhya Pradesh</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides crane rental services across Madhya Pradesh for
          steel plants, cement plants, power projects and large infrastructure
          works. Mobile cranes, hydra cranes, all-terrain cranes and crawler
          cranes available for mobilisation to Indore, Bhopal, Jabalpur,
          Pithampur, Mandideep, Ratlam, Ujjain and all industrial areas.
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
        Crane Rental Services in Madhya Pradesh
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
        Madhya Pradesh is one of India's fastest-growing industrial states, home
        to large cement manufacturing clusters (ACC, UltraTech, Ambuja in Satna
        and Katni), thermal power stations (Singrauli, Vindhyachal - among the
        largest in India), defence production units (Ordnance Factory Board at
        Jabalpur, DRDO), and significant highway and bridge construction under
        NHAI's national highway expansion. The state's Pithampur (near Indore)
        and Mandideep (near Bhopal) are major industrial areas hosting hundreds
        of manufacturing units that regularly need crane support.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Saini Lifters deploys cranes to Madhya Pradesh for large-scale projects.
        Our XCMG all-terrain crane fleet (160T–300T), crawler cranes (80T–400T),
        hydra cranes and manlifts are available for mobilisation across the
        state. We transport equipment from our Navi Mumbai base by road to any
        MP project site with certified operators, lift planning documentation
        and full safety support.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Key project areas in Madhya Pradesh where Saini Lifters deploys include:
        Pithampur industrial area for factory equipment installation, Indore for
        construction and infrastructure projects, Bhopal and Mandideep MIDC for
        industrial plant work, Singrauli for power plant equipment erection,
        Satna and Katni for cement plant maintenance and expansion, and Jabalpur
        for defence and civil construction projects.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="service in services"
          :key="service.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">
            {{ service.name }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-2">
            {{ service.desc }}
          </p>
          <p class="text-sm font-semibold">
            Capacity: <span class="text-[#FF4057]">{{ service.capacity }}</span>
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">
        Key Project Types in Madhya Pradesh
      </h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-10">
        <li
          v-for="pt in projects"
          :key="pt"
          class="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs"
            >✓</span
          >{{ pt }}
        </li>
      </ul>

      <h2 class="text-3xl font-bold mb-4">
        Why Choose Saini Lifters for Crane Rental in Madhya Pradesh?
      </h2>
      <div class="grid md:grid-cols-3 gap-4 mb-10">
        <div
          class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl text-center"
        >
          <p class="text-2xl font-bold text-[#FF4057]">25+</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Years of heavy lifting experience
          </p>
        </div>
        <div
          class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl text-center"
        >
          <p class="text-2xl font-bold text-[#FF4057]">Pan-India</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Deployment from Navi Mumbai base
          </p>
        </div>
        <div
          class="p-5 border border-gray-200 dark:border-zinc-700 rounded-xl text-center"
        >
          <p class="text-2xl font-bold text-[#FF4057]">Certified</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Operators with safety training and experience
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">Areas We Serve in Madhya Pradesh</h2>
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

      <h2 class="text-3xl font-bold mb-4">
        FAQs - Crane Rental in Madhya Pradesh
      </h2>
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
          Book Crane on Rent in Madhya Pradesh
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Call or WhatsApp us to discuss mobilisation to your Madhya Pradesh
          project site. We provide competitive rates for pan-India deployments.
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
  title:
    "Crane on Rent in Madhya Pradesh | Mobile Crane Rental Indore Bhopal | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Madhya Pradesh - mobile cranes, hydra cranes, all-terrain cranes for steel plants, cement plants and power projects. Serving Indore, Bhopal, Jabalpur, Pithampur, Mandideep. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in madhya pradesh, crane rental indore, mobile crane rental bhopal, crane hire jabalpur, crane rental pithampur, heavy lifting madhya pradesh",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/madhya-pradesh",
    },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    {
      property: "og:title",
      content: "Crane on Rent in Madhya Pradesh | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane rental in Madhya Pradesh - mobile cranes, hydra, all-terrain for steel, cement & power projects. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/madhya-pradesh",
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
            name: "Crane Rental Madhya Pradesh",
            item: "https://www.sainilifters.com/crane-rental/madhya-pradesh",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Crane Rental in Madhya Pradesh",
        provider: {
          "@type": "Organization",
          name: "Saini Lifters Crane Service",
          telephone: "+91-9322296990",
        },
        areaServed: "Madhya Pradesh",
        url: "https://www.sainilifters.com/crane-rental/madhya-pradesh",
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
            name: "Can Saini Lifters deploy cranes to Madhya Pradesh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Saini Lifters deploys cranes pan-India, including Madhya Pradesh. We transport all-terrain and crawler cranes from our Navi Mumbai base to any project site in MP. Call +91 9322296990 for mobilisation details.",
            },
          },
          {
            "@type": "Question",
            name: "What cranes are best for cement plant and power plant projects in MP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Crawler cranes (100T–400T) suit cement kiln and boiler erection. XCMG all-terrain cranes (160T–300T) handle transformer and heavy equipment installation. Hydra cranes work for plant maintenance. Saini Lifters provides all these for MP projects.",
            },
          },
          {
            "@type": "Question",
            name: "Do you serve Pithampur and Mandideep industrial areas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Saini Lifters serves Pithampur (near Indore), Mandideep (near Bhopal), Singrauli, Satna, Katni and all major MP industrial areas. Call +91 9322296990 to discuss your specific project requirements.",
            },
          },
        ],
      }),
    },
  ],
});

const services = [
  {
    name: "All-Terrain Crane Rental",
    desc: "XCMG QAY160/200/300 for heavy industrial and infrastructure lifts across Madhya Pradesh.",
    capacity: "160T–300T",
  },
  {
    name: "Crawler Crane Rental",
    desc: "For steel plant erection, power plant work and bridge construction projects in Madhya Pradesh.",
    capacity: "80T–400T",
  },
  {
    name: "Mobile Crane Rental",
    desc: "Grove GMK90 and similar mobile cranes for medium-capacity lifting across Madhya Pradesh.",
    capacity: "50T–90T",
  },
  {
    name: "Hydra Crane Rental",
    desc: "Pick-and-carry cranes for factory operations and industrial maintenance in Madhya Pradesh.",
    capacity: "8T–14T",
  },
];

const projects = [
  "Steel plant equipment erection and maintenance",
  "Cement plant kiln and equipment installation",
  "Thermal power plant boiler and turbine erection",
  "Bridge and highway construction (NHAI projects)",
  "Defence production unit heavy lifts",
  "Industrial machinery installation (Pithampur, Mandideep)",
  "Transformer and substation installation",
  "Coal handling plant equipment erection",
];

const areas = [
  "Indore",
  "Bhopal",
  "Jabalpur",
  "Gwalior",
  "Ujjain",
  "Pithampur",
  "Mandideep",
  "Ratlam",
  "Sagar",
  "Satna",
  "Rewa",
  "Katni",
  "Singrauli",
  "Dewas",
  "Hoshangabad (Narmadapuram)",
  "Chhindwara",
];

const faqs = [
  {
    q: "Can Saini Lifters deploy cranes to Madhya Pradesh?",
    a: "Yes. Saini Lifters deploys cranes pan-India, including Madhya Pradesh. We transport our all-terrain and crawler cranes by road from our Navi Mumbai base to project sites across MP. Call +91 9322296990 to discuss mobilisation timelines and competitive rates.",
  },
  {
    q: "What cranes are best for cement plant and power plant projects in MP?",
    a: "Crawler cranes (100T–400T) are ideal for cement plant kiln erection and power plant boiler work. XCMG all-terrain cranes (160T–300T) suit transformer installation and equipment erection. Hydra cranes work well for plant maintenance. Saini Lifters provides all of these for MP projects.",
  },
  {
    q: "Do you serve industrial areas like Pithampur and Mandideep?",
    a: "Yes. Saini Lifters serves all major industrial areas in MP including Pithampur (near Indore), Mandideep (near Bhopal), Singrauli power plant area and Satna/Katni cement belt. Call +91 9322296990 to discuss your specific project.",
  },
];
</script>
