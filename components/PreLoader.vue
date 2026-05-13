<template>
  <div
    class="w-full h-lvh flex flex-col justify-center items-center absolute top-[60px] left-0"
    v-if="!hasVisited"
  >
    <div class="w-full flex justify-center items-center main-div">
      <div class="outerDiv overflow-hidden flex justify-center items-center">
        <span
          class="companyFirstName font-roslindale font-extrabold text-[100px]"
          v-for="(char, index) in companyFirstName"
          :key="index"
        >
          {{ char }}
        </span>
        <span class="mx-[20px] spacing"></span>
        <span
          class="companyLastName font-roslindale font-extrabold text-[100px]"
          v-for="(char, index) in companyLastName"
          :key="index"
        >
          {{ char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

const hasVisited = ref(false);
const companyFirstName = ref(["S", "A", "I", "N", "I"]);
const companyLastName = ref(["L", "I", "F", "T", "E", "R", "S"]);

const isMobile = computed(
  () => typeof window !== "undefined" && window.innerWidth < 600
);

onMounted(async () => {
  const { gsap } = await import("gsap");
  const tl = gsap.timeline();
  if (!hasVisited.value) {
    runPreloaderAnimation(gsap, tl);
  }
});

const runPreloaderAnimation = (gsap, tl) => {
  // Calculate responsive font sizes

  const largeFontSize = isMobile.value ? "50px" : "100px";
  const smallFontSize = isMobile.value ? "20px" : "30px";

  tl.fromTo(
    ".companyFirstName",
    { y: 100, opacity: 0, fontSize: largeFontSize },
    {
      duration: 0.4,
      y: 0,
      opacity: 1,
      stagger: 0.04,
    }
  );
  tl.fromTo(
    ".companyLastName",
    { y: 100, opacity: 0, fontSize: largeFontSize },
    {
      duration: 0.4,
      y: 0,
      opacity: 1,
      color: "#FF4057",
      stagger: -0.04,
    },
    "-=0.6"
  );
  tl.to(".companyFirstName", {
    duration: 0.3,
    fontSize: smallFontSize,
  });
  tl.to(
    ".companyLastName",
    {
      duration: 0.3,
      fontSize: smallFontSize,
    },
    "-=0.3"
  );
  tl.to(
    ".spacing",
    {
      duration: 0.3,
      margin: isMobile.value ? "2px" : "4px",
    },
    "-=0.3"
  );

  tl.to(
    ".main-div",
    {
      opacity: 0,
      duration: 0.5,
      y: -300,
    },
    "-=0.1"
  );
};
</script>
