// entry point
// output location of bundle
const path = require('path');

/* eslint-disable */

// export a function, to return the webpack configuration object
module.exports = (env, argv) => {
  const isProduction = env === 'production'; // set variable to true or false
  return {
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
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase : path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}