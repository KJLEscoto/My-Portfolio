// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Nuxt Tailwind | Starter',
      meta: [
        {
          name: 'description', content: 'Nuxt Tailwind - Starter Pack.'
        }
      ],
      link: [
        {
          rel: 'shortcut icon', type: 'image/png', href: '/favicon.ico'
        }
      ]
    }
  },
})
