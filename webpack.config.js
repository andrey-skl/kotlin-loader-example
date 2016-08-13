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
            'kotlin': require.resolve('webpack-kotlin-loader/kotlin-runtime')
        }
    },
    module: {
        loaders: [
            {
                test: /\.kt$/,
                loaders: ['webpack-kotlin-loader']
            }
        ]
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