const path = require('path');

module.exports = {
  entry: './src/index.ts',
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'dist.js',
    module: true,
    library: {
      type: 'module',
    },
  },
  optimization: {
    minimize: false,
  },
};
