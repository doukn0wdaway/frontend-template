import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.tsx', // Главная точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Расширения для импорта
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Для TypeScript файлов
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Для CSS файлов
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 5173,
    open: true,
  },
};
