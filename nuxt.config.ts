// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  hooks: {
    'prerender:routes'({routes}){
      routes.clear() // Do not generate any routes (except the defaults)
    }
  },
  ssr: false,
  router: {
    options: {
      hashMode: true // Avoid to configure redirect for pages on nginx or any hosting server
    }
  }
})
