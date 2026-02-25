'use client';

import Header from '@/components/layout/Header';
import styles from './Thanks.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { useLangRouting } from '@/lib/i18n/useLangRouting';

export default function Thanks() {
	const { href } = useLangRouting();

	return (
		<section className={styles.thanks}>
			<Header />
			<div className="container">
				<div className={styles.content}>
					<h2 className={styles.title}>спасибо за заявку</h2>
					<div className={styles.text}>Наш менеджер свяжется с вами в ближайшее время</div>
					<Link href={href('/')} className={styles.btn}>
						Вернуться на главную
					</Link>
				</div>
			</div>
			<Image src="img/thanks.png" alt="" width={1260} height={1356} unoptimized={true} className={styles.image} />
		</section>
	);
}
