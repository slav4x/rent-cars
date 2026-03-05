import PublicLayout from '@/components/layout/PublicLayout';
import ContactsPage from '@/pages/contacts/ContactsPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Контакты',
	description: ''
};

export default function Page() {
	return (
		<PublicLayout>
			<ContactsPage />
		</PublicLayout>
	);
}
