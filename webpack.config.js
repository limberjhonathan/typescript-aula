const path = require('path');

module.exports = {
  entry: './src/A0019-exercicio/A0019-exercicio.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { 
          configFile:'tsconfig-frontend.json' 
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),//configurar tambem no outDir no tsconfig
  },
  devtool: 'source-map'
};