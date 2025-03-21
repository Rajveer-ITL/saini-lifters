import Lenis from "lenis";
import { defineNuxtPlugin } from "#app";
import { MotionPlugin } from "@vueuse/motion";

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  } as any);

  // Animation loop
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  nuxtApp.vueApp.use(MotionPlugin);

  return {
    provide: {
      lenis,
    },
  };
});
