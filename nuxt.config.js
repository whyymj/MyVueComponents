const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/vuetify',
      ssr: true
    }, {
      src: '@/plugins/iview',
      ssr: true
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [// Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios', 'vuetify', 'iview'
    ],
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.scss$/,
        loader: "vue-style-loader!css-loader!sass-loader"
      }
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        Object.assign(config, {
          watchOptions: {
            ignored: /node_modules/
          }
        })
      }
    }
  }
}
