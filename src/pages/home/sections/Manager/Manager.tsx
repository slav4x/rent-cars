'use client';

import Image from 'next/image';
import styles from './Manager.module.sass';

export default function Manager() {
	return (
		<section className={styles.manager}>
			<div className="container">
				<div className={styles.main}>
					<h2 className="title">Подобрать авто по нашей рекомендации</h2>
					<div className={styles.user}>
						<div className={styles.info}>
							<Image src="/img/manager-photo.png" alt="" width={144} height={156} />
							<p>Виктория</p>
							<span>Менеджер</span>
						</div>
						<div className={styles.text}>
							Оставьте свои контактные данные, и наш менеджер свяжется с Вами в течение 5 минут!
						</div>
					</div>
					<Image src="/img/manager-car.png" alt="" width={1090} height={1297} className={styles.car} />
				</div>
			</div>
		</section>
	);
}
