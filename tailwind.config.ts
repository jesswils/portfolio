import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				raisin: '#242331',
				powder: '#242331',
				power: '#737099',
				grey: '#333',
				battleship: '#898989',
				platinum: '#E3E3E3',
			},
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
				backup: ['DM Serif Display', 'display'],
				display: ['Belanosima', 'display'],
			},
		},
	},
	plugins: [],
};
export default config;
