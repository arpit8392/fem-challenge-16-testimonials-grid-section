import './globals.css'
import { Barlow_Semi_Condensed } from 'next/font/google'

const barlow_semi_condensed = Barlow_Semi_Condensed({
	subsets: ['latin'],
	weight: ['500', '600'],
	variable: '--font-barlow-semi-condensed',
})

export const metadata = {
	title: 'Testimonials Grid Section',
	description:
		'Front End Mentor Challenge | Testimonials Grid Section | Developed using Next JS, Taiwind CSS, CSS Grid andy many more...',
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${barlow_semi_condensed.variable} bg-lightGrayishBlue px-6 py-8 font-sans`}>
				{children}
			</body>
		</html>
	)
}
