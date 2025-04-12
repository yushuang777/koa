const webpackMerge = require("webpack-merge");
const base = require("./webpack.config.base");
const webpackconfig =webpackMerge(base,{
  mode: "development",
  devtool: "eval-source-map",
  stats:{children:false}
})
module,exports = webpackconfig;