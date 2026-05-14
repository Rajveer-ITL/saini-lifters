<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>Crane on Rent Near JNPT</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span
        class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
        >Guide</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        Crane on Rent Near JNPT Port — Everything You Need to Know
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/eq-reach-stacker.png"
          alt="Crane on rent near JNPT port Navi Mumbai — Saini Lifters"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Jawaharlal Nehru Port Trust (JNPT) is India's largest container port — and the
        industrial ecosystem surrounding it generates a continuous, high-volume demand
        for crane services. From container yard operations and port expansion
        infrastructure to last-mile logistics handling, cranes are indispensable at
        every stage. Saini Lifters is based in Kalamboli, just 5 minutes from JNPT,
        making us the fastest-mobilising crane rental partner for any port-area project
        in Navi Mumbai.
      </p>

      <div class="space-y-10">
        <div
          v-for="section in jnptSections"
          :key="section.name"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <h2 class="text-2xl font-bold mb-3 text-[#FF4057]">
            {{ section.name }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ section.desc }}</p>
          <div
            class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg px-4 py-3 text-sm text-amber-800 dark:text-amber-300"
          >
            <span class="font-semibold">Pro tip: </span>{{ section.tip }}
          </div>
        </div>
      </div>

      <div class="mt-12 p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">Need a Crane Near JNPT Port?</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters Crane Service has been supporting port-area operations in
          Navi Mumbai since 2001. Call us now — we can mobilise to any JNPT-area
          location within hours.
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
  title: "Crane on Rent Near JNPT Port Navi Mumbai | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Need a crane near JNPT port? Saini Lifters in Kalamboli (5 min from JNPT) provides mobile cranes, hydra cranes and pick-and-carry cranes for port area operations in Navi Mumbai.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane on rent near jnpt, crane rental jnpt navi mumbai, container crane jnpt, crane hire near jnpt port",
    },
    {
      property: "og:url",
      content: "https://www.sainilifters.com/blog/crane-rental-near-jnpt",
    },
    {
      property: "og:title",
      content: "Crane on Rent Near JNPT Port — Everything You Need to Know",
    },
    {
      property: "og:description",
      content:
        "Saini Lifters in Kalamboli (5 min from JNPT) provides cranes for port area, container yard and logistics operations in Navi Mumbai.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-reach-stacker.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/blog/crane-rental-near-jnpt",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Crane on Rent Near JNPT Port — Everything You Need to Know",
        datePublished: "2026-05-14",
        dateModified: "2026-05-14",
        author: {
          "@type": "Organization",
          name: "Saini Lifters Crane Service",
        },
        publisher: {
          "@type": "Organization",
          name: "Saini Lifters Crane Service",
          logo: {
            "@type": "ImageObject",
            url: "https://www.sainilifters.com/favicon.png",
          },
        },
        image: "https://www.sainilifters.com/image/eq-reach-stacker.png",
        url: "https://www.sainilifters.com/blog/crane-rental-near-jnpt",
        description:
          "A comprehensive guide to crane rental near JNPT port in Navi Mumbai — covering port operations, crane types, permits and mobilisation times.",
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
            name: "Blog",
            item: "https://www.sainilifters.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Crane on Rent Near JNPT",
            item: "https://www.sainilifters.com/blog/crane-rental-near-jnpt",
          },
        ],
      }),
    },
  ],
});

const jnptSections = [
  {
    name: "1. What Crane Operations Happen Near JNPT?",
    desc: "The JNPT area is one of India's most crane-intensive zones. Operations include: container yard stacking and de-stacking, port infrastructure expansion (berth construction, jetty work), equipment installation inside warehouses and logistics parks, heavy cargo unloading from trailers, and plant and machinery erection inside the Special Economic Zone (SEZ). With multiple major logistics parks — including DFC corridors and upcoming Navi Mumbai airport cargo zones — the demand for crane services here is continuous.",
    tip: "JNPT area work often runs 24/7 — confirm whether you need a crane with night-shift capacity when booking.",
  },
  {
    name: "2. Which Crane is Best for Port Container Yard Work?",
    desc: "For container yard operations, the right crane depends on what you're handling. Reach stackers are purpose-built for ISO container stacking and are the fastest solution for port yards. However, for lifting heavy machinery, loading ODC cargo onto trailers, or working in areas where a reach stacker cannot access, a mobile all-terrain crane (50T–160T range) is the preferred choice. Saini Lifters provides XCMG all-terrain cranes with certified operators experienced in port-area lifts.",
    tip: "For mixed operations — some container handling, some heavy cargo — a 50T–80T all-terrain crane offers the best versatility near JNPT.",
  },
  {
    name: "3. Reach Stacker vs Crane for JNPT Area",
    desc: "Reach stackers excel at stacking and moving ISO containers quickly within a yard — they are faster and cheaper per container move than a mobile crane. However, cranes are essential when you need to: lift non-containerised heavy cargo, perform precision lifts at height, work inside structures or buildings, or handle loads that exceed reach stacker capacity. Many JNPT-area projects use both — reach stackers for container movements and a crane for all other heavy lifts.",
    tip: "If your job involves both container moves AND other heavy lifts, budget for both equipment types or confirm which dominates the scope.",
  },
  {
    name: "4. ODC and Heavy Cargo Transport Near JNPT",
    desc: "Over-Dimensional Cargo (ODC) — turbines, generators, pressure vessels, structural steel — arrives constantly at JNPT and requires cranes for unloading, intermediate staging and final installation. This work typically requires an all-terrain crane of 100T or above, a certified rigging team, a valid ODC route permit and, in many cases, police escort coordination. Saini Lifters has extensive experience handling ODC cargo movements in the Navi Mumbai and JNPT corridor.",
    tip: "Apply for ODC permits at least 7–10 working days in advance. The Navi Mumbai Municipal Corporation and NHAI routes both require separate applications.",
  },
  {
    name: "5. How Quickly Can a Crane Be Mobilised to JNPT?",
    desc: "Because Saini Lifters is based in Kalamboli — less than 5 km from JNPT Gate 4 — mobilisation times are among the shortest in the region. For planned bookings, we confirm the crane, operator and rigging crew the day before and arrive at site by the agreed shift start. For urgent or emergency lifts, we can typically mobilise a hydra or pick-and-carry crane within 2–4 hours, and a mobile all-terrain crane within 4–8 hours, subject to availability.",
    tip: "For time-critical port shutdowns or vessel turnaround windows, always book at least 48 hours in advance and confirm the standby arrangement.",
  },
  {
    name: "6. Safety and Permit Requirements for Port-Area Crane Work",
    desc: "Crane operations near JNPT carry additional safety and compliance requirements compared to a standard construction site. You will typically need: a valid crane test certificate (statutory load test), operator licence (BOCW or factory inspector certified), site-specific lift plan approved by the port authority, gate pass and security clearance for crane entry into port premises, and third-party liability insurance. Saini Lifters maintains all statutory crane test certificates and our operators hold valid licences — we can share documentation on request.",
    tip: "Always obtain a signed lift plan and ground bearing confirmation from the port's engineering team before commencing any crane operation inside JNPT.",
  },
];
</script>
