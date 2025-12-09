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

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
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
          rel: 'shortcut icon', type: 'image/png', href: '/favicon.png'
        }
      ]
    }
  },

  modules: ['@nuxt/ui', 'nuxt-marquee'],
})