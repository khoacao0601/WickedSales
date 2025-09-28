const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientPath = path.resolve(__dirname, 'client');
const publicPath = path.resolve(__dirname, 'server/public');

module.exports = {
  resolve: { extensions: ['.js', '.jsx'] },
  entry: clientPath, // client/index.jsx
  output: {
    path: publicPath, // keep same as express static path
    filename: 'main.js',
    hashFunction: 'xxhash64',
    clean: true // remove old folder before the build
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: clientPath,
      use: {
        loader: 'babel-loader',
        options: { plugins: ['@babel/plugin-transform-react-jsx'] }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      filename: 'index.html' // => server/public/index.html
    })
  ],
  devtool: 'source-map'
  // devServer only use in local, Vercel won't use it
};
