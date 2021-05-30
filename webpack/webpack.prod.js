const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../prod'),
        publicPath: ''
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/template.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                },
                favicon: './src/assets/img/favicon.png'
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[hash].css'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 4. Extract css into files
                    'css-loader', // 3. Turns css into commonjs
                    'postcss-loader', // 2. Modify with postcss (autoprefixer)
                    'sass-loader' // 1. Turns sass into css
                ]
            }
        ]
    }
});