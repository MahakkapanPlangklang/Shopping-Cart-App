/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.istudio.store',
          pathname: '/cdn/shop/files/**',
        },
        {
          protocol: 'https',
          hostname: 'store.storeimages.cdn-apple.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdsassets.apple.com', // เพิ่มโฮสต์นี้
          pathname: '/**', // อนุญาตให้เข้าถึงไฟล์ทุกเส้นทางภายใต้โฮสต์นี้
        },
      ],
    },
  };
  
  export default nextConfig;
  