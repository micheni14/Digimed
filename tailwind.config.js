/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tailwind-datepicker-react/dist/**/*.js',
	],
	theme: {
		extend: {
			colors: {
			customColor:'#f4b9a1'	
			},
			fontSize: {
				cxs: '0.75rem',
				xxs: '0.85rem',
			},
		},
	},
	plugins: [require("daisyui")],
};
