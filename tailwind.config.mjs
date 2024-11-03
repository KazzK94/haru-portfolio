/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg': "url('/images/haru-background.jfif')",
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
