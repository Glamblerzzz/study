module.exports = {
    devServer: {
        open: true, //浏览器自动打开页面
        // https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            //配置跨域
            '/api': {
                target: "https://www.bilibili.com/",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
            '/test': {
                target: "https://www.baidu.com",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/test': '/'
                }
            }
        }
    },
    configureWebpack: config => {
        config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'
        // config.module.rules.push({
        //     test: /\.html$/,
        //     use: {
        //         loader: 'html-loader',
        //     }
        // }, )
    },

    // 链式操作添加loader
    chainWebpack: config => {
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
    }
}