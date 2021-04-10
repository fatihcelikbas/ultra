const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
