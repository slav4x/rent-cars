export function isEnPath(pathname: string): boolean {
	return pathname.startsWith('/en');
}

export function addEn(path: string): string {
	if (path.startsWith('/en')) return path;
	return path === '/' ? '/en' : `/en${path}`;
}

export function removeEn(path: string): string {
	return path.replace(/^\/en/, '') || '/';
}

export function withLang(path: string, isEn: boolean): string {
	return isEn ? addEn(path) : path;
}

export function switchLang(pathname: string): string {
	return isEnPath(pathname) ? removeEn(pathname) : addEn(pathname);
}
