const path = require("path");
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  // get the standard storybook webpack.config.js
  const config = genDefaultConfig(baseConfig);

  // add our custom loaders
  config.module.rules.unshift({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    exclude: /node_modules/,
    include: path.resolve(__dirname, "../src")
  });

  return config;
};
