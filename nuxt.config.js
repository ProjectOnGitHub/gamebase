export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Наш проект для НКО',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/vendor/normalize.css',
    '@/assets/scss/_variables.scss',
    '@/assets/scss/_mixins.scss',
    '@/assets/vendor/fonts.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/svg-sprite'],
  svgSprite: {},
  env: {
    AUTH_URL: 'https://id.twitch.tv/oauth2/token',
    API_URL: 'https://api.igdb.com/v4',
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
    extend(config, {isClient}) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map';
      }
    },
  },
};
