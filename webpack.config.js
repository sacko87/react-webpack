const  HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const port = require("process").env.PORT || 3000;

module.exports = {
    mode: "production",
    output: {
        filename: "bundle.[hash].js",
        path: require("path").join(__dirname, "/dist"),
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".json" ], 
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: require("path").join(__dirname, "/node_modules"),
                use: [ "awesome-typescript-loader" ],
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: "sytle-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|txt)$/,
                use: [ 
                    { 
                        loader: "file-loader",
                        options: {
                            name: "[ext]/[hash].[ext]",
                        }
                    }
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        host: "127.0.0.1",
        port,
        historyApiFallback: true,
        stats: "minimal",
        open: true,
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    }
};