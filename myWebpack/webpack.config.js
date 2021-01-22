const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode:'development',
    // 入口文件配置项
    entry:{
        'index':'./src/index.js'
    },
    // 出口文件配置项
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            },{
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },{
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        outputPath:'image/',
                        limit:500
                    }
                }]
            },{
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:'/node_modules/'
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
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