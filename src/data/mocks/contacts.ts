export type CityContact = {
	id: string;
	city: string;
	image: string;
	address: string;
	phone: string;
	email: string;
	map: string;
};

export const contacts: CityContact[] = [
	{
		id: 'spb',
		city: 'Санкт-Петербург',
		image: '/img/map.jpg',
		address: 'Железнодорожный пр. 36, Санкт-Петербург, Россия, 192148',
		phone: '+7 (911) 089-94-94',
		email: 'work.dm@gmail.com',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A3892e36fb3dc877f227183ba6f5088384517262874fa5fcadab2c1370f49518a&amp;source=constructor'
	},
	{
		id: 'msk',
		city: 'Москва',
		image: '/img/map.jpg',
		address: 'Москва, Каширское шоссе, 14, 2 этаж',
		phone: '+7 (499) 130-51-01',
		email: 'work.dm@gmail.com',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A27017476604ee062e38f8ae5d6080b0e87a4941b4f7519bd053c1282cd06c9c6&amp;source=constructor'
	},
	{
		id: 'sochi',
		city: 'Сочи',
		image: '/img/map.jpg',
		address: 'Сочи, ул Ленина 298Б, строение 9',
		phone: '+7 (903) 099-22-72',
		email: 'sochi@rentcar.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A7746373ed8cb5efa54e9addc2466561c3d4559aa338f9fbdc72736b1be5c138b&amp;source=constructor'
	},
	{
		id: 'murmansk',
		city: 'Мурманск',
		image: '/img/map.jpg',
		address: 'Мурманск, ул. Полярные Зори, 62, 3 этаж, 312 офис',
		phone: '+7 (905) 285-22-22',
		email: 'murmansk@rentcar.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad6f6feea3e0be846611782f37cf802db6666038f075662997935522074581e2c&amp;source=constructor'
	}
];
