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
    <LazyBaseLine />
    <LazyTheFooter />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

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
</script>

<style scoped></style>
