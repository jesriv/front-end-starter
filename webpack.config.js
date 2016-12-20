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
            	test: /\.js|\.jsx$/,
            	exclude: /(node_modules)/,
            	loader: 'babel',
            	query: {
            		presets: ['es2015', 'react']
            	}
            }
	    ]
    },
     
    plugins: [
        new ExtractTextPlugin("../../stylesheets/build/styles.css", {
            allChunks: true
        }),

        /* 
            Uncomment below to get rid of development warnings 
        */

        // new Webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        new Webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
 };
