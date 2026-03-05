import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // ESLint'i build sırasında devre dışı bırak
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Cloudflare Workers için gerekli ayarlar
  output: 'standalone', // Standalone çıktı için
  
  images: {
    unoptimized: true, // Cloudflare'da image optimization için
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Tüm hostnamelere izin ver
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '**',
        pathname: '/**',
      }
    ],
  },
  
  // Deneysel özellikler (gerekirse)
  experimental: {
    optimizeCss: false, // CSS optimizasyonu kapalı
  },
};

export default withNextIntl(nextConfig);