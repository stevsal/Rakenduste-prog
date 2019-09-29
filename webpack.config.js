const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('Clean-webpack-plugin');


module.exports = {
  mode: "none",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'public' }
    ]),
  ],
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
