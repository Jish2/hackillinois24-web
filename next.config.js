/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/:slug",
				destination: "/",
				permanent: true,
			},
			{
				source: "/:slug/:slug*",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
