<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Crane Rental Odisha</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Crane on Rent in <span class="text-[#FF4057]">Odisha</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides crane rental services across Odisha for steel
          plants, port construction, power projects and industrial lifting.
          Mobile cranes, hydra cranes, all-terrain cranes and manlifts available
          across Bhubaneswar, Cuttack, Rourkela, Paradip, Jharsuguda and
          surrounding industrial areas.
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
      <h2 class="text-3xl font-bold mb-6">Crane Rental Services in Odisha</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg">
        Odisha is one of India's most industrially active states - home to major
        steel plants (SAIL Rourkela Steel Plant, Tata Steel, JSW), Paradip Port
        (one of India's largest cargo ports), NALCO aluminium operations at
        Angul, several thermal power plants at Talcher and Jharsuguda, and rapid
        highway and bridge construction under government infrastructure
        programmes. All of these sectors require heavy crane and lifting
        equipment support for equipment erection, maintenance and civil
        construction.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Saini Lifters deploys cranes to Odisha for large-scale projects. Our
        modern XCMG all-terrain crane fleet (160T–300T), crawler cranes
        (80T–400T), hydra cranes and manlifts are available for mobilisation
        across the state. We transport equipment from our Navi Mumbai base to
        any Odisha project site with certified operators and full safety support
        including lift planning and rigging.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        Key industrial clusters in Odisha that regularly require crane support
        include: Rourkela (SAIL steel plant and associated industries), Angul
        (NALCO aluminium, thermal power), Jharsuguda (power plants, industrial
        area), Paradip Port (port machinery, jetty construction), Dhenkanal and
        Sambalpur (cement, power), and Bhubaneswar (infrastructure, commercial
        construction). We have experience deploying heavy all-terrain cranes and
        crawler cranes to all of these locations.
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

      <h2 class="text-3xl font-bold mb-4">Key Project Types in Odisha</h2>
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
        Why Choose Saini Lifters for Crane Rental in Odisha?
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
            Deployment capability from Navi Mumbai base
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

      <h2 class="text-3xl font-bold mb-4">Areas We Serve in Odisha</h2>
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

      <h2 class="text-3xl font-bold mb-4">FAQs - Crane Rental in Odisha</h2>
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
        <h2 class="text-3xl font-bold mb-4">Book Crane on Rent in Odisha</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Call or WhatsApp us to discuss mobilisation to your Odisha project
          site. We provide competitive rates for pan-India deployments.
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
    "Crane on Rent in Odisha | Mobile Crane Rental Bhubaneswar | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Crane on rent in Odisha - mobile cranes, hydra cranes, all-terrain cranes for steel plants, ports and power projects. Serving Bhubaneswar, Rourkela, Paradip, Jharsuguda. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent in odisha, crane rental bhubaneswar, mobile crane rental rourkela, crane hire paradip, crane rental jharsuguda, heavy lifting odisha",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/crane-rental/odisha",
    },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    {
      property: "og:title",
      content: "Crane on Rent in Odisha | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane rental in Odisha - mobile cranes, hydra, all-terrain for steel, port & power projects. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/crane-rental/odisha",
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
            name: "Crane Rental Odisha",
            item: "https://www.sainilifters.com/crane-rental/odisha",
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Crane Rental in Odisha",
        provider: {
          "@type": "Organization",
          name: "Saini Lifters Crane Service",
          telephone: "+91-9322296990",
        },
        areaServed: "Odisha",
        url: "https://www.sainilifters.com/crane-rental/odisha",
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
            name: "Can Saini Lifters deploy cranes to Odisha from Navi Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Saini Lifters regularly deploys cranes pan-India, including Odisha. We transport our all-terrain cranes and crawler cranes on lowbed trailers to project sites across the state. Call +91 9322296990 to discuss mobilisation.",
            },
          },
          {
            "@type": "Question",
            name: "What types of cranes are suitable for steel plant work in Odisha?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Steel plant erection typically requires crawler cranes (100T–400T) for structural and boiler work, XCMG all-terrain cranes (160T–300T) for equipment erection, and hydra cranes for maintenance. Saini Lifters provides all of these for Odisha steel plants.",
            },
          },
          {
            "@type": "Question",
            name: "Do you serve Paradip Port and power plants in Jharsuguda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Saini Lifters has deployed equipment for port-related heavy lifts near Paradip and for thermal power plant projects in Jharsuguda and Talcher. Contact +91 9322296990 to discuss your project.",
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
    desc: "XCMG QAY160/200/300 for heavy industrial and infrastructure lifts across Odisha.",
    capacity: "160T–300T",
  },
  {
    name: "Crawler Crane Rental",
    desc: "For steel plant erection, power plant work and bridge construction projects in Odisha.",
    capacity: "80T–400T",
  },
  {
    name: "Mobile Crane Rental",
    desc: "Grove GMK90 and similar mobile cranes for medium-capacity lifting across Odisha.",
    capacity: "50T–90T",
  },
  {
    name: "Hydra Crane Rental",
    desc: "Pick-and-carry cranes for factory operations and industrial maintenance in Odisha.",
    capacity: "8T–14T",
  },
];

const projects = [
  "Steel plant equipment erection (SAIL, Tata, JSW, Nalco)",
  "Paradip Port crane and equipment work",
  "Thermal power plant boiler erection",
  "Bridge and highway construction",
  "Refinery and petrochemical plant projects",
  "Industrial machinery installation",
  "Odisha airport infrastructure projects",
  "Coal handling plant equipment",
];

const areas = [
  "Bhubaneswar",
  "Cuttack",
  "Rourkela",
  "Paradip",
  "Jharsuguda",
  "Angul",
  "Sambalpur",
  "Berhampur",
  "Talcher",
  "Dhenkanal",
  "Kendujhar (Keonjhar)",
  "Sundargarh",
];

const faqs = [
  {
    q: "Can Saini Lifters deploy cranes to Odisha from Navi Mumbai?",
    a: "Yes. Saini Lifters regularly deploys cranes pan-India, including Odisha. We transport our all-terrain cranes and crawler cranes on lowbed trailers to project sites across the state. Call +91 9322296990 to discuss mobilisation timelines and rates.",
  },
  {
    q: "What types of cranes are suitable for steel plant work in Odisha?",
    a: "Steel plant erection typically requires crawler cranes (100T–400T) for structural steel and boiler work, XCMG all-terrain cranes (160T–300T) for equipment erection, and hydra cranes for maintenance operations. Saini Lifters provides all of these for steel plants in Rourkela, Angul and other Odisha locations.",
  },
  {
    q: "Do you serve Paradip Port and power plants in Jharsuguda?",
    a: "Yes. Saini Lifters has deployed equipment for port-related heavy lifts near Paradip and for thermal power plant projects in Jharsuguda and Talcher. Contact us at +91 9322296990 to discuss your specific project requirements.",
  },
];
</script>
