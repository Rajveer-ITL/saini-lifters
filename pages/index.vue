<template>
  <div>
    <div style="min-height: 100vh">
      <HeaderCard :title="homePageTitle" videoUrl="/video/cranesWorking.mp4" />
    </div>

    <!-- Hidden SEO H1 visible to crawlers but naturally placed -->
    <section class="container mx-auto px-4 pt-10 pb-2">
      <h1 class="text-3xl md:text-5xl font-bold text-center leading-tight">
        Crane on Rent in <span class="text-[#FF4057]">Navi Mumbai</span> -
        Panvel, Kalamboli & Beyond
      </h1>
      <p
        class="text-center text-gray-500 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-lg"
      >
        Saini Lifters has been providing heavy lifting solutions since 2001.
        Mobile cranes, hydra cranes, manlifts, reach stackers and more -
        available 24/7 across Navi Mumbai, Panvel, Kalamboli, Raigad, Mumbai and
        Thane. We also deploy pan-India - Maharashtra, Odisha, Madhya Pradesh
        and beyond. Searching for <strong>crane on rent near me</strong>? Call
        us for same-day deployment.
      </p>
      <div class="flex flex-wrap gap-4 justify-center mt-6">
        <a
          href="tel:+919322296990"
          class="bg-[#FF4057] hover:bg-red-600 text-white px-7 py-3 rounded-lg font-semibold transition-colors"
        >
          Call Now: +91 9322296990
        </a>
        <NuxtLink
          to="/contact-us"
          class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-7 py-3 rounded-lg font-semibold transition-colors"
        >
          Get a Free Quote
        </NuxtLink>
      </div>
    </section>

    <LazyAboutSection />

    <!-- Services Section -->
    <LazyServicesSection />

    <LazyBaseCarousel />

    <!-- Why Choose Us -->
    <LazyWhyChooseUs />

    <!-- Testimonials -->
    <LazyTestimonialsSection />

    <!-- Areas We Serve -->
    <LazyAreasSection />

    <LazyFaqSection />
    <LazyBaseLine />
    <LazyTheFooter />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useHead } from "#imports";
import HeaderCard from "~/components/pageSection/headerCard.vue";
const LazyAboutSection = defineAsyncComponent(
  () => import("~/components/pageSection/aboutSection.vue"),
);
const LazyServicesSection = defineAsyncComponent(
  () => import("~/components/pageSection/servicesSection.vue"),
);
const LazyBaseCarousel = defineAsyncComponent(
  () => import("~/components/base/baseCarousel.vue"),
);
const LazyWhyChooseUs = defineAsyncComponent(
  () => import("~/components/pageSection/whyChooseUs.vue"),
);
const LazyAreasSection = defineAsyncComponent(
  () => import("~/components/pageSection/areasSection.vue"),
);
const LazyTestimonialsSection = defineAsyncComponent(
  () => import("~/components/pageSection/testimonialsSection.vue"),
);
const LazyBaseLine = defineAsyncComponent(
  () => import("~/components/base/baseLine.vue"),
);
const LazyFaqSection = defineAsyncComponent(
  () => import("~/components/pageSection/faqSection.vue"),
);
const LazyTheFooter = defineAsyncComponent(
  () => import("~/components/TheFooter.vue"),
);

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Saini Lifters Crane Service",
  telephone: "+91-9322296990",
  email: "charanjit@sainilifters.com",
  foundingDate: "2001",
  description:
    "Saini Lifters provides crane on rent in Navi Mumbai, Panvel, Kalamboli and across Maharashtra. Services include mobile cranes, hydra cranes, manlifts, boom lifts, reach stackers, container stackers and side shifters.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. J-854, Steel Market Rd, Sector AWC",
    addressLocality: "Kalamboli",
    addressRegion: "Navi Mumbai, Maharashtra",
    postalCode: "410218",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.9952,
    longitude: 73.1044,
  },
  openingHours: "Mo-Su 00:00-24:00",
  areaServed: [
    "Navi Mumbai",
    "Panvel",
    "Kalamboli",
    "Raigad",
    "Mumbai",
    "Thane",
  ],
  url: "https://www.sainilifters.com",
  image:
    "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
  priceRange: "$$",
  hasMap: "https://maps.google.com/?q=Saini+Lifters+Crane+Service+Kalamboli",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "28",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does crane rental cost in Navi Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crane rental rates in Navi Mumbai depend on the crane type and capacity. A hydra crane (8-14T) costs ₹4,000–₹8,000/day, mobile cranes (50-100T) range from ₹20,000–₹50,000/day, and larger all-terrain cranes (160-300T) are quoted on project basis. Contact Saini Lifters at +91 9322296990 for a free quote.",
      },
    },
    {
      "@type": "Question",
      name: "Which crane types are available on rent in Panvel and Kalamboli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saini Lifters offers mobile cranes, hydra cranes, all-terrain cranes (XCMG QAY160/200/300, Grove GMK90), reach stackers, side shifters, container stackers, manlifts, boom lifts, crawler cranes and pick-and-carry cranes for rent in Panvel and Kalamboli.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide crane operators along with crane rental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Saini Lifters provides certified and experienced crane operators with every rental. Our operators are trained in safety protocols and have hands-on experience with all types of heavy lifts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum rental period for a crane in Navi Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum rental period is one day (8 or 12 hours shift). We also offer weekly and monthly rental rates at preferential pricing. Contact us at +91 9322296990 to discuss your requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a crane be mobilised in Navi Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saini Lifters can typically mobilise a crane within 24-48 hours in Navi Mumbai, Panvel and Kalamboli. For urgent requirements, same-day deployment may be possible depending on fleet availability.",
      },
    },
  ],
};

useHead({
  title: "Crane on Rent in Navi Mumbai | Panvel, Kalamboli | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Saini Lifters - crane on rent in Navi Mumbai, Panvel & Kalamboli since 2001. Mobile cranes, hydra, manlift, reach stacker & more. Available 24/7. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
    {
      name: "keywords",
      content:
        "crane on rent in navi mumbai, crane on rent in panvel, crane rental navi mumbai, crane hire navi mumbai, crane on hire panvel, crane service near me, heavy crane on rent, mobile crane rental navi mumbai, hydra crane rental, manlift rental navi mumbai, boom lift on rent, container stacker rental, reach stacker rental, side shifter rental, crawler crane rental, all terrain crane navi mumbai, pick and carry crane, crane rental kalamboli, crane rental raigad, crane rental thane, crane rental mumbai, saini lifters crane service",
    },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    {
      property: "og:title",
      content:
        "Crane on Rent in Navi Mumbai | Panvel, Kalamboli | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane on rent in Navi Mumbai, Panvel & Kalamboli since 2001. Mobile cranes, hydra, manlift, reach stacker. Call Saini Lifters: +91 9322296990.",
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
      content: "Crane on Rent in Navi Mumbai | Saini Lifters",
    },
    {
      name: "twitter:description",
      content:
        "Crane on rent in Navi Mumbai, Panvel & Kalamboli. Mobile cranes, hydra, manlift, reach stacker. Call +91 9322296990.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(localBusinessSchema),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(faqSchema),
    },
  ],
});
</script>

<style scoped></style>
