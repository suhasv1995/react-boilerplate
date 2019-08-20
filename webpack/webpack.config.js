const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, '..');
const ASSETS_DIR = path.resolve(__dirname, '..', 'build', 'assets');
const SRC_DIR = path.resolve(__dirname, '..', 'src');

const config = {
  context: APP_DIR,
  output: {
    chunkFilename: '[name]-chunk-[chunkhash].js',
    filename: '[name]-[hash].js',
    path: ASSETS_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      components: `${SRC_DIR}/components`,
      containers: `${SRC_DIR}/containers`,
      helpers: `${SRC_DIR}/helpers`,
    },
    extensions: ['.json', '.js', '.jsx'],
    modules: [SRC_DIR, 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './templates/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
