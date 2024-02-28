// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Add your hostname here
  },
  // generateEtags: false, // set to false to disable caching of the HTML pages
  // onDemandEntries: false, // set to false to disable  incremental compilation and caching of the javascript pages
}

module.exports = {
  images: {
    domains: ['private4testing.uniskills.net','https://private4testing.uniskills.net/api/v3/chats/chat-users', 'https://private4testing.uniskills.net/api/v3', 'https://private4testing.uniskills.net' ,'media.istockphoto.com', 'media.istockphoto.com', 'images.unsplash.com'],
  },
  // Other configurations...
  productionBrowserSourceMaps: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ['private4testing.uniskills.net', 'localhost'],
  },
};
