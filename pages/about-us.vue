<template>
  <div>
    <HeaderCard
      :title="aboutUsPageTitle"
      videoUrl="/video/headerCardMainVideo.mp4"
      subTitle="Leading the way in crane rental services in Navi Mumbai since 2001, providing reliable and efficient heavy-lifting solutions."
      isDownIconHash="our-journey"
    />
    <section class="py-20 container mx-auto px-4" id="our-journey">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6">Our Journey</h2>
          <p class="dark:text-gray-300 mb-6">
            Founded in 2001 by Mr. Charanjit Singh, Saini Lifters has grown to
            become a leading name in the crane rental industry in Navi Mumbai,
            Panvel and Kalamboli. With over 20 years of experience, we've built
            our reputation on the pillars of safety, reliability, and
            exceptional service.
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
            alt="Crane operation showcase"
            class="rounded-lg object-contain w-full h-full"
            width="600"
            height="400"
          />
        </div>
      </div>
    </section>

    <StatsSection :stats="stats" />
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
  { icon: Forklift, label: "50-400 Ton Capacity" },
  { icon: Users, label: "Expert Team" },
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
        "saini lifters about, crane rental company navi mumbai, crane company panvel, heavy lifting company kalamboli, crane service since 2001",
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
