'use client';

import { usePathname } from 'next/navigation';
import { isEnPath, switchLang, withLang } from './routing';

export function useLangRouting() {
	const raw = usePathname();
	const pathname = raw ?? '/';

	const isEn = isEnPath(pathname);

	return {
		isEn,
		pathname,
		switchHref: switchLang(pathname),
		href: (path: string) => withLang(path, isEn)
	};
}
