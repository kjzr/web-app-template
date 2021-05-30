const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'prod'),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            favicon: './src/assets/img/favicon.png'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. Injects styles into dom
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ]
            }
        ]
    }
});