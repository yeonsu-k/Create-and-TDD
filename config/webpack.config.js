const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsConfigPath = path.resolve(__dirname, "../tsconfig.json");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: ".",
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
