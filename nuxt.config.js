export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cartorio-FrontEnd',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'overflow-y-hidden'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },
  auth: {
    token: {
      prefix: '_token.',
      global: true,
    },
    strategies: {
      cookie: {
        token: {
          type: "Bearer",
          property: "access_token",
          required: true
        },
        endpoints: {
          login: {
            url: "/usuarios/login",
            method: "post",
            propertyName: "authenticationToken"
          },

          /*
          user:{
            url:"/aaaaa",
            method:"get",
            propertyName:null
          }
          */

        }
      },
    },
    redirect: {
      home: "/"
    }
  }
  ,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
