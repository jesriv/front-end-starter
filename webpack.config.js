var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Webpack = require("webpack");

module.exports = {
     entry: './source/javascripts/source/app.js',

     output: {
         path: './source/javascripts/build',
         filename: 'app.js'
     },
     
     module: {
	   loaders: [
	    {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
	    {
		test: /\.scss$/,
		loaders: ["style", "css", "sass"]
	    },
            {
            	test: /\.js$/,
            	exclude: /(node_modules)/,
            	loader: 'babel',
            	query: {
            		presets: ['es2015']
            	}
            }
	    ]
     },
     
     plugins: [
        new ExtractTextPlugin("../../stylesheets/build/styles.css", {
            allChunks: true
        }),
        new Webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
 };
