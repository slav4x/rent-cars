'use client';

import styles from './Steps.module.sass';

import 'react-prokrutchik/styles.css';
import dynamic from 'next/dynamic';

const Scroller = dynamic(() => import('react-prokrutchik').then((mod) => mod.Scroller), { ssr: false });

import Image from 'next/image';

export default function Steps() {
	return (
		<section className={styles.steps}>
			<div className="container">
				<h2 className="title">ЭТАПЫ СОТРУДНИЧЕСТВА</h2>
				<div className={styles.list}>
					<Scroller
						position="start"
						duration={500}
						scrollbar="hidden"
						navigation="hidden"
						align="start"
						onItemClick={() => {}}
					>
						<div className={styles.card}>
							<Image
								src="/img/steps-01.jpg"
								alt=""
								width={420}
								height={490}
								unoptimized={true}
								className={styles.image}
							/>
							<div className={styles.title}>оставляете заявку</div>
							<div className={styles.text}>Вы оставляете заявку на сайте с указанием Ваших контактных данных</div>
						</div>
						<div className={styles.card}>
							<Image
								src="/img/steps-02.jpg"
								alt=""
								width={420}
								height={490}
								unoptimized={true}
								className={styles.image}
							/>
							<div className={styles.title}>уточнение деталей</div>
							<div className={styles.text}>В ближайшее время Вам перезванивает менеджер для уточнения всех данных</div>
						</div>
						<div className={styles.card}>
							<Image
								src="/img/steps-03.jpg"
								alt=""
								width={420}
								height={490}
								unoptimized={true}
								className={styles.image}
							/>
							<div className={styles.title}>составление договора</div>
							<div className={styles.text}>
								Наш менеждер подбирает выгодные условия для обеих сторон, после чего присылает Вам для ознакомления
							</div>
						</div>
						<div className={styles.card}>
							<Image
								src="/img/steps-04.jpg"
								alt=""
								width={420}
								height={490}
								unoptimized={true}
								className={styles.image}
							/>
							<div className={styles.title}>проверка aвтомобиля</div>
							<div className={styles.text}>
								Выезжаем на назначенное заранее место для осмотра автомобиля для сдачи в аренду
							</div>
						</div>
						<div className={styles.card}>
							<Image
								src="/img/steps-05.jpg"
								alt=""
								width={420}
								height={490}
								unoptimized={true}
								className={styles.image}
							/>
							<div className={styles.title}>заключение договора</div>
							<div className={styles.text}>
								После полного одобрения заключаем договор, забираем автомобиль и начинаем работу
							</div>
						</div>
						<div className={styles.card}>
							<Image
								src="/img/steps-06.jpg"
								alt=""
								width={420}
								height={490}
								unoptimized={true}
								className={styles.image}
							/>
							<div className={styles.title}>Выплата по договору</div>
							<div className={styles.text}>Согласно договору, выплачиваем деньги каждые две недели или месяц</div>
						</div>
					</Scroller>
				</div>
			</div>
		</section>
	);
}
