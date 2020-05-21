const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './assets/js/gallery.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.glsl$/i,
                loader: ['webpack-glsl-loader'],
            },
        ],
    },
    output: {
        libraryTarget: 'umd',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
