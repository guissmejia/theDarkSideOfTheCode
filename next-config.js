require("./process.env.config.js").execute();
const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = withImages(
  withOptimizedImages({
    webpack: (config, { isServer, dev }) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty",
      };
      if (!isServer && !dev) {
        //Optimize build
        config.optimization.minimizer = [new TerserPlugin()];

        //Optimize CSS
        config.optimization.minimizer = [];
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      }
      return config;
    },
  })
);
