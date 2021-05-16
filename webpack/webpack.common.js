module.exports = {
    entry: {
        vendor: './src/js/vendor.js',
        app: './src/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
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
                        outputPath: 'assets/img'
                    }
                }
            }
        ]
    }
};