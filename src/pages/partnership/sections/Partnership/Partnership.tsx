'use client';

import styles from './Partnership.module.sass';
import Image from 'next/image';

export default function Partnership() {
	return (
		<section className={styles.partnership}>
			<div className="container">
				<h2 className={styles.title}>есть автомобиль? Зарабатывайте от 150.000р</h2>
				<div className={styles.description}>
					Предлагаем выгодные условия сотрудничества, благодаря которым вы сможете зарабатывать на своем автомобиле, не
					отвлекаясь от повседневных дел и работы.
				</div>
			</div>
			<Image
				src="/img/partnership-cars.png"
				alt=""
				width={1840}
				height={380}
				quality={100}
				unoptimized={true}
				className={styles.cars}
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
