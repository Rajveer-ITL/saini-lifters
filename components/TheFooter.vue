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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
        <!-- Company Info -->
        <div class="space-y-4 col-span-2">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-3xl font-bold">Saini Lifters</span>
          </NuxtLink>
          <p
            :class="
              commonVariables.darkMode ? 'text-gray-400' : 'text-[#234a76]/80'
            "
            class="text-sm"
          >
            Strength in Every Lift,<br />Reliability in Every Rise
          </p>
          <div class="flex space-x-4">
            <a
              href="https://facebook.com"
              class="transition-colors hover:text-[#FF4057]"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon class="h-6 w-6" />
            </a>
            <a
              href="https://in.linkedin.com"
              class="transition-colors hover:text-[#FF4057]"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin class="h-6 w-6" />
            </a>

            <a
              href="https://twitter.com"
              class="transition-colors hover:text-[#FF4057]"
              aria-label="Visit our Twitter profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon class="h-6 w-6" />
            </a>

            <a
              href="#"
              class="transition-colors hover:text-[#FF4057]"
              @click.prevent="sendWhatsAppMessage"
              aria-label="Send us a message on WhatsApp"
            >
              <MessageCircleMore class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4 col-span-1">
          <h3 class="text-lg font-semibold">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="transition-colors"
                :class="linkClass"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4 col-span-2">
          <h3 class="text-lg font-semibold">Contact Us</h3>
          <div class="space-y-3">
            <a
              href="tel:+919322296990"
              class="flex items-center space-x-2 transition-colors"
              :class="linkClass"
            >
              <PhoneIcon class="h-5 w-5" />
              <span>+91 9322296990</span>
            </a>
            <a
              href="#"
              class="flex items-center space-x-2 transition-colors"
              :class="linkClass"
              @click.prevent="redirectToEmail"
            >
              <MailIcon class="h-5 w-5" />
              <span>charanjit@sainilifters.com</span>
            </a>
            <div class="flex items-start space-x-2" :class="textClass">
              <MapPinIcon class="h-5 w-5 mt-1 flex-shrink-0" />
              <span>
                Plot No. J-854, Steel Market Rd, Sector AWC, Kalamboli, Panvel,
                Navi Mumbai, Maharashtra 410218
              </span>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="space-y-4 col-span-3">
          <h3 class="text-lg font-semibold">Location</h3>
          <div
            class="w-full h-48 rounded-lg overflow-hidden transition-all md:grayscale hover:grayscale-0"
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
              title="Google Map location of Saini Lifters Crane Service"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-12 pt-8 border-t text-center text-sm transition-colors"
        :class="borderClass"
      >
        <p>&copy; {{ currentYear }} Saini Lifters. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  Linkedin,
  TwitterIcon,
  MessageCircleMore,
} from "lucide-vue-next";
import { redirectToEmail, sendWhatsAppMessage } from "~/utils/commonFunctions";
import { commonVariables } from "~/assets/variables/commonVariables";

const currentYear = new Date().getFullYear();
const quickLinks = [
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  // { to: "/work", label: "Our Work" },
  { to: "/contact-us", label: "Contact" },
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
