const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development", // 현재 개발 모드
  devtool: "eval-source-map", // 최대성능, 개발환경에 추천
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
  watchOptions: {
    poll: true,
    ignored: ["**/node_modules", "**/.storybook", "/src/stories", "**/cypress", "/src/__test__"],
  },
});
