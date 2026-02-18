'use client';

import Link from 'next/link';
import styles from './Header.module.sass';
import { useT } from '@/lib/i18n/useT';
import { useLangRouting } from '@/lib/i18n/useLangRouting';

export default function Header() {
	const t = useT();

	const { isEn, switchHref, href } = useLangRouting();

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.burger}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<Link href={href('/')} className={styles.logo}>
					<img src="img/svg/logo.svg" alt="VsemProkat" />
				</Link>

				<nav className={styles.nav}>
					<Link href={href('#catalog')}>{t.nav.catalog}</Link>
					<Link href={href('#rules')}>{t.nav.rules}</Link>
					<Link href={href('/contacts')}>{t.nav.contacts}</Link>
				</nav>

				<div className={styles.contacts}>
					<Link href="tel:+7 (964) 396-18-40">+7 (964) 396-18-40</Link>
					<span>заказать звонок</span>
				</div>

				<Link href={switchHref} className={styles.lang}>
					{isEn ? 'RU' : 'EN'}
				</Link>

				<Link href={href('/auth/login')} className={styles.login}></Link>
			</div>
		</header>
	);
}
