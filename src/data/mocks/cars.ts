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
	}
];
