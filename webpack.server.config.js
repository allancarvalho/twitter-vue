const webpack = require('webpack')
const path = require('path')
const externals = require('webpack-node-externals')

module.exports = {
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server/server.js'
  },
  resolve: {
    extensions: ['.vue', '.js', '.json']
  },
  externals: [externals()],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loaders: ['vue-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      }
    ]
  }
}
