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
      <span>Side Shifter</span>
    </nav>

    <section class="relative py-20 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Side Shifter on Rent in
          <span class="text-[#FF4057]">Navi Mumbai</span> | 20T to 40T Container
          Handler
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Saini Lifters provides Kalmar side shifters on rent in Navi Mumbai and
          Kalamboli. Our 20T and 40T side-shifting container handlers reposition
          containers laterally with precision - essential for container freight
          stations, export cargo handling and tight yard operations near JNPT.
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
      <div
        class="w-full rounded-xl overflow-hidden mb-12 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
      >
        <img
          src="/image/eq-side-shifter.png"
          alt="Kalmar side shifter container handler on rent in Navi Mumbai"
          class="w-full h-auto object-contain max-h-[480px] mx-auto p-4"
          loading="eager"
        />
      </div>

      <h2 class="text-3xl font-bold mb-8">Side Shifter Specifications</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="item in specs"
          :key="item.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h3 class="font-bold text-xl mb-2 text-[#FF4057]">{{ item.name }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {{ item.desc }}
          </p>
          <div class="grid grid-cols-2 gap-3">
            <div v-for="s in item.data" :key="s.label" class="text-sm">
              <span
                class="text-gray-400 block text-xs uppercase tracking-wider"
                >{{ s.label }}</span
              >
              <span class="font-semibold">{{ s.value }}</span>
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
          Why Rent a Side Shifter for CFS and Export Container Operations?
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Container freight stations (CFS) and export cargo handlers near JNPT
          deal with a constant challenge: containers arrive in one position and
          need to be placed precisely in another - often in tight, congested
          yards where a reach stacker or crane cannot manoeuvre. The side
          shifter solves this with its lateral shifting head, repositioning
          containers left or right by up to 600mm without moving the machine's
          footprint.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Saini Lifters provides Kalmar side shifters in 20T and 40T capacity
          for CFS operations, export cargo staging, reefer container positioning
          and container terminal fine placement near JNPT. Both models handle
          20ft and 40ft ISO standard containers including refrigerated (reefer)
          units. Available with experienced operators who understand export
          documentation workflows and CFS timelines.
        </p>
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden"
          >
            <thead class="bg-[#FF4057] text-white">
              <tr>
                <th class="p-3 text-left font-semibold">Operation</th>
                <th class="p-3 text-left font-semibold">Side Shifter</th>
                <th class="p-3 text-left font-semibold">Reach Stacker</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-zinc-700">
              <tr class="bg-white dark:bg-zinc-800">
                <td class="p-3 font-medium">Lateral fine positioning</td>
                <td class="p-3 text-green-600 dark:text-green-400">
                  Specialist ✓
                </td>
                <td class="p-3">Limited</td>
              </tr>
              <tr class="bg-gray-50 dark:bg-zinc-900">
                <td class="p-3 font-medium">Stacking height</td>
                <td class="p-3">Ground level only</td>
                <td class="p-3 text-green-600 dark:text-green-400">
                  3 containers ✓
                </td>
              </tr>
              <tr class="bg-white dark:bg-zinc-800">
                <td class="p-3 font-medium">Tight CFS yards</td>
                <td class="p-3 text-green-600 dark:text-green-400">Ideal ✓</td>
                <td class="p-3">Less manoeuvrable</td>
              </tr>
              <tr class="bg-gray-50 dark:bg-zinc-900">
                <td class="p-3 font-medium">Reefer containers</td>
                <td class="p-3 text-green-600 dark:text-green-400">Yes ✓</td>
                <td class="p-3 text-green-600 dark:text-green-400">Yes ✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-3xl font-bold mb-6">
        FAQs - Side Shifter Rental Navi Mumbai
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
          Book Side Shifter in Navi Mumbai
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          Also see:
          <NuxtLink
            to="/services/side-shifter-rental"
            class="text-[#FF4057] hover:underline"
            >Side Shifter Service</NuxtLink
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
          <a
            href="https://wa.me/919322296990?text=Hi%20I%20need%20side%20shifter%20on%20rent%20in%20Navi%20Mumbai"
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
    "Side Shifter on Rent in Navi Mumbai | 20T to 40T Container Handler | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Side shifter container handler on rent in Navi Mumbai & Kalamboli - Kalmar 20T and 40T for CFS, export cargo and container repositioning near JNPT. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "side shifter on rent navi mumbai, container handler navi mumbai, side shifter rental JNPT, kalmar side shifter navi mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/equipment/side-shifter",
    },
    {
      property: "og:title",
      content:
        "Side Shifter on Rent in Navi Mumbai | 20T to 40T Container Handler",
    },
    {
      property: "og:description",
      content:
        "Side shifter on rent in Navi Mumbai - Kalmar 20T & 40T for CFS, export cargo. Call +91 9322296990.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-side-shifter.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/equipment/side-shifter",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Side Shifter Container Handler Rental",
        provider: {
          "@type": "LocalBusiness",
          name: "Saini Lifters Crane Service",
          telephone: "+91-9322296990",
          url: "https://www.sainilifters.com",
        },
        areaServed: ["Navi Mumbai", "Kalamboli", "JNPT", "Panvel"],
        url: "https://www.sainilifters.com/equipment/side-shifter",
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
            name: "Side Shifter",
            item: "https://www.sainilifters.com/equipment/side-shifter",
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
            name: "What does a side shifter do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A side shifter is a container handling machine with a lateral (side-to-side) shifting attachment. It allows containers to be repositioned horizontally without moving the whole machine, enabling precise container placement in tight CFS, export cargo and terminal operations.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a side shifter and a reach stacker?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A reach stacker is designed for stacking and transporting containers across a yard. A side shifter specialises in fine lateral positioning - repositioning containers in rows without moving the machine forward or back. Both are often used together in container terminal operations.",
            },
          },
          {
            "@type": "Question",
            name: "Are side shifters compatible with 20ft and 40ft containers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - our Kalmar side shifters handle both 20ft and 40ft ISO standard containers, including export refrigerated (reefer) units. Available for 20T and 40T capacity requirements.",
            },
          },
          {
            "@type": "Question",
            name: "What is the daily rental rate for a side shifter in Navi Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Kalmar 20T side shifter costs approximately ₹12,000–₹16,000 per day including operator. The 40T model is ₹18,000–₹24,000 per day. Monthly rates available for ongoing CFS operations. Call +91 9322296990 for a quote.",
            },
          },
          {
            "@type": "Question",
            name: "Can a side shifter be used at night for urgent export operations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - Saini Lifters provides side shifters with operators for night shifts and 24/7 operations for urgent export loading deadlines near JNPT. Additional charges apply for overtime and night-shift premiums. Call +91 9322296990 to arrange urgent deployment.",
            },
          },
        ],
      }),
    },
  ],
});

const specs = [
  {
    name: "Kalmar 20T Side Shifter",
    desc: "Precise lateral container positioning for 20ft ISO containers in CFS and export cargo operations.",
    data: [
      { label: "Capacity", value: "20T" },
      { label: "Container Size", value: "20ft ISO" },
      { label: "Shift Range", value: "±600mm" },
      { label: "Operation", value: "CFS / Export" },
    ],
  },
  {
    name: "Kalmar 40T Side Shifter",
    desc: "Heavy-duty side shifting for 40ft ISO containers - export cargo, reefer handling and container terminal fine placement.",
    data: [
      { label: "Capacity", value: "40T" },
      { label: "Container Size", value: "20ft & 40ft" },
      { label: "Shift Range", value: "±600mm" },
      { label: "Operation", value: "Terminal / CFS" },
    ],
  },
];

const applications = [
  "Container freight station (CFS) operations",
  "Export cargo container positioning",
  "Reefer (refrigerated) container handling",
  "Container terminal fine placement",
  "Tight yard operations near JNPT",
  "Container row repositioning",
  "ISO container loading on flatbeds",
  "Multi-modal logistics operations",
];

const faqs = [
  {
    q: "What does a side shifter do?",
    a: "A side shifter has a lateral shifting attachment that repositions containers horizontally without moving the whole machine - enabling precise container placement in tight CFS, export cargo and terminal operations.",
  },
  {
    q: "What is the difference between a side shifter and a reach stacker?",
    a: "A reach stacker stacks and transports containers across a yard. A side shifter specialises in fine lateral positioning - repositioning containers in rows without forward/backward movement. Both are often used together in container terminals.",
  },
  {
    q: "Are side shifters compatible with 20ft and 40ft containers?",
    a: "Yes - our Kalmar side shifters handle both 20ft and 40ft ISO standard containers, including export reefer units. Available in 20T and 40T capacities.",
  },
  {
    q: "What is the daily rental rate for a side shifter in Navi Mumbai?",
    a: "A Kalmar 20T side shifter costs approximately ₹12,000–₹16,000 per day including operator. The 40T model is ₹18,000–₹24,000 per day. Monthly rates are available for ongoing CFS and container terminal operations. Call +91 9322296990 for a project-specific quote.",
  },
  {
    q: "Can a side shifter be used at night for urgent export operations?",
    a: "Yes - Saini Lifters provides side shifters with operators for night shifts and 24/7 operations for urgent export loading deadlines near JNPT. Additional charges apply for overtime and night-shift premiums. Call +91 9322296990 to arrange urgent deployment.",
  },
];
</script>
