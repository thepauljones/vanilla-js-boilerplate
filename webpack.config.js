const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        js: path.resolve(__dirname, 'src/index.js'),
        styles: path.resolve(__dirname, 'src/scss/index.scss')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boilerplate',
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            CURRENT_US_PRESIDENT: JSON.stringify('Donald "The Horror-clown" Trump')
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                  test: /\.m?js$/,
                  exclude: /(node_modules)/,
                  use: {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env']
                      }
                  }
            }
        ]
    }
};
