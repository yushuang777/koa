const {merge} = require("webpack-merge");
const base = require("./webpack.config.base");
const terserPlugin = require("terser-webpack-plugin");
const webpackconfig =merge(base,{
  mode: "production",
  devtool: "source-map",
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
    })],
    splitChunks:{
      cacheGroups:{
        commons:{
         name:"commons",
         chunks:"initial",
         minChunks:3,
         enforce:true
        }
      }
    }
  }
})
module.exports = webpackconfig;