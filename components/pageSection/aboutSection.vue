<template>
  <div
    class="pt-[128px] px-[15px] md:px-[64px] flex items-center justify-center"
  >
    <div class="max-w-[930px] text-center">
      <div
        class="about-section-title font-roslindale text-[30px] md:text-[70px] text-[#234a76] dark:text-[#ffffff] flex items-center justify-center flex-wrap mb-[48px]"
      >
        <!-- Image 1 -->
        <div
          ref="img1Ref"
          class="w-full flex justify-center mb-5 md:mb-0 md:w-auto md:mr-[16px] about-title-img-1"
        >
          <img
            src="../../assets/images/strength.jpg"
            alt="img1"
            loading="lazy"
            class="rounded-[12px] w-[140px] md:w-[110px]"
          />
        </div>

        <!-- Animated Text -->
        <span class="text-[#FF4057]">&nbsp;&nbsp;Strength&nbsp;</span>
        <span>in Every &nbsp;</span>
        <span>Lift, &nbsp;</span>
        <span class="text-[#FF4057]">Reliability &nbsp;</span>
        <span>in Every&nbsp;</span>
        <span class="text-[#FF4057]">Rise</span>

        <span
          class="three-dots text-[#FF4057]"
          v-for="(dot, index) in dots"
          :key="index"
          >{{ dot }}</span
        >

        <!-- Image 2 -->
        <div
          ref="img3Ref"
          class="w-full mt-5 md:mt-0 md:w-auto md:ml-[20px] about-title-img-3"
        >
          <img
            src="../../assets/images/rise.jpg"
            alt="img3"
            loading="lazy"
            class="rounded-[12px] w-full md:w-[120px]"
          />
        </div>
      </div>

      <!-- Paragraph -->
      <div class="mb-[48px] flex items-center justify-center">
        <p class="text-center font-mint w-11/12">
          Saini Lifters began its journey in 2001 as a transport business. Over
          the years, we evolved into the container crane industry, proudly
          owning a reach stacker and a side shifter. With continuous growth and
          dedication, we have expanded into the realm of all-terrain cranes,
          specializing in bridge construction and factory operations. With the
          support and blessings of God, Saini Lifters continues to reach new
          heights in heavy lifting and industrial projects.
        </p>
      </div>

      <!-- Button -->
      <div class="flex justify-center">
        <BaseButton
          text="READ ABOUT US"
          class="dark:text-[#ffffff] text-[11px] text-[#234a76]"
          @click="navigateToPage('/about-us')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { navigateTo } from "nuxt/app";
import gsap from "gsap";

const dots = ref([".", ".", ".", " "]);
const img1Ref = ref(null);
const img3Ref = ref(null);

const navigateToPage = (path) => {
  navigateTo(path);
};

onMounted(() => {
  if (import.meta.client) {
    const ctx = gsap.context(() => {
      // Wave Animation for Dots
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          ".three-dots",
          { y: 0 },
          { duration: 0.8, y: -10, stagger: 0.2, ease: "power1.inOut" }
        )
        .to(
          ".three-dots",
          { duration: 0.8, y: 0, stagger: 0.2, ease: "power1.inOut" },
          "-=0.8"
        );

      // Image Hover Animations
      const createAnimationTimeline = (el, scale, rotate) => {
        return gsap
          .timeline({ paused: true })
          .fromTo(
            el,
            { scale: 1 },
            { duration: 0.8, scale, rotate, ease: "back.out" }
          );
      };

      if (window.innerWidth > 600 && img1Ref.value && img3Ref.value) {
        const img1Tl = createAnimationTimeline(img1Ref.value, 2, 5);
        const img3Tl = createAnimationTimeline(img3Ref.value, 3, 0);

        img1Ref.value.addEventListener("mouseenter", () => img1Tl.play());
        img1Ref.value.addEventListener("mouseleave", () => img1Tl.reverse());

        img3Ref.value.addEventListener("mouseenter", () => img3Tl.play());
        img3Ref.value.addEventListener("mouseleave", () => img3Tl.reverse());
      }
    });

    return () => ctx.revert(); // Clean up GSAP animations when the component is destroyed
  }
});
</script>
