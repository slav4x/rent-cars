'use client';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import styles from './Others.module.sass';

import { cars } from '@/data/mocks/cars';
import OtherCarCard from '@/components/cars/OtherCarCard';

export default function Others() {
	return (
		<section className={styles.others}>
			<div className="container">
				<h2 className={styles.title}>Другие автомобили</h2>
				<Splide
					className={styles.carousel}
					options={{
						type: 'loop',
						perPage: 3,
						perMove: 1,
						gap: '30px',
						pagination: false,
						arrows: true,
						speed: 800,
						breakpoints: {
							1200: {
								gap: '20px'
							},
							1024: {
								perPage: 2
							},
							768: {
								perPage: 1,
								gap: '16px'
							}
						}
					}}
					hasTrack={false}
				>
					<SplideTrack>
						{cars.map((car) => (
							<SplideSlide key={car.id}>
								<OtherCarCard car={car} />
							</SplideSlide>
						))}
					</SplideTrack>
					<div className="splide__arrows">
						<button className="splide__arrow splide__arrow--prev">
							<svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.71985 8.76817C8.09338 8.34394 8.09338 7.65605 7.71985 7.23182L1.63283 0.318212C1.25928 -0.10607 0.653679 -0.10607 0.280124 0.318212C-0.0933829 0.74244 -0.0933824 1.43033 0.280172 1.85456L5.69084 8L0.280172 14.1455C-0.0933824 14.5697 -0.0933824 15.2576 0.280172 15.6818C0.653679 16.1061 1.25932 16.1061 1.63283 15.6818L7.71985 8.76817ZM6.08703 9.08637H7.04352V6.91363H6.08703V9.08637Z"
									fill="var(--arrow-color)"
								/>
							</svg>
						</button>
						<button className="splide__arrow splide__arrow--next">
							<svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.71985 8.76817C8.09338 8.34394 8.09338 7.65605 7.71985 7.23182L1.63283 0.318212C1.25928 -0.10607 0.653679 -0.10607 0.280124 0.318212C-0.0933829 0.74244 -0.0933824 1.43033 0.280172 1.85456L5.69084 8L0.280172 14.1455C-0.0933824 14.5697 -0.0933824 15.2576 0.280172 15.6818C0.653679 16.1061 1.25932 16.1061 1.63283 15.6818L7.71985 8.76817ZM6.08703 9.08637H7.04352V6.91363H6.08703V9.08637Z"
									fill="var(--arrow-color)"
								/>
							</svg>
						</button>
					</div>
				</Splide>
			</div>
		</section>
	);
}
