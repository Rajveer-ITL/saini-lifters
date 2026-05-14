<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/services" class="hover:text-[#FF4057]">Services</NuxtLink
      ><span class="mx-2">/</span>
      <span>Side Shifter Rental</span>
    </nav>
    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Side Shifter on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides side shifter rental in Navi Mumbai and Panvel
          for precise horizontal container positioning in terminals, warehouses
          and port logistics facilities. 20–40T capacity, experienced operators.
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
        Side Shifter - Specifications & Uses
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        A side shifter is a forklift attachment that allows horizontal movement
        of loads (side-to-side) without repositioning the entire machine. It's
        essential for precise container and pallet positioning in terminals and
        warehouses.
      </p>
      <p class="text-gray-600 dark:text-gray-300 mb-8">
        In busy port and container yard environments around JNPT, Nhava Sheva
        and Navi Mumbai logistics hubs, a side shifter dramatically reduces
        cycle times. Operators can fine-tune load placement within rows without
        reversing and repositioning - reducing the risk of damage and improving
        throughput significantly. Saini Lifters provides side shifters with
        trained, experienced operators who understand container yard protocols
        and safety requirements.
      </p>
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6">
          <h3 class="font-bold text-xl mb-4 text-[#FF4057]">Specifications</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>✓ Capacity: <strong>20–40 Tonnes</strong></li>
            <li>✓ Shift Range: <strong>±600 mm</strong></li>
            <li>✓ Operation: <strong>Hydraulic</strong></li>
            <li>✓ Compatible: <strong>20ft & 40ft containers</strong></li>
          </ul>
        </div>
        <div class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6">
          <h3 class="font-bold text-xl mb-4 text-[#FF4057]">Applications</h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>✓ Port terminal container positioning</li>
            <li>✓ Warehouse pallet handling</li>
            <li>✓ Container yard row alignment</li>
            <li>✓ Logistics hub operations</li>
            <li>✓ CFS (Container Freight Station) operations</li>
            <li>✓ Export cargo loading alignment</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">Where We Deploy Side Shifters</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Saini Lifters deploys side shifters across the JNPT corridor, Navi
        Mumbai container yards, Nhava Sheva CFS facilities, Panvel logistics
        parks and Raigad industrial estates. Our equipment is maintained to the
        highest standard and available for daily, weekly and monthly hire with
        or without an operator.
      </p>
      <div class="grid md:grid-cols-3 gap-4 mb-10">
        <div
          class="p-4 border border-gray-200 dark:border-zinc-700 rounded-xl text-center"
        >
          <p class="text-2xl font-bold text-[#FF4057]">JNPT Area</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Nhava Sheva, Uran, Dronagiri
          </p>
        </div>
        <div
          class="p-4 border border-gray-200 dark:border-zinc-700 rounded-xl text-center"
        >
          <p class="text-2xl font-bold text-[#FF4057]">Navi Mumbai</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Turbhe, Taloja, Panvel, Kalamboli
          </p>
        </div>
        <div
          class="p-4 border border-gray-200 dark:border-zinc-700 rounded-xl text-center"
        >
          <p class="text-2xl font-bold text-[#FF4057]">Raigad</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Patalganga, Roha, Khopoli MIDC
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-4">FAQs - Side Shifter Rental</h2>
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
          Book Side Shifter in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/equipment/side-shifter"
            class="text-[#FF4057] hover:underline"
            >Full Side Shifter Specs</NuxtLink
          >
          |
          <NuxtLink
            to="/equipment/reach-stacker"
            class="text-[#FF4057] hover:underline"
            >Reach Stacker</NuxtLink
          >
          |
          <NuxtLink
            to="/crane-rental/kalamboli"
            class="text-[#FF4057] hover:underline"
            >Crane Rental Kalamboli</NuxtLink
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
  title: "Side Shifter on Rent in Navi Mumbai | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Side shifter on rent in Navi Mumbai & Panvel. 20–40T capacity for container terminal and warehouse operations. Call Saini Lifters: +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "side shifter rental navi mumbai, side shifter on rent panvel, container side shifter navi mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/services/side-shifter-rental",
    },
    {
      property: "og:title",
      content: "Side Shifter on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Side shifter on rent in Navi Mumbai. 20–40T. Call +91 9322296990.",
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
      href: "https://www.sainilifters.com/services/side-shifter-rental",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Side Shifter Rental",
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
        url: "https://www.sainilifters.com/services/side-shifter-rental",
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
            name: "Side Shifter Rental",
            item: "https://www.sainilifters.com/services/side-shifter-rental",
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
            name: "What is a side shifter used for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A side shifter is a hydraulic forklift attachment used for precise horizontal positioning of containers and pallets - side-to-side movement without needing to reposition the forklift. It's widely used in container terminals, CFS facilities and warehouses.",
            },
          },
          {
            "@type": "Question",
            name: "What is the capacity of Saini Lifters' side shifters?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Saini Lifters' side shifters handle loads from 20 to 40 tonnes, compatible with standard 20ft and 40ft ISO containers.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide an operator with the side shifter rental?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Saini Lifters provides trained and experienced operators with all side shifter rentals. The operators are familiar with container yard protocols and port safety requirements.",
            },
          },
        ],
      }),
    },
  ],
});

const faqs = [
  {
    q: "What is a side shifter used for?",
    a: "A side shifter is a hydraulic attachment that allows horizontal load movement (side-to-side) without repositioning the forklift. It's essential for precise container alignment in terminals, CFS facilities and warehouses - significantly reducing cycle times and preventing load damage.",
  },
  {
    q: "What capacity side shifters does Saini Lifters provide?",
    a: "Our side shifters handle 20–40 tonne loads and are compatible with standard 20ft and 40ft ISO containers. They are suitable for both empty and fully loaded container operations.",
  },
  {
    q: "Is an operator included in the side shifter rental?",
    a: "Yes - Saini Lifters provides trained, experienced operators with all side shifter rentals. Operators are familiar with container yard protocols and port safety requirements. Bare hire (machine only) is also available on request.",
  },
];
</script>
