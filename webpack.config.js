var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

var kotlinLoader = require.resolve('webpack-kotlin-loader/loader');

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
            {test: /\.kt$/, loaders: [kotlinLoader]}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
};