// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'KinWebb | Personal Portfolio',
      meta: [
        {
          name: 'description', content: 'This is the official personal portfolio of Kent Joemar Escoto.'
        }
      ],
      link: [
        {
          rel: 'shortcut icon', type: 'image/png', href: '/IconLogo.png'
        }
      ]
    }
  },

  modules: ['@nuxt/ui', 'nuxt-marquee'],
})