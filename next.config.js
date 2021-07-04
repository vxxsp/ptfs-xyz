module.exports = {
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
};
