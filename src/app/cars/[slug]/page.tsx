import PublicLayout from '@/components/layout/PublicLayout';
import CarsPage from '@/pages/cars/CarsPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Страница авто',
	description: ''
};

export default function Page() {
	return (
		<PublicLayout>
			<CarsPage />
		</PublicLayout>
	);
}
