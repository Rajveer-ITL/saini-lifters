<template>
  <section class="py-16 px-4 bg-gray-50 dark:bg-zinc-900/50">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">
          What Our <span class="text-[#FF4057]">Clients Say</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 mt-3">
          Trusted by construction companies, ports, and factories across Navi Mumbai
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-zinc-700 flex flex-col"
        >
          <div class="flex mb-3">
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 italic">
            "{{ testimonial.quote }}"
          </p>
          <div class="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-700">
            <p class="font-semibold text-sm">{{ testimonial.name }}</p>
            <p class="text-gray-400 text-xs">{{ testimonial.role }}</p>
            <p class="text-[#FF4057] text-xs font-medium mt-0.5">{{ testimonial.location }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "Saini Lifters deployed a 160T XCMG crane for our steel plant erection in Kalamboli on 2 hours' notice. The operator was certified, professional and the lift went perfectly. Highly recommended.",
    name: "Ramesh Patel",
    role: "Plant Manager, Kalamboli Steel Industries",
    location: "Kalamboli, Navi Mumbai",
  },
  {
    quote: "We've been using Saini Lifters for container handling near JNPT for over 3 years. Their reach stackers and hydra cranes are always well-maintained and delivered on time. Reliable partner.",
    name: "Arun Kadam",
    role: "Logistics Head",
    location: "Panvel, Navi Mumbai",
  },
  {
    quote: "Best crane rental service in Navi Mumbai. Quick mobilisation, fair rates, and their XCMG QAY300 handled our 180-tonne transformer erection at the power plant without any issues.",
    name: "Deepak Sharma",
    role: "Site Engineer, L&T Construction",
    location: "Navi Mumbai",
  },
];
</script>
