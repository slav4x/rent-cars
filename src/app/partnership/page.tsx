import PublicLayout from '@/components/layout/PublicLayout';
import PartnershipPage from '@/pages/partnership/PartnershipPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Сотрудничество',
	description: ''
};

export default function Page() {
	return (
		<PublicLayout>
			<PartnershipPage />
		</PublicLayout>
	);
}
