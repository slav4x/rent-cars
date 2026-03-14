"use client";

import Link from "next/link";
import styles from "./AccountHeader.module.sass";
import { useT } from "@/lib/i18n/useT";
import { useLangRouting } from "@/lib/i18n/useLangRouting";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

export default function AccountHeader() {
    const t = useT();

    const { isEn, switchHref, href } = useLangRouting();

    const raw = usePathname();
    const pathname = raw ?? "/";

    const isHome = pathname === "/" || pathname === "/en";

    const anchor = (hash: string) => {
        return isHome ? hash : `/${hash}`;
    };

    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);

    return (
        <header
            className={cn(
                styles.header,
                open && styles.opened,
                hide && styles.hide,
            )}
        >
            <div className="container">
                {/* <button
                    type="button"
                    className={cn(styles.burger, open && styles.active)}
                    onClick={() => setOpen((prev) => !prev)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Закрыть меню" : "Открыть меню"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button> */}
                <Link
                    href={href("/account")}
                    className={cn(styles.logo, open && styles.logoBlack)}
                >
                    <img src="/img/svg/logo.svg" alt="VsemProkat" />
                </Link>

                <div
                    className={cn(
                        styles.contacts,
                        open && styles.contactsBlack,
                    )}
                >
                    <Link href="tel:+7 (964) 396-18-40">
                        +7 (964) 396-18-40
                    </Link>
                    <span>заказать звонок</span>
                </div>

                <div className={styles.lang}>
                    <div
                        className={cn(
                            styles.langCurrent,
                            open && styles.langCurrentBlack,
                        )}
                    >
                        <Image
                            src={`/img/lang-${isEn ? "en" : "ru"}.png`}
                            alt=""
                            width={42}
                            height={28}
                            quality={100}
                            unoptimized={true}
                        />
                    </div>
                    <ul className={styles.langList}>
                        <li>
                            <Link href={isEn ? switchHref : pathname}>
                                <Image
                                    src="/img/lang-ru.png"
                                    alt=""
                                    width={42}
                                    height={28}
                                    quality={100}
                                    unoptimized={true}
                                />
                                Русский
                            </Link>
                        </li>
                        <li>
                            <Link href={!isEn ? switchHref : pathname}>
                                <Image
                                    src="/img/lang-en.png"
                                    alt=""
                                    width={42}
                                    height={28}
                                    quality={100}
                                    unoptimized={true}
                                />
                                English
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link
                    href={href("/auth/login")}
                    className={cn(styles.login, open && styles.loginAccent)}
                ></Link>
            </div>
            <div
                id="mobile-menu"
                className={cn(styles.mobile, open && styles.mobileShow)}
            >
                <ul className={styles.mobileNav}>
                    <li>
                        <Link href={href(anchor("#catalog"))}>Автопарк</Link>
                    </li>
                    <li>
                        <Link href={href(anchor("#about"))}>О компании</Link>
                    </li>
                    <li>
                        <Link href={href("/contacts")}>Контакты</Link>
                    </li>
                    <li>
                        <Link href={href(anchor("#reviews"))}>Отзывы</Link>
                    </li>
                    <li>
                        <Link href={href("/partnership")}>Сотрудничество</Link>
                    </li>
                    <li>
                        <Link href={href("/certificates")}>Сертификаты</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
