var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    'build': path.join(process.cwd(), 'client-render.js')
  },
  output: {
    path: './public/',
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      },
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
}