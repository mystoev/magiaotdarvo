const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const {
  DATA_FILE,
  EMAIL_FILE,
  UPDATE_FILE,
  LOGIN_FILE,
  ADD_FILE,
  FUNCTIONS_FILE,
  CATEGORIES_PHP,
  PRODUCTS_PHP,
  PRODUCT_PHP
} = require('./src/constants/data');

module.exports = (env) => {
  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    mode: env.production ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.(css|less)$/i,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: env.production ? 'index.php' : 'index.html',
        template: path.join(__dirname, 'public', 'index.html')
      }),
      new CopyPlugin({
        patterns: [
          { from: path.join(__dirname, 'public', DATA_FILE) },
          { from: path.join(__dirname, 'src', EMAIL_FILE) },
          { from: path.join(__dirname, 'src', UPDATE_FILE) },
          { from: path.join(__dirname, 'src', LOGIN_FILE) },
          { from: path.join(__dirname, 'src', ADD_FILE) },
          { from: path.join(__dirname, 'src', FUNCTIONS_FILE) },
          { from: path.join(__dirname, 'src', CATEGORIES_PHP) },
          { from: path.join(__dirname, 'src', PRODUCTS_PHP) },
          { from: path.join(__dirname, 'src', PRODUCT_PHP) }
        ]
      })
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false
        }),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }]
              ]
            }
          }
        })
      ]
    }
  };
};
