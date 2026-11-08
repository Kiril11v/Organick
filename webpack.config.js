const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js'
		// contacts: './src/js/contacts.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'), // Явно указываем папку dist
		clean: true, // Очищает папку dist перед каждой новой сборкой
		publicPath: './', // Важно для правильных относительных путей на GitHub Pages
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/html', // Путь к вашему исходному файлу HTML (проверьте, лежит ли он там)
			filename: 'index.html',
			chunks: ['index'] // Подключает к этому HTML только index.bundle.js
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
