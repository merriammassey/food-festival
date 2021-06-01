const path = require("path");
//bring webpack's methods and properties to use JQuery plugin
const webpack = require("webpack");

//create main configuration object
module.exports = {
  //three properties for webpack config
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  mode: "development",
};
