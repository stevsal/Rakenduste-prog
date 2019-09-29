const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: "production",
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
  ]
};
