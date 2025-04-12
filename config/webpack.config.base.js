const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { webpack } = require("webpack");
const webpackconfig = {
  target: "node",
  mode: "development",
  entry: {
    server: path.join(__dirname, "index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../dist"),
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [path.join(__dirname, "../node_modules")],
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin(),new webpack.DefinePlugin({'oprocess.env':(process.env.NODE_ENV==='production'||
    process.env.NODE_ENV==='prod')?'production':'development'})],
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
};

module.exports = webpackconfig;
