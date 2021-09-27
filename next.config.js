module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/account/:slug(\\onboarding|login|registration)',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
};
