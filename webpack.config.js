// entry point
// output location of bundle
const path = require('path');


/* eslint-disable */
module.exports = {
  entry : './src/app.js',
  mode: 'development',
  output : {
    path : path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module : {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase : path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}