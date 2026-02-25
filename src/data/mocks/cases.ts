export type CaseItem = {
	id: string;
	title: string;
	image: string;
	purchasePrice: number;
	extraCosts3y: number;
	monthlyIncome: number;
	yearlyProfit: number;
};

export const casesMock: CaseItem[] = [
	{
		id: 'pp-1',
		title: 'Range Rover 1',
		image: '/img/car-item.jpg',
		purchasePrice: 7200000,
		extraCosts3y: 950000,
		monthlyIncome: 320000,
		yearlyProfit: 1800000
	},
	{
		id: 'pp-2',
		title: 'Range Rover 2',
		image: '/img/car-item.jpg',
		purchasePrice: 7200000,
		extraCosts3y: 950000,
		monthlyIncome: 320000,
		yearlyProfit: 1800000
	},
	{
		id: 'pp-3',
		title: 'Range Rover 3',
		image: '/img/car-item.jpg',
		purchasePrice: 7200000,
		extraCosts3y: 950000,
		monthlyIncome: 320000,
		yearlyProfit: 1800000
	},
	{
		id: 'pp-4',
		title: 'Range Rover 1',
		image: '/img/car-item.jpg',
		purchasePrice: 7200000,
		extraCosts3y: 950000,
		monthlyIncome: 320000,
		yearlyProfit: 1800000
	},
	{
		id: 'pp-5',
		title: 'Range Rover 2',
		image: '/img/car-item.jpg',
		purchasePrice: 7200000,
		extraCosts3y: 950000,
		monthlyIncome: 320000,
		yearlyProfit: 1800000
	},
	{
		id: 'pp-6',
		title: 'Range Rover 3',
		image: '/img/car-item.jpg',
		purchasePrice: 7200000,
		extraCosts3y: 950000,
		monthlyIncome: 320000,
		yearlyProfit: 1800000
	}
];
