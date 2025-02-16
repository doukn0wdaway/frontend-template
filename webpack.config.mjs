import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

/** @type {import('webpack').Configuration} */

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
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Для TypeScript файлов
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: url => !url.startsWith('/'), // Skip processing URLs that start with '/'
              },
              importLoaders: 1, // Учитываем postcss-loader
            },
          },
          'postcss-loader', // Только для CSS
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: url => !url.startsWith('/'), // Skip processing URLs that start with '/'
              },
            },
          },
          'sass-loader', // Только для SCSS
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              url: {
                filter: url => !url.startsWith('/'), // Skip processing URLs that start with '/'
              },
              importLoaders: 1,
            },
          },
          'sass-loader', // Только для SCSS
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true, // Enable TypeScript support
              svgo: true, // Optimize SVGs
              svgoConfig: {
                removeViewBox: false, // Keep viewBox attribute
              },
            },
          },
        ],
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
