'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import styles from './Cases.module.sass';
import Image from 'next/image';
import { casesMock } from '@/data/mocks/cases';
import { formatPriceRub } from '@/lib/format/money';

export default function Cases() {
	return (
		<section className={styles.cases}>
			<div className="container">
				<h2 className="title">кейсы клиентов</h2>
				<Splide
					className={styles.carousel}
					extensions={{ AutoScroll }}
					options={{
						type: 'loop',
						drag: false,
						arrows: false,
						pagination: false,
						autoWidth: true,
						gap: '16px',
						autoScroll: {
							speed: 0.6,
							pauseOnHover: true,
							pauseOnFocus: true
						}
					}}
					aria-label="Кейсы"
				>
					{casesMock.map((item) => (
						<SplideSlide key={item.id}>
							<article className={styles.card}>
								<div className={styles.body}>
									<div className={styles.head}>
										<Image src={item.image} alt={item.title} width={200} height={200} className={styles.image} />
										<h3 className={styles.title}>{item.title}</h3>
									</div>
									<ul className={styles.stats}>
										<li>
											<span>Цена покупки:</span>
											<p>{formatPriceRub(item.purchasePrice)} ₽</p>
										</li>
										<li>
											<span>Доп. затраты за 3 года:</span>
											<p>{formatPriceRub(item.extraCosts3y)} ₽</p>
										</li>
										<li>
											<span>Ежемесячный доход:</span>
											<p>{formatPriceRub(item.monthlyIncome)} ₽</p>
										</li>
									</ul>
								</div>
								<div className={styles.profit}>
									<span>Прибыль за год:</span>
									<p>
										{formatPriceRub(item.yearlyProfit)} <i>₽</i>
									</p>
								</div>
							</article>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	);
}
