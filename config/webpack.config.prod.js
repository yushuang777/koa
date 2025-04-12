const webpackMerge = require("webpack-merge");
const base = require("./webpack.config.base");
const terserPlugin = require("terser-webpack-plugin");
const webpackconfig =webpackMerge(base,{
  mode: "production",
  devtool: "eval-source-map",
  stats:{children:false},
  optimization:{
    minimize:true,
    minimizer:[new terserPlugin({
      terserOptions:{
        warnings:false,
        compress:{
          warnings:false,
          drop_console:true,
          drop_debugger:true,
          pure_funcs:['console.log']
        },
        output:{
          comments:false,
          beautify:false
        }
      }
    })]
  }
})
module,exports = webpackconfig;