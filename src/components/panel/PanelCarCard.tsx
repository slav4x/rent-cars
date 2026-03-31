import Image from "next/image";
import Link from "next/link";

import { formatPriceRub } from "@/lib/format/money";
import type { Car } from "@/data/mocks/cars";

import styles from "./PanelCarCard.module.sass";

type PanelCarCardProps = {
    car: Car;
    cityLabel: string;
};

export default function PanelCarCard({ car, cityLabel }: PanelCarCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={car.image}
                    alt={car.title}
                    width={600}
                    height={600}
                    quality={100}
                    unoptimized={true}
                />
                <div className={styles.control}>
                    <button type="button" className={styles.secondary}>
                        Переместить
                    </button>

                    <button type="button" className={styles.danger}></button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.name}>{car.title}</div>
                <div
                    className={styles.meta}
                    style={{ justifyContent: "flex-start" }}
                >
                    <span style={{ width: 90 }}>ID: 73292</span>
                    <span style={{ width: 90 }}>Визиты: 21</span>
                </div>

                <div className={styles.actions}>
                    <Link
                        href={`/panel/cars/${car.id}/edit`}
                        className={styles.primary}
                    >
                        Редактировать
                    </Link>
                </div>
            </div>
        </article>
    );
}
