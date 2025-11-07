/** @type {import('next').NextConfig} */
const nextConfig = {

  // Dodajemy sekcję przekierowań
  async redirects() {
    return [
      // Przekierowanie #1: Poprawia literówkę /en -> /eng
      {
        source: '/en',
        destination: '/eng',
        permanent: true, // 301 - stałe przekierowanie
      },
      // Przekierowanie #2: Poprawia stary link /cookies
      {
        source: '/cookies',
        destination: '/politykaprywatnosci',
        permanent: true, // 301 - stałe przekierowanie
      },
    ]
  },

}

module.exports = nextConfig
