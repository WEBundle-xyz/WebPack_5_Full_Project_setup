const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
	mode = 'production';
}

module.exports = {
	mode: mode,
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'main.js',
	},
	devtool: 'source-map',
	devServer: {
		// contentBase: './dist'
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
