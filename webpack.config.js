module.exports = {
	entry: ["./global.js", "./app.react.js"],
	output: {
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['', '.js', '.es6', '.react.js']
	},
	module: {
		loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
      }
   ]
  }
}
