'use client';

import Link from 'next/link';
import styles from './CarCard.module.sass';
import type { Car } from '@/data/mocks/cars';
import Image from 'next/image';
import { formatPriceRub } from '@/lib/format/money';
import { useLangRouting } from '@/lib/i18n/useLangRouting';

type Props = {
	car: Car;
};

export default function CarCard({ car }: Props) {
	const { isEn } = useLangRouting();

	return (
		<Link href={`/cars/${car.slug}`} className={styles.card}>
			<div className={styles.image}>
				<Image src={car.image} alt={car.title} width={600} height={600} quality={100} unoptimized={true} />
			</div>
			<div className={styles.body}>
				<div className={styles.title}>{car.title}</div>
				<div className={styles.price}>
					{isEn ? 'from ' : 'от '} {formatPriceRub(car.price, isEn ? 'en' : 'ru')} ₽
				</div>
				<div className={styles.button}>Подробнее</div>
			</div>
		</Link>
	);
}
