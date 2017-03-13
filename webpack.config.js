var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './build/index.html',
  filename: 'index.html',
  inject: 'body'
})

var APP_DIR = path.resolve(__dirname, 'app/main.js');
var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module : {
        loaders : [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
              test: /\.css$/, // Only .css files
              loader: 'style-loader!css-loader' // Run both loaders
            }
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
};
