const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://private4testing.uniskills.net/api/v3*', 
        },
      ];
    },
  };
  