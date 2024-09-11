// webpack.config.js
module.exports = {
    // Other configurations...
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader'
          ]
        }
      ]
    }
  };
  