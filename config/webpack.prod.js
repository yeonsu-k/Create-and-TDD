const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "production", // 현재 배포 모드
  devtool: "hidden-source-map", // 느리지만 안전 배포에 추천
});
