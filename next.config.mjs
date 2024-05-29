/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
    webpack: config => {
      config.resolve.fallback = {
        fs: false,
        worker_threads: false,
        child_process: false,
      };
  
      return config;
    },
};

export default nextConfig;
