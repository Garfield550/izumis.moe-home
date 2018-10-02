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
      include: true,
      queries: {
        'only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait)': 'p-p',
        'only screen and (min-device-width: 320px) and (max-device-width: 812px) and (orientation: landscape)': 'p-l',
        'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)': 't-p',
        'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)': 't-l',
        'only screen and (min-device-width: 768px) and (max-device-width: 1024px)': 't',
        'only screen and (min-width: 1025px)': 'd-sm',
        'only screen and (min-width: 1224px)': 'd-md',
        'only screen and (min-width: 1824px)': 'd-lg'
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