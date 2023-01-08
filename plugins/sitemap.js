import i18nRoutes from "./i18nRoutes"
var hostname= 'https://localhost:3000/'
var routes= []
var lists= i18nRoutes

// for (var item in lists) {
//     console.log("&&&&&&&&&&&&&&&&&")
//     var newUrl=decodeURI(lists[item]['ar'])
//     console.log(newUrl)
//     routes.push({
//      url:newUrl,
//      changefreq:"always",
//      lastmod: new Date()
//     })
//     routes.push({
//      url:decodeURI('/en' + lists[item]['en']),
//      changefreq:"always",
//      lastmod: new Date()
//     })
    
//  }

routes.push({
    url:"/",//  这里的路径相对 hostname
    changefreq:"always",
    lastmod: new Date()
    },
    {
    url:"/ccccccccc中文",
    changefreq:"always",
    lastmod: "2020-12-04"
    })
const sitemap = 
    {
    path:'/sitemap.xml',// 生成的文件路径
    hostname:hostname,// 网址
    cacheTime: 1000 * 60 * 60 * 24, // 1天 更新频率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 压缩的 sitemap
    generate: false, // 允许使用 nuxt generate 生成
    // 排除不要页面
    exclude:[
    '/404' //  这里的路径相对 hostname
    ],
    i18n:{
        locales:['ar','en'],
        routesNameSeparator: '___'
    },
    // xml默认的配置
    defaults: {
    changefreq: 'always',
    lastmod: new Date()
    },
    // 需要生成的xml数据, return 返回需要给出的xml数据
    routes: () => {
        
    return routes
    }
}
    
export default sitemap;