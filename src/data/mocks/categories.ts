export type CarCategory =
	| 'all'
	| 'economy'
	| 'comfort'
	| 'comfort_plus'
	| 'business'
	| 'premium'
	| 'suv'
	| 'convertible'
	| 'sport'
	| 'muscle'
	| 'electric'
	| 'minivan';

export const carCategories: {
	id: CarCategory;
	label: string;
}[] = [
	{ id: 'all', label: 'Все' },
	{ id: 'economy', label: 'Эконом' },
	{ id: 'comfort', label: 'Комфорт' },
	{ id: 'comfort_plus', label: 'Комфорт +' },
	{ id: 'business', label: 'Бизнес' },
	{ id: 'premium', label: 'Премиум' },
	{ id: 'suv', label: 'Внедорожники' },
	{ id: 'convertible', label: 'Кабриолеты' },
	{ id: 'sport', label: 'Спортивные' },
	{ id: 'muscle', label: 'Маслкары' },
	{ id: 'electric', label: 'Электро' },
	{ id: 'minivan', label: 'Минивэны' }
];
