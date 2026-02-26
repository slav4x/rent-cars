'use client';

import styles from './Catalog.module.sass';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { carCategories, type CarCategory } from '@/data/mocks/categories';
import { cars } from '@/data/mocks/cars';
import CarCard from '@/components/cars/CarCard';

export default function Catalog() {
	const [active, setActive] = useState<CarCategory>('all');
	const [showAll, setShowAll] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia('(max-width: 1023px)');

		const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
			const matches = 'matches' in e ? e.matches : mq.matches;
			setIsMobile(matches);
		};

		onChange(mq);

		if ('addEventListener' in mq) {
			mq.addEventListener('change', onChange as (e: MediaQueryListEvent) => void);
			return () => mq.removeEventListener('change', onChange as (e: MediaQueryListEvent) => void);
		} else {
			// @ts-ignore
			mq.addListener(onChange);
			// @ts-ignore
			return () => mq.removeListener(onChange);
		}
	}, []);

	const filteredCars = useMemo(() => {
		return active === 'all' ? cars : cars.filter((car) => car.category === active);
	}, [active]);

	const limit = isMobile ? 8 : 9;

	const visibleCars = showAll ? filteredCars : filteredCars.slice(0, limit);
	const canShowMore = !showAll && filteredCars.length > limit;

	const handleCategory = (id: CarCategory) => {
		setActive(id);
		setShowAll(false);
	};

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
							onClick={() => handleCategory(cat.id)}
							type="button"
						>
							{cat.label}
						</button>
					))}
				</div>
				<div className={styles.grid}>
					{visibleCars.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</div>

				{canShowMore && (
					<button type="button" className={styles.more} onClick={() => setShowAll(true)}>
						Смотреть больше
					</button>
				)}
			</div>
		</section>
	);
}
