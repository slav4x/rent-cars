import Page404 from '@/pages/404/page404';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Страница не найдена',
	description: ''
};

export default function Page() {
	return <Page404 />;
}
