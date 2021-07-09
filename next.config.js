/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
	reactStrictMode: true,
};
module.exports = nextConfig;
