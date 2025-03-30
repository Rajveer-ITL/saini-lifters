<template>
  <div
    class="bg-gray-50 dark:bg-zinc-800 border dark:border-zinc-800 rounded-lg p-6 hover:border-red-500 hover:dark:border-red-500 transition-colors"
  >
    <div class="flex items-center gap-4 mb-4">
      <div class="p-3 rounded-lg bg-red-500/10">
        <component :is="service.icon" class="w-6 h-6 mx-auto text-[#FF4057]" />
      </div>
      <div>
        <h3 class="text-xl font-semibold">{{ service.title }}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          {{ service.description }}
        </p>
      </div>
    </div>
    <ul class="grid grid-cols-2 gap-2">
      <li
        v-for="feature in service.features"
        :key="feature"
        class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  service: Object,
});
</script>
