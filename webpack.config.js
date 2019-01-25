const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* eslint-disable */

// export a function, to return the webpack configuration object
module.exports = (env, argv) => {
  const isProduction = env === 'production'; // set variable to true or false
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
  return {
    entry : './src/app.js',
    mode: 'development',
    output : {
      path : path.join(__dirname, 'public', 'dist'),
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
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
          }
        ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase : path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}