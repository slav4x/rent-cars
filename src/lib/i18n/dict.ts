export type Lang = 'ru' | 'en';

export const dict = {
	ru: {
		nav: { catalog: 'Автопарк', rules: 'Условия аренды', contacts: 'Контакты' }
	},
	en: {
		nav: { catalog: 'Catalog', rules: 'Rental Terms', contacts: 'Contacts' }
	}
} as const;
