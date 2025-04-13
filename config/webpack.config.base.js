const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");  // 修正导入方式
const utils = require("./utils");

const webpackconfig = {
  target: "node",
  mode: "development",
  entry: {
    server: path.join(utils.APP_PATH, "index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: utils.DIST_PATH,
    publicPath: "/"  // 添加publicPath配置
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: "babel-loader" },
        exclude: [path.join(__dirname, "../node_modules")],
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({  // 修正拼写错误
      'process.env': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
};

module.exports = webpackconfig;
