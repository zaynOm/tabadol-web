import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxtjs/supabase",
  ],
  googleFonts: {
    families: {
      Alexandria: [400, 700],
      Cairo: true,
    },
  },
  css: ["@/assets/css/main.css", "primeicons/primeicons.css"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".my-app-dark",
        },
      },
    },
  },
  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/login",
      callback: "/auth/callback",
      include: undefined,
      exclude: ["/"],
      cookieRedirect: false,
    },
  },
});
