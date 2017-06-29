// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const clearRequire = require('webpack-clear-require');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    clearRequire(); // all 
    // Configuration in common to both client-side and server-side bundles
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        stats: { modules: false },
        context: __dirname,
        resolve: { extensions: ['.js', '.ts'] },
        output: {
            filename: '[name].[hash].bundle.js',
            chunkFilename: 'dist/[id].[hash].chunk.js',
            publicPath: '/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                { test: /\.ts$/, include: /ClientApp/, use: ['awesome-typescript-loader?silent=true', 'angular2-template-loader', 'angular-router-loader?aot=true&genDir=aot/'] },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize'] },
                { test: /\.scss$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize', 'sass-loader'] },
                { test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/, use: 'file-loader?name=assets/[name]-[hash:6].[ext]' },
                { test: /favicon.ico$/, use: 'file-loader?name=/[name].[ext]' }
            ]
        },
        plugins: [new CheckerPlugin()]
    };

    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/';
    const clientBundleConfig = merge(sharedConfig, {
        entry: {
            'polyfills': './ClientApp/app/polyfills.ts',
            'vendor': './ClientApp/app/vendor.ts',
            'app': './ClientApp/app/main.ts'


        },
        output: { path: path.join(__dirname, clientBundleOutputDir) },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                inject: 'body',
                template: './ClientApp/index.html'
            }),
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                // Plugins that apply in production builds only
                new webpack.optimize.UglifyJsPlugin()
            ])
    });

    return [clientBundleConfig];
};
