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
              <component :is="item.icon" class="text-red-500 w-6 h-6" />
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
</script>
