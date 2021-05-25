const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: [
      'i.imgur.com',
      'encrypted-tbn0.gstatic.com',
      'www.notariado.org.br'
    ]
  }
}

module.exports = withPlugins([[withImages]], nextConfig)