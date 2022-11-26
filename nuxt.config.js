export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'News',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter&family=Libre+Baskerville&display=swap',
      },
    ],
  },

  env: {
    GRAPHQL_URL:
      process.env.GRAPHQL_URL ||
      'https://paragrapp-production.herokuapp.com/graphql/',
  },

  css: ['./assets/styles/reset.css'],

  components: [
    '~/components/',
    '~/components/atoms/',
    '~/components/molecules/',
    '~/components/organisms/',
    '~/components/templates/',
  ],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/style-resources'],

  modules: [['nuxt-i18n'], ['@nuxtjs/apollo']],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.GRAPHQL_URL ||
          'https://paragrapp-production.herokuapp.com/graphql/',
      },
    },
  },

  build: {},

  styleResources: {
    scss: ['./assets/styles/globals.scss'],
  },

  i18n: {
    locales: [{ code: 'nl', file: 'nl.json' }],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
      alwaysRedirect: true,
    },
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
  },
}
