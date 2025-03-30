<script setup>
import { Home, Wrench } from "lucide-vue-next";
import { useSeoMeta } from "#imports";

defineProps({
  error: Object,
});

// Add SEO metadata
useSeoMeta({
  title: "Page Not Found - Saini Lifters",
  description:
    "Oops! The page you are looking for is missing. Check out our services or return to the homepage.",
  ogTitle: "404 - Page Not Found | Saini Lifters",
  ogDescription:
    "We couldn't find the page you were looking for. But don't worry, we offer the best crane services. Explore now!",
  ogImage:
    "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp", // Update with an actual image
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div
    v-if="error?.statusCode === 404"
    class="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4"
  >
    <div class="text-center space-y-8 max-w-2xl px-4">
      <div
        class="md:text-[12rem] text-[8rem] font-bold leading-none tracking-tight text-[#FF4057] select-none font-roslindale"
      >
        404
      </div>

      <div class="space-y-4">
        <h1 class="text-4xl font-bold tracking-tight">Page Not Found</h1>
        <p class="text-xl max-w-lg mx-auto">
          Nothing is too high or too heavy for us, but this page seems to have
          gone missing.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <NuxtLink
          to="/"
          class="min-w-[200px] bg-[#FF4057] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <Home class="h-5 w-5" />
          Back to Home
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="min-w-[200px] border border-[#FF4057] text-[#FF4057] px-6 py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <Wrench class="h-5 w-5" />
          View Our Services
        </NuxtLink>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF4057] to-transparent"
    />
  </div>

  <div v-else class="text-center py-10">
    <h1 class="text-2xl font-bold">
      An error occurred: {{ error.statusCode }}
    </h1>
    <p class="text-lg text-gray-600">Something went wrong. Please try again.</p>
    <NuxtLink to="/" class="mt-4 text-blue-500 font-semibold">
      Go back to home
    </NuxtLink>
  </div>
</template>
