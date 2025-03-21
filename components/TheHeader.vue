<template>
  <!-- Mobile Header -->
  <div
    v-if="isMobile"
    class="fixed top-0 w-full flex items-center justify-center backdrop-filter backdrop-blur-lg header z-[100]"
  >
    <transition name="fade">
      <div class="py-4 flex items-center justify-center w-full">
        <div class="absolute left-1 ml-4">
          <Menu v-if="!isMenuOpen" class="h-6 w-6" @click="toggleMenu" />
        </div>
        <div
          class="font-roslindale cursor-pointer w-fit flex items-center justify-center text-[28px]"
          @click="$router.push('/')"
        >
          Saini &nbsp;
          <span class="text-[#FF4057]"> Lifters</span>
        </div>
        <div class="absolute right-1 mr-4">
          <Sun v-if="isDark" class="h-6 w-6" @click="handleToggleDark" />
          <Moon v-else class="h-6 w-6" @click="handleToggleDark" />
        </div>
      </div>
    </transition>
    <transition name="mobileMenu">
      <div
        v-show="isMenuOpen"
        class="w-full h-screen absolute top-0 z-[100] mobileMenu"
        :class="isDark ? 'bg-black' : 'bg-white'"
      >
        <div
          class="font-roslindale cursor-pointer w-full flex items-center justify-start text-[28px] ml-8 py-[16px]"
          @click="logoClick"
        >
          Saini &nbsp;
          <span class="text-[#FF4057]"> Lifters</span>
        </div>
        <X class="w-6 h-6 absolute right-6 top-6" @click="toggleMenu" />
        <div
          class="w-full flex flex-col items-start gap-10 font-roslindale mt-20 ml-8 text-[25px]"
        >
          <div
            v-for="(option, index) in menuOptions"
            :key="index"
            :class="{ 'text-[#FF4057]': selectedOption === option.name }"
            @click="selectOption(option)"
          >
            {{ option.name }}
          </div>
        </div>
      </div>
    </transition>
  </div>

  <!-- Desktop Header -->
  <div
    v-else
    class="w-full flex justify-between items-center h-[74px] fixed top-0 backdrop-filter backdrop-blur-lg header z-[100]"
    :class="[
      screenWidth > 780 && screenWidth < 900 ? 'px-[30px]' : 'px-[64px]',
      isDark ? 'header-bg-black' : 'header-bg-white',
    ]"
  >
    <div class="flex items-center justify-between gap-2">
      <baseButton
        text="ABOUT"
        :isLoading="false"
        @click="$router.push('/about-us')"
      />
      <baseButton
        text="SERVICES"
        :isLoading="false"
        @click="$router.push('/service')"
      />
      <baseButton
        text="WHATSAPP"
        :isLoading="false"
        @click="sendWhatsAppMessage"
      />
    </div>
    <div
      class="font-roslindale cursor-pointer w-full flex items-center justify-center logo-text"
      :class="
        screenWidth > 780 && screenWidth < 900 ? 'text-[25px]' : 'text-[32px]'
      "
      @click="logoClick"
    >
      Saini &nbsp;
      <span class="text-[#FF4057]"> Lifters</span>
    </div>
    <div class="flex items-center justify-between gap-2">
      <baseButton
        text="CONTACT"
        :isLoading="false"
        @click="$router.push('/contact-us')"
      />
      <baseButton text="EMAIL" :isLoading="false" @click="redirectToEmail" />
      <baseButton
        iconPosition="right"
        @click="handleToggleDark"
        :isLoading="false"
        class="darkModeToggle"
      >
        <template #buttonContent>
          <span class="darkModeText">{{ isDark ? "LIGHT" : "DARK" }}</span>
        </template>
      </baseButton>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import baseButton from "./base/BaseButton.vue";
import { useDark, useToggle } from "@vueuse/core";
import { Menu, X, Sun, Moon } from "lucide-vue-next";
import {
  redirectToEmail,
  sendWhatsAppMessage,
} from "../utils/commonFunctions.js";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const isMenuOpen = ref(false);
const selectedOption = ref(null);
const screenWidth = ref(0); // Initialize to 0 to avoid undefined
const isMobile = ref(false); // Initialize as false

const updateScreenSize = () => {
  screenWidth.value = window.innerWidth;
  isMobile.value = window.innerWidth <= 779; // No need for matchMedia, direct condition works
};

onMounted(() => {
  updateScreenSize(); // Ensure correct initial state
  window.addEventListener("resize", updateScreenSize);
  runHeaderAnimation();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});

const runHeaderAnimation = () => {
  gsap.to(".header", {
    opacity: 1,
    duration: 1, // Fade in smoothly
    delay: 0.2, // Add delay before appearing
  });

  gsap.from(".logo-text", {
    y: -100, // Move from top
    opacity: 0,
    duration: 1.8,
    delay: 0.8, // Ensures the header fades in first
    ease: "elastic.out(1, 0.5)", // Elastic effect
  });
};

const selectOption = (option) => {
  if (option.route) {
    selectedOption.value = option.name;
    navigateTo(option.route);
    isMenuOpen.value = false;
  } else {
    selectedOption.value = option.name;
    option.link === "sendWhatsAppMessage"
      ? sendWhatsAppMessage()
      : redirectToEmail();
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleToggleDark = () => {
  toggleDark();
};

const logoClick = () => {
  navigateTo("/");
  isMenuOpen.value = !isMenuOpen.value;
};

const menuOptions = [
  { name: "ABOUT", route: "/about-us" },
  { name: "SERVICES", route: "/service" },
  { name: "WHATSAPP", link: "sendWhatsAppMessage" },
  { name: "CONTACT", route: "/contact-us" },
  { name: "EMAIL", link: "redirectToEmail" },
];
</script>

<style scoped>
.header {
  opacity: 0;
}
.header-bg-white {
  background-color: white;
}
.header-bg-black {
  background-color: rgb(22 23 25 / 50%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.mobileMenu-enter-active,
.mobileMenu-leave-active {
  transition: all 0.8s ease-out;
}
.mobileMenu-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.mobileMenu-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.mobileMenu-enter-to,
.mobileMenu-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
