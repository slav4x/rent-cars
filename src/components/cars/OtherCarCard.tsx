"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./OtherCarCard.module.sass";
import type { Car } from "@/data/mocks/cars";
import { formatPriceRub } from "@/lib/format/money";
import { useLangRouting } from "@/lib/i18n/useLangRouting";

type Props = {
    car: Car;
    hrefBase?: string;
};

export default function OtherCarCard({ car, hrefBase = "/cars" }: Props) {
    const { href, isEn } = useLangRouting();

    const price = formatPriceRub(car.price, isEn ? "en" : "ru");

    return (
        <article className={styles.card} key={car.id}>
            <div className={styles.image}>
                <Image
                    src={car.image}
                    alt={car.title}
                    width={600}
                    height={600}
                    quality={100}
                    unoptimized={true}
                />
                <div className={styles.like}>
                    <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.7568 0.5C13.7909 0.500021 15.4999 2.2811 15.5 4.56738C15.5 6.90983 14.3656 8.93413 12.3184 10.9375C11.3571 11.8786 10.2099 12.7893 9.29688 13.4688C8.84182 13.8074 8.44806 14.0871 8.16797 14.2812C8.10558 14.3245 8.04749 14.362 7.99707 14.3965C7.94398 14.3607 7.88352 14.3207 7.81738 14.2754C7.53053 14.079 7.12819 13.7972 6.66797 13.457C5.74379 12.7739 4.60017 11.8653 3.6875 10.9434C1.84698 9.08412 0.5 6.89418 0.5 4.56738C0.500059 2.28805 2.20961 0.500021 4.24316 0.5C5.66415 0.5 6.91438 1.36697 7.55078 2.67188L8 3.59277L8.44922 2.67188C9.08562 1.36697 10.3358 0.5 11.7568 0.5Z"
                            fill="var(--fill)"
                            stroke="var(--stroke)"
                        />
                    </svg>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.name}>{car.title}</div>
                <div className={styles.price}>
                    {isEn ? "from " : "от "} {price} ₽
                </div>

                <Link
                    href={href(`${hrefBase}/${car.slug}`)}
                    className={styles.btn}
                >
                    {isEn ? "More details" : "Подробнее"}
                </Link>
            </div>
        </article>
    );
}
