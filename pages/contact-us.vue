<template>
  <div class="min-h-screen mt-[70px]">
    <!-- Hero Banner -->
    <section class="bg-gray-50 dark:bg-zinc-900/50 py-12 px-4 text-center">
      <h1
        class="text-4xl md:text-5xl font-bold tracking-tight text-[#234a76] dark:text-white mb-3"
      >
        Get in <span class="text-[#FF4057]">Touch</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
        Let's discuss how we can help with your heavy lifting and industrial
        needs.
      </p>
    </section>

    <!-- Quick contact bar -->
    <div class="bg-[#FF4057] text-white py-3 px-4">
      <div
        class="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm font-semibold"
      >
        <a
          href="tel:+919322296990"
          class="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <PhoneCall class="h-4 w-4" />
          +91 9322296990
        </a>
        <span class="hidden sm:block opacity-40">|</span>
        <span class="flex items-center gap-2">
          <Clock class="h-4 w-4" />
          Available 24/7 - Including Weekends
        </span>
        <span class="hidden sm:block opacity-40">|</span>
        <span class="flex items-center gap-2">
          <MapPin class="h-4 w-4" />
          Kalamboli, Navi Mumbai
        </span>
      </div>
    </div>

    <!-- Main two-column section -->
    <section class="max-w-5xl mx-auto px-4 py-14">
      <div class="grid gap-10 lg:grid-cols-2 items-start">
        <!-- Left: Globe + Contact Details -->
        <div class="space-y-6">
          <div class="relative">
            <Globe />
          </div>

          <!-- Contact detail cards -->
          <div class="grid gap-4">
            <a
              href="tel:+919322296990"
              class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-[#FF4057] transition-colors group"
            >
              <div
                class="w-10 h-10 rounded-full bg-[#FF4057]/10 flex items-center justify-center flex-shrink-0"
              >
                <PhoneCall class="h-5 w-5 text-[#FF4057]" />
              </div>
              <div>
                <p
                  class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Call Us
                </p>
                <p
                  class="font-semibold dark:text-white group-hover:text-[#FF4057] transition-colors"
                >
                  +91 9322296990
                </p>
              </div>
            </a>

            <div
              class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-700"
            >
              <div
                class="w-10 h-10 rounded-full bg-[#FF4057]/10 flex items-center justify-center flex-shrink-0"
              >
                <Mail class="h-5 w-5 text-[#FF4057]" />
              </div>
              <div>
                <p
                  class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Email
                </p>
                <p class="font-semibold dark:text-white">
                  charanjit@sainilifters.com
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-700"
            >
              <div
                class="w-10 h-10 rounded-full bg-[#FF4057]/10 flex items-center justify-center flex-shrink-0"
              >
                <MapPin class="h-5 w-5 text-[#FF4057]" />
              </div>
              <div>
                <p
                  class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Our Yard
                </p>
                <p class="font-semibold dark:text-white text-sm leading-snug">
                  Plot No. J-854, Steel Market Rd, Sector AWC,<br />Kalamboli,
                  Panvel, Navi Mumbai 410218
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div
          class="relative flex flex-col overflow-hidden rounded-xl border border-red-500/30 bg-background shadow-xl"
        >
          <BorderBeam
            :size="400"
            :duration="8"
            :delay="9"
            :border-width="1.5"
          />
          <div class="px-6 pt-7 pb-3">
            <h2 class="dark:text-white text-xl font-bold">Send us a Message</h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Fill out the form and we'll get back to you shortly.
            </p>
          </div>
          <div class="px-6 pb-8 pt-2">
            <form @submit.prevent="onSubmit" class="space-y-4">
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-1">
                  <label
                    for="first-name"
                    class="text-sm font-medium dark:text-white"
                    >First name</label
                  >
                  <input
                    id="first-name"
                    placeholder="First name"
                    required
                    class="border border-gray-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white placeholder:text-zinc-400 w-full rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FF4057] transition-colors"
                  />
                </div>
                <div class="space-y-1">
                  <label
                    for="last-name"
                    class="text-sm font-medium dark:text-white"
                    >Last name</label
                  >
                  <input
                    id="last-name"
                    v-model="form.lastName"
                    placeholder="Last name"
                    required
                    class="border border-gray-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white placeholder:text-zinc-400 w-full rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FF4057] transition-colors"
                  />
                </div>
              </div>
              <div class="space-y-1">
                <label for="phone" class="text-sm font-medium dark:text-white"
                  >Phone Number</label
                >
                <input
                  id="phone"
                  v-model="form.phone"
                  placeholder="Your phone number"
                  required
                  class="border border-gray-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white placeholder:text-zinc-400 w-full rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FF4057] transition-colors"
                />
              </div>
              <div class="space-y-1">
                <label for="email" class="text-sm font-medium dark:text-white"
                  >Email</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  placeholder="Your email address"
                  required
                  type="email"
                  class="border border-gray-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white placeholder:text-zinc-400 w-full rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FF4057] transition-colors"
                />
              </div>
              <div class="space-y-1">
                <label for="message" class="text-sm font-medium dark:text-white"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Describe your crane or lifting requirement..."
                  required
                  class="min-h-[110px] border border-gray-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white placeholder:text-zinc-400 w-full rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FF4057] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-[#FF4057] text-white hover:bg-red-600 rounded-lg py-2.5 font-semibold transition-colors disabled:opacity-50"
              >
                <span
                  v-if="isLoading"
                  class="flex items-center justify-center gap-2"
                >
                  <Loader class="h-4 w-4 animate-spin" />
                  Sending...
                </span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Full-width Map Section -->
    <section class="max-w-5xl mx-auto px-4 pb-16">
      <div
        class="rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-sm"
      >
        <div
          class="bg-gray-50 dark:bg-zinc-800 px-6 py-4 flex items-center gap-3"
        >
          <MapPin class="h-5 w-5 text-[#FF4057]" />
          <div>
            <p class="font-semibold dark:text-white">Find Us on the Map</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Plot No. J-854, Steel Market Rd, Kalamboli, Navi Mumbai 410218
            </p>
          </div>
        </div>
        <div class="h-72 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.724153957994!2d73.10423237526035!3d19.031873082163685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e91e0aa292ad%3A0x5d915b78913cf77c!2sSaini%20Lifters%20Crane%20Service!5e0!3m2!1sen!2sin!4v1733670993020!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Saini Lifters Crane Service - Kalamboli, Navi Mumbai"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { PhoneCall, Mail, MapPin, Loader, Clock } from "lucide-vue-next";
import Globe from "@/components/inspiraUi/globe.vue";
import BorderBeam from "@/components/inspiraUi/borderBeam.vue";
import { useHead } from "#imports";

const form = reactive({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
});
const isLoading = ref(false);

const onSubmit = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};

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
      name: "Contact Us",
      item: "https://www.sainilifters.com/contact-us",
    },
  ],
};

useHead({
  title: "Contact Saini Lifters | Crane on Rent in Navi Mumbai - Call Now",
  meta: [
    {
      name: "description",
      content:
        "Contact Saini Lifters for crane on rent in Navi Mumbai, Panvel & Kalamboli. Call +91 9322296990 or WhatsApp for a free quote. Plot No. J-854, Steel Market Rd, Kalamboli 410218.",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
    {
      name: "keywords",
      content:
        "saini lifters contact, crane rental contact navi mumbai, crane on rent panvel contact, crane service kalamboli phone number",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/contact-us" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Saini Lifters" },
    {
      property: "og:title",
      content: "Contact Saini Lifters | Crane on Rent in Navi Mumbai",
    },
    {
      property: "og:description",
      content:
        "Contact Saini Lifters for crane on rent in Navi Mumbai, Panvel & Kalamboli. Call +91 9322296990 for a free quote.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/contact-page-6BHvaWdqcIDkfsWHceg0G6MLmwqa6U.webp",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.sainilifters.com/contact-us" },
    {
      name: "twitter:title",
      content: "Contact Saini Lifters | Crane on Rent Navi Mumbai",
    },
    {
      name: "twitter:description",
      content:
        "Contact Saini Lifters for crane on rent in Navi Mumbai. Call +91 9322296990.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/contact-page-6BHvaWdqcIDkfsWHceg0G6MLmwqa6U.webp",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/contact-us" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
  ],
});
</script>
