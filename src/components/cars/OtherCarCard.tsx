'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './OtherCarCard.module.sass';
import type { Car } from '@/data/mocks/cars';
import { formatPriceRub } from '@/lib/format/money';
import { useLangRouting } from '@/lib/i18n/useLangRouting';

type Props = {
	car: Car;
};

export default function OtherCarCard({ car }: Props) {
	const { href, isEn } = useLangRouting();

	const price = formatPriceRub(car.price, isEn ? 'en' : 'ru');

	return (
		<article className={styles.card} key={car.id}>
			<div className={styles.image}>
				<Image src={car.image} alt={car.title} width={600} height={600} unoptimized />
			</div>

			<div className={styles.content}>
				<div className={styles.name}>{car.title}</div>
				<div className={styles.price}>
					{isEn ? 'from ' : 'от '} {price} ₽
				</div>

				<Link href={href(`/cars/${car.slug}`)} className={styles.btn}>
					{isEn ? 'More details' : 'Подробнее'}
				</Link>
			</div>
		</article>
	);
}
