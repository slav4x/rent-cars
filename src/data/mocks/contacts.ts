export type CityContact = {
	id: string;
	city: string;
	image: string;
	address: string;
	phone: string;
	email: string;
};

export const contacts: CityContact[] = [
	{
		id: 'spb',
		city: 'Санкт-Петербург',
		image: '/img/map.jpg',
		address: 'Железнодорожный пр. 36, Санкт-Петербург, Россия, 192148',
		phone: '+7 (911) 089-94-94',
		email: 'work.dm@gmail.com'
	},
	{
		id: 'msk',
		city: 'Москва',
		image: '/img/map.jpg',
		address: 'Москва, Каширское шоссе, 14, 2 этаж',
		phone: '+7 (499) 130-51-01',
		email: 'work.dm@gmail.com'
	},
	{
		id: 'sochi',
		city: 'Сочи',
		image: '/img/map.jpg',
		address: 'Сочи, ул Ленина 298Б, строение 9',
		phone: '+7 (903) 099-22-72',
		email: 'sochi@rentcar.ru'
	},
	{
		id: 'murmansk',
		city: 'Мурманск',
		image: '/img/map.jpg',
		address: 'Мурманск, ул. Полярные Зори, 62, 3 этаж, 312 офис',
		phone: '+7 (905) 285-22-22',
		email: 'murmansk@rentcar.ru'
	}
];
