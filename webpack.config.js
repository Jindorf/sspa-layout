const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = () => ({
  name:"single-spa-auth-app",
  entry:"./src/main.js",
  mode:'production',
  output: {
    library: "single-spa-auth-app",
    libraryTarget: "umd",
    filename: "single-spa-auth-app.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  externals: ["bootstrap", "bootstrap-vue", "single-spa-vue", "vue", "vue-router"],
});
