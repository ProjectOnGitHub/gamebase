export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
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
    title: 'GameBase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/vendor/normalize.css',
    '@/assets/scss/_variables.scss',
    '@/assets/scss/_mixins.scss',
    '@/assets/vendor/fonts.css'
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
    API_HOST: 'free-to-play-games-database.p.rapidapi.com',
    API_KEY: process.env.API_KEY
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
    scss: ['./assets/scss/*.scss']
  },
  build: {
    postcssOptions: {
      preset: {
        autoprefixer: {
          grid: true
        }
      },
      plugins: {
        'postcss-sorting': {
          order: [
            [
              {
                type: 'at-rule',
                name: 'include'
              },

              {
                type: 'dollar-variable'
              }
            ]
          ],
          'properties-order': [
            'content',
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            '-ms-grid-column-align',
            '-webkit-justify-content',
            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            '-ms-grid-column-span',
            'grid-column-gap',
            '-ms-grid-column',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            '-ms-grid-row-span',
            'grid-row-gap',
            '-ms-grid-row',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            '-ms-grid-columns',
            'grid-template-columns',
            '-ms-grid-rows',
            'grid-template-rows',
            'justify-content',
            'justify-self',
            'justify-items',
            '-webkit-flex',
            '-ms-flex',
            'flex',
            '-webkit-flex-grow',
            'flex-grow',
            '-webkit-flex-shrink',
            'flex-shrink',
            '-webkit-flex-basis',
            'flex-basis',
            '-webkit-flex-flow',
            'flex-flow',
            '-webkit-flex-direction',
            '-ms-flex-direction',
            'flex-direction',
            '-webkit-flex-wrap',
            'flex-wrap',
            '-webkit-align-content',
            'align-content',
            '-webkit-align-items',
            'align-items',
            '-webkit-order',
            '-ms-flex-order',
            'order',
            '-ms-grid-row-align',
            '-webkit-align-self',
            'align-self',
            'float',
            'clear',
            '-webkit-box-sizing',
            '-moz-box-sizing',
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'overflow',
            '-ms-overflow-x',
            'overflow-x',
            '-ms-overflow-y',
            'overflow-y',
            '-webkit-overflow-scrolling',
            '-ms-overflow-style',
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
            'border-collapse',
            'border-spacing',
            'table-layout',
            'empty-cells',
            'caption-side',
            'font',
            'font-weight',
            'font-size',
            'line-height',
            'font-family',
            'vertical-align',
            'text-align',
            'direction',
            'color',
            'text-transform',
            'text-decoration',
            'font-style',
            'font-variant',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            '-webkit-font-smoothing',
            '-moz-osx-font-smoothing',
            'font-smooth',
            '-webkit-text-align-last',
            '-moz-text-align-last',
            '-ms-text-align-last',
            'text-align-last',
            'letter-spacing',
            'word-spacing',
            'white-space',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-indent',
            '-ms-text-justify',
            'text-justify',
            '-ms-writing-mode',
            'text-outline',
            'text-wrap',
            '-ms-text-overflow',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'text-orientation',
            '-ms-word-wrap',
            'word-wrap',
            '-ms-word-break',
            'word-break',
            '-moz-tab-size',
            '-o-tab-size',
            'overflow-wrap',
            'tab-size',
            '-webkit-hyphens',
            '-moz-hyphens',
            'hyphens',
            'unicode-bidi',
            'columns',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',
            'text-shadow',
            'page-break-after',
            'page-break-before',
            'page-break-inside',
            'src',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            '-ms-background-position-x',
            'background-position-x',
            '-ms-background-position-y',
            'background-position-y',
            '-webkit-background-size',
            '-moz-background-size',
            '-o-background-size',
            'background-size',
            '-webkit-background-clip',
            '-moz-background-clip',
            'background-clip',
            'background-origin',
            'background-attachment',
            'box-decoration-break',
            'background-blend-mode',
            'border',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-top-width',
            'border-top-style',
            'border-top-color',
            'border-right',
            'border-right-width',
            'border-right-style',
            'border-right-color',
            'border-bottom',
            'border-bottom-width',
            'border-bottom-style',
            'border-bottom-color',
            'border-left',
            'border-left-width',
            'border-left-style',
            'border-left-color',
            '-webkit-border-radius',
            '-moz-border-radius',
            'border-radius',
            '-webkit-border-top-left-radius',
            '-moz-border-radius-topleft',
            'border-top-left-radius',
            '-webkit-border-top-right-radius',
            '-moz-border-radius-topright',
            'border-top-right-radius',
            '-webkit-border-bottom-right-radius',
            '-moz-border-radius-bottomright',
            'border-bottom-right-radius',
            '-webkit-border-bottom-left-radius',
            '-moz-border-radius-bottomleft',
            'border-bottom-left-radius',
            '-webkit-border-image',
            '-moz-border-image',
            '-o-border-image',
            'border-image',
            '-webkit-border-image-source',
            '-moz-border-image-source',
            '-o-border-image-source',
            'border-image-source',
            '-webkit-border-image-slice',
            '-moz-border-image-slice',
            '-o-border-image-slice',
            'border-image-slice',
            '-webkit-border-image-width',
            '-moz-border-image-width',
            '-o-border-image-width',
            'border-image-width',
            '-webkit-border-image-outset',
            '-moz-border-image-outset',
            '-o-border-image-outset',
            'border-image-outset',
            '-webkit-border-image-repeat',
            '-moz-border-image-repeat',
            '-o-border-image-repeat',
            'border-image-repeat',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            '-webkit-box-shadow',
            '-moz-box-shadow',
            'box-shadow',
            '-webkit-transform',
            '-moz-transform',
            '-ms-transform',
            '-o-transform',
            'transform',
            '-webkit-transform-origin',
            '-moz-transform-origin',
            '-ms-transform-origin',
            '-o-transform-origin',
            'transform-origin',
            '-webkit-backface-visibility',
            '-moz-backface-visibility',
            'backface-visibility',
            '-webkit-perspective',
            '-moz-perspective',
            'perspective',
            '-webkit-perspective-origin',
            '-moz-perspective-origin',
            'perspective-origin',
            '-webkit-transform-style',
            '-moz-transform-style',
            'transform-style',
            'visibility',
            'cursor',
            'opacity',
            'interpolation-mode',
            '-webkit-filter',
            'filter',
            'backdrop-filter',
            '-webkit-transition',
            '-moz-transition',
            '-ms-transition',
            '-o-transition',
            'transition',
            '-webkit-transition-delay',
            '-moz-transition-delay',
            '-ms-transition-delay',
            '-o-transition-delay',
            'transition-delay',
            '-webkit-transition-timing-function',
            '-moz-transition-timing-function',
            '-ms-transition-timing-function',
            '-o-transition-timing-function',
            'transition-timing-function',
            '-webkit-transition-duration',
            '-moz-transition-duration',
            '-ms-transition-duration',
            '-o-transition-duration',
            'transition-duration',
            '-webkit-transition-property',
            '-moz-transition-property',
            '-ms-transition-property',
            '-o-transition-property',
            'transition-property',
            '-webkit-animation',
            '-moz-animation',
            '-ms-animation',
            '-o-animation',
            'animation',
            '-webkit-animation-name',
            '-moz-animation-name',
            '-ms-animation-name',
            '-o-animation-name',
            'animation-name',
            '-webkit-animation-duration',
            '-moz-animation-duration',
            '-ms-animation-duration',
            '-o-animation-duration',
            'animation-duration',
            '-webkit-animation-play-state',
            '-moz-animation-play-state',
            '-ms-animation-play-state',
            '-o-animation-play-state',
            'animation-play-state',
            '-webkit-animation-timing-function',
            '-moz-animation-timing-function',
            '-ms-animation-timing-function',
            '-o-animation-timing-function',
            'animation-timing-function',
            '-webkit-animation-delay',
            '-moz-animation-delay',
            '-ms-animation-delay',
            '-o-animation-delay',
            'animation-delay',
            '-webkit-animation-iteration-count',
            '-moz-animation-iteration-count',
            '-ms-animation-iteration-count',
            '-o-animation-iteration-count',
            'animation-iteration-count',
            '-webkit-animation-direction',
            '-moz-animation-direction',
            '-ms-animation-direction',
            '-o-animation-direction',
            'animation-direction',
            '-webkit-animation-fill-mode',
            '-moz-animation-fill-mode',
            '-ms-animation-fill-mode',
            '-o-animation-fill-mode',
            'animation-fill-mode',
            'appearance',
            'clip',
            'clip-path',
            'counter-reset',
            'counter-increment',
            'resize',
            '-webkit-user-select',
            '-moz-user-select',
            '-ms-user-select',
            'user-select',
            '-webkit-tap-highlight-color',
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left',
            'pointer-events',
            'quotes',
            'touch-action',
            'will-change',
            'zoom',
            'fill',
            'fill-rule',
            'clip-rule',
            'stroke'
          ],
          'unspecified-properties-position': 'bottom'
        }
      }
    },
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map';
      }
    }
  }
};
