<template>
  <div
    class="mt-[65px] xl:mt-[130px] p-4 md:p-8 lg:p-12 flex justify-center items-center"
  >
    <div class="mx-auto max-w-5xl">
      <div class="grid gap-6 lg:grid-cols-2">
        <!-- Contact Information -->
        <div class="space-y-4">
          <div>
            <h1
              class="text-3xl font-bold tracking-tighter text-[#234a76] dark:text-white sm:text-4xl md:text-5xl"
            >
              Get in Touch
            </h1>
            <p class="text-gray-600 dark:text-gray-400 md:text-lg">
              Let's discuss how we can help with your heavy lifting and
              industrial needs.
            </p>
          </div>
          <div class="relative">
            <Globe />
          </div>
          <div class="space-y-2 flex flex-col">
            <div class="flex items-center space-x-3 dark:text-white">
              <PhoneCall class="h-5 w-5 text-[#FF4057]" />
              <span>+91 9322296990</span>
            </div>
            <div class="flex items-center space-x-3 dark:text-white">
              <Mail class="h-5 w-5 text-[#FF4057]" />
              <span>charanjit@sainilifters.com</span>
            </div>
            <div class="flex items-center space-x-3 dark:text-white">
              <MapPin class="h-5 w-5 text-[#FF4057]" />
              <span
                >Plot No. J-854, Steel Market Rd, Kalamboli, Maharashtra</span
              >
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="relative flex flex-col justify-center overflow-hidden rounded-lg border border-red-500/30 bg-background md:shadow-xl"
        >
          <BorderBeam
            :size="400"
            :duration="8"
            :delay="9"
            :border-width="1.5"
          />
          <div class="pt-6 px-4 pb-4">
            <h2 class="dark:text-white text-lg font-semibold">
              Send us a Message
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          <div class="pt-4 px-4 pb-6">
            <form @submit.prevent="onSubmit" class="space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div class="space-y-2">
                  <label for="first-name" class="dark:text-white"
                    >First name</label
                  >
                  <input
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                    class="border border-[#234a76] dark:border-gray-500 dark:bg-zinc-950 dark:text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                  />
                </div>
                <div class="space-y-2">
                  <label for="last-name" class="dark:text-white"
                    >Last name</label
                  >
                  <input
                    id="last-name"
                    v-model="form.lastName"
                    placeholder="Enter your last name"
                    required
                    class="border border-[#234a76] dark:border-gray-500 dark:bg-zinc-950 dark:text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label for="phone" class="dark:text-white">Phone Number</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  placeholder="Enter your phone number"
                  required
                  class="border border-[#234a76] dark:border-gray-500 dark:bg-zinc-950 dark:text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                />
              </div>
              <div class="space-y-2">
                <label for="email" class="dark:text-white">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  class="border border-[#234a76] dark:border-gray-500 dark:bg-zinc-950 dark:text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                />
              </div>
              <div class="space-y-2">
                <label for="message" class="dark:text-white">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Enter your message"
                  required
                  class="min-h-[100px] border border-[#234a76] dark:border-gray-500 dark:bg-zinc-950 dark:text-white placeholder:text-zinc-400 w-full rounded-md p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-red-500 text-white hover:bg-red-600 rounded-md p-2 disabled:opacity-50"
              >
                <span v-if="isLoading" class="flex items-center justify-center">
                  <Loader class="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { PhoneCall, Mail, MapPin, Loader } from "lucide-vue-next";
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

useHead({
  title:
    "Contact Saini Lifters | Get a Quote for Crane Rental & Lifting Services",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Saini Lifters for professional crane rental, heavy lifting solutions, and equipment services. Contact us today for inquiries and customized lifting solutions.",
    },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.sainilifters.com/contact-us" },
    {
      property: "og:title",
      content: "Contact Saini Lifters | Crane Rental & Lifting Solutions",
    },
    {
      property: "og:description",
      content:
        "Need a reliable crane rental service? Contact Saini Lifters for expert lifting solutions, customized services, and nationwide coverage. Get a free consultation today!",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/contact-page-6BHvaWdqcIDkfsWHceg0G6MLmwqa6U.webp",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.sainilifters.com/contact-us" },
    {
      name: "twitter:title",
      content: "Contact Saini Lifters | Crane Rental & Lifting Solutions",
    },
    {
      name: "twitter:description",
      content:
        "Reach out to Saini Lifters for professional crane rental and lifting solutions. Get a quote for your project and speak with our expert team today.",
    },
    {
      name: "twitter:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/contact-page-6BHvaWdqcIDkfsWHceg0G6MLmwqa6U.webp",
    },

    // Additional SEO Boosters
    {
      name: "keywords",
      content:
        "contact crane rental, crane rental inquiry, heavy lifting services, lifting solutions contact, Saini Lifters contact",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Saini Lifters" },
  ],
});
</script>
