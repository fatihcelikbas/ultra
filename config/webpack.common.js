const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const paths = require('./paths');
const path = require('path');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    main: {
      import: path.resolve(paths.src, 'index.js'),
      dependOn: 'app',
    },
    app: path.resolve(paths.src, 'App.js'),
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true,
  },

  // Customize the webpack build process
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: 'Ultra',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // ESLint configuration
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        // JavaScript and React traspiled by Babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // Images
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        // Fonts and SVGs
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
};
