'use client';

import Image from 'next/image';
import { useState } from 'react';

import styles from './Contacts.module.sass';

import { contacts } from '@/data/mocks/contacts';
import { cn } from '@/lib/utils/cn';

export default function Contacts() {
	const [open, setOpen] = useState(false);
	return (
		<section className={styles.contacts}>
			<div className="container">
				<h2 className="title">Контакты</h2>
				<div className={styles.list}>
					{contacts.map((c) => (
						<div key={c.id} className={styles.item}>
							<Image src={c.image} alt={c.city} width={600} height={600} className={styles.image} />

							<div className={styles.content}>
								<div className={styles.city}>{c.city}</div>

								<ul className={styles.info}>
									<li>
										<span>Адрес:</span>
										<p>{c.address}</p>
									</li>

									<li>
										<span>Телефон:</span>
										<p>
											<a href={`tel:${c.phone.replace(/\s|\(|\)|-/g, '')}`}>{c.phone}</a>
										</p>
									</li>

									<li>
										<span>Почта:</span>
										<p>
											<a href={`mailto:${c.email}`}>{c.email}</a>
										</p>
									</li>
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className={styles.legal} onClick={() => setOpen((prev) => !prev)}>
					<div className={cn(styles.legalTitle, open && styles.legalTitleOpen)}>юридическая информация</div>
					<div className={cn(styles.legalText, open && styles.legalTextOpen)}>
						<p>Название: ТЭММО РОКСАНА НИКОЛАЕВНА (ИП)</p>
						<p>
							ИНН: 471207245325
							<br /> ОГРНИП: 322470400099435
							<br /> Номер счёта: 40802810432330003387
						</p>
						<p>
							Банк: ФИЛИАЛ "САНКТ-ПЕТЕРБУРГСКИЙ" АО "АЛЬФА-БАНК"
							<br /> БИК: 044030786
							<br /> Кор. счёт: 30101810600000000786
							<br /> Валюта: RUB
						</p>
						<p>
							Юридический адрес компании: улица Школьная, д. 20, кв./оф. 49, Ленинградская область, р-н Приозерский,
							поселок Саперное
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
