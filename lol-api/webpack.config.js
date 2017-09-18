const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');
const TEMPLATE_PATH = path.resolve(ROOT_PATH, 'index.html');
const ENTRY_PATH = path.resolve(ROOT_PATH, 'src/index.jsx');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: ENTRY_PATH,
	output: {
		filename: 'bundle.js',
		path: OUTPUT_PATH,
		publicPath: 'dist/'
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
	plugins: [
		new ExtractTextPlugin('bundle.css')
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/, 
			exclude: /node_modules/,
			use: [
			'jshint-loader',
			{
				loader: 'babel-loader',
				options: {
					presets: [
					['es2015', { modules: false }],
					'react',
					'stage-3'
					]
				}
			}
			]
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader!sass-loader'
			})
		},
		{
			test: /\.(png|jpeg|gif|ttf)$/,
			use: [
				{ loader: 'url-loader', options: {} } 
			]
		}
		]
	}
};
