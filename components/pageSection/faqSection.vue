<script setup>
import { ref, computed } from "vue";
import FAQItem from "@/components/base/faqItem.vue";

const faqs = [
  {
    question: "What types of lifting equipment does Saini Lifters provide?",
    answer:
      "Saini Lifters provides a comprehensive range of lifting equipment including tower cranes, mobile cranes, crawler cranes, and specialized heavy lifting machinery for construction projects of all sizes. Our equipment is regularly maintained and certified to ensure safety and reliability.",
  },
  {
    question: "How do I request a quote for your lifting services?",
    answer:
      "You can request a quote by contacting us through our website, email, or WhatsApp. Please provide details about your project, including location, timeline, and specific lifting requirements. Our team will respond within 24 hours with a detailed quote tailored to your needs.",
  },
  {
    question: "What safety standards does Saini Lifters follow?",
    answer:
      "Safety is our top priority. We adhere to all international and local safety standards and regulations. Our equipment undergoes regular inspections and maintenance, and our operators are fully certified and trained in the latest safety protocols. We maintain comprehensive insurance coverage for all our operations.",
  },
  {
    question: "Do you provide operators with your lifting equipment?",
    answer:
      "Yes, we provide highly skilled and certified operators with all our lifting equipment. Our operators have extensive experience in handling complex lifting operations and are trained to work efficiently while maintaining the highest safety standards.",
  },
  {
    question: "What is your service area?",
    answer:
      "Saini Lifters operates nationwide with a strong presence in major metropolitan areas. For projects in remote locations, please contact us to discuss logistics and availability. We pride ourselves on our ability to mobilize equipment efficiently to meet our clients' needs.",
  },
];

const activeIndex = ref(null);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const containerClasses = computed(
  () =>
    "mx-auto max-w-6xl rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-white/5 dark:bg-black/20"
);
</script>

<template>
  <section class="w-full pb-20">
    <div class="container mx-auto px-4 md:px-6">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Frequently Asked <span class="text-red-500">Questions</span>
        </h2>
        <p class="mb-12 text-lg">
          Find answers to common questions about our lifting services and
          equipment
        </p>
      </div>
      <div :class="containerClasses">
        <FAQItem
          v-for="(faq, index) in faqs"
          :key="index"
          :question="faq.question"
          :answer="faq.answer"
          :isOpen="activeIndex === index"
          @toggle="toggleFAQ(index)"
        />
      </div>
    </div>
  </section>
</template>
