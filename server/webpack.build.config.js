const path = require('path')
const nodeExternals = require('webpack-node-externals')
const buildDirectory = 'src'

module.exports = {
  mode: 'production',
  entry: [
    './src/server.js'
  ],
  output: {
    path: path.join(__dirname, buildDirectory),
    filename: 'store.bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ["@babel/plugin-transform-runtime"]
        }
      }
    }]
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: []
}
