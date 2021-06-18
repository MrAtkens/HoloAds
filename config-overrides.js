
const {
    override,
    disableEsLint,
    addWebpackPlugin,
} = require("customize-cra");

const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');

module.exports = override(
    disableEsLint(),
    addWebpackPlugin(
        new UnusedFilesWebpackPlugin(),
        new DuplicatesPlugin(),
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js$|\.jsx$|\.css$|\.html$|\.eot$|\.ttf$|\.woff$|\.svg$|\.png$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ),
);
