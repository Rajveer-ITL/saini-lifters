<template>
  <div class="leading-snug tracking-wide" :class="props.class">
    <client-only>
      <div ref="scope">
        <span
          v-for="(word, idx) in wordsArray"
          :key="word + idx"
          class="inline-block"
          :style="spanStyle"
        >
          {{ word }}&nbsp;
        </span>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    words: string;
    filter?: boolean;
    duration?: number;
    delay?: number;
    class?: string;
  }>(),
  { duration: 1, delay: 5, filter: true }
);

const scope = ref<HTMLElement | null>(null);
const wordsArray = computed(() => props.words.split(" "));

const spanStyle = computed(() => ({
  opacity: 0,
  filter: props.filter ? "blur(10px)" : "none",
  transition: `opacity ${props.duration}s, filter ${props.duration}s`,
}));

onMounted(() => {
  if (process.client && scope.value) {
    const spans = scope.value.querySelectorAll("span");

    setTimeout(() => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.filter = props.filter ? "blur(0px)" : "none";
        }, index * 200);
      });
    }, props.delay);
  }
});
</script>
