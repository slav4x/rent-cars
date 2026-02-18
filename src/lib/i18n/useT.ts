'use client';

import { dict } from './dict';
import { useLangFromPath } from './useLangFromPath';

export function useT() {
	const lang = useLangFromPath();
	return dict[lang];
}
