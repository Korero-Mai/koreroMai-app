const path = require('path')
const webpack = require('webpack')

const PATHS = {
  entry: path.join(__dirname, '/src/index.js'),
  output: path.join(__dirname, '/public')
}

module.exports = {
  entry: PATHS.entry,

  output: {
    path: PATHS.output,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: PATHS.output,
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  devtool: 'cheap-module-source-map'
}
