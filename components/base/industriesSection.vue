<template>
  <section class="py-20 container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(industry, index) in industries"
        :key="index"
        class="p-6 border border-gray-300 dark:border-gray-500 rounded-lg text-center hover:dark:border-red-500 hover:border-red-500 transition-colors"
      >
        {{ industry }}
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ industries: Array });
</script>
