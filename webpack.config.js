const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    output:{
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader:'file-loader?name=img/[name].[ext]?[hash]'
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}