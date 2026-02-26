import type { CarCategory } from './categories';

export type Car = {
	id: string;
	slug: string;
	title: string;
	image: string;
	category: CarCategory;
	price: number;
};

export const cars: Car[] = [
	{
		id: '1',
		slug: 'toyota-camry-2021',
		title: 'Toyota Camry 2021',
		image: '/img/car-item.jpg',
		category: 'business',
		price: 5500
	},
	{
		id: '2',
		slug: 'bmw-m4-competition',
		title: 'BMW M4 Competition',
		image: '/img/car-item.jpg',
		category: 'sport',
		price: 15000
	},
	{
		id: '3',
		slug: 'tesla-model-3',
		title: 'Tesla Model 3',
		image: '/img/car-item.jpg',
		category: 'electric',
		price: 9000
	},
	{
		id: '4',
		slug: 'mercedes-e-class-2022',
		title: 'Mercedes E-Class 2022',
		image: '/img/car-item.jpg',
		category: 'business',
		price: 12000
	},
	{
		id: '5',
		slug: 'audi-a6-quattro',
		title: 'Audi A6 Quattro',
		image: '/img/car-item.jpg',
		category: 'business',
		price: 11000
	},
	{
		id: '6',
		slug: 'porsche-911-carrera',
		title: 'Porsche 911 Carrera',
		image: '/img/car-item.jpg',
		category: 'sport',
		price: 25000
	},
	{
		id: '7',
		slug: 'ford-mustang-gt',
		title: 'Ford Mustang GT',
		image: '/img/car-item.jpg',
		category: 'sport',
		price: 14000
	},
	{
		id: '8',
		slug: 'hyundai-sonata-2023',
		title: 'Hyundai Sonata 2023',
		image: '/img/car-item.jpg',
		category: 'comfort',
		price: 6000
	},
	{
		id: '9',
		slug: 'kia-k5-2022',
		title: 'Kia K5 2022',
		image: '/img/car-item.jpg',
		category: 'comfort',
		price: 5800
	},
	{
		id: '10',
		slug: 'volkswagen-id4',
		title: 'Volkswagen ID.4',
		image: '/img/car-item.jpg',
		category: 'electric',
		price: 9500
	},
	{
		id: '11',
		slug: 'range-rover-sport',
		title: 'Range Rover Sport',
		image: '/img/car-item.jpg',
		category: 'premium',
		price: 20000
	},
	{
		id: '12',
		slug: 'lexus-es-250',
		title: 'Lexus ES 250',
		image: '/img/car-item.jpg',
		category: 'business',
		price: 10000
	}
];
