'use strict';
const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const rootDir = __dirname;
/**
 * Resolve paths so that we don't have to use relative paths when importing dependencies.
 * Very helpful when scaling an application and changing the location of a file that my require another file
 * in the same directory as the one it used to be in
 */
const pathResolves = [path.resolve(rootDir, 'src'), path.resolve(rootDir, 'node_modules')];
module.exports = {
  entry: {
    'app': path.resolve(rootDir, 'src/client/main.ts'),
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': 'http://localhost:3000'
    },
    host: '0.0.0.0',
    headers: { "Access-Control-Allow-Origin": "*" },
    publicPath: '/'
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.component.ts$/,
        use: [
          {
            loader: 'angular2-template-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              configFileName: path.resolve(rootDir, 'src/client/tsconfig.json')
            }
          }],
        include: [path.resolve(rootDir, 'src/client')]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFileName: path.resolve(rootDir, 'src/client/tsconfig.json')
            }
          }
        ],
        exclude: /\.component.ts$/
      },
      {
        test: /\.jade$/,
        use: ['pug-ng-html-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jade'],
    modules: pathResolves
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(rootDir, 'src/index.jade')
    }),
    /**
     * This plugin is required because webpack 2.0 has some issues compiling angular 2.
     * The angular CLI team implemented this quick regexp fix to get around compilation errors
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(rootDir, './src'),
      {}
    )
  ]
};
