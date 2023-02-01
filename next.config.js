const { NextFederationPlugin } = require('@module-federation/nextjs-mf')
const exposes = require('./exposes.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: 'design_system',
        filename: 'static/chunks/design-system.js',
        remotes: {
        },
        exposes,
      }),
    )

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true }}],
    })

    return config
  }
}

module.exports = nextConfig
