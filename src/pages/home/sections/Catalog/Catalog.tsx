'use client';

import styles from './Catalog.module.sass';
import Image from 'next/image';
import { useState } from 'react';
import { carCategories, type CarCategory } from '@/data/mocks/categories';
import { cars } from '@/data/mocks/cars';
import CarCard from '@/components/cars/CarCard';

export default function Catalog() {
	const [active, setActive] = useState<CarCategory>('all');
	const filteredCars = active === 'all' ? cars : cars.filter((car) => car.category === active);

	return (
		<section className={styles.catalog} id="catalog">
			<div className="container">
				<h2 className="title">
					Все машины
					<br /> готовы
					<Image src="/img/svg/catalog-icon.svg" alt="" width={56} height={56} />к поездке
				</h2>
				<div className={styles.categories}>
					{carCategories.map((cat) => (
						<button
							key={cat.id}
							className={`${styles.categoriesItem} ${active === cat.id ? styles.categoriesActive : ''}`}
							onClick={() => setActive(cat.id)}
						>
							{cat.label}
						</button>
					))}
				</div>
				<div className={styles.grid}>
					{filteredCars.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</div>
				<div className={styles.more}>Смотреть больше</div>
			</div>
		</section>
	);
}
