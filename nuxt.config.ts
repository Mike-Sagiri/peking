export default defineNuxtConfig({
  modules: ['@nuxt/content',"@nuxtjs/tailwindcss","nuxt-icon"],
  content: {
    documentDriven: true,
    navigation: {
      fields: ["cover"],
    },
  },
  app: {
    baseURL: "/peking/",
  }
})
