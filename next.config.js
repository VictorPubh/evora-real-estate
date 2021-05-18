const withImages = require('next-images')
    
module.exports = withImages({
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            }
        ],
    },
})

module.exports = {
    module: {
        test: /\.svg$/i,
        use: {
            loader: 'svg-url-loader',
            options: {
                encoding: 'base64'
            }
        }
    }
}

module.exports = {
    images: {
      domains: ['i.imgur.com'],
    },
}