'use client';

import { usePathname } from 'next/navigation';

export function useSafePathname(): string {
	return usePathname() ?? '/';
}
