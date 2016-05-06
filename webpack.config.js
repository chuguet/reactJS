var path=require('path');
module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js*/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
}