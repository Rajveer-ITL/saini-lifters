<template>
  <footer
    class="w-full transition-colors"
    :class="
      commonVariables.darkMode
        ? 'header-bg-black text-white'
        : 'header-bg-white text-[#234a76]'
    "
  >
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        <!-- Company Info -->
        <div class="space-y-4 lg:col-span-2">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-3xl font-bold">Saini <span class="text-[#FF4057]">Lifters</span></span>
          </NuxtLink>
          <p
            :class="commonVariables.darkMode ? 'text-gray-400' : 'text-[#234a76]/80'"
            class="text-sm"
          >
            Crane on rent across India — Navi Mumbai, Panvel, Kalamboli, Odisha, Madhya Pradesh &amp; more since 2001.<br />
            Strength in Every Lift, Reliability in Every Rise.
          </p>
          <div class="flex flex-col gap-2 pt-1">
            <a
              href="tel:+919322296990"
              class="flex items-center gap-2 bg-[#FF4057] hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors w-fit"
            >
              <PhoneIcon class="h-4 w-4" />
              Call: +91 9322296990
            </a>
            <a
              href="https://wa.me/919322296990?text=Hi%20I%20need%20crane%20on%20rent%20in%20Navi%20Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors w-fit"
            >
              <MessageCircleMore class="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4 lg:col-span-2">
          <h3 class="text-lg font-semibold">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="transition-colors" :class="linkClass">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services Links -->
        <div class="space-y-4 lg:col-span-2">
          <h3 class="text-lg font-semibold">Our Services</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in serviceLinks" :key="link.to">
              <NuxtLink :to="link.to" class="transition-colors" :class="linkClass">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Equipment Links -->
        <div class="space-y-4 lg:col-span-2">
          <h3 class="text-lg font-semibold">Equipment</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in equipmentLinks" :key="link.to">
              <NuxtLink :to="link.to" class="transition-colors" :class="linkClass">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Areas We Serve -->
        <div class="space-y-4 lg:col-span-2">
          <h3 class="text-lg font-semibold">Areas We Serve</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in areaLinks" :key="link.to">
              <NuxtLink :to="link.to" class="transition-colors" :class="linkClass">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4 lg:col-span-2">
          <h3 class="text-lg font-semibold">Contact Us</h3>
          <div class="space-y-3 text-sm">
            <a
              href="tel:+919322296990"
              class="flex items-center space-x-2 transition-colors font-semibold"
              :class="linkClass"
            >
              <PhoneIcon class="h-4 w-4 flex-shrink-0" />
              <span>+91 9322296990</span>
            </a>
            <a
              href="#"
              class="flex items-center space-x-2 transition-colors"
              :class="linkClass"
              @click.prevent="redirectToEmail"
            >
              <MailIcon class="h-4 w-4 flex-shrink-0" />
              <span>charanjit@sainilifters.com</span>
            </a>
            <div class="flex items-start space-x-2" :class="textClass">
              <MapPinIcon class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                Plot No. J-854, Steel Market Rd, Sector AWC, Kalamboli, Panvel,
                Navi Mumbai, Maharashtra 410218
              </span>
            </div>
            <div :class="textClass" class="flex items-center space-x-2">
              <span class="text-[#FF4057] font-semibold">Open 24/7</span>
            </div>
          </div>

          <!-- Map -->
          <div
            class="w-full h-36 rounded-lg overflow-hidden transition-all md:grayscale hover:grayscale-0 mt-2"
            :class="mapBg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.724153957994!2d73.10423237526035!3d19.031873082163685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e91e0aa292ad%3A0x5d915b78913cf77c!2sSaini%20Lifters%20Crane%20Service!5e0!3m2!1sen!2sin!4v1733670993020!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Map location of Saini Lifters Crane Service Kalamboli Navi Mumbai"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-12 pt-8 border-t text-center text-sm transition-colors"
        :class="borderClass"
      >
        <p>&copy; {{ currentYear }} Saini Lifters Crane Service. All rights reserved. | Plot No. J-854, Steel Market Rd, Kalamboli, Navi Mumbai 410218</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleMore,
} from "lucide-vue-next";
import { redirectToEmail, sendWhatsAppMessage } from "~/utils/commonFunctions";
import { commonVariables } from "~/assets/variables/commonVariables";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/faq", label: "FAQ" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/pricing", label: "Rates & Pricing" },
  { to: "/contact-us", label: "Contact" },
];

const equipmentLinks = [
  { to: "/equipment/all-terrain-crane", label: "All Terrain Crane" },
  { to: "/equipment/rough-terrain-crane", label: "Rough Terrain Crane" },
  { to: "/equipment/crawler-crane", label: "Crawler Crane" },
  { to: "/equipment/manlift-boom-lift", label: "Manlift & Boom Lift" },
  { to: "/equipment/reach-stacker", label: "Reach Stacker" },
  { to: "/equipment/forklift", label: "Forklift" },
  { to: "/equipment/side-shifter", label: "Side Shifter" },
  { to: "/equipment/farana", label: "Farana Crane" },
  { to: "/equipment/transport-trailer", label: "Transport Trailer" },
];

const serviceLinks = [
  { to: "/services/mobile-crane-rental", label: "Mobile Crane Rental" },
  { to: "/services/hydra-crane-rental", label: "Hydra Crane Rental" },
  { to: "/services/manlift-rental", label: "Manlift & Boom Lift" },
  { to: "/services/all-terrain-crane-rental", label: "All-Terrain Crane" },
  { to: "/services/reach-stacker-rental", label: "Reach Stacker" },
  { to: "/services/container-stacker-rental", label: "Container Stacker" },
  { to: "/services/crawler-crane-rental", label: "Crawler Crane" },
  { to: "/services/pick-carry-crane-rental", label: "Pick & Carry Crane" },
];

const areaLinks = [
  { to: "/crane-rental/navi-mumbai", label: "Crane Rental Navi Mumbai" },
  { to: "/crane-rental/panvel", label: "Crane Rental Panvel" },
  { to: "/crane-rental/kalamboli", label: "Crane Rental Kalamboli" },
  { to: "/crane-rental/raigad", label: "Crane Rental Raigad" },
  { to: "/crane-rental/mumbai", label: "Crane Rental Mumbai" },
  { to: "/crane-rental/thane", label: "Crane Rental Thane" },
  { to: "/crane-rental/odisha", label: "Crane Rental Odisha" },
  { to: "/crane-rental/madhya-pradesh", label: "Crane Rental Madhya Pradesh" },
];

const linkClass = computed(() =>
  commonVariables.value.darkMode
    ? "text-gray-400 hover:text-[#FF4057]"
    : "text-[#234a76] hover:text-[#FF4057]"
);
const textClass = computed(() =>
  commonVariables.value.darkMode ? "text-gray-400" : "text-[#234a76]"
);
const mapBg = computed(() =>
  commonVariables.value.darkMode ? "bg-gray-800" : "bg-gray-300"
);
const borderClass = computed(() =>
  commonVariables.value.darkMode
    ? "border-gray-800 text-gray-400"
    : "border-gray-300 text-[#234a76]/80"
);
</script>

<style scoped>
.header-bg-white {
  background-color: rgba(255, 255, 255, 0.8);
}
.header-bg-black {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
