module.exports = {
  publicPath: './',
  lintOnSave: false, 
  devServer: {
    port: 8089, // 启动端口
    open: false, // 启动后是否自动打开网页
    proxy: {
      '/api': {
        // target: 'http://v.juhe.cn', //要跨域的域名   // 新闻
        // target: 'http://apis.juhe.cn',   // 天气 2022出行防疫政策指南 节假日  热门视频
        target: 'http://web.juhe.cn',       // 黄金 http://web.juhe.cn`
        // target: 'http://op.juhe.cn', // 汇率
        secure: true, //接受对方是https的接口
        ws: true, // 是否启用websockets
        changeOrigin: true, //是否允许跨越
        pathRewrite: {
          '^/api': '/' //将你的地址代理位这个 /api 接下来请求时就使用这个/api来代替你的地址
        },
      }
    },
  }
}
