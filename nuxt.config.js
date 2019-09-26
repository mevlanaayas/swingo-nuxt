export default {
  mode: 'universal',
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  env: {
    socketUrl: process.env.SOCKET_URL || 'localhost:3000'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Swingo | Seamless Delivery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'Swingo' },
      {
        name: 'keywords',
        content:
          'swingo, goswingo, send, carry, packet, package, senders, carriers, travellers, delivery'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Smart way of Delivery. Senders and Carriers all are on the same platform'
      },
      {
        name: 'google-site-verification',
        content: 'HhCXWCcFR3kmoNC1l5ymtGSkIDwfL2I55VM2f9AuEvo'
      }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'apple-icon-76x76.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: 'apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: 'apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: 'android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: 'favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ffff11' },
  /*
   ** Global CSS
   */
  css: ['~/assets/swingo.scss', '~/assets/app.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/ga.client.js',
    '@/plugins/repository.js',
    '@/plugins/swal.client.js',
    '@/plugins/axios.js',
    '@/plugins/filters.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    [
      '@nuxtjs/google-tag-manager',
      { id: 'GTM-M53JSTH', pageTracking: false, dev: false }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/swingo': process.env.API || 'http://localhost:8000'
  },
  auth: {
    redirect: {
      login: '/login',
      home: '/welcome',
      logout: '/login'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/swingo/auth/login/',
            method: 'post',
            propertyName: 'access'
          },
          logout: { url: '/swingo/auth/logout/', method: 'post' },
          user: {
            url: '/swingo/auth/user',
            method: 'get',
            propertyName: false
          }
        },
        // tokenRequired: true,
        tokenType: 'Token'
      }
    }
  },
  router: {
    middleware: ['auth', 'router']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
