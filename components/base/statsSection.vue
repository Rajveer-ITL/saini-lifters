<template>
  <section class="py-20 flex items-center justify-center flex-wrap">
    <div class="container flex items-center justify-center flex-wrap">
      <div class="gap-8 flex flex-wrap items-center justify-center">
        <div
          v-for="(stat, index) in mappedStats"
          :key="index"
          class="text-center border border-gray-300 dark:border-gray-500 hover:border-red-500 hover:dark:border-red-500 transition-colors w-[280px] h-[200px] rounded-lg flex items-center justify-center flex-col"
        >
          <component
            :is="stat.icon"
            class="w-12 h-12 mx-auto mb-4 text-red-500"
          />
          <p
            class="whitespace-pre-wrap text-4xl font-bold mb-2 tracking-tighter"
          >
            <NumberTicker :value="stat.value" />+
          </p>
          <p class="text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { Clock, Forklift, Users, Award } from "lucide-vue-next";
import NumberTicker from "@/components/inspiraUi/numberTicker.vue";

const props = defineProps({ stats: Array });

// Map the string icon names from props.stats to actual icon components
const iconMap = { Clock, Forklift, Users, Award };

const mappedStats = computed(() =>
  props.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon] || null, // Convert string names to components
  }))
);
</script>
