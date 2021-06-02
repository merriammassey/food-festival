const path = require("path");
//bring webpack's methods and properties to use JQuery plugin
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

//create main configuration object
module.exports = {
  //three properties for webpack config
  // changed after bundling js from entry: "./assets/js/script.js",
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  /* changed filename attribute in output object bc build will create a series of bundled files. changed from 
  output: {
    path: path.resolve(__dirname, "dist"),
    //    path: path.join(__dirname + "/dist"),
    filename: "main.bundle.js",
  }, */
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: "file-loader",
            //configure file-loader
            //provide guidance on formatting image paths
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath: function (url) {
                return url.replace("../", "/assets/");
              },
            },
          },
          //use image optimizer loader to reduce image size
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    }),
  ],
  mode: "development",
};
