var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
console.log(SRC_PATH);
module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'picker.min.js',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['', '.js']
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
			filename: '../docs/doc.html',
			prod: false,
			AMUICDN: '.',
			template: './docs/template.html',
			inject: 'body'
				// hash:true
		}),
		// new uglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// })
	]
};
