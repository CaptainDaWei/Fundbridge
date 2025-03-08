/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Only run this on client-side builds
    if (!isServer) {
      // Import mini-css-extract-plugin
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');
      
      // Add the plugin to the webpack plugins array
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        })
      );
    }
    
    return config;
  },
}

module.exports = nextConfig 