import type { PluginOptions } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    position: POSITION.TOP_RIGHT,
    timeout: 3000,
    closeOnClick: true,
    hideProgressBar: true,
    transition: "Vue-Toastification__fade",
    toastClassName: "custom-toast",
    bodyClassName: "custom-toast-body",
  };

  nuxtApp.vueApp.use(Toast, options);
});
