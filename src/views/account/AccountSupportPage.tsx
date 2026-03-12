"use client";

import { useState } from "react";

import view from "./AccountView.module.sass";
import styles from "./AccountSupport.module.sass";
import { contacts, type CityContact } from "@/data/mocks/contacts";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import Image from "next/image";

export default function AccountSupportPage() {
    const [openId, setOpenId] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    return (
        <section className={styles.section}>
            <h1 className={view.title}>Поддержка</h1>

            <div className={styles.list}>
                {contacts.map((contact) => (
                    <SupportAccordionItem
                        key={contact.id}
                        contact={contact}
                        isOpen={openId === contact.id}
                        onToggle={() =>
                            setOpenId((prev) =>
                                prev === contact.id ? null : contact.id,
                            )
                        }
                    />
                ))}
            </div>

            <div className={styles.grid}>
                <div
                    className={styles.legal}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <div
                        className={cn(
                            styles.legalTitle,
                            open && styles.legalTitleOpen,
                        )}
                    >
                        <p>юридическая информация</p>
                    </div>
                    <div
                        className={cn(
                            styles.legalText,
                            open && styles.legalTextOpen,
                        )}
                    >
                        <p>Название: ТЭММО РОКСАНА НИКОЛАЕВНА (ИП)</p>
                        <p>
                            ИНН: 471207245325
                            <br /> ОГРНИП: 322470400099435
                            <br /> Номер счёта: 40802810432330003387
                        </p>
                        <p>
                            Банк: ФИЛИАЛ &quot;САНКТ-ПЕТЕРБУРГСКИЙ&quot; АО
                            &quot;АЛЬФА-БАНК&quot;
                            <br /> БИК: 044030786
                            <br /> Кор. счёт: 30101810600000000786
                            <br /> Валюта: RUB
                        </p>
                        <p>
                            Юридический адрес компании: улица Школьная, д. 20,
                            кв./оф. 49, Ленинградская область, р-н Приозерский,
                            поселок Саперное
                        </p>
                    </div>
                </div>

                <div className={styles.socials}>
                    <div className={styles.socialsTitle}>Социальные сети</div>
                    <ul className={styles.links}>
                        <li>
                            <Link href="#" target="_blank">
                                <Image
                                    src="/img/svg/tg.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" target="_blank">
                                <Image
                                    src="/img/svg/tg.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" target="_blank">
                                <Image
                                    src="/img/svg/tg.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function SupportAccordionItem({
    contact,
    isOpen,
    onToggle,
}: {
    contact: CityContact;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className={styles.accordion}>
            <button
                type="button"
                className={cn(styles.trigger, isOpen && styles.triggerOpen)}
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`support-panel-${contact.id}`}
            >
                {contact.city}
            </button>

            <div
                id={`support-panel-${contact.id}`}
                className={cn(styles.wrapper, isOpen && styles.wrapperOpen)}
            >
                <div className={styles.wrapperInner}>
                    <div className={styles.content}>
                        <div className={styles.map}>
                            <iframe
                                src={contact.map}
                                title={`Карта офиса в городе ${contact.city}`}
                                loading="lazy"
                                frameBorder="0"
                            />
                        </div>

                        <div className={styles.info}>
                            <div className={styles.group}>
                                <b>Адрес</b>
                                <p>{contact.address}</p>
                            </div>

                            <div className={styles.group}>
                                <b>Контакты</b>
                                <p>{contact.phone}</p>
                                <p>{contact.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
