import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'development' | 'production';

interface EnvVariables {
    mode: Mode;
    port: number;
}

export default (env: EnvVariables) => {
    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'about.html'),
                filename: 'about.html'
            }),

            isProd && new MiniCssExtractPlugin( {
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(s[ac]ss|css)$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },

                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true,
        } : undefined,
    }
    return config
}