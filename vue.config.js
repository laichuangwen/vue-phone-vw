// vue.config.js
'use strict'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = {
    //TODO  参考 https://github.com/vuejs/vue-cli/tree/dev/docs/zh/config
    // 选项...
    baseUrl: '/mobile',//默认'/',
    outputDir: 'dist',//默认dist， 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    productionSourceMap: false,//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    devServer: {
        port: 5000,
    },
    //去除console.log
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true,//console
                            drop_debugger: false,
                            pure_funcs: ['console.log']//移除console
                        }
                    }
                })
            ]
        }

    }
}