const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: ['babel-polyfill', './src/index.js'],
    entry: {
        backend: './src/backend/index.js',
        frontend : './src/frontend/index.js'
    },
    output : {
        path : path.join(__dirname, '../public/dist'),
        filename : '[name].js',
        publicPath : '/dist/'
    },
    // output : {
    //     path : path.join(__dirname, 'dist'),
    //     filename : 'bundle.js',
    //     publicPath : '/'
    // },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.js$/,
                exclude : '/node_modules'
            },
            {
                use : ['style-loader','css-loader'],
                test : /\.css$/
            },
            {
                use : 'file-loader',
                test : /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename : 'backend.html',
            template : './src/backend/index.html',
            chunks: ['backend']
        }),
        new HtmlWebpackPlugin({
            filename : 'frontend.html',
            template : './src/frontend/index.html',
            chunks: ['frontend']
        }),
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery',
            'window.jQuery' : 'jquery',
            'window.$' : 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ]
}