const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve("process/browser.js"), // ⚠️ phải có .js
  };

  config.resolve.alias = {
    ...config.resolve.alias,
    "process/browser": "process/browser.js", // ⭐ FIX LỖI react-router
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser.js", // ⚠️ phải có .js
    })
  );

  return config;
};