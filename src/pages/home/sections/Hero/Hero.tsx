'use client';

import Link from 'next/link';
import styles from './Hero.module.sass';
import { useLangRouting } from '@/lib/i18n/useLangRouting';
import Image from 'next/image';

export default function Hero() {
	const { href } = useLangRouting();

	return (
		<section className={styles.hero}>
			<div className="container">
				<h1 className={styles.title}>Аренда автомобилей для каждого</h1>
				<div className={styles.search}>
					<div className={styles.searchItem}>
						<div className={styles.searchLabel}>Город</div>
					</div>
					<div className={styles.searchItem}>
						<div className={styles.searchLabel}>Начало аренды</div>
					</div>
					<div className={styles.searchItem}>
						<div className={styles.searchLabel}>Конец аренды</div>
					</div>
				</div>
				<div className={styles.account}>
					<p>Теперь авто можно забронировать онлайн без менеджера</p>
					<Link href={href('/auth/login')}>Перейти в личный кабинет</Link>
				</div>
			</div>
			<Image
				src="/img/hero-cars.png"
				alt=""
				width={1840}
				height={430}
				quality={100}
				unoptimized={true}
				className={styles.cars}
			/>
			<Image
				src="/img/hero-cars-mob.png"
				alt=""
				width={962}
				height={460}
				quality={100}
				unoptimized={true}
				className={styles.carsMob}
			/>
			<Image
				src="/img/hero-background.jpg"
				alt=""
				width={3000}
				height={1042}
				quality={100}
				unoptimized={true}
				className={styles.bg}
			/>
		</section>
	);
}
