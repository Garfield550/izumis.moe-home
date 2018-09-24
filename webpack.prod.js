/**
 * Copyright (c) 2018 Garfield Lee
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const Merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Common = require('./webpack.common');

module.exports = Merge(Common, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          MediaQueryPlugin.loader,
          'less-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[id].[chunkhash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css'
    }),
    new MediaQueryPlugin({
      include: [ 'main'],
      queries: {
        'only screen and (min-width : 1224px)': 'des',
        'only screen and (min-width : 1824px)': 'des'
      }
    }),
    new CompressionPlugin({
      test: /\.(png|svg|jpg|gif|css|js)$/
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all'
    }
  }
});