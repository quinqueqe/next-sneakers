import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: false, // отключение ререндера компонентов
	images: {
		domains: [
			'i.postimg.cc',
			'localhost',
		],
	},
}

export default nextConfig
