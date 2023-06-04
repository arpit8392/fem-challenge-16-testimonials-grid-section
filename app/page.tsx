import testimonials from '@/data'
import TestimonialItem from './components/TestimonialItem'

export default function Home() {
	return (
		<main className='grid min-h-screen place-content-center md:mx-auto md:max-w-8xl'>
			<ul className='grid grid-cols-1 gap-y-6 md:grid-flow-col-dense md:grid-cols-4 md:gap-x-8'>
				{testimonials.map((item) => (
					<TestimonialItem
						key={item.id}
						testimonial={item}
						classes={`grid-item-${item.id}`}
					/>
				))}
			</ul>
		</main>
	)
}
