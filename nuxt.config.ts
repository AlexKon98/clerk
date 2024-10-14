export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/vars.scss";',
        }
      }
    }
  },
  css: [
    '@/assets/style/style.scss',
  ],
  app: {
    baseURL: '/clerk/'
  }
})
