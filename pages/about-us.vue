<template>
  <div>
    <HeaderCard
      :title="aboutUsPageTitle"
      videoUrl="/video/headerCardMainVideo.mp4"
      subTitle="Leading the way in crane rental services in Navi Mumbai since 2001, providing reliable and efficient heavy-lifting solutions."
      isDownIconHash="our-journey"
    />
    <!-- H1 + Intro -->
    <section class="py-14 container mx-auto px-4 text-center" id="our-journey">
      <h1 class="text-3xl md:text-4xl font-bold mb-6">
        About Saini Lifters – Trusted Crane Rental Company in
        <span class="text-[#FF4057]">Navi Mumbai Since 2001</span>
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
        Founded by Mr. Charanjit Singh in 2001, Saini Lifters is Navi Mumbai's most experienced crane rental company. Based at Kalamboli, we operate a fleet of 20+ cranes ranging from 8T hydra cranes to 700T all terrain telescopic cranes – serving construction, infrastructure and industrial projects across Maharashtra and pan-India.
      </p>
    </section>

    <!-- Our Journey -->
    <section class="pb-16 container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Our Journey</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            When Mr. Charanjit Singh founded Saini Lifters in 2001, Navi Mumbai's industrial sector was rapidly expanding. He saw a gap for reliable, professionally operated crane services in the Kalamboli and Panvel belt – and built the business from the ground up. Over two decades later, Saini Lifters has completed over 500 projects for clients across construction, power, oil & gas, manufacturing and bridge infrastructure.
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Today our fleet includes XCMG QAY160, QAY300 all terrain telescopic cranes, crawler cranes, hydra cranes, manlifts, reach stackers and transport trailers. Every crane is maintained to manufacturer standards and comes with certified, trained operators – making us the go-to crane rental partner for projects from JNPT port to Maharashtra's MIDC zones.
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(item, i) in journeyInfo"
              :key="i"
              class="flex items-center gap-3"
            >
              <component :is="item.icon" class="text-[#FF4057] w-6 h-6" />
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
        <div class="relative h-[400px] w-full flex justify-center items-center">
          <img
            src="/image/crane-1.webp"
            alt="All terrain telescopic crane operating at Navi Mumbai construction site – Saini Lifters"
            class="rounded-lg object-contain w-full h-full"
            width="600"
            height="400"
          />
        </div>
      </div>
    </section>

    <StatsSection :stats="stats" />

    <!-- Fleet Highlight -->
    <section class="py-14 bg-gray-50 dark:bg-zinc-900/50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4 text-center">Our Fleet</h2>
        <p class="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-10">
          From light pick-and-carry cranes to 700T all terrain telescopic cranes, our equipment covers every lifting requirement.
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="eq in fleet"
            :key="eq.name"
            class="border border-gray-200 dark:border-zinc-700 rounded-xl p-5 hover:border-[#FF4057] transition-colors bg-white dark:bg-zinc-900"
          >
            <h3 class="font-bold text-lg mb-1 text-[#FF4057]">{{ eq.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ eq.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-10">
          <NuxtLink
            to="/equipment"
            class="inline-block bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >View Full Equipment List</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-14 container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Why Clients Choose Saini Lifters</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="reason in whyUs"
          :key="reason.title"
          class="text-center p-6 rounded-xl border border-gray-200 dark:border-zinc-700"
        >
          <div class="text-3xl mb-3">{{ reason.emoji }}</div>
          <h3 class="font-bold mb-2">{{ reason.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ reason.desc }}</p>
        </div>
      </div>
      <div class="mt-12 max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Our Service Philosophy</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Every crane deployment from Saini Lifters begins with a thorough understanding of the client's lifting requirements. Our team conducts pre-lift planning, load chart analysis and site surveys before mobilisation. We coordinate with your project managers, site engineers and safety officers to ensure zero-incident lifts.
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          For all terrain telescopic crane deployments – our highest-demand service in Navi Mumbai, Panvel and Raigad – we prepare rigging plans, outrigger pad specifications and emergency response procedures as standard. Our XCMG QAY160 and QAY300 operators are trained directly by the manufacturer and have handled lifts ranging from 20T factory machinery to 300T bridge segments.
        </p>
      </div>
    </section>

    <IndustriesSection :industries="industries" />
    <CtaSection />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderCard from "@/components/pageSection/headerCard.vue";
import StatsSection from "@/components/base/statsSection.vue";
import IndustriesSection from "@/components/base/industriesSection.vue";
import CtaSection from "@/components/base/ctaSection.vue";
import { Building2, Calendar, Forklift, Users } from "lucide-vue-next";
import { useHead } from "#imports";

const aboutUsPageTitle = ref(["ABOUT", "SAINI", "LIFTERS"]);
const stats = ref([
  { icon: "Clock", label: "Years of Experience", value: 15 },
  { icon: "Forklift", label: "Cranes in Fleet", value: 20 },
  { icon: "Users", label: "Team Members", value: 60 },
  { icon: "Award", label: "Projects Completed", value: 100 },
]);

const industries = ref([
  "Construction & Infrastructure",
  "Power & Energy",
  "Oil & Gas",
  "Industrial Manufacturing",
  "Civil Engineering",
  "Heavy Equipment",
  "Bridge Construction",
  "Factory Operations",
]);

const journeyInfo = ref([
  { icon: Calendar, label: "Est. 2001" },
  { icon: Building2, label: "Maharashtra India" },
  { icon: Forklift, label: "50-700 Ton Capacity" },
  { icon: Users, label: "Expert Team" },
]);

const fleet = ref([
  { name: "All Terrain Telescopic Crane", desc: "XCMG QAY160, QAY300 & 700T heavy lift cranes for bridge, power plant and mega industrial projects." },
  { name: "Mobile Crane", desc: "XCMG and Grove mobile cranes 90T–300T for construction sites across Navi Mumbai." },
  { name: "Crawler Crane", desc: "80T–400T crawler cranes for long-duration and civil infrastructure projects." },
  { name: "Hydra Crane (Pick & Carry)", desc: "8T–14T hydra cranes for factory, MIDC and industrial machine shifting." },
  { name: "Manlift & Boom Lift", desc: "Telescopic and articulating boom lifts up to 185 ft for elevated work platforms." },
  { name: "Reach Stacker & Container Stacker", desc: "45T reach stackers for JNPT port and container yard operations." },
]);

const whyUs = ref([
  { emoji: "🏗️", title: "24+ Years Experience", desc: "Operating since 2001 — deep knowledge of Navi Mumbai's industrial and construction landscape." },
  { emoji: "✅", title: "Certified Operators", desc: "All operators are trained, certified and experienced. Included in every rental." },
  { emoji: "⚡", title: "Same-Day Deployment", desc: "Based in Kalamboli — fastest crane deployment in Navi Mumbai, Panvel and Kalamboli." },
  { emoji: "🔧", title: "Full Maintenance", desc: "All equipment maintained to manufacturer standards. No breakdowns, no downtime." },
]);

const breadcrumbSchema = {
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
      name: "About Us",
      item: "https://www.sainilifters.com/about-us",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Saini Lifters Crane Service",
  url: "https://www.sainilifters.com",
  logo: "https://www.sainilifters.com/favicon.png",
  foundingDate: "2001",
  founder: { "@type": "Person", name: "Charanjit Singh" },
  description:
    "Saini Lifters provides crane on rent across India - mobile cranes, hydra cranes, manlifts, reach stackers and all-terrain cranes. Based in Kalamboli, Navi Mumbai. Serving Maharashtra, Odisha, Madhya Pradesh and pan-India since 2001.",
  telephone: "+91-9322296990",
  email: "charanjit@sainilifters.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. J-854, Steel Market Rd, Sector AWC",
    addressLocality: "Kalamboli, Panvel",
    addressRegion: "Navi Mumbai, Maharashtra",
    postalCode: "410218",
    addressCountry: "IN",
  },
  areaServed: [
    "Maharashtra",
    "Odisha",
    "Madhya Pradesh",
    "Gujarat",
    "Andhra Pradesh",
    "India",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: 60 },
};

useHead({
  title: "About Saini Lifters | Crane Rental Company in Navi Mumbai Since 2001",
  meta: [
    {
      name: "description",
      content:
        "Saini Lifters - crane rental company in Navi Mumbai since 2001. Founded by Mr. Charanjit Singh. Mobile cranes, hydra, manlift, 50-400T fleet. Serving Panvel, Kalamboli, Raigad, Mumbai & Thane.",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
    {
      name: "keywords",
      content:
        "saini lifters about, crane rental company navi mumbai, all terrain telescopic crane navi mumbai, crane company panvel, heavy lifting company kalamboli, crane service since 2001, XCMG crane rental navi mumbai",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/about-us" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    {
      property: "og:title",
      content: "About Saini Lifters | Crane Rental Company in Navi Mumbai",
    },
    {
      property: "og:description",
      content:
        "Crane rental company in Navi Mumbai since 2001. Mobile cranes, hydra, manlift, 50-400T fleet. Serving Panvel, Kalamboli, Raigad, Mumbai & Thane.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/about-us-sRj1OQtzVztCEErJRykB66GqGrIVih.webp?v=1",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.sainilifters.com/about-us" },
    {
      name: "twitter:title",
      content: "About Saini Lifters | Crane Rental Navi Mumbai",
    },
    {
      name: "twitter:description",
      content:
        "Crane rental company in Navi Mumbai since 2001. Mobile cranes, hydra, manlift & more. Call +91 9322296990.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/about-us-sRj1OQtzVztCEErJRykB66GqGrIVih.webp?v=1",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/about-us" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema),
    },
  ],
});
</script>
