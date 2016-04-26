import webpack from 'webpack';
import path from 'path';

export default {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./src/app.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.html$/,
				loaders: ['html'],
				include: path.join(__dirname, 'src')
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
