'use client';

import Accordion from '@/components/ui/Accordion';
import styles from './Faq.module.sass';

import { faq } from '@/data/mocks/faq';
import Image from 'next/image';

export default function Faq() {
	return (
		<section className={styles.faq}>
			<div className="container">
				<div className={styles.content}>
					<h2 className="title">Вопрос & ответ</h2>
					<p className={styles.text}>
						Наша команда готова оказать вам всю необходимую поддержку и ответить на любые вопросы, которые у вас могут
						возникнуть
					</p>
					<a href="#" className={styles.btn}>
						Задать свой вопрос
					</a>
				</div>
				<Accordion items={faq} />
				<Image
					src="/img/faq-car.jpg"
					className={styles.car}
					alt=""
					width={1790}
					height={1140}
					unoptimized={true}
					quality={100}
				/>
			</div>
		</section>
	);
}
