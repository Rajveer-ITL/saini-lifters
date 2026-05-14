<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink
      ><span class="mx-2">/</span>
      <NuxtLink to="/blog" class="hover:text-[#FF4057]">Blog</NuxtLink
      ><span class="mx-2">/</span>
      <span>How to Book a Crane in Navi Mumbai</span>
    </nav>
    <article class="max-w-4xl mx-auto px-4 py-16">
      <span
        class="text-xs text-[#FF4057] font-semibold uppercase tracking-wider"
        >Guide</span
      >
      <h1 class="text-4xl md:text-5xl font-bold mt-3 mb-6">
        How to Book a Crane on Rent in Navi Mumbai - Step-by-Step 2026 Guide
      </h1>
      <div class="w-full rounded-xl overflow-hidden mb-8">
        <img
          src="/image/eq-all-terrain-crane.png"
          alt="How to book a crane on rent in Navi Mumbai - step-by-step guide by Saini Lifters"
          class="w-full h-auto"
          loading="eager"
        />
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Booking a crane for the first time can feel overwhelming - there are
        permits to arrange, capacity calculations to get right, site surveys to
        conduct and mobilisation logistics to coordinate. But it does not have
        to be complicated. Here is exactly what Saini Lifters does with every
        client booking, from the first call to final demobilisation.
      </p>

      <div class="space-y-6">
        <div
          v-for="step in bookingSteps"
          :key="step.step"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-[#FF4057] transition-colors"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF4057] text-white flex items-center justify-center font-bold text-sm"
            >
              {{ step.step }}
            </div>
            <div class="flex-1">
              <h2 class="text-xl font-bold mb-2">{{ step.title }}</h2>
              <p class="text-gray-600 dark:text-gray-300">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl">
        <h2 class="text-2xl font-bold mb-3">
          Ready to Book? Call Saini Lifters
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Saini Lifters Crane Service has managed hundreds of crane bookings
          across Navi Mumbai, Panvel and Kalamboli since 2001. We handle
          everything from the lift plan to the permit paperwork - so you can
          focus on your project.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/equipment"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >View Our Full Fleet</NuxtLink
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
    "How to Book a Crane on Rent in Navi Mumbai - Step-by-Step 2026 Guide | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Step-by-step guide to booking a crane on rent in Navi Mumbai - from identifying your lift requirements and choosing the right crane to permits, site survey and demobilisation. Saini Lifters.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "how to book crane on rent navi mumbai, crane rental process navi mumbai, crane hire steps india",
    },
    {
      property: "og:url",
      content:
        "https://www.sainilifters.com/blog/how-to-book-crane-navi-mumbai",
    },
    {
      property: "og:title",
      content:
        "How to Book a Crane on Rent in Navi Mumbai - Step-by-Step 2026 Guide",
    },
    {
      property: "og:description",
      content:
        "Everything you need to know about booking a crane in Navi Mumbai - requirements, crane type, site survey, permits and what to expect on lift day.",
    },
    {
      property: "og:image",
      content: "https://www.sainilifters.com/image/eq-all-terrain-crane.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.sainilifters.com/blog/how-to-book-crane-navi-mumbai",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Book a Crane on Rent in Navi Mumbai",
        description:
          "A step-by-step guide to booking a crane on rent in Navi Mumbai - from identifying lift requirements to demobilisation and invoice.",
        image: "https://www.sainilifters.com/image/eq-all-terrain-crane.png",
        totalTime: "P1D",
        supply: [
          {
            "@type": "HowToSupply",
            name: "Load weight and dimensions",
          },
          {
            "@type": "HowToSupply",
            name: "Site access details",
          },
          {
            "@type": "HowToSupply",
            name: "Required hook height and lift radius",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Identify Your Lift Requirements",
            text: "Determine the load weight, required hook height, lift radius, and site access conditions before contacting a crane company.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Choose the Right Crane Type",
            text: "Match your requirements to the correct crane type - hydra, pick-and-carry, all-terrain or crawler - based on load and site.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Call or WhatsApp Saini Lifters",
            text: "Contact Saini Lifters at +91 9322296990 with your load details, hook height, site location and required date.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Site Survey and Lift Plan",
            text: "Saini Lifters visits the site to assess ground bearing, access, obstructions and confirms the lift plan.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Confirm Dates, Operator and Mobilisation",
            text: "Confirm the crane, certified operator, rigging crew and lowboy trailer logistics for mobilisation day.",
          },
          {
            "@type": "HowToStep",
            position: 6,
            name: "Permits and Safety Documentation",
            text: "Ensure crane test certificates, operator licences and any site-specific permits are in place before lift day.",
          },
          {
            "@type": "HowToStep",
            position: 7,
            name: "Crane Arrives on Site",
            text: "The crane arrives, outrigger pads are placed, safety zones are established and the lift proceeds as per the approved plan.",
          },
          {
            "@type": "HowToStep",
            position: 8,
            name: "After the Lift - Demobilisation and Invoice",
            text: "Crane is demobilised and transported off site. Invoice is issued based on agreed shift rates.",
          },
        ],
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
            name: "How to Book a Crane in Navi Mumbai",
            item: "https://www.sainilifters.com/blog/how-to-book-crane-navi-mumbai",
          },
        ],
      }),
    },
  ],
});

const bookingSteps = [
  {
    step: 1,
    title: "Identify Your Lift Requirements",
    desc: "Before you call anyone, determine four key numbers: the load weight (in tonnes), the required hook height (how high does the load need to go?), the lift radius (horizontal distance from the crane centre to the load), and site access width (can a crane enter and set up?). These four figures determine which crane can safely do the job - and no reputable crane company should quote without them.",
  },
  {
    step: 2,
    title: "Choose the Right Crane Type",
    desc: "Different loads and sites demand different cranes. Under 14T in a factory? A hydra crane. 20T–50T in an MIDC yard? A farana or pick-and-carry. Heavy infrastructure or bridge work? An all-terrain crane. Visit our equipment page to see Saini Lifters' full fleet with capacities - or simply describe your job and we will recommend the right machine.",
  },
  {
    step: 3,
    title: "Call or WhatsApp Saini Lifters (+91 9322296990)",
    desc: "When you call, have ready: load weight and dimensions, hook height required, site address and access notes, preferred date and shift timing, and whether you need rigging crew or just the crane and operator. The more detail you provide, the faster we can confirm availability and give you an accurate quote. WhatsApp messages with photos of the site and load are especially helpful.",
  },
  {
    step: 4,
    title: "Site Survey and Lift Plan",
    desc: "For any significant lift, Saini Lifters visits the site before mobilisation day. We check ground bearing capacity (critical for outrigger placement), overhead obstructions (power lines, structural beams, roof trusses), access route for the crane and lowboy, and exclusion zone requirements. A formal lift plan is prepared for all lifts above 5T or where there are site-specific hazards.",
  },
  {
    step: 5,
    title: "Confirm Dates, Operator and Mobilisation",
    desc: "Once the lift plan is agreed, we confirm the crane, certified operator, rigging crew and - where required - a lowboy trailer to transport the crane to site. You will receive a written confirmation of the start time, crane specification and shift rate. For large cranes, mobilisation typically starts the evening before to ensure on-time setup.",
  },
  {
    step: 6,
    title: "Permits and Safety Documentation",
    desc: "Depending on your site and the crane being used, you may need: a crane test certificate (statutory load test, renewed annually), a certified operator licence, a site entry permit or gate pass, an ODC road permit for large cranes travelling between sites, and factory inspector approval for lifts inside registered factories. Saini Lifters maintains all statutory documentation and can share copies in advance.",
  },
  {
    step: 7,
    title: "Crane Arrives on Site - What to Expect",
    desc: "The crane arrives with the operator and rigging crew. Outrigger pads are placed on load-spreading mats, the safety exclusion zone is established and the lift supervisor briefs the team on the lift sequence. All rigging is checked before any load is lifted. Our operators follow a pre-lift checklist on every job - there are no shortcuts.",
  },
  {
    step: 8,
    title: "After the Lift - Demobilisation and Invoice",
    desc: "Once all planned lifts are complete, the crane is lowered, outriggers retracted and the machine is driven or loaded onto its transport. The site is left clear. An invoice is issued based on the agreed shift rate, plus any additional hours if the job ran longer than planned. Payment terms are agreed in advance.",
  },
];
</script>
