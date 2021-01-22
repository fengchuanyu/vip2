const path = require("path");

module.exports = {
    mode:'development',
    // 入口文件配置项
    entry:{
        'index':'./src/index.js'
    },
    // 出口文件配置项
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name].js'
    },
    module:{},
    plugins:[],
    devServer:{}
}