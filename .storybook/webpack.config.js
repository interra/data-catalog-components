const path = require("path");
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'

  // add our custom loaders
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    exclude: /node_modules/,
    include: path.resolve(__dirname, "../src")
  });

  return storybookBaseConfig;
};
