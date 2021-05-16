const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: './src/js/vendor.js',
        app: './src/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: ''
                    }
                }
            }
        ]
    }
};