
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        app: path.resolve(__dirname, "src")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "src", "index.html")
            }
        )
    ]
}