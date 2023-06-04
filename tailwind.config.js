/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-barlow-semi-condensed)'],
			},
			colors: {
				moderateViolet: 'hsl(263, 55%, 52%)',
				darkGrayishBlue: 'hsl(217, 19%, 35%)',
				darkBlackishBlue: 'hsl(219, 29%, 14%)',
				lightGray: 'hsl(0, 0%, 81%)',
				lightGrayishBlue: 'hsl(210, 46%, 95%)',
				borderViolet: 'hsl(264, 82%, 70%)',
			},
			backgroundImage: {
				quotation: 'url("/images/bg-pattern-quotation.svg")',
			},
			backgroundPosition: {
				quotationDesktopPosition: 'right 8.5rem top 1.5rem',
				quotationMobilePosition: 'right 1.5rem top 0.5rem',
			},
		},
	},
	plugins: [],
}
