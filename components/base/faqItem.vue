<script setup>
import { defineProps, defineEmits } from "vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";

const props = defineProps({
  question: String,
  answer: String,
  isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div class="border-b border-gray-200 dark:border-gray-700 last:border-0">
    <button
      class="flex w-full items-center justify-between py-6 text-left"
      @click="emit('toggle')"
      :aria-expanded="isOpen"
    >
      <h3 class="text-xl font-semibold">
        {{ question }}
      </h3>
      <span class="ml-4 flex-shrink-0 text-red-500">
        <ChevronUp v-if="isOpen" size="24" />
        <ChevronDown v-else size="24" />
      </span>
    </button>
    <div
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :class="isOpen ? 'max-h-96 pb-6' : 'max-h-0'"
      :aria-hidden="!isOpen"
    >
      <p class="text-gray-600 dark:text-gray-300">{{ answer }}</p>
    </div>
  </div>
</template>
