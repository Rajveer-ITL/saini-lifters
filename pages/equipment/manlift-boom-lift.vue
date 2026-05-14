<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink to="/equipment" class="hover:text-[#FF4057]"
        >Equipment</NuxtLink
      >
      <span class="mx-2">/</span>
      <span>Manlift & Boom Lift</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Manlift &amp; Boom Lift on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span>
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides telescopic boom lifts (up to 185ft),
          articulated boom lifts (60ft–120ft) and scissor lifts (19ft–50ft
          electric &amp; diesel) on rent in Navi Mumbai, Panvel and Kalamboli.
          Available 24/7 for high-rise construction, industrial maintenance,
          painting and electrical work.
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

    <section class="max-w-5xl mx-auto px-4 py-12">
      <!-- Articulated Boom Lift -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-1 h-8 bg-[#FF4057] rounded-full"></div>
          <h2 class="text-2xl md:text-3xl font-bold">Articulated Boom Lift</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div
            class="rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
          >
            <img
              src="/image/eq-articulated-boomlift.png"
              alt="Articulated boom lift / knuckle boom lift on rent in Navi Mumbai"
              class="w-full h-64 object-contain p-4"
              loading="eager"
            />
          </div>
          <div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Articulated boom lifts (knuckle booms) can reach over and around
              obstacles - ideal for complex access situations. Their
              articulating arm can position the platform horizontally even in
              tight spaces.
            </p>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Platform Height</span
                ><span class="font-semibold">60ft – 120ft</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase">Power</span
                ><span class="font-semibold">Diesel</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase">Reach</span
                ><span class="font-semibold">Up to 25m horizontal</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Capacity</span
                ><span class="font-semibold">230–500 kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Telescopic Boom Lift -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-1 h-8 bg-[#FF4057] rounded-full"></div>
          <h2 class="text-2xl md:text-3xl font-bold">
            Telescopic Boom Lift (Straight Boom / Manlift)
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div
            class="rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
          >
            <img
              src="/image/eq-telescopic-boomlift.png"
              alt="Telescopic boom lift / manlift 185ft on rent in Navi Mumbai"
              class="w-full h-64 object-contain p-4"
              loading="lazy"
            />
          </div>
          <div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Telescopic (straight) boom lifts provide maximum height reach for
              working on high-rise facades, industrial structures and power
              infrastructure. Our 185ft boom lift is among the tallest available
              in Navi Mumbai.
            </p>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Platform Height</span
                ><span class="font-semibold">150ft & 185ft</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase">Power</span
                ><span class="font-semibold">Diesel / 4WD</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Horizontal Reach</span
                ><span class="font-semibold">Up to 24m</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Capacity</span
                ><span class="font-semibold">Up to 450 kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scissor Lift -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-1 h-8 bg-[#FF4057] rounded-full"></div>
          <h2 class="text-2xl md:text-3xl font-bold">
            Scissor Lift - Electric &amp; Diesel
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div
            class="rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
          >
            <img
              src="/image/eq-scissor-lift.png"
              alt="Scissor lift electric and diesel on rent in Navi Mumbai"
              class="w-full h-64 object-contain p-4"
              loading="lazy"
            />
          </div>
          <div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Scissor lifts provide a large, stable work platform for
              maintenance, installation and inspection tasks. Electric models
              are ideal for indoor factory and warehouse use (zero emissions).
              Diesel models for outdoor and rough terrain.
            </p>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Platform Height</span
                ><span class="font-semibold">19ft – 50ft</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase">Power</span
                ><span class="font-semibold">Electric & Diesel</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Platform Size</span
                ><span class="font-semibold">Up to 8m × 1.8m</span>
              </div>
              <div>
                <span class="text-gray-400 block text-xs uppercase"
                  >Capacity</span
                ><span class="font-semibold">Up to 1,000 kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">Applications</h2>
      <ul class="grid md:grid-cols-2 gap-3 mb-12">
        <li
          v-for="app in applications"
          :key="app"
          class="flex items-center gap-3 text-gray-600 dark:text-gray-300"
        >
          <span
            class="w-5 h-5 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 text-xs"
            >✓</span
          >
          {{ app }}
        </li>
      </ul>

      <!-- Why Rent Section -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6">
          Why Rent Aerial Work Platforms from Saini Lifters?
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters maintains a diverse fleet of aerial work platforms (AWP)
          - telescopic boom lifts, articulated boom lifts and scissor lifts - to
          cover every height access requirement in Navi Mumbai, Panvel and
          Kalamboli. Whether you need to reach a 56-metre chimney stack or
          maintain industrial lighting 6 metres above a factory floor, we have
          the right platform.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          All our manlifts are delivered with a certified operator, pre-delivery
          inspection certificate and safety harness. Our operators are trained
          in working at height protocols under Indian safety regulations -
          reducing your site's liability while ensuring the work gets done
          efficiently and safely.
        </p>
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden"
          >
            <thead class="bg-[#FF4057] text-white">
              <tr>
                <th class="p-3 text-left font-semibold">Platform Type</th>
                <th class="p-3 text-left font-semibold">Max Height</th>
                <th class="p-3 text-left font-semibold">Power</th>
                <th class="p-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-zinc-700">
              <tr class="bg-white dark:bg-zinc-800">
                <td class="p-3 font-medium">Telescopic Boom Lift</td>
                <td class="p-3">185ft (56m)</td>
                <td class="p-3">Diesel / 4WD</td>
                <td class="p-3">Chimneys, facades, high towers</td>
              </tr>
              <tr class="bg-gray-50 dark:bg-zinc-900">
                <td class="p-3 font-medium">Articulated Boom Lift</td>
                <td class="p-3">120ft (36m)</td>
                <td class="p-3">Diesel</td>
                <td class="p-3">Over-obstacle access, complex reach</td>
              </tr>
              <tr class="bg-white dark:bg-zinc-800">
                <td class="p-3 font-medium">Electric Scissor Lift</td>
                <td class="p-3">50ft (15m)</td>
                <td class="p-3">Electric</td>
                <td class="p-3">Indoor factory, warehouse, mall</td>
              </tr>
              <tr class="bg-gray-50 dark:bg-zinc-900">
                <td class="p-3 font-medium">Diesel Scissor Lift</td>
                <td class="p-3">50ft (15m)</td>
                <td class="p-3">Diesel</td>
                <td class="p-3">Outdoor rough terrain, construction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">
        FAQs - Manlift & Boom Lift Rental Navi Mumbai
      </h2>
      <div class="space-y-5 mb-12">
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
          Book Manlift or Boom Lift in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/manlift-rental"
            class="text-[#FF4057] hover:underline"
            >Manlift Rental Service</NuxtLink
          >
          |
          <NuxtLink
            to="/crane-rental/navi-mumbai"
            class="text-[#FF4057] hover:underline"
            >Crane Rental Navi Mumbai</NuxtLink
          >
          |
          <NuxtLink
            to="/equipment/all-terrain-crane"
            class="text-[#FF4057] hover:underline"
            >All Terrain Crane</NuxtLink
          >
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <a
            href="https://wa.me/919322296990?text=Hi%20I%20need%20manlift%20or%20boom%20lift%20on%20rent%20in%20Navi%20Mumbai"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >WhatsApp Us</a
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
    "Manlift & Boom Lift on Rent in Navi Mumbai | Telescopic, Articulated & Scissor | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Manlift & boom lift on rent in Navi Mumbai - telescopic boom lifts up to 185ft, articulated boom lifts 60–120ft, scissor lifts 19–50ft (electric & diesel). Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "manlift on rent navi mumbai, boom lift rental navi mumbai, scissor lift on rent navi mumbai, telescopic boom lift navi mumbai, articulated boom lift rental navi mumbai, aerial work platform navi mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/equipment/manlift-boom-lift",
    },
    {
      property: "og:title",
      content:
        "Manlift & Boom Lift on Rent in Navi Mumbai | Telescopic, Articulated & Scissor",
    },
    {
      property: "og:description",
      content:
        "Manlift and boom lift on rent in Navi Mumbai. Telescopic up to 185ft, articulated 60–120ft, scissor 19–50ft. Call +91 9322296990.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-articulated-boomlift.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/equipment/manlift-boom-lift",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Manlift & Boom Lift Rental",
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
        url: "https://www.sainilifters.com/equipment/manlift-boom-lift",
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
            name: "Equipment",
            item: "https://www.sainilifters.com/equipment",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Manlift & Boom Lift",
            item: "https://www.sainilifters.com/equipment/manlift-boom-lift",
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
            name: "What is the difference between an articulated and telescopic boom lift?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A telescopic (straight) boom lift extends in a straight line for maximum height reach - ideal for high facades and industrial chimneys. An articulated boom lift has a knuckle joint that lets it reach over and around obstacles, perfect for complex access situations.",
            },
          },
          {
            "@type": "Question",
            name: "Is an electric scissor lift safe for indoor factory use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - electric scissor lifts produce zero emissions and operate quietly, making them ideal for indoor factory, warehouse and mall environments. For outdoor rough terrain, we recommend diesel scissor lifts.",
            },
          },
          {
            "@type": "Question",
            name: "How high is a 185ft boom lift in metres?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A 185ft telescopic boom lift reaches approximately 56 metres (56m). This is among the tallest aerial work platforms available on rent in Navi Mumbai, suitable for high-rise facades, cooling towers and tall industrial structures.",
            },
          },
          {
            "@type": "Question",
            name: "What is the daily rental rate for a boom lift in Navi Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Boom lift rental rates in Navi Mumbai: scissor lift (19–50ft) ₹3,500–₹6,000/day; articulated boom lift (60–120ft) ₹8,000–₹15,000/day; telescopic boom lift at 185ft ₹18,000–₹28,000/day. Call Saini Lifters at +91 9322296990 for exact rates based on your project duration.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide a trained operator with boom lift rental?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - all Saini Lifters aerial work platform rentals include a trained and certified operator with working-at-height certification, experienced in HVAC, electrical, telecom and construction access work across Navi Mumbai and Panvel industrial zones.",
            },
          },
        ],
      }),
    },
  ],
});

const applications = [
  "High-rise building facade maintenance",
  "Industrial chimney and silo inspection",
  "Painting and waterproofing at height",
  "Electrical and telecom tower work",
  "Indoor factory and warehouse maintenance",
  "HVAC and MEP installation",
  "Steel structure inspection and repair",
  "Bridge deck and undercarriage inspection",
];

const faqs = [
  {
    q: "What is the difference between an articulated and telescopic boom lift?",
    a: "A telescopic boom extends straight for maximum height reach - ideal for high facades. An articulated boom has a knuckle joint that lets it reach over and around obstacles, perfect for complex access situations.",
  },
  {
    q: "Is an electric scissor lift safe for indoor factory use?",
    a: "Yes - electric scissor lifts produce zero emissions and operate quietly, ideal for indoor factory, warehouse and mall environments. For outdoor rough terrain, we recommend diesel scissor lifts.",
  },
  {
    q: "How high is a 185ft boom lift in metres?",
    a: "A 185ft telescopic boom lift reaches approximately 56 metres - among the tallest aerial work platforms available on rent in Navi Mumbai, suitable for high-rise facades, cooling towers and tall industrial structures.",
  },
  {
    q: "What is the daily rental rate for a boom lift in Navi Mumbai?",
    a: "Boom lift rental rates in Navi Mumbai depend on height and type. A diesel scissor lift (19–50ft) costs approximately ₹3,500–₹6,000 per day. An articulated boom lift (60–120ft) is ₹8,000–₹15,000 per day. A telescopic boom lift at 185ft is ₹18,000–₹28,000 per day. Call Saini Lifters at +91 9322296990 for exact rates based on your project duration and location.",
  },
  {
    q: "Do you provide a trained operator with boom lift rental?",
    a: "Yes - all Saini Lifters aerial work platform rentals include a trained and certified operator. Our operators hold working-at-height certifications and are experienced in HVAC, electrical, telecom and construction access work across Navi Mumbai and Panvel industrial zones.",
  },
];
</script>
