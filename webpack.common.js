/**
 * Copyright (c) 2018 Garfield Lee
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
  entry: './src/index.tsx',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: '神楽坂泉 - Kagurazakai Izumi',
      inject: false,
      hash: true
    }),
    new FaviconsWebpackPlugin({
      logo: './src/icon.jpg',
      title: '神楽坂泉',
      icons: {
        twitter: false,
        windows: true
      }
    })
  ]
};