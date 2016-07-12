var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
// 路径的配置，path是Node的模块
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
console.log(SRC_PATH);
module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'picker.js',
		library: 'picker',
		libraryTarget: 'umd'
	},
	devServer: {
		inline: true,
		contentBase: './demo',
		port: 8100
	},
	module: {
		loaders: [
			// { test: /\.css$/, loader: 'style!css' },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hello World app',
			filename: './docs/doc.html',
			AMUICDN: 'https://cdnjs.cloudflare.com/ajax/libs/amazeui/2.7.0/',
			template: './docs/template.html'
				// hash:true
		})
	]
};
