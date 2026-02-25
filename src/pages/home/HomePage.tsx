import About from './sections/About/About';
import Benefits from './sections/Benefits/Benefits';
import Catalog from './sections/Catalog/Catalog';
import Conditions from './sections/Conditions/Conditions';
import Faq from './sections/Faq/Faq';
import Hero from './sections/Hero/Hero';
import Manager from './sections/Manager/Manager';
import Reviews from './sections/Reviews/Reviews';
import Seo from './sections/Seo/Seo';

export default function HomePage() {
	return (
		<>
			<Hero />
			<Catalog />
			<Benefits />
			<Conditions />
			<Reviews />
			<Manager />
			<About />
			<Faq />
			<Seo />
		</>
	);
}
