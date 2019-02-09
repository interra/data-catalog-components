const path = require("path");
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'

  // add our custom loaders
  storybookBaseConfig.module.rules.push(
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        {
          loader: 'url-loader',
        },
        {
          loader: 'file-loader',
        },
      ],
    }
  );

  return storybookBaseConfig;
};
