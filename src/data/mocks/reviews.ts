export type Review = {
	id: string;
	carName: string;
	author: string;
	text: string;
	imageUrl: string;
};

export const reviewsMock: Review[] = [
	{
		id: 'r1',
		carName: 'Toyota Camry 2.5 AT',
		author: 'Артём К.',
		text: 'Езжу второй год. Надёжная как старый Nokia — просто работает. Подвеска мягкая, мотор тянет спокойно. Не для гонок, а для жизни.',
		imageUrl: '/img/reviews-item.jpg'
	},
	{
		id: 'r2',
		carName: 'BMW 3 Series G20',
		author: 'Илья М.',
		text: 'Управляемость огонь. Рулится как картинг. Но это не про экономию: требует внимания и денег. Зато эмоции даёт честные.',
		imageUrl: '/img/reviews-item.jpg'
	},
	{
		id: 'r3',
		carName: 'Kia Rio 1.6',
		author: 'Никита С.',
		text: 'Брал как рабочую лошадку. Простая, дешёвая в обслуживании, запчасти везде. Салон без изысков, но за свои деньги — топ.',
		imageUrl: '/img/reviews-item.jpg'
	},
	{
		id: 'r4',
		carName: 'Mercedes-Benz E-Class W213',
		author: 'Дмитрий В.',
		text: 'Комфорт бизнес-класса, тишина в салоне, трасса как по рельсам. Но брать только с прозрачной историей — электроника любит внимание.',
		imageUrl: '/img/reviews-item.jpg'
	}
];
