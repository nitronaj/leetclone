/** @type {import('next').NextConfig} */

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const monacoRules = [
  {
    test: /\.ttf$/,
    type: 'asset/resource',
  },
];

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Modify config and then return it
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ['javascript', 'markdown', 'typescript'],
          filename: 'static/[name].worker.js',
        })
      );
      config.module.rules.push(...monacoRules);
    }

    return config;
  },
};

// const nextConfig = {};

module.exports = nextConfig;
