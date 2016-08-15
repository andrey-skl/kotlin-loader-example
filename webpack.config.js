var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        main: './src/index',
        vendor: ['kotlin', 'react', 'react-dom', 'react-router', 'kotlinx.html.shared']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'kotlin': require.resolve('webpack-kotlin-loader/kotlin-runtime'),
            'kotlinx.html.shared': require.resolve('./lib/kotlinx.html/kotlinx.html.shared-0.5.11')
        }
    },
    module: {
        loaders: [
            {
                test: /\.kt$/,
                loader: 'webpack-kotlin-loader?' + JSON.stringify({
                    srcRoots: [
                        path.resolve(__dirname, './src'),
                        path.resolve(__dirname, './lib/reakt')
                    ],
                    libraryFiles: [
                        path.resolve(__dirname, './lib/kotlinx.html/kotlinx.html-0.5.11-SNAPSHOT-js.jar')
                    ],
                    compilerOptions: {
                        noWarn: true
                    }
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