const env = require('./env')
const path = require('path')
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
    pageTransition: {
        name: 'page',
        mode: 'out-in',
        beforeEnter (el) {
          console.log('Before enter...');
        }
    },
    css: [
        'assets/css/index.scss'
    ],
    builder:'webpack',
    
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

