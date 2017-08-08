
var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");

module.exports = webpackMerge(commonConfig, {
	devtool: "cheap-module-eval-source-map",

	output: {
		path: helpers.root("public_html"),
		publicPath: "http://localhost:8080",
		filename: "[name].js",
		chunkFilename: "[id].chunk.js"
	},

	plugins: [
		new ExtractTextPlugin("[name].css")
	],

	devServer: {
		contentBase: helpers.root("public_html"),
		historyApiFallback: true,
		stats: "minimal",
		proxy: {
			"/api": {
				target: "https://bootcamp-coders.cnm.edu/~dmcdonald21/ng4-example/public_html",
				secure: false
			}
		}
	}
});