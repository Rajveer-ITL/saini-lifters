<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>Crane Safety Rules</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span
        class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
        >Safety</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        Top 10 Crane Safety Rules Every Site Manager Must Know
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/blog-crane-safety-rules.png"
          alt="Top 10 crane safety rules every site manager must know - Saini Lifters"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Crane accidents are among the most serious workplace incidents in
        construction. Whether you're running a project in Navi Mumbai, Panvel or
        anywhere in Maharashtra, these 10 crane safety rules are non-negotiable.
        Saini Lifters follows all safety protocols - and we expect the same from
        every site we work with.
      </p>

      <div class="space-y-8 mb-12">
        <div v-for="rule in rules" :key="rule.num" class="flex gap-5">
          <div
            class="w-12 h-12 rounded-full bg-[#FF4057] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg"
          >
            {{ rule.num }}
          </div>
          <div>
            <h2 class="text-xl font-bold mb-2">{{ rule.title }}</h2>
            <p class="text-gray-600 dark:text-gray-300">{{ rule.desc }}</p>
          </div>
        </div>
      </div>

      <div class="p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">Crane Safety at Saini Lifters</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          At Saini Lifters, safety is our top priority. All our cranes undergo
          regular maintenance checks, our operators are certified, and we
          conduct pre-lift risk assessments for every project in Navi Mumbai,
          Panvel and Kalamboli.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/crane-rental/navi-mumbai"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Crane Rental Navi Mumbai</NuxtLink
          >
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { useHead } from "#imports";
useHead({
  title:
    "Top 10 Crane Safety Rules Every Site Manager Must Know | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Top 10 crane safety rules for construction sites in India. Essential guidelines for site managers, operators and workers in Navi Mumbai and Maharashtra.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane safety rules india, crane safety guidelines construction, crane accident prevention india, crane safety navi mumbai",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/blog/crane-safety-rules-india",
    },
    {
      property: "og:title",
      content: "Top 10 Crane Safety Rules Every Site Manager Must Know",
    },
    {
      property: "og:description",
      content:
        "Essential crane safety rules for Indian construction sites. Protect your workers and project in Navi Mumbai.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/blog-crane-safety-rules.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/blog/crane-safety-rules-india",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Top 10 Crane Safety Rules Every Site Manager Must Know",
        datePublished: "2025-05-13",
        dateModified: "2025-05-13",
        author: { "@type": "Organization", name: "Saini Lifters" },
        publisher: {
          "@type": "Organization",
          name: "Saini Lifters",
          logo: {
            "@type": "ImageObject",
            url: "https://www.sainilifters.com/favicon.png",
          },
        },
        image:
          "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
        url: "https://www.sainilifters.com/blog/crane-safety-rules-india",
        description:
          "Top 10 crane safety rules for construction sites in India. Essential guidelines for site managers, operators and workers.",
      }),
    },
  ],
});
const rules = [
  {
    num: "1",
    title: "Conduct a Pre-Lift Risk Assessment",
    desc: "Before any lift, a qualified lift supervisor must conduct a risk assessment. This includes evaluating load weight, rigging method, ground conditions, overhead obstructions (power lines, structures) and weather conditions.",
  },
  {
    num: "2",
    title: "Never Exceed the Safe Working Load (SWL)",
    desc: "Every crane has a rated capacity. Operating beyond the Safe Working Load is illegal under Indian Factory Act regulations and is the leading cause of crane tip-overs. Always check the load chart for the specific boom configuration.",
  },
  {
    num: "3",
    title: "Ensure Only Certified Operators Drive the Crane",
    desc: "In India, crane operators must hold a valid competency certificate. At Saini Lifters, all our operators are trained, certified and experienced in the specific crane models they operate.",
  },
  {
    num: "4",
    title: "Inspect Equipment Before Every Use",
    desc: "A daily pre-operation inspection must check: wire ropes, hooks, shackles, outrigger pads, fluid levels, brake systems and all safety devices. Never use a crane with known defects.",
  },
  {
    num: "5",
    title: "Establish a Crane Exclusion Zone",
    desc: "Define a clear exclusion zone around the crane's working radius. Barricade the area and ensure no workers or vehicles enter the zone during lifting operations.",
  },
  {
    num: "6",
    title: "Check Ground Conditions and Outrigger Placement",
    desc: "The ground must be able to support the crane's outrigger load. Use steel outrigger pads to spread the load. In Navi Mumbai's coastal areas, soft ground is common - always verify ground bearing capacity.",
  },
  {
    num: "7",
    title: "Never Lift Over People",
    desc: "Loads must never be lifted directly over workers or occupied areas. Clear the area below the load path before every lift. This is a fundamental safety principle across all Indian construction regulations.",
  },
  {
    num: "8",
    title: "Watch for Overhead Power Lines",
    desc: "Maintain a minimum safe distance of 3 metres from overhead power lines. In Navi Mumbai's dense urban areas, power lines are everywhere - always identify them before setting up the crane.",
  },
  {
    num: "9",
    title: "Use Proper Rigging Equipment",
    desc: "Use certified slings, shackles and lifting equipment. Inspect rigging before every use. Tag-out any damaged rigging immediately. Rigging failures are a common cause of load drops on Indian construction sites.",
  },
  {
    num: "10",
    title: "Follow Lift Plan for Critical and Complex Lifts",
    desc: "For tandem lifts (two cranes), blind picks or lifts near structures, a formal lift plan prepared by a certified lifting engineer is mandatory under Indian safety regulations. Never improvise on complex lifts.",
  },
];
</script>
