<template>
  <div
    v-if="!consentGiven"
    class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#ffffffcf] dark:bg-[#161719db] border-t border-gray-800 dark:border-gray-700"
  >
    <div class="mx-auto">
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div class="flex-1 max-w-5xl">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold">Cookie Settings</span>
            <button
              @click="consentGiven = true"
              class="ml-auto md:hidden p-1 rounded-full hover:bg-gray-800"
            >
              <IconX class="h-5 w-5" />
            </button>
          </div>
          <p class="mt-2 text-md">
            We use cookies to enhance your experience on our website. Our
            cookies help us understand how visitors interact with our heavy
            lifting and industrial services via Google Analytics, GTM, and
            Microsoft Clarity.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button
            @click="acceptNecessary"
            class="px-4 py-2 rounded-md dark:hover:bg-gray-800 dark:bg-black bg-[#234a76] text-white hover:bg-[#2d5d95]"
          >
            Necessary Only
          </button>
          <button
            @click="acceptAll"
            class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Accept All
          </button>
          <button
            @click="consentGiven = true"
            class="hidden md:block p-2 rounded-full dark:hover:bg-gray-800"
            aria-label="Dismiss cookie banner"
          >
            <IconX class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRuntimeConfig } from "#imports";
import { X as IconX } from "lucide-vue-next";

const consentGiven = ref(false);
const config = useRuntimeConfig();

const loadTrackingScripts = () => {
  // Google Analytics script
  const gaScript = document.createElement("script");
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`;
  gaScript.async = true;
  document.head.appendChild(gaScript);

  // Init Google Analytics after script loads
  gaScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", config.public.googleAnalyticsId);
  };

  // Google Tag Manager
  const gtmScript = document.createElement("script");
  gtmScript.innerHTML = `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${config.public.googleTagManagerId}');
  `;
  document.head.appendChild(gtmScript);

  // Microsoft Clarity
  const clarityScript = document.createElement("script");
  clarityScript.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${config.public.clarityId}");
  `;
  document.head.appendChild(clarityScript);
};

const acceptAll = () => {
  localStorage.setItem("cookie-consent", "accepted");
  consentGiven.value = true;
  loadTrackingScripts();
};

const acceptNecessary = () => {
  localStorage.setItem("cookie-consent", "necessary");
  consentGiven.value = true;
};

onMounted(() => {
  const consent = localStorage.getItem("cookie-consent");
  if (consent === "accepted") {
    consentGiven.value = true;
    loadTrackingScripts();
  } else if (consent === "necessary" || consent === "declined") {
    consentGiven.value = true;
  }
});
</script>
