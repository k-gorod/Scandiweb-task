const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
        
    ],
    devServer: {
        port: 3333,
        contentBase: path.resolve(__dirname, 'src'),
        open: true
    },

    resolve: {
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },

}