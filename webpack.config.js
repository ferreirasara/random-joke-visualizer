import { resolve } from 'path';
 
export const entry = './src/index.js';
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  library: 'random-joke-visualizer',
  libraryTarget: 'umd',
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
  ],
};