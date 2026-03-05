import PublicLayout from '@/components/layout/PublicLayout';
import CertificatesPage from '@/pages/certificates/CertificatesPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Сертификаты',
	description: ''
};

export default function Page() {
	return (
		<PublicLayout>
			<CertificatesPage />
		</PublicLayout>
	);
}
