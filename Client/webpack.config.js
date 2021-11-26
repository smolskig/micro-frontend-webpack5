const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("./package.json").dependencies;

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const esLintOptions = {
  context: "./src",
};

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9001,
    client: {
      logging: "error",
    },
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ESLintPlugin(esLintOptions),
    new ModuleFederationPlugin({
      name: "clients",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./routes": "./src/routes/routes.js",
      },
      shared: {
        ...dependencies,
        "react-router-dom": {
          requiredVersion: dependencies["react-router-dom"],
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
        react: {
          requiredVersion: dependencies["react"],
          singleton: true,
        },
      },
    }),
  ],
};
