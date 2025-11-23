/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' }, // Previene clickjacking
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // Previene inyección MIME
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          // HSTS forzado (solo funciona si tienes HTTPS, pero es buena práctica tenerlo listo)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;