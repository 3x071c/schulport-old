/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['images.unsplash.com', 'lsg.musin.de'],
	},
	reactStrictMode: true,
};
module.exports = nextConfig;
