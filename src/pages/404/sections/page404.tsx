'use client';

import Header from '@/components/layout/Header';
import styles from './Page404.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { useLangRouting } from '@/lib/i18n/useLangRouting';

export default function Page404View() {
	const { href } = useLangRouting();

	return (
		<section className={styles.page404}>
			<Header />
			<div className="container">
				<div className={styles.content}>
					<h2 className={styles.title}>страница не найдена</h2>
					<Link href={href('/')} className={styles.btn}>
						Вернуться на главную
					</Link>
				</div>
			</div>
			<Image src="img/404.png" alt="" width={1260} height={1356} unoptimized={true} className={styles.image} />
		</section>
	);
}
