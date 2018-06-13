const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	mode: 'development',
	entry: './src/index.js',
	plugins: [
	    new CleanWebpackPlugin(['docs']),
		new HtmlWebpackPlugin({
			title: 'PIXI',
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'docs')
	},
	module: {
		rules: [
			{test: /\.css$/,use: ['style-loader','css-loader']}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './src',
		hot: true
	}
	
}