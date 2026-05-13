import Lenis from "lenis";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  } as any);

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return {
    provide: {
      lenis,
    },
  };
});
