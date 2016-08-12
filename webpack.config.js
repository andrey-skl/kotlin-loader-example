const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        main: './src/index.js',
        vendor: ['kotlin']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'kotlin': require.resolve('webpack-kotlin-loader/kotlin-runtime')
        }
    },
    module: {
        loaders: [
            {
                test: /\.kt/,
                loader: 'webpack-kotlin-loader',
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        })
    ]
};