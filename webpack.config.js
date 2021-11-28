const path = require('path');

module.exports = {
	// configuration.mode: 'developemnt',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'main.js',
	},
	devServer: {
		port: 8080,
	},
};
