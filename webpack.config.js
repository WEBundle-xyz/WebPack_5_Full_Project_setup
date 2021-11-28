const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';

module.exports = {
	mode: mode,
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.join(__dirname, '/prod'),
		filename: '[name].[contenthash].js',
		assetModuleFilename: '[name][text]',
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'prod'),
		},
		compress: true,
		port: 8080,
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			title: 'This file has been created with WebPack',
			filename: 'inbox.html',
			template: path.resolve(__dirname, 'src/index.html'),
		}),
	],
};
