<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Gallery</span>
    </nav>

    <section class="relative py-16 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Crane & Equipment <span class="text-[#FF4057]">Gallery</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Our fleet in action - cranes, manlifts, reach stackers and heavy
          lifting equipment deployed across Navi Mumbai, Panvel, Kalamboli and
          Maharashtra.
        </p>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-2xl font-bold mb-4">
        Our <span class="text-[#FF4057]">Equipment Fleet</span>
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-4xl">
        Browse photos of Saini Lifters' crane and heavy equipment fleet — XCMG all-terrain cranes (160T to 300T), SANY crawler cranes, Kalmar reach stackers and Farana pick &amp; carry cranes. All equipment operates with trained, certified operators experienced in Navi Mumbai, Panvel MIDC and pan-India project logistics.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="img in images"
          :key="img.src"
          class="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-[#FF4057] transition-all duration-300"
        >
          <div
            class="aspect-video overflow-hidden bg-gray-100 dark:bg-zinc-800"
          >
            <NuxtImg
              :src="`/image/${img.src}`"
              :alt="img.alt"
              class="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              format="webp"
              loading="lazy"
              width="600"
              height="338"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold">{{ img.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ img.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Video Section -->
      <h2 class="text-2xl font-bold mb-8">
        Cranes <span class="text-[#FF4057]">in Action</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          class="rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700"
        >
          <video
            controls
            muted
            preload="metadata"
            class="w-full aspect-video object-cover"
            aria-label="Saini Lifters cranes working in Navi Mumbai"
          >
            <source src="/video/cranesWorking.mp4" type="video/mp4" />
          </video>
          <div class="p-4">
            <h3 class="font-semibold">Crane Operations in Navi Mumbai</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Watch our crane fleet in action at construction and industrial
              sites across Navi Mumbai.
            </p>
          </div>
        </div>
        <div
          class="rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700"
        >
          <video
            controls
            muted
            preload="metadata"
            class="w-full aspect-video object-cover"
            aria-label="Single crane operation by Saini Lifters"
          >
            <source src="/video/singleCrane.mp4" type="video/mp4" />
          </video>
          <div class="p-4">
            <h3 class="font-semibold">All-Terrain Crane in Action</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              XCMG all-terrain crane performing heavy lift operations in Navi
              Mumbai.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-3xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-4">Need Any of This Equipment?</h2>
        <p class="text-gray-500 dark:text-gray-300 mb-8">
          Contact Saini Lifters today for crane on rent in Navi Mumbai, Panvel
          and Kalamboli.
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
            >Get a Free Quote</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Gallery - Crane & Equipment Fleet | Saini Lifters Navi Mumbai",
  meta: [
    {
      name: "description",
      content:
        "Gallery of Saini Lifters crane and lifting equipment fleet in Navi Mumbai — XCMG all-terrain cranes (160T–300T), SANY crawler cranes, Kalmar reach stackers, Farana pick & carry cranes and manlifts. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:url", content: "https://www.sainilifters.com/gallery" },
    {
      property: "og:title",
      content: "Gallery - Crane Fleet | Saini Lifters Navi Mumbai",
    },
    {
      property: "og:description",
      content:
        "Photos and videos of Saini Lifters crane fleet in Navi Mumbai - XCMG all-terrain cranes, mobile cranes, hydra cranes and manlifts.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/gallery" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sainilifters.com" },
          { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://www.sainilifters.com/gallery" }
        ]
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Saini Lifters Crane & Equipment Gallery",
        "description": "Photos and videos of Saini Lifters crane fleet in action — XCMG all-terrain cranes, mobile cranes, hydra cranes and manlifts in Navi Mumbai.",
        "url": "https://www.sainilifters.com/gallery",
        "provider": { "@type": "LocalBusiness", "name": "Saini Lifters Crane Service", "telephone": "+91-9322296990" }
      }),
    },
  ],
});

const images = [
  {
    src: "crane-1.webp",
    title: "XCMG QAY160 — 160T All-Terrain Crane",
    alt: "XCMG QAY160 all-terrain crane on rent in Navi Mumbai",
    desc: "160-tonne XCMG QAY160 all-terrain crane deployed at a bridge construction project in Navi Mumbai. Available on rent with certified operator and rigger team for infrastructure, power plant erection and heavy industrial lifting.",
  },
  {
    src: "crane-2.webp",
    title: "XCMG QAY300 — 300T All-Terrain Crane",
    alt: "XCMG QAY300 crane on rent in Panvel Navi Mumbai",
    desc: "300-tonne XCMG QAY300 all-terrain crane at a heavy infrastructure project in Maharashtra. Our largest mobile crane handles tandem lifts, heavy girder erection and process plant equipment installation across pan-India project sites.",
  },
  {
    src: "crane-3.webp",
    title: "Mobile Crane — Kalamboli Industrial Site",
    alt: "Mobile crane on rent in Navi Mumbai Kalamboli",
    desc: "Mobile crane deployed at a factory in Kalamboli MIDC for machine erection and equipment installation. Our cranes are available for short-duration lifts with fast deployment across Navi Mumbai and Panvel.",
  },
  {
    src: "crane-4.webp",
    title: "XCMG QAY200 — 200T All-Terrain Crane",
    alt: "XCMG QAY200 crane on rent in Navi Mumbai",
    desc: "200-tonne XCMG QAY200 performing structural steel lift at an industrial project in Panvel MIDC. Suitable for power substation equipment setting, steel structure erection and precast concrete panel installation.",
  },
  {
    src: "crane-5.webp",
    title: "Grove GMK90 — 90T Mobile Crane",
    alt: "Grove GMK90 mobile crane on rent Panvel Navi Mumbai",
    desc: "Grove GMK90 90-tonne all-terrain mobile crane available on rent in Navi Mumbai. Ideal for mid-scale construction projects, equipment setting and roof slab positioning where a large crane footprint is impractical.",
  },
  {
    src: "eq-reach-stacker.png",
    title: "Kalmar Reach Stacker — 45T Container Handler",
    alt: "Kalmar reach stacker on rent in Navi Mumbai near JNPT",
    desc: "Kalmar 45T reach stacker for container yard and CFS operations near JNPT, Navi Mumbai. Stacks 20ft and 40ft ISO containers three-high and is deployed to container freight stations and inland container depots across the region.",
  },
];
</script>
