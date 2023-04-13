const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Express to use wpDevMidware and wp.config file as a base
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

// Serve files on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000!!!');
});
