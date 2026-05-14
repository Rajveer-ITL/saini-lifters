<template>
  <div class="min-h-screen mt-[70px]">
    <!-- Hero Banner -->
    <section class="bg-gray-50 dark:bg-zinc-900/50 py-12 px-4 text-center">
      <h1
        class="text-4xl md:text-5xl font-bold tracking-tight text-[#234a76] dark:text-white mb-3"
      >
        Contact <span class="text-[#FF4057]">Saini Lifters</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
        Crane on rent in Navi Mumbai, Panvel &amp; Kalamboli — call, email or fill the form below and our team will respond within the hour.
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
                    v-model="form.firstName"
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
    <section class="max-w-5xl mx-auto px-4 pb-12">
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

    <!-- Service Areas -->
    <section class="max-w-5xl mx-auto px-4 py-10">
      <h2 class="text-2xl font-bold mb-4 text-center">Areas We Serve</h2>
      <p class="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-6">
        Our crane fleet is based at Kalamboli, Navi Mumbai — enabling fast deployment across the following areas:
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <div
          v-for="area in serviceAreas"
          :key="area"
          class="flex items-center gap-2 p-3 border border-gray-200 dark:border-zinc-700 rounded-lg"
        >
          <span class="w-2 h-2 rounded-full bg-[#FF4057] flex-shrink-0"></span>
          <span class="text-sm text-gray-700 dark:text-gray-300">{{ area }}</span>
        </div>
      </div>
    </section>

    <!-- About + Directions -->
    <section class="max-w-5xl mx-auto px-4 pb-16">
      <div class="bg-gray-50 dark:bg-zinc-900/50 rounded-2xl p-6 md:p-8 space-y-4">
        <h2 class="text-2xl font-bold">Crane Rental in Navi Mumbai – Available 24/7</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Saini Lifters is Navi Mumbai's trusted crane rental company, operating since 2001 from our Kalamboli yard. We provide
          <NuxtLink to="/services/all-terrain-crane-rental" class="text-[#FF4057] font-semibold hover:underline">all terrain telescopic crane rental</NuxtLink>,
          <NuxtLink to="/services/mobile-crane-rental" class="text-[#FF4057] hover:underline">mobile crane rental</NuxtLink>,
          <NuxtLink to="/services/crawler-crane-rental" class="text-[#FF4057] hover:underline">crawler crane rental</NuxtLink>,
          <NuxtLink to="/services/hydra-crane-rental" class="text-[#FF4057] hover:underline">hydra crane rental</NuxtLink>,
          <NuxtLink to="/services/manlift-rental" class="text-[#FF4057] hover:underline">manlift and boom lift rental</NuxtLink>,
          and <NuxtLink to="/services/reach-stacker-rental" class="text-[#FF4057] hover:underline">reach stacker rental</NuxtLink> with certified operators included.
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          Our XCMG QAY160 (160T) and QAY300 (300T) all terrain telescopic cranes are available around the clock for bridge construction, power plant installations, industrial machinery erection and high-rise building projects across Navi Mumbai, Panvel, Raigad, Mumbai and Thane.
        </p>
        <h3 class="text-lg font-bold pt-2">How to Reach Our Yard at Kalamboli</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Our crane yard is located at Plot No. J-854, Steel Market Road, Sector AWC, Kalamboli — inside the Navi Mumbai Steel Market industrial complex, just off the Mumbai–Pune Expressway (NH-48) at the Kalamboli exit. Key landmarks nearby include Panvel Railway Station (8 km), JNPT Port Gate 1 (12 km), Kharghar Sector 35 (5 km) and Taloja MIDC (10 km).
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          From Panvel: take NH-48 towards Mumbai, exit at Kalamboli interchange and follow signs for Steel Market Road. From JNPT: take the Uran–Panvel road towards Kalamboli, turn left at the Kalamboli steel market. We are open 24 hours and our team is always available for emergency crane deployment across Navi Mumbai and Raigad.
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          For immediate requirements, call us directly at <a href="tel:+919322296990" class="text-[#FF4057] font-semibold">+91 9322296990</a>. For project enquiries, billing and long-term contracts, use the contact form above or email us at <a href="mailto:charanjit@sainilifters.com" class="text-[#FF4057] hover:underline">charanjit@sainilifters.com</a>. We typically respond to form submissions within one business hour.
        </p>
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
import { useToast } from "vue-toastification";

const toast = useToast();

const serviceAreas = [
  "Kalamboli", "Panvel", "Navi Mumbai", "Raigad",
  "Mumbai", "Thane", "Taloja MIDC", "Patalganga MIDC",
  "JNPT / Uran", "Kharghar", "Belapur", "Khopoli",
];

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
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: { ...form },
    });
    toast.success("Message sent! We'll get back to you soon.");
    form.firstName = "";
    form.lastName = "";
    form.phone = "";
    form.email = "";
    form.message = "";
  } catch {
    toast.error("Something went wrong. Please call us directly at +91 9322296990.");
  } finally {
    isLoading.value = false;
  }
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
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Saini Lifters Crane Service",
        telephone: "+91-9322296990",
        email: "charanjit@sainilifters.com",
        url: "https://www.sainilifters.com",
        image: "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. J-854, Steel Market Rd, Sector AWC",
          addressLocality: "Kalamboli, Panvel",
          addressRegion: "Navi Mumbai, Maharashtra",
          postalCode: "410218",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.0319,
          longitude: 73.1042,
        },
        openingHours: "Mo-Su 00:00-24:00",
        priceRange: "$$",
        areaServed: ["Navi Mumbai", "Panvel", "Kalamboli", "Raigad", "Mumbai", "Thane", "Maharashtra"],
        description: "Crane on rent in Navi Mumbai, Panvel & Kalamboli since 2001. All terrain telescopic cranes, mobile cranes, hydra cranes, manlifts & reach stackers.",
      }),
    },
  ],
});
</script>
