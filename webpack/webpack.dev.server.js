const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.dev.config');

const app = express();
const compiler = webpack(config);

const port = 2000;

const options = {
  compress: true,
  hot: true,
  stats: { colors: true },
  publicPath: '/',
};

app.use(devMiddleware(compiler, options));
app.use(hotMiddleware(compiler));

app
  .listen(port, () => {
    console.info(
      '\n✅ ',
      'Webpack Development Server is running on port',
      port,
      '\n'
    );
  })
  .on('error', err => {
    if (err.errno === 'EADDRINUSE') {
      console.error(`‼️  Port ${port} is already in use.`);
    } else {
      console.error('‼️ ', err);
    }
    process.exit();
  });
