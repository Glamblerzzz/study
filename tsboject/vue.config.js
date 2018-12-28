module.exports = {
    devServer: {
        open: true, //浏览器自动打开页面
        // https: false,
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            //配置跨域
            '/api': {
                target: "http://qiaoyou.0578app.com",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
