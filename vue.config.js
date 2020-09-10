module.exports = {
    // 都是开发环境 的配置
    devServer:{
        port:8001,           // 端口号 
        host:"localhost",     // 主机名 127.0.0.1
        https:false,           //协议
        open:true,            // 启动时自动打开浏览器访问
    },
    lintOnSave:false,  //关闭格式检查
    // outputDir:"dist2",   //存放 打包文件的目录 默认 dist
    // assetsDir:"assets",   // 静态资源（js，css，img）打包存放路径（相对outputDir 指定的路径）
    // indexPath:"out/index.html",   // index.html  主页面打包后存放的目录（相对outputDir 指定的路径）
    productionSourceMap:false      //打包时不会生成  .map 文件  加快打包速度
}