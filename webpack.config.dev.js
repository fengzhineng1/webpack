const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack') // to access built-in plugins
const path = require('path')

const dirname = path.resolve(__dirname)

const config = {
  entry: {
    pageOne: ['react-hot-loader/patch', './index.js'],
    pagetwo: './app.js',
    vender: ['react', 'react-router-dom', 'react-dom']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000000
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader?cacheDirectory=true'
      }
    ]
  },
  resolve: {
    alias: {
      pages: dirname + '/pages',
      router: dirname + '/router'
    }
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({template: './index.html'}),
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}

module.exports = config
