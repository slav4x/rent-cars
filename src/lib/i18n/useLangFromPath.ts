'use client';

import { usePathname } from 'next/navigation';

export function useLangFromPath(): 'ru' | 'en' {
	const pathname = usePathname();
	return pathname?.startsWith('/en') ? 'en' : 'ru';
}
