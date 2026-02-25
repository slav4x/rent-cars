'use client';

import 'react-prokrutchik/styles.css';
import dynamic from 'next/dynamic';

const Scroller = dynamic(() => import('react-prokrutchik').then((mod) => mod.Scroller), { ssr: false });

import Image from 'next/image';
import styles from './Conditions.module.sass';
import { cn } from '@/lib/utils/cn';

export default function Conditions() {
	return (
		<section className={styles.conditions} id="rules">
			<div className="container">
				<h2 className="title">Условия и процесс аренды</h2>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<Image src="/img/conditions-01.png" alt="" width={114} height={86} unoptimized={true} quality={100} />
						<span>
							Возраст
							<br />
							от 23х лет
						</span>
					</li>
					<li className={styles.listItem}>
						<Image src="/img/conditions-02.png" alt="" width={114} height={86} unoptimized={true} quality={100} />
						<span>
							Стаж вождения
							<br />- от 3х лет
						</span>
					</li>
					<li className={styles.listItem}>
						<Image src="/img/conditions-03.png" alt="" width={114} height={86} unoptimized={true} quality={100} />
						<span>
							Только личное
							<br /> использование
						</span>
					</li>
				</ul>
				<Scroller
					position="start"
					duration={500}
					scrollbar="hidden"
					navigation="hidden"
					align="start"
					onItemClick={() => {}}
				>
					<div className={styles.card}>
						<div className={styles.cardContent}>
							<div className={styles.cardHead}>
								<div className={styles.cardTitle}>Детали</div>
								<div className={styles.cardCounter}>
									01 / <span>03</span>
								</div>
							</div>
							<div className={cn(styles.cardText, styles.cardText01)}>
								Оставьте заявку на сайте или свяжитесь с нами по телефону, чтобы обсудить все детали
							</div>
						</div>
						<Image src="/img/conditions-card-01.png" alt="" width={899} height={670} className={styles.image01} />
					</div>
					<div className={styles.card}>
						<div className={styles.cardContent}>
							<div className={styles.cardHead}>
								<div className={styles.cardTitle}>Проверка документов</div>
								<div className={styles.cardCounter}>
									02 / <span>03</span>
								</div>
							</div>
							<div className={cn(styles.cardText, styles.cardText02)}>
								После бронирования автомобиля вам потребуется отправить свои документы для проверки службой безопасности
							</div>
						</div>
						<Image src="/img/conditions-card-02.png" alt="" width={907} height={744} className={styles.image02} />
					</div>
					<div className={styles.card}>
						<div className={styles.cardContent}>
							<div className={styles.cardHead}>
								<div className={styles.cardTitle}>Аренда</div>
								<div className={styles.cardCounter}>
									03 / <span>03</span>
								</div>
							</div>
							<div className={cn(styles.cardText, styles.cardText03)}>
								При передаче автомобиля мы проводим осмотр вместе с вами, фиксируем состояние автомобиля фото- или
								видеозаписью
								<br />
								<br />
								Внесение залога и оплаты
							</div>
						</div>
						<Image src="/img/conditions-card-03.png" alt="" width={527} height={643} className={styles.image03} />
					</div>
				</Scroller>
			</div>
		</section>
	);
}
