const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
	entry: path.resolve(__dirname, 'server.js'),
	output: {
		filename: 'server.bundle.js',
		path: OUTPUT_PATH
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	target: 'node',
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
  		'react-dom/server', 'react/addons',
  	]).reduce((ext, mod) => {
  		ext[mod] = `commonjs ${mod}`
  		return ext;
  	}, {}),

	node: {
		__filename: true,
		__dirname: true
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.DefinePlugin({
			API_HOST: JSON.stringify('http://localhost:8000')
		})
	],
  	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			},
			{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader!sass-loader'
				})
			},
			{
				test: /\.(png|jpeg|jpg|gif|ttf)$/,
				use: [
					{ loader: 'url-loader', options: {} } 
				]
			}
		]
	}
}