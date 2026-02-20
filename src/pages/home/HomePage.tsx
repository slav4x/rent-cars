import About from './sections/About/About';
import Benefits from './sections/Benefits/Benefits';
import Catalog from './sections/Catalog/Catalog';
import Conditions from './sections/Conditions/Conditions';
import Faq from './sections/Faq/Faq';
import Hero from './sections/Hero/Hero';
import Reviews from './sections/Reviews/Reviews';

export default function HomePage() {
	return (
		<>
			<Hero />
			<Catalog />
			<Benefits />
			<Conditions />
			<Reviews />
			<About />
			<Faq />
		</>
	);
}
