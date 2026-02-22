'use client';

import Accordion from '@/components/ui/Accordion';
import styles from './Faq.module.sass';

import { faq } from '@/data/mocks/faq';

export default function Faq() {
	return (
		<section className={styles.faq}>
			<div className="container">
				<h2 className="title">часто задаваемые вопросы</h2>
				<Accordion items={faq} className={styles.faqFull} />
			</div>
		</section>
	);
}
