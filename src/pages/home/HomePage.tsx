import Benefits from './sections/Benefits/Benefits';
import Catalog from './sections/Catalog/Catalog';
import Conditions from './sections/Conditions/Conditions';
import Hero from './sections/Hero/Hero';

export default function HomePage() {
	return (
		<>
			<Hero />
			<Catalog />
			<Benefits />
			<Conditions />
		</>
	);
}
