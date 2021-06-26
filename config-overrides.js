
const {
    override,
    disableEsLint,
    addWebpackPlugin,
} = require("customize-cra");

const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin

module.exports = override(
    disableEsLint(),
    addWebpackPlugin(
        new UnusedFilesWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "report.html",
        }),
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js$|\.jsx$|\.css$|\.html$|\.eot$|\.ttf$|\.woff$|\.svg$|\.png$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ),
);
