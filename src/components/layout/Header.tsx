'use client';

import Link from 'next/link';
import styles from './Header.module.sass';
import { useT } from '@/lib/i18n/useT';
import { useLangRouting } from '@/lib/i18n/useLangRouting';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

export default function Header() {
	const t = useT();

	const { isEn, switchHref, href } = useLangRouting();

	const raw = usePathname();
	const pathname = raw ?? '/';

	const isHome = pathname === '/' || pathname === '/en';

	const anchor = (hash: string) => {
		return isHome ? hash : `/${hash}`;
	};

	const [open, setOpen] = useState(false);

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={cn(styles.burger, open && styles.active)} onClick={() => setOpen((prev) => !prev)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<Link href={href('/')} className={cn(styles.logo, open && styles.logoBlack)}>
					<img src="img/svg/logo.svg" alt="VsemProkat" />
				</Link>

				<nav className={cn(styles.nav, open && styles.navHide)}>
					<Link href={href(anchor('#catalog'))}>{t.nav.catalog}</Link>
					<Link href={href(anchor('#rules'))}>{t.nav.rules}</Link>
					<Link href={href('/contacts')}>{t.nav.contacts}</Link>
				</nav>

				<div className={cn(styles.contacts, open && styles.contactsBlack)}>
					<Link href="tel:+7 (964) 396-18-40">+7 (964) 396-18-40</Link>
					<span>заказать звонок</span>
				</div>

				<Link href={switchHref} className={styles.lang}>
					{isEn ? 'RU' : 'EN'}
				</Link>

				<Link href={href('/auth/login')} className={cn(styles.login, open && styles.loginAccent)}></Link>
			</div>
			<div className={cn(styles.mobile, open && styles.mobileShow)}>
				<ul className={styles.mobileNav}>
					<li>
						<Link href={href(anchor('#catalog'))}>Автопарк</Link>
					</li>
					<li>
						<Link href={href(anchor('#about'))}>О компании</Link>
					</li>
					<li>
						<Link href={href('/contacts')}>Контакты</Link>
					</li>
					<li>
						<Link href={href(anchor('#reviews'))}>Отзывы</Link>
					</li>
					<li>
						<Link href={href('/partnership')}>Сотрудничество</Link>
					</li>
					<li>
						<Link href={href('/certificates')}>Сертификаты</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
