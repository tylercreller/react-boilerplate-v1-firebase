const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env) => {
  const isProduction = env.production === true;
  const MiniCssExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
  const TextCompression = new CompressionPlugin({
    test: /\.js$/,
    deleteOriginalAssets: false // Firebase deploys our bundle.js
  });
  const plugins = [MiniCssExtract];

  if (isProduction) {
    plugins.push(TextCompression);
  }

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    mode: isProduction ? 'production' : 'development',
    plugins,
    devtool: isProduction ? false : 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
