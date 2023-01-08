const env = require('./env')
const path = require('path')
import sitemap from './plugins/sitemap'
import i18nRoutes from './plugins/i18nRoutes'
export default {
  publicRuntimeConfig: {
    APP_TITLE: process.env.APP_TITLE,
    NODE_ENV:process.env.NODE_ENV,
    BASE_API:process.env.BASE_API

  }
}

module.exports = {
    mode: 'universal',
    target: 'server',
    head: {
      title: "Gudie of Maylisa" || '',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no'},
        {hid: 'description', name: 'description', content: process.env.WEBSITE_DESC || 'my name is Aziz'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ],
    },
    // pageTransition: {
    //     name: 'page',
    //     mode: 'out-in',
    //     beforeEnter (el) {
    //       console.log('Before enter...');
    //     }
    // },
    css: [
        'assets/css/index.scss'
    ],
    plugins: [
      {src: "~plugins/route.js"},
      {src: "~plugins/bus.js"},
    ],
    components: true,
    resolve: {
        alias: {
            // 设置 `@` 指向 `src` 目录
            "@": path.resolve(__dirname, "./"),
            "@assets": path.resolve("assets"),
            "@img": path.resolve("assets/img"),
            "@comps": path.resolve("components"),
            "@utils": path.resolve("utils"),
            "@pages": path.resolve("pages"),
            // "@store": path.resolve("src/store"),
            // "@api": path.resolve("src/api"),
            // "@plugins": path.resolve("src/plugins"),
        },
        //extensions: [".ts", ".js", ".vue", ".json", ".mjs"],
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },

    modules: [
      'nuxt-i18n',
      '@nuxtjs/sitemap',
      
    ]
   ,
   i18n: {
    parsePages: false,
    pages: i18nRoutes,
    
    locales: [
      {
        name: 'العربية',
        code: 'ar',
        iso: 'ar-AR',
        file: 'ar-AR.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
    ],
    langDir: 'lang/',
    defaultLocale: 'ar',
  },
    sitemap: sitemap,
   
    //   modules: [
    //     '@nuxtjs/style-resources',
    //     {
    //         styleResources: {
    //             scss: [
    //                 'assets/scss/variables.scss',
    //             ]
    //         }
    //     }
    // ],
   

}



