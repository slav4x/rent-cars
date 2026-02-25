'use client';

import { useMemo, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideCore } from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

import styles from './Certificates.module.sass';
import Image from 'next/image';

type Slide = {
	name: string;
	img: string;
	alt: string;
};

const slides: Slide[] = [
	{ name: 'Номинальный', img: '/img/cert-sum.jpg', alt: 'Номинальный сертификат' },
	{ name: 'Mercedes E63S на 1 сутки', img: '/img/cert-mercedes.jpg', alt: 'Mercedes E63S' },
	{ name: 'Audi A5 Cabrio на 1 сутки', img: '/img/cert-audi.jpg', alt: 'Audi A5 Cabrio' },
	{ name: 'Ford Mustang на 1 сутки', img: '/img/cert-ford.jpg', alt: 'Ford Mustang' }
];

const sums = ['10000 руб.', '15000 руб.', '30000 руб.', '40000 руб.', '50000 руб.'];

export default function Certificates() {
	const [certType, setCertType] = useState<string>(slides[0].name);
	const [certSum, setCertSum] = useState<string>('');
	const [activeSumIndex, setActiveSumIndex] = useState<number | null>(null);

	const isNominal = useMemo(() => certType === 'Номинальный', [certType]);

	const syncTypeByIndex = (idx: number) => {
		const nextType = slides[idx]?.name ?? '';
		setCertType(nextType);

		if (nextType !== 'Номинальный') {
			setCertSum('');
			setActiveSumIndex(null);
		}
	};

	return (
		<section className={styles.certificates}>
			<div className="container">
				<h2 className="title">выберите сертификат</h2>
				<div className={styles.wrapper}>
					<Splide
						className={styles.carousel}
						options={{
							type: 'loop',
							perPage: 1,
							focus: 'center',
							flickMaxPages: 1,
							updateOnMove: true,
							pagination: false,
							throttle: 300,
							gap: '60px',
							breakpoints: {
								'1600': {
									gap: '10px'
								}
							}
						}}
						onMounted={(splide: SplideCore) => {
							syncTypeByIndex(splide.index);
						}}
						onMove={(splide: SplideCore) => {
							syncTypeByIndex(splide.index);
						}}
						aria-label="Сертификаты"
					>
						{slides.map((s) => (
							<SplideSlide key={s.name} data-name={s.name}>
								<div className="cert-slide">
									<Image
										src={s.img}
										alt={s.alt}
										width={600}
										height={600}
										style={{ width: '100%', height: 'auto' }}
										priority={s.name === 'Номинальный'}
									/>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>

				<input type="hidden" name="cert-type" value={certType} />
				<input type="hidden" name="cert-sum" value={certSum} />

				{isNominal && (
					<div className={styles.nominal}>
						<h3 className={styles.subtitle}>выберите номинал:</h3>
						<ul className={styles.sum}>
							{sums.map((label, i) => (
								<li
									key={label}
									className={activeSumIndex === i ? 'active' : ''}
									onClick={() => {
										setActiveSumIndex(i);
										setCertSum(label);
									}}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											setActiveSumIndex(i);
											setCertSum(label);
										}
									}}
								>
									{label}
								</li>
							))}
						</ul>
					</div>
				)}

				<button type="button" className={styles.btn}>
					<span>Оформить сертификат</span>
				</button>
			</div>
		</section>
	);
}
