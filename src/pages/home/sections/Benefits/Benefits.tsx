'use client';

import styles from './Benefits.module.sass';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

export default function Benefits() {
	return (
		<section className={styles.benefits}>
			<div className="container">
				<h2 className="title">Наши преимущества</h2>
				<div className={styles.grid}>
					<div className={styles.col}>
						<div className={cn(styles.item, styles.big)}>
							<div className={styles.text}>
								Минимальный пробег
								<br /> и максимальная комплектация
							</div>
							<Image
								src="img/benefits-01.png"
								alt=""
								width={482}
								height={320}
								unoptimized={true}
								className={styles.image01}
							/>
						</div>
					</div>
					<div className={styles.col}>
						<div className={cn(styles.item, styles.small)}>
							<div className={styles.text}>Без ограничений по гражданству</div>
							<Image
								src="img/benefits-02.png"
								alt=""
								width={337}
								height={114}
								unoptimized={true}
								className={styles.image02}
							/>
						</div>
						<div className={cn(styles.item, styles.small)}>
							<div className={styles.text}>
								Уход и обслуживание авто,
								<br /> перед подачей
							</div>
							<Image
								src="img/benefits-03.png"
								alt=""
								width={161}
								height={85}
								unoptimized={true}
								className={styles.image03}
							/>
						</div>
					</div>
					<div className={styles.col}>
						<div className={cn(styles.item, styles.big)}>
							<div className={styles.text}>
								Актуальные модели,
								<br /> выпущенные после 2019 года
							</div>
							<Image
								src="img/benefits-04.png"
								alt=""
								width={524}
								height={351}
								unoptimized={true}
								className={styles.image04}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
