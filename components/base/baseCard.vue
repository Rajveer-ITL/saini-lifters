<template>
  <div class="relative overflow-hidden backdrop-blur-sm border-2 rounded-lg flex flex-col h-full">
    <div class="relative aspect-video w-full overflow-hidden p-3 bg-gray-50 dark:bg-zinc-800">
      <img
        :src="`/image/${crane.image}`"
        :alt="`${crane.name} on rent in Navi Mumbai`"
        class="object-contain w-full h-full"
        loading="lazy"
      />
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="mb-4">
        <h3 class="text-xl font-bold">{{ crane.name }}</h3>
        <p class="text-lg font-semibold text-[#FF4057]">
          {{ crane.capacity }}
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 text-sm mb-5">
        <div
          v-for="(spec, index) in specs"
          :key="index"
          class="flex flex-col"
        >
          <span class="dark:text-zinc-400 text-zinc-500 text-xs uppercase tracking-wider">{{ spec.label }}</span>
          <span class="font-medium mt-0.5 truncate" :title="spec.value">{{ spec.value }}</span>
        </div>
      </div>
      <div class="mt-auto">
        <NuxtLink
          v-if="crane.link"
          :to="crane.link"
          class="flex items-center gap-1 text-sm font-semibold text-[#FF4057] hover:underline"
        >
          View Details
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  crane: {
    type: Object,
    required: true,
  },
});

const specs = computed(() => [
  props.crane.mainBoom,
  props.crane.jib,
  props.crane.luffing,
  props.crane.totalBoom,
]);
</script>

<style scoped>
/* Additional styles if required */
</style>
