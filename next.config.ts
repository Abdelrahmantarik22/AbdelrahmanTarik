import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'],
},

//in use any library with window
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      scrollreveal: false,
    };
    return config;
  }
}


export default nextConfig;
