const path = require('path');

module.exports = {
  mode: "production",
  externalsType: 'var',
  externals: {
    "@eflyn/esuite-client": "EsuiteClient"
  },
  entry: path.resolve(__dirname, './src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization: {
    minimize: false
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'EflynSdk',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
};
