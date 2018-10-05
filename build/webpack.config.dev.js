const path = require("path")
const webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const eslintFriendlyFormatter = require("eslint-friendly-formatter")
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
    },
    entry: [
        "./src/index.js"
    ],
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        },
        clientLogLevel: "error",
        quiet: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                include: path.join(__dirname, "../src"),
                loader: "eslint-loader",
                enforce: "pre",
                options: {
                    emitWarning: true,
                    formatter: eslintFriendlyFormatter,
                }
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            inject: true
        }),
        new FriendlyErrorsWebpackPlugin(),
    ]
}
