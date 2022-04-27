/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-04-27 21:40:26
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-04-27 22:18:26
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin()],
};
