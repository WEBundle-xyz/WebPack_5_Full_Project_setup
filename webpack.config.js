const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
}

module.exports = {
	mode: mode,
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].bundle.js',
		// clear: true,
	},
	devtool: 'source-map',
	devServer: {
		// contentBase: './dist',
		hot: true,
		// port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: [new MiniCssExtractPlugin()],
};
