<template>
  <div>
    <HeaderCard
      :title="aboutUsPageTitle"
      videoUrl="/video/headerCardMainVideo.mp4"
      subTitle="Leading the way in crane rental services since 2008, providing reliable and efficient heavy-lifting solutions."
      isDownIconHash="our-journey"
    />
    <section class="py-20 container mx-auto px-4" id="our-journey">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6">Our Journey</h2>
          <p class="dark:text-gray-300 mb-6">
            Founded in 2008 by Mr. Charanjit Singh, Saini Lifters has grown to
            become a leading name in the crane rental industry. With over 15
            years of experience, we've built our reputation on the pillars of
            safety, reliability, and exceptional service.
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

const aboutUsPageTitle = ref(["ABOUT", "SAINI", "LIFTERS", "."]);
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
  { icon: Calendar, label: "Est. 2008" },
  { icon: Building2, label: "Maharashtra India" },
  { icon: Forklift, label: "50-400 Ton Capacity" },
  { icon: Users, label: "Expert Team" },
]);

// Set up Open Graph and SEO meta tags
useHead({
  title: "About Us - Saini Lifters | Experts in Heavy Lifting & Crane Services",
  meta: [
    {
      name: "description",
      content:
        "Learn about Saini Lifters, a leader in heavy lifting and crane services since 2001. Specializing in container cranes, reach stackers, side shifters, and all-terrain cranes, we provide reliable lifting solutions for industrial and construction projects.",
    },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/about-us" },
    { property: "og:title", content: "About Us - Saini Lifters" },
    {
      property: "og:description",
      content:
        "Discover the story of Saini Lifters, a trusted name in heavy lifting for over two decades. We specialize in advanced crane solutions for industrial and bridge construction projects, ensuring safety, efficiency, and precision.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/about-us-page.webp",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.sainilifters.com/about-us" },
    { name: "twitter:title", content: "About Us - Saini Lifters" },
    {
      name: "twitter:description",
      content:
        "Learn about Saini Lifters' expertise in heavy lifting and crane services. With over two decades of experience, we provide innovative lifting solutions for large-scale industrial projects.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/about-us-page.webp",
    },

    // Additional SEO Boosters
    {
      name: "keywords",
      content:
        "heavy lifting company, crane rental services, industrial lifting solutions, bridge construction cranes, Saini Lifters history, lifting equipment providers",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
  ],
});
</script>
