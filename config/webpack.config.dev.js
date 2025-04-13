const {merge} = require("webpack-merge");
const base = require("./webpack.config.base");
const webpackconfig =merge(base,{
  mode: "development",
  devtool: "eval-source-map",
  stats:{children:false}
})
module.exports = webpackconfig;