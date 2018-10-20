const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: './dist',
        port: 8080
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'paginas/cursos.html',
            template: './src/paginas/cursos.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'paginas/inicio.html',
            template: './src/paginas/inicio.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'paginas/sobre.html',
            template: './src/paginas/sobre.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'paginas/suporte.html',
            template: './src/paginas/suporte.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.s?[ca]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [ 
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    } 
                ]
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)?$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    }
}