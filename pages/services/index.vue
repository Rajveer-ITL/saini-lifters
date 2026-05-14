<template>
  <div class="min-h-screen mt-[70px]">
    <!-- Breadcrumb -->
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>Services</span>
    </nav>

    <!-- Hero Section -->
    <section
      class="relative flex h-[460px] w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div class="text-center space-y-4 px-4 z-10">
        <h1 class="text-4xl md:text-6xl font-bold">
          <span class="text-[#FF4057]">Crane Rental Services</span> in Navi
          Mumbai
        </h1>
        <p
          class="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Comprehensive heavy lifting and material handling equipment for rent
          across Navi Mumbai, Panvel, Kalamboli, Raigad, Mumbai and Thane.
        </p>
        <div class="flex flex-wrap gap-4 justify-center pt-2">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Call: +91 9322296990
          </a>
          <NuxtLink
            to="/contact-us"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Get a Quote
          </NuxtLink>
        </div>
      </div>
      <DotPattern
        :class="'[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'"
      />
    </section>

    <!-- Intro -->
    <section class="max-w-4xl mx-auto px-4 pt-12 pb-4 text-center">
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
        Saini Lifters provides a complete range of crane and heavy lifting
        services in Navi Mumbai, Panvel, Kalamboli, Raigad, Mumbai and Thane.
        Our flagship service is
        <NuxtLink
          to="/services/all-terrain-crane-rental"
          class="text-[#FF4057] font-semibold hover:underline"
          >all terrain telescopic crane rental</NuxtLink
        >
        — with XCMG QAY160 and QAY300 cranes (160T–300T) available 24/7 from our
        Kalamboli yard.
      </p>
      <p class="text-gray-600 dark:text-gray-300">
        Whether you need a pick-and-carry Crawler crane for your MIDC factory, a
        300T all terrain crane for bridge construction, a manlift for elevated
        maintenance work, or a reach stacker for JNPT port operations — our
        fleet covers every heavy lifting requirement with certified operators
        included.
      </p>
    </section>

    <!-- Services Grid -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12">
        Our <span class="text-[#FF4057]">Equipment & Services</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-[#FF4057]/5 dark:bg-[#FF4057]/10">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Need Crane on Rent in Navi Mumbai?
        </h2>
        <p class="text-gray-500 dark:text-gray-300 mb-8">
          Contact us today to discuss your requirements and get a customised
          rental solution. We serve Navi Mumbai, Panvel, Kalamboli, Raigad,
          Mumbai and Thane.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Call Now: +91 9322296990
          </a>
          <NuxtLink
            to="/contact-us"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Enquiry
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "#imports";
import {
  Construction,
  Container,
  ArrowUpCircle,
  Truck,
  Anchor,
  MoveHorizontal,
  ChevronsUp,
  Layers,
  PackageOpen,
} from "lucide-vue-next";
import DotPattern from "@/components/inspiraUi/dottedBackground.vue";
import ServiceCard from "@/components/base/serviceCard.vue";

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
      name: "Services",
      item: "https://www.sainilifters.com/services",
    },
  ],
};

useHead({
  title: "Crane Rental Services in Navi Mumbai | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Crane rental services in Navi Mumbai, Panvel & Kalamboli. Mobile cranes, hydra, manlift, all-terrain, reach stacker, container stacker, side shifter & more. Call +91 9322296990.",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
    {
      name: "keywords",
      content:
        "crane rental services navi mumbai, mobile crane rental, hydra crane on rent, manlift rental, boom lift rental, reach stacker rental, container stacker, side shifter rental, all terrain crane, crawler crane rental, pick carry crane navi mumbai",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/services" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    {
      property: "og:title",
      content: "Crane Rental Services in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Crane rental services in Navi Mumbai, Panvel & Kalamboli. Mobile cranes, hydra, manlift, all-terrain, reach stacker & more. Call +91 9322296990.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/services-page-LhYMfOojrB74W0Isy9D8xlumW5mMy3.webp",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.sainilifters.com/services" },
    {
      name: "twitter:title",
      content: "Crane Rental Services in Navi Mumbai | Saini Lifters",
    },
    {
      name: "twitter:description",
      content:
        "Crane rental services in Navi Mumbai, Panvel & Kalamboli. Mobile cranes, hydra, manlift & more. Call +91 9322296990.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/services-page-LhYMfOojrB74W0Isy9D8xlumW5mMy3.webp",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/services" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
  ],
});

const services = ref([
  {
    title: "All-Terrain Crane Rental",
    description:
      "XCMG QAY160, QAY200 and QAY300 all-terrain telescopic cranes for heavy industrial and bridge construction projects across Navi Mumbai.",
    icon: Anchor,
    link: "/services/all-terrain-crane-rental",
    features: [
      "160T to 300T capacity",
      "78m–90m main boom",
      "Bridge & infra projects",
      "24/7 from Kalamboli",
    ],
  },
  {
    title: "Crawler Crane Rental",
    description:
      "Heavy-duty crawler cranes for large-scale civil engineering, bridge construction and power plant projects in Navi Mumbai and pan-India.",
    icon: PackageOpen,
    link: "/services/crawler-crane-rental",
    features: [
      "80T to 400T capacity",
      "Bridge construction",
      "Power plant projects",
      "Stable on all terrain",
    ],
  },
  {
    title: "Reach Stacker Rental",
    description:
      "Versatile reach stackers for container handling and stacking operations at JNPT port and logistics yards near Navi Mumbai.",
    icon: ArrowUpCircle,
    link: "/services/reach-stacker-rental",
    features: [
      "45T capacity",
      "3-high stacking",
      "ISO container handling",
      "Port & yard operations",
    ],
  },
  {
    title: "Mobile Crane Rental",
    description:
      "High-capacity mobile cranes for construction and industrial projects across Navi Mumbai. XCMG QAY series 90T–300T available.",
    icon: Construction,
    link: "/services/mobile-crane-rental",
    features: [
      "24/7 availability",
      "Certified operators included",
      "90T to 300T capacity",
      "Navi Mumbai & Panvel service",
    ],
  },
  {
    title: "Manlift & Boom Lift Rental",
    description:
      "Articulating and telescopic boom lifts for working at height. Available from 30 ft to 185 ft working height.",
    icon: ChevronsUp,
    link: "/services/manlift-rental",
    features: [
      "30 ft to 185 ft height",
      "Electric & diesel powered",
      "Articulating & telescopic",
      "Trained operators",
    ],
  },
  {
    title: "Hydra Crane Rental",
    description:
      "Pick-and-carry hydra cranes for factory, industrial and tight-space lifting in Navi Mumbai and Kalamboli.",
    icon: Truck,
    link: "/services/hydra-crane-rental",
    features: [
      "8T to 14T capacity",
      "All-terrain mobility",
      "Factory & site lifting",
      "Same-day deployment",
    ],
  },
  {
    title: "Container Stacker Rental",
    description:
      "Heavy-duty container stackers for container yards, ports and logistics operations near JNPT.",
    icon: Layers,
    link: "/services/container-stacker-rental",
    features: [
      "ISO container compatible",
      "Yard & port use",
      "High efficiency stacking",
      "Experienced operators",
    ],
  },
  {
    title: "Side Shifter Rental",
    description:
      "Efficient side shifters for precise horizontal container positioning in warehouses and terminals.",
    icon: MoveHorizontal,
    link: "/services/side-shifter-rental",
    features: [
      "Precise horizontal control",
      "Multiple attachments",
      "Warehouse & terminal use",
      "Regular maintenance",
    ],
  },
  {
    title: "Pick & Carry (Farana) Crane",
    description:
      "Farana and pick-and-carry cranes for flexible on-site lifting in Navi Mumbai industrial zones.",
    icon: Container,
    link: "/services/pick-carry-crane-rental",
    features: [
      "20T to 50T capacity",
      "360° swing",
      "On-site mobility",
      "Industrial & factory use",
    ],
  },
]);
</script>
