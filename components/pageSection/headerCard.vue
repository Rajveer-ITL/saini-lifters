<template>
  <div
    class="header-card relative flex items-center justify-center top-[74px] md:top-[80px] h-[680px] xl:h-[820px] mb-[40px] md:mb-[100px]"
  >
    <!-- Overlay Content -->
    <div
      class="absolute top-0 left-0 z-30 px-[25px] md:px-[64px] pb-[64px] font-roslindale w-full h-[680px] flex flex-col items-center justify-center"
    >
      <div class="flex flex-1 flex-col items-center justify-center">
        <div>
          <div
            class="max-w-[900px] flex items-center justify-center gap-3 md:gap-6 flex-wrap leading-[40px] md:leading-[60px]"
          >
            <div
              v-for="(word, index) in title"
              :key="index"
              class="w-fit header-card-title text-white"
            >
              <span
                class="title-text"
                :class="{
                  'text-[#FF4057]': [
                    'HEAVY',
                    '.',
                    'HIGH',
                    'SAINI',
                    'LIFTERS',
                  ].includes(word),
                }"
                >{{ word }}</span
              >
            </div>
          </div>
        </div>
        <div
          v-if="props.subTitle"
          class="text-white mt-4 text-2xl md:w-[60%] text-center"
        >
          <TextGenerate :words="subTitle" :class="'text-white'" />
        </div>
      </div>

      <div
        v-if="isDesktop && isDownIconHash"
        class="absolute bottom-[-100px] left-1/2 chevron-down"
      >
        <ChevronDown
          class="h-10 w-10 cursor-pointer text-[#FF4057]"
          @click="scrollToElement"
        />
      </div>
    </div>

    <!-- Video Background -->
    <div class="video-container relative flex items-center justify-center">
      <video
        loop
        muted
        playsinline
        autoplay
        preload="metadata"
        class="video-player object-cover md:rounded-[34px]"
      >
        <source :src="videoUrl" type="video/mp4" />

        <!-- Captions (Subtitles) -->
        <track
          src="/captions/captions.vtt"
          kind="captions"
          srclang="en"
          label="English"
          default
        />
        Your browser does not support the video tag.
      </video>

      <div class="header-card-overlay absolute top-0 left-0"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineAsyncComponent } from "vue";
import { useWindowSize } from "@vueuse/core";
import { ChevronDown } from "lucide-vue-next";
import { useRouter } from "nuxt/app";

const { width } = useWindowSize();
const router = useRouter();
// Lazy-load dependencies for better performance
const TextGenerate = defineAsyncComponent(() =>
  import("@/components/inspiraUi/textGenerate.vue")
);

const isDesktop = ref(false);

// Props
const props = defineProps({
  title: Array,
  videoUrl: String,
  subTitle: String,
  isDownIconHash: String,
});

// Scroll to Element
const scrollToElement = () => {
  const element = document.getElementById(props.isDownIconHash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Client-side animations (Nuxt 3 best practice)
onMounted(async () => {
  const hasVisited =
    import.meta.client && sessionStorage.getItem("homepage-visited");
  isDesktop.value = width.value > 768;
  if (router.currentRoute.value.path === "/" && !hasVisited) {
    sessionStorage.setItem("homepage-visited", "true");
    if (import.meta.client) {
      const gsap = (await import("gsap")).default;

      const tl = gsap.timeline();
      tl.from(".header-card", {
        opacity: 0,
        duration: 2.5,
        delay: 2,
        y: 600,
        scale: 0,
        ease: "circ.out",
      }).to(".header-card", {
        opacity: 1,
        duration: 2,
        y: 0,
        scale: 1,
        ease: "circ.out",
      });

      tl.from(
        ".header-card-title",
        {
          opacity: 0,
          duration: 1,
          y: 100,
          ease: "circ.out",
          stagger: 0.3,
        },
        "-=2.4"
      ).to(
        ".header-card-title",
        {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: "circ.out",
          stagger: 0.3,
        },
        "-=2.4"
      );
    }
  }
});
</script>

<style scoped>
.video-container {
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, var(--shadow), var(--shadow));
  opacity: 0.5;
  background-color: black;
  border-radius: 34px;
}

.title-text {
  font-size: 80px;
  font-weight: bold;
  transition: font-size 0.3s ease;
}

/* Responsive Styles */
@media (max-width: 500px) {
  .video-container {
    width: 100%;
  }
  .title-text {
    font-size: 30px;
  }
  .header-card-overlay {
    border-radius: 0px;
  }
}

@media (min-width: 501px) and (max-width: 1024px) {
  .video-container {
    width: 95%;
  }
  .title-text {
    font-size: 50px;
  }
  .header-card {
    top: 75px;
  }
}

@media (min-width: 1025px) {
  .video-container {
    width: 90%;
  }
  .title-text {
    font-size: 80px;
  }
}
</style>
