'use client';

import styles from './About.module.sass';

export default function About() {
	return (
		<section className={styles.about} id="about">
			<video playsInline autoPlay loop muted>
				<source src="https://vsem-prokat.ru/wp-content/uploads/2023/08/video.mp4" type="video/mp4" />
			</video>
			<div className="container">
				<div className={styles.card}>
					<h2 className="title">Vsemprokat</h2>
					<div className={styles.text}>
						<p>
							Наша задача - предоставить широкий выбор авто, чтобы каждый смог удовлетворить любой запрос безопасно и
							комфортно
						</p>
						<p>
							Независимо от того, нужен ли вам автомобиль для отдыха, деловой поездки или специального мероприятия, мы
							всегда здесь, чтобы помочь вам найти идеальное решение
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
