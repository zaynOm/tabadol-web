// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Alexandria: [400, 700],
      Cairo: true,
    },
  },
  css: ["@/assets/css/main.css"],
});
