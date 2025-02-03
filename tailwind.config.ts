import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/**/*.{html,js,svelte,ts}',
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			colors: {
				gray: colors.stone,
			},
			keyframes: () => ({
				loading: {
					'0%': {
						opacity: '.2',
					},
					'20%': {
						opacity: '1',
						transform: 'translateX(1px)',
					},
					to: {
						opacity: '.2',
					},
				},
				shimmer: {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
			}),
		},
	},
	plugins: [typography, forms],
};
