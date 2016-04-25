var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    'admin_product_add': path.join(process.cwd(), 'shared/components/admin/product/productAdd')
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
  resolve: {
    root: [
      path.join(process.cwd(), 'shared')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: false,
      mangle: true,
      minimize: true
    })
  ]
}