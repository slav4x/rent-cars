export function formatPriceRub(value: number, lang: 'ru' | 'en' = 'ru') {
	const locale = lang === 'en' ? 'en-US' : 'ru-RU';
	return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value);
}
