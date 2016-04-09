var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    'build': path.join(process.cwd(), 'client-render.js')
  },
  output: {
    path: './public/',
    filename: '[name].js'
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