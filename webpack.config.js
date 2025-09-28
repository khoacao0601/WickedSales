const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientPath = path.resolve(__dirname, 'client');
const publicPath = path.resolve(__dirname, 'server/public');

module.exports = {
  resolve: { extensions: ['.js', '.jsx'] },
  entry: clientPath,
  output: {
    path: publicPath,
    filename: 'main.js',
    hashFunction: 'xxhash64',
    clean: true
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
      filename: 'index.html'
    })
  ],
  devtool: 'source-map',

  // v4 API
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    static: { directory: publicPath, watch: true }, // replace for contentBase/watchContentBase
    historyApiFallback: true,
    hot: true,
    client: { logging: 'warn' },
    devMiddleware: { stats: 'minimal' },
    proxy: { '/api': { target: 'http://localhost:9000', changeOrigin: true } }
  }
};
