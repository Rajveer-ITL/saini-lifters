<template>
  <div>
    <HeaderComponent />
    <slot />
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/TheHeader.vue";
</script>
