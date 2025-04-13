const path = require("path");
exports.resolve = function resolve(dir) {
  return path.join(__dirname, '..', dir);
};

// 修改APP_PATH指向根目录
exports.APP_PATH = exports.resolve('');  // 空字符串表示根目录
exports.DIST_PATH = exports.resolve('dist');