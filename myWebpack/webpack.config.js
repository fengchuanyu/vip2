const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

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
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"127.0.0.1",
        compress:true,
        port:'8081',
        open:true
    }
}