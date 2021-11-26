const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dependencies = require("./package.json").dependencies;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

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
    port: 9000,
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
      name: "orchestrator",
      filename: "remoteEntry.js",
      remotes: {
        clients: 'clients@http://localhost:9001/remoteEntry.js',
        home: 'home@http://localhost:9002/remoteEntry.js'
      },
      exposes: {},
      shared: {
        ...dependencies,
        "react-router-dom": {
          requiredVersion: dependencies["react-router-dom"],
          singleton: true,
          eager: true
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
          eager: true
        },
        react: {
          requiredVersion: dependencies["react"],
          singleton: true,
          eager: true
        },
      },
    }),
  ],
};
