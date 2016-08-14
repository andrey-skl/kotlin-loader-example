var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: './src/index',
        vendor: ['kotlin']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'kotlin': require.resolve('webpack-kotlin-loader/kotlin-runtime'),
            'reakt_main': require.resolve('./lib/reakt_main.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.kt$/,
                loader: 'webpack-kotlin-loader?' + JSON.stringify({
                    srcRoot: path.resolve(__dirname, './src'),
                    libraryFiles: [path.resolve(__dirname, './lib/reakt.jar')]
                })
            }
        ]
    },
    devServer: {
        stats: {
            chunks: false,
            hash: false,
            timings: true,
            assets: false,
            children: false,
            version: false
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};