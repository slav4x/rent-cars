"use client";

import Image from "next/image";

import styles from "./AccountSettingsSection.module.sass";
import { useLangRouting } from "@/lib/i18n/useLangRouting";
import Link from "next/link";
import AccountSettingsEditableField from "@/components/account/AccountSettingsEditableField";

export default function AccountSettingsProfilePage() {
    const { href } = useLangRouting();
    return (
        <div className={styles.profile}>
            <div className={styles.card}>
                <div className={styles.photo}>
                    <Image
                        src="/img/no-ava.png"
                        alt=""
                        width={160}
                        height={160}
                        unoptimized
                        quality={100}
                    />
                    <div className={styles.editPhoto}>
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
                                fill="#353535"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>Иван Иванов</div>
                    <Link
                        href={href("/account/settings/verification")}
                        className={styles.status}
                    >
                        Аккаунт не верифицирован
                    </Link>
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.aboutTitle}>Личная информация</div>
                <div className={styles.fields}>
                    <AccountSettingsEditableField
                        label="Имя и Фамилия"
                        defaultValue="Иван Иванов"
                    />
                    <AccountSettingsEditableField
                        label="Дата рождения"
                        type="date"
                        defaultValue="20.09.1999"
                    />
                </div>
            </div>

            <button className={styles.btnSave}>Сохранить</button>
            <div className={styles.exit}>Выйти из аккаунта</div>
        </div>
    );
}
