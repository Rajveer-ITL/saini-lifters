<template>
  <button
    :class="buttonClasses"
    :disabled="isLoading"
    class="border-[#234a76] dark:border-white overflow-hidden flex items-center justify-center px-3 py-[6px] font-mint text-[12px] border font-semibold hover:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span v-if="isLoading" class="loader"></span>
    <span v-if="icon && iconPosition === 'left'" class="mr-2">
      <img
        v-if="icon.name"
        :src="getIconSrc(icon.name)"
        alt="icon"
        width="18"
        height="18"
        class="max-w-fit"
      />
    </span>
    <slot name="buttonContent">
      <span v-if="!isLoading && text">{{ text }}</span>
    </slot>
    <span v-if="iconPosition === 'right'" class="ml-2">
      <component :is="isDark ? Sun : Moon" class="h-4 w-4 darkModeIcon" />
    </span>
  </button>
</template>

<script setup>
import { gsap } from "gsap";
import { computed, watch } from "vue";
import { Sun, Moon } from "lucide-vue-next";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const props = defineProps({
  isLoading: Boolean,
  text: String,
  icon: [String, Object],
  iconPosition: { type: String, default: "left" },
  size: { type: String, default: "circle" },
  type: { type: String, default: "primary" },
});

watch(isDark, (newValue) => {
  gsap.fromTo(
    ".darkModeIcon",
    { opacity: 0, y: newValue ? -70 : 70 },
    { opacity: 1, y: 0, duration: 1, ease: "expo.out" }
  );
});

const buttonClasses = computed(() => {
  const sizeClasses = {
    rectangle: "rounded-md",
    circle: "rounded-full",
    small: "rounded-sm",
    curved: "rounded-lg",
  };

  const typeClasses = {
    primary: "bg-transparent",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  return `${sizeClasses[props.size]} ${typeClasses[props.type]}`;
});

const getIconSrc = (iconName) =>
  new URL(`../../assets/images/${iconName}.svg`, import.meta.url).href;
</script>

<style scoped>
.loader {
  border: 2px solid transparent;
  border-radius: 50%;
  border-top: 2px solid white;
  width: 1em;
  height: 1em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
