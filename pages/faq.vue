<template>
  <div class="min-h-screen mt-[70px]">
    <nav
      class="container mx-auto px-4 pt-4 text-sm text-gray-500 dark:text-gray-400"
    >
      <NuxtLink to="/" class="hover:text-[#FF4057]">Home</NuxtLink>
      <span class="mx-2">/</span>
      <span>FAQ</span>
    </nav>

    <section class="relative py-16 px-4 bg-gray-50 dark:bg-zinc-900/50 mt-4">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions -
          <span class="text-[#FF4057]">Crane Rental in Navi Mumbai</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Everything you need to know about crane on rent in Navi Mumbai,
          Panvel, Kalamboli and across Maharashtra.
        </p>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-4 py-16">
      <div class="space-y-6">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span class="pr-4">{{ faq.q }}</span>
            <span class="text-[#FF4057] flex-shrink-0 text-xl">{{
              openIndex === index ? "−" : "+"
            }}</span>
          </button>
          <div
            v-if="openIndex === index"
            class="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>

      <div
        class="mt-12 p-6 bg-[#FF4057]/5 dark:bg-[#FF4057]/10 rounded-xl text-center"
      >
        <h2 class="text-2xl font-bold mb-3">Still have questions?</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          Call us directly - we're available 24/7.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+919322296990"
            class="bg-[#FF4057] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >Call: +91 9322296990</a
          >
          <NuxtLink
            to="/contact-us"
            class="border-2 border-[#FF4057] text-[#FF4057] hover:bg-[#FF4057] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >Send Enquiry</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useHead } from "#imports";

const openIndex = ref(0);
const toggle = (i) => {
  openIndex.value = openIndex.value === i ? -1 : i;
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does crane rental cost in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Crane rental rates in Navi Mumbai depend on crane type, capacity, shift duration and project location. As a general guide: Hydra crane (8-14T) costs approximately ₹4,000–₹8,000 per day; Mobile crane (50-100T) costs ₹20,000–₹50,000 per day; All-terrain crane (160-300T) is priced on project basis. Monthly rentals are available at preferential rates. Contact Saini Lifters at +91 9322296990 for an accurate free quote." } },
    { "@type": "Question", name: "Which types of cranes are available on rent in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Saini Lifters offers a full range of cranes and lifting equipment: Mobile cranes (90T–300T), Hydra cranes / pick-and-carry (8T–14T), All-terrain cranes - XCMG QAY160, QAY200, QAY300 and Grove GMK90, Farana / pick-and-carry cranes (20T–50T), Manlift & boom lifts (30–185 ft), Scissor lifts (19–50 ft), Reach stackers (45T), Container stackers (45T), Side shifters (20–40T), Crawler cranes (80T–400T)." } },
    { "@type": "Question", name: "Do you provide crane operators along with the rental?", acceptedAnswer: { "@type": "Answer", text: "Yes. All crane rentals from Saini Lifters include certified and trained operators at no additional charge. Our operators have years of hands-on experience with all equipment types and are well-versed in safety protocols and lifting regulations." } },
    { "@type": "Question", name: "What is the minimum hire period for crane rental in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "The minimum hire period is one day (one 8-hour or 12-hour shift). We also offer weekly and monthly rental contracts at preferential pricing. For long-term projects, please contact us for custom rates." } },
    { "@type": "Question", name: "How quickly can a crane be mobilised in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Saini Lifters can typically mobilise a crane within 24–48 hours in Navi Mumbai, Panvel, Kalamboli and surrounding areas. Since our base is in Kalamboli, local deployments can sometimes happen on the same day. Contact us at +91 9322296990 to confirm availability." } },
    { "@type": "Question", name: "Which areas in Navi Mumbai and India do you serve?", acceptedAnswer: { "@type": "Answer", text: "We serve all of Navi Mumbai (Panvel, Kalamboli, Kharghar, Belapur, Airoli, Nerul, Vashi, Turbhe, Ulwe etc.), Raigad district, Mumbai, Thane and across Maharashtra. We also deploy across India including Odisha, Madhya Pradesh, Gujarat, Andhra Pradesh and other states for large projects. Call +91 9322296990 to confirm deployment to your location." } },
    { "@type": "Question", name: "Do you provide manlift and boom lift on rent in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Yes. Saini Lifters provides articulating and telescopic boom lifts (manlifts) from 30 ft to 185 ft working height. We also offer scissor lifts for indoor use. Electric and diesel variants are available. Ideal for construction, painting, electrical work, maintenance and industrial inspections." } },
    { "@type": "Question", name: "What is a hydra crane and what is it used for?", acceptedAnswer: { "@type": "Answer", text: "A hydra crane (also called a pick-and-carry crane) is a compact, mobile lifting machine that can pick up a load and carry it to a different location on its own wheels. It's ideal for factory operations, machine shifting, industrial maintenance and lifting in confined spaces. Saini Lifters offers hydra cranes from 8 to 14 tonnes capacity." } },
    { "@type": "Question", name: "What is a Farana crane?", acceptedAnswer: { "@type": "Answer", text: "A farana (or pharana) is a pick-and-carry crane type commonly used in industrial and infrastructure projects in India. It is designed to lift and carry loads over short distances on-site, offering 360° swing and good mobility. Saini Lifters provides farana cranes from 20T to 50T capacity." } },
    { "@type": "Question", name: "Can you handle bridge construction projects in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Yes. Saini Lifters has extensive experience in bridge construction projects across Navi Mumbai, Raigad and Maharashtra. Our XCMG QAY300 (300-tonne) and crawler cranes (up to 400T) are ideal for bridge segment erection and heavy infrastructure work. Call +91 9322296990 to discuss your project." } },
    { "@type": "Question", name: "Do you offer reach stacker and container stacker rental near JNPT?", acceptedAnswer: { "@type": "Answer", text: "Yes. Saini Lifters provides reach stackers (45T) and container stackers for port and logistics operations near JNPT, Navi Mumbai. Our equipment is available for container yard, terminal and warehouse operations." } },
    { "@type": "Question", name: "What safety measures does Saini Lifters follow?", acceptedAnswer: { "@type": "Answer", text: "Safety is our top priority. All equipment undergoes regular maintenance and inspection. Our operators are certified and trained in safe lifting practices. We conduct pre-lift risk assessments, use certified rigging gear, and comply with all applicable Indian safety standards and regulations." } },
    { "@type": "Question", name: "How do I book a crane on rent in Navi Mumbai?", acceptedAnswer: { "@type": "Answer", text: "Booking is simple: (1) Call us at +91 9322296990 or send an enquiry via our contact form. (2) Describe your work requirements - equipment needed, location, dates, shift hours. (3) Receive a quote within 1-2 hours. (4) Confirm the booking. We will deploy the equipment at your site as agreed." } },
    { "@type": "Question", name: "What is the contact number for Saini Lifters Crane Service?", acceptedAnswer: { "@type": "Answer", text: "You can reach Saini Lifters at +91 9322296990 (call or WhatsApp). Our email is charanjit@sainilifters.com. We are open 24/7. Our office is located at Plot No. J-854, Steel Market Rd, Sector AWC, Kalamboli, Panvel, Navi Mumbai, Maharashtra 410218." } },
    { "@type": "Question", name: "Do you provide cranes near JNPT port area?", acceptedAnswer: { "@type": "Answer", text: "Yes. Saini Lifters regularly provides cranes, reach stackers and container stackers for projects near JNPT (Jawaharlal Nehru Port Trust). Our Kalamboli base is close to the JNPT area, ensuring quick response for port-related projects." } },
  ],
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
      name: "FAQ",
      item: "https://www.sainilifters.com/faq",
    },
  ],
};

useHead({
  title: "FAQ - Crane Rental in Navi Mumbai | Saini Lifters",
  meta: [
    {
      name: "description",
      content:
        "Frequently asked questions about crane on rent in Navi Mumbai, Panvel & Kalamboli. Pricing, equipment types, operators, minimum hire, mobilisation time and more. Saini Lifters.",
    },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "crane rental faq navi mumbai, crane on rent questions, crane rental cost navi mumbai, crane hire questions panvel",
    },
    { property: "og:url", content: "https://www.sainilifters.com/faq" },
    {
      property: "og:title",
      content: "FAQ - Crane Rental in Navi Mumbai | Saini Lifters",
    },
    {
      property: "og:description",
      content:
        "Frequently asked questions about crane rental in Navi Mumbai. Pricing, equipment, operators & more. Saini Lifters.",
    },
    {
      property: "og:image",
      content:
        "https://7egmmdiwhthl4u2i.public.blob.vercel-storage.com/home-page-zCauYRGJmdC2cPgGRmXbxzaC2Yqgpd.webp",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.sainilifters.com/faq" }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(faqSchema) },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
  ],
});

const faqs = [
  {
    q: "How much does crane rental cost in Navi Mumbai?",
    a: "Crane rental rates in Navi Mumbai depend on crane type, capacity, shift duration and project location. As a general guide: Hydra crane (8-14T) costs approximately ₹4,000–₹8,000 per day; Mobile crane (50-100T) costs ₹20,000–₹50,000 per day; All-terrain crane (160-300T) is priced on project basis. Monthly rentals are available at preferential rates. Contact Saini Lifters at +91 9322296990 for an accurate free quote.",
  },
  {
    q: "Which types of cranes are available on rent in Navi Mumbai?",
    a: "Saini Lifters offers a full range of cranes and lifting equipment: Mobile cranes (90T–300T), Hydra cranes / pick-and-carry (8T–14T), All-terrain cranes - XCMG QAY160, QAY200, QAY300 and Grove GMK90, Farana / pick-and-carry cranes (20T–50T), Manlift & boom lifts (30–185 ft), Scissor lifts (19–50 ft), Reach stackers (45T), Container stackers (45T), Side shifters (20–40T), Crawler cranes (80T–400T).",
  },
  {
    q: "Do you provide crane operators along with the rental?",
    a: "Yes. All crane rentals from Saini Lifters include certified and trained operators at no additional charge. Our operators have years of hands-on experience with all equipment types and are well-versed in safety protocols and lifting regulations.",
  },
  {
    q: "What is the minimum hire period for crane rental in Navi Mumbai?",
    a: "The minimum hire period is one day (one 8-hour or 12-hour shift). We also offer weekly and monthly rental contracts at preferential pricing. For long-term projects, please contact us for custom rates.",
  },
  {
    q: "How quickly can a crane be mobilised in Navi Mumbai?",
    a: "Saini Lifters can typically mobilise a crane within 24–48 hours in Navi Mumbai, Panvel, Kalamboli and surrounding areas. Since our base is in Kalamboli, local deployments can sometimes happen on the same day. Contact us at +91 9322296990 to confirm availability.",
  },
  {
    q: "Which areas in Navi Mumbai and Maharashtra do you serve?",
    a: "We serve all of Navi Mumbai (Panvel, Kalamboli, Kharghar, Belapur, Airoli, Nerul, Vashi, Turbhe, Ulwe etc.), Raigad district, Mumbai, Thane and across Maharashtra. For areas outside Navi Mumbai, please call us to confirm deployment feasibility.",
  },
  {
    q: "Do you provide manlift and boom lift on rent in Navi Mumbai?",
    a: "Yes. Saini Lifters provides articulating and telescopic boom lifts (manlifts) from 30 ft to 185 ft working height. We also offer scissor lifts for indoor use. Electric and diesel variants are available. Ideal for construction, painting, electrical work, maintenance and industrial inspections.",
  },
  {
    q: "What is a hydra crane and what is it used for?",
    a: "A hydra crane (also called a pick-and-carry crane) is a compact, mobile lifting machine that can pick up a load and carry it to a different location on its own wheels. It's ideal for factory operations, machine shifting, industrial maintenance and lifting in confined spaces. Saini Lifters offers hydra cranes from 8 to 14 tonnes capacity.",
  },
  {
    q: "What is a Farana crane?",
    a: "A farana (or pharana) is a pick-and-carry crane type commonly used in industrial and infrastructure projects in India. It is designed to lift and carry loads over short distances on-site, offering 360° swing and good mobility. Saini Lifters provides farana cranes from 20T to 50T capacity.",
  },
  {
    q: "Can you handle bridge construction projects in Navi Mumbai?",
    a: "Yes. Saini Lifters has extensive experience in bridge construction projects across Navi Mumbai, Raigad and Maharashtra. Our XCMG QAY300 (300-tonne) and crawler cranes (up to 400T) are ideal for bridge segment erection and heavy infrastructure work. Call +91 9322296990 to discuss your project.",
  },
  {
    q: "Do you offer reach stacker and container stacker rental near JNPT?",
    a: "Yes. Saini Lifters provides reach stackers (45T) and container stackers for port and logistics operations near JNPT, Navi Mumbai. Our equipment is available for container yard, terminal and warehouse operations.",
  },
  {
    q: "What safety measures does Saini Lifters follow?",
    a: "Safety is our top priority. All equipment undergoes regular maintenance and inspection. Our operators are certified and trained in safe lifting practices. We conduct pre-lift risk assessments, use certified rigging gear, and comply with all applicable Indian safety standards and regulations.",
  },
  {
    q: "How do I book a crane on rent in Navi Mumbai?",
    a: "Booking is simple: (1) Call us at +91 9322296990 or send an enquiry via our contact form. (2) Describe your work requirements - equipment needed, location, dates, shift hours. (3) Receive a quote within 1-2 hours. (4) Confirm the booking. We will deploy the equipment at your site as agreed.",
  },
  {
    q: "What is the contact number for Saini Lifters Crane Service?",
    a: "You can reach Saini Lifters at +91 9322296990 (call or WhatsApp). Our email is charanjit@sainilifters.com. We are open 24/7. Our office is located at Plot No. J-854, Steel Market Rd, Sector AWC, Kalamboli, Panvel, Navi Mumbai, Maharashtra 410218.",
  },
  {
    q: "Do you provide cranes near JNPT port area?",
    a: "Yes. Saini Lifters regularly provides cranes, reach stackers and container stackers for projects near JNPT (Jawaharlal Nehru Port Trust). Our Kalamboli base is close to the JNPT area, ensuring quick response for port-related projects.",
  },
];
</script>
