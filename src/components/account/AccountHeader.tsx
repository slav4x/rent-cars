"use client";

import Link from "next/link";
import styles from "./AccountHeader.module.sass";
import { useT } from "@/lib/i18n/useT";
import { useLangRouting } from "@/lib/i18n/useLangRouting";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

export default function AccountHeader() {
    const t = useT();

    const { isEn, switchHref, href } = useLangRouting();

    const raw = usePathname();
    const pathname = raw ?? "/";

    const [openPathname, setOpenPathname] = useState<string | null>(null);
    const open = openPathname === pathname;

    return (
        <header className={cn(styles.header, open && styles.opened)}>
            <div className="container">
                <button
                    type="button"
                    className={cn(styles.burger, open && styles.active)}
                    onClick={() =>
                        setOpenPathname((prev) =>
                            prev === pathname ? null : pathname,
                        )
                    }
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Закрыть меню" : "Открыть меню"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
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
                <div className={cn(styles.account)}>
                    <Image
                        src="/img/no-ava.png"
                        alt=""
                        width={160}
                        height={160}
                        unoptimized
                        quality={100}
                        className={styles.photo}
                    />
                    <div className={styles.info}>
                        <div className={styles.name}>
                            <span>Иван Иванов</span>
                            <Link
                                href={href("/account/settings/profile")}
                                className={styles.settings}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.6974 0.0304484C12.435 0.0922779 12.2798 0.212367 11.6293 0.856722L10.9695 1.51042L12.7305 3.27224L14.4915 5.03407L15.149 4.37273C15.8549 3.66261 15.9513 3.5265 15.9948 3.17928C16.0208 2.9706 15.9472 2.65378 15.8305 2.4724C15.7859 2.40316 15.2487 1.84876 14.6367 1.24034L13.5239 0.134154L13.2951 0.0641493C13.0537 -0.00972576 12.9038 -0.0181677 12.6974 0.0304484ZM5.82967 6.65915L1.43938 11.0554L0.911923 12.5976C0.357505 14.2186 0.0377349 15.2117 0.00523395 15.4137C-0.0360429 15.6702 0.171976 15.9445 0.4474 15.9965C0.663561 16.0374 1.69775 15.7182 3.98046 14.906L4.94814 14.5617L9.32776 10.1895C11.7366 7.7848 13.7074 5.80212 13.7074 5.78353C13.7074 5.76494 12.9227 4.96523 11.9637 4.00636L10.22 2.26295L5.82967 6.65915Z"
                                        fill="#C9A77F"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <Link
                            href={href("/account/settings/verification")}
                            className={styles.status}
                        >
                            Аккаунт не верифицирован
                        </Link>
                    </div>
                </div>
                <ul className={styles.mobileNav}>
                    <li>
                        <Link href={href("/account/bookings/history")}>
                            История бронирования
                        </Link>
                    </li>
                    <li>
                        <Link href={href("/account/favorites")}>Избранное</Link>
                    </li>
                    <li>
                        <Link href={href("/account/rules")}>Правила</Link>
                    </li>
                    <li>
                        <Link href={href("/account/support")}>Поддержка</Link>
                    </li>
                    <li>
                        <Link href={href("/account/settings/profile")}>
                            Настройки
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
