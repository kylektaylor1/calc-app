/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				sm: ['0 2px 0px rgba(255, 255, 255, 0.35)', '2px 0 0px rgba(255, 255, 255, 0.35)'],
			},
		},
	},
	plugins: [],
};
