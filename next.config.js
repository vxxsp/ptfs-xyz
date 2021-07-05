const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    {
      source: '/appeal',
      destination:
        'https://docs.google.com/forms/d/e/1FAIpQLSf8EUYrPvDNErJ3bkubT6AnF4_Ku3dS-PPyN_VS9PYb8UODvw/viewform',
      permanent: true,
    },
  ],
});
