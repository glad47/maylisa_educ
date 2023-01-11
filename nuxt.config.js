const env = require('./env')
const path = require('path')
import { resolve } from 'path'
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
        'assets/css/index.scss',
        'assets/css/animate.css',
    ],
    plugins: [
      {src: "~plugins/route.js"},
      {src: "~plugins/discoverLang.js"},
      {src: "~plugins/antd-ui.js"},
     
    ],
    components: true,
   

    modules: [
      'nuxt-i18n',
      '@nuxtjs/sitemap',
      '@nuxtjs/google-fonts'
      
    ]
   ,
   googleFonts: {
    download: true,
    overwriting: false,
    base64: true,
    families: {
      // display:"swap",
     'Noto+Naskh+Arabic': {
      wght: [400, 500, 600, 700]
     },
     'Mada': {
        wght: [400,500,600,700,900],
        
     },
     'Inter': {
      wght: [100,200,300,400,500,600,700,800,900],
      
   },
    }
  },
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
   build : {
    extend(config){
      config.resolve.alias['@utils']= path.join(__dirname,'./utils')
      config.resolve.alias['@assets']= path.join(__dirname,'./assets')
      config.resolve.alias['@img']= path.join(__dirname,'./assets/img')
      config.resolve.alias['@comps']= path.join(__dirname,'./components')
      config.resolve.alias['@pages']= path.join(__dirname,'./pages')
      config.resolve.alias['@plugins']= path.join(__dirname,'./plugins')
      config.resolve.alias['@antd']= path.join(__dirname,'./node_modules/ant-design-vue')
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            // modifyVars 可用来自定义主题
            // 'primary-color': '#41b883',
            // 'layout-body-background': '#fff',
          },
        },
     },
   },
 
  //   resolve: {
  //     alias: {
  //         // 设置 `@` 指向 `src` 目录
  //         "@": path.resolve(__dirname, "./"),
  //         "@assets": path.resolve("assets"),
  //         "@img": path.resolve("assets/img"),
  //         "@comps": path.resolve("components"),
  //         "utils": path.resolve("./utils"),
  //         "@pages": path.resolve("pages"),
  //         // "@store": path.resolve("src/store"),
  //         // "@api": path.resolve("src/api"),
  //         // "@plugins": path.resolve("src/plugins"),
  //     },
  //     //extensions: [".ts", ".js", ".vue", ".json", ".mjs"],
  //     // extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  // },
   }
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



