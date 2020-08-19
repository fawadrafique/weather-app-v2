const path = require("path");
const common = require("./webpack.config");
const {
    merge
} = require("../node_modules/webpack-merge");
const {
    CleanWebpackPlugin
} = require("../node_modules/clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "../build")
    },
    plugins: [
        new CleanWebpackPlugin()
    ]

});