/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/hcp",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
