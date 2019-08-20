const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');

const publicPath = 'http://localhost:2000/';

const config = {
  entry: {
    main: [
      `webpack-hot-middleware/client?path=${publicPath}__webpack_hmr`,
      'react-hot-loader/patch',
      './src/Root.js',
    ],
  },
  mode: 'development',
};

module.exports = merge(commonConfig, config);
