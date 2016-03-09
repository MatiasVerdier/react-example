const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
			{ test: /\.js|jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=85000' },
      { test: /\.jpg$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  devServer: {
    contentBase: './build',
    devTool: 'eval'
  }
}
