'use client';

import Link from 'next/link';
import styles from './Header.module.sass';
import { useT } from '@/lib/i18n/useT';
import { useSafePathname } from '@/lib/i18n/useSafePathname';

function addEn(path: string) {
	return path === '/' ? '/en' : `/en${path}`;
}
function removeEn(path: string) {
	return path.replace(/^\/en/, '') || '/';
}
function href(path: string, isEn: boolean) {
	return isEn ? addEn(path) : path;
}

export default function Header() {
	const t = useT();

	const pathname = useSafePathname();

	const isEn = pathname.startsWith('/en');

	const switchHref = isEn ? removeEn(pathname) : addEn(pathname);

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.burger}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<Link href={href('/', isEn)} className={styles.logo}>
					<img src="img/svg/logo.svg" alt="VsemProkat" />
				</Link>

				<nav className={styles.nav}>
					<Link href={href('#catalog', isEn)}>{t.nav.catalog}</Link>
					<Link href={href('#rules', isEn)}>{t.nav.rules}</Link>
					<Link href={href('/contacts', isEn)}>{t.nav.contacts}</Link>
				</nav>

				<div className={styles.contacts}>
					<Link href="tel:+7 (964) 396-18-40">+7 (964) 396-18-40</Link>
					<span>заказать звонок</span>
				</div>

				<Link href={switchHref} className={styles.lang}>
					{isEn ? 'RU' : 'EN'}
				</Link>

				<Link href={href('/auth/login', isEn)} className={styles.login}></Link>
			</div>
		</header>
	);
}
