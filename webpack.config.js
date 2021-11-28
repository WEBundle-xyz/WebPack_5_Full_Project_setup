const path = require('path');

module.exports = {
	mode: 'none',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'main.js',
	},
  devtool: false,
	devServer: {
    contentBase: './dist'
		// port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
