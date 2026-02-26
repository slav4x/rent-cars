'use client';

import Link from 'next/link';
import styles from './Header.module.sass';
import { useT } from '@/lib/i18n/useT';
import { useLangRouting } from '@/lib/i18n/useLangRouting';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';

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

	const isRounded =
		pathname === '/certificates' ||
		pathname === '/contacts' ||
		pathname.startsWith('/cars/') ||
		pathname === '/en/certificates' ||
		pathname === '/en/contacts' ||
		pathname.startsWith('/en/cars/');

	return (
		<header className={cn(styles.header, isRounded && styles.rounded, open && styles.opened)}>
			<div className="container">
				<div className={cn(styles.burger, open && styles.active)} onClick={() => setOpen((prev) => !prev)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<Link href={href('/')} className={cn(styles.logo, open && styles.logoBlack)}>
					<img src="/img/svg/logo.svg" alt="VsemProkat" />
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

				<div className={styles.lang}>
					<div className={cn(styles.langCurrent, open && styles.langCurrentBlack)}>
						<Image src={`/img/lang-${isEn ? 'en' : 'ru'}.png`} alt="" width={42} height={28} unoptimized={true} />
					</div>
					<ul className={styles.langList}>
						<li>
							<Link href={isEn ? switchHref : pathname}>
								<Image src="/img/lang-ru.png" alt="" width={42} height={28} unoptimized={true} />
								Русский
							</Link>
						</li>
						<li>
							<Link href={!isEn ? switchHref : pathname}>
								<Image src="/img/lang-en.png" alt="" width={42} height={28} unoptimized={true} />
								English
							</Link>
						</li>
					</ul>
				</div>

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
