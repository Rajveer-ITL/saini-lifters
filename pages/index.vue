<template>
  <div>
    <div style="min-height: 100vh">
      <client-only>
        <LazyHeaderCard
          :title="homePageTitle"
          videoUrl="/video/cranesWorking.mp4"
        />
      </client-only>
    </div>

    <LazyAboutSection />
    <LazyBaseCarousel />
    <LazyFaqSection />
    <LazyBaseLine />
    <LazyTheFooter />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useHead } from "#imports";

// Lazy loading components for better performance
const LazyHeaderCard = defineAsyncComponent(() =>
  import("~/components/pageSection/headerCard.vue")
);
const LazyAboutSection = defineAsyncComponent(() =>
  import("~/components/pageSection/aboutSection.vue")
);
const LazyBaseCarousel = defineAsyncComponent(() =>
  import("~/components/base/baseCarousel.vue")
);
const LazyBaseLine = defineAsyncComponent(() =>
  import("~/components/base/baseLine.vue")
);
const LazyFaqSection = defineAsyncComponent(() =>
  import("~/components/pageSection/faqSection.vue")
);
const LazyTheFooter = defineAsyncComponent(() =>
  import("~/components/TheFooter.vue")
);

// Homepage Title
const homePageTitle = ref([
  "👷🏽‍♂️",
  "NOTHING",
  "TOO",
  "HIGH",
  "NOTHING",
  "TOO",
  "HEAVY",
  ".",
]);

// Set up Open Graph and SEO meta tags
useHead({
  title: "Saini Lifters - Heavy Lifting & Crane Services",
  meta: [
    {
      name: "description",
      content:
        "Saini Lifters, a trusted name in heavy lifting since 2001, specializes in container cranes, reach stackers, side shifters, and all-terrain cranes. We provide reliable lifting solutions for large-scale projects with expertise in bridge construction and industrial operations.",
    },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/" },
    {
      property: "og:title",
      content: "Saini Lifters - Heavy Lifting & Crane Services",
    },
    {
      property: "og:description",
      content:
        "Saini Lifters, a trusted name in heavy lifting since 2001, specializes in container cranes, reach stackers, side shifters, and all-terrain cranes. With expertise in bridge construction and industrial operations, we provide reliable lifting solutions for large-scale projects.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.sainilifters.com/" },
    {
      name: "twitter:title",
      content: "Saini Lifters - Heavy Lifting & Crane Services",
    },
    {
      name: "twitter:description",
      content:
        "Saini Lifters specializes in container cranes, reach stackers, side shifters, and all-terrain cranes. Trusted since 2001, we provide top-tier lifting solutions for construction and industrial projects.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },

    // Additional SEO Boosters
    {
      name: "keywords",
      content:
        "heavy lifting, crane rental, construction cranes, industrial lifting, all-terrain cranes, reach stackers, container cranes, lifting solutions, Saini Lifters",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
  ],
});
</script>

<style scoped></style>
