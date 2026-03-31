"use client";

import Image from "next/image";

import { getBookingCar, type Booking } from "@/data/mocks/account";
import { formatPriceRub } from "@/lib/format/money";

import styles from "./PanelBookingCard.module.sass";

type PanelBookingCardProps = {
    booking: Booking;
};

const monthMap: Record<string, string> = {
    января: "янв.",
    февраля: "февр.",
    марта: "мар.",
    апреля: "апр.",
    мая: "мая",
    июня: "июн.",
    июля: "июл.",
    августа: "авг.",
    сентября: "сент.",
    октября: "окт.",
    ноября: "нояб.",
    декабря: "дек.",
};

export default function PanelBookingCard({ booking }: PanelBookingCardProps) {
    const car = getBookingCar(booking.carId);

    if (!car) {
        return null;
    }

    const pickup = formatBookingDate(booking.pickupAt);
    const returnDate = formatBookingDate(booking.returnAt);

    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={car.image}
                    alt={car.title}
                    width={600}
                    height={400}
                    quality={100}
                    unoptimized
                />
            </div>

            <div className={styles.content}>
                <div className={styles.title}>{booking.carTitle}</div>

                <div className={styles.info}>
                    <div className={styles.name}>Имя Фамилия</div>
                    <div className={styles.time}>
                        {pickup.label} <span>{pickup.time}</span>
                    </div>
                    <div className={styles.time}>
                        {returnDate.label} <span>{returnDate.time}</span>
                    </div>
                </div>

                <div className={styles.price}>
                    <b>{formatPriceRub(booking.totalPrice, "ru")} ₽</b>
                    <span>Оплачено полностью</span>
                </div>

                <div className={styles.controls}>
                    <button type="button" className={styles.btn}>
                        Изменить
                    </button>
                    <button type="button" className={styles.btnOutline}>
                        Отменить
                    </button>
                </div>
            </div>
        </article>
    );
}

function formatBookingDate(value: string) {
    const [datePart = "", time = ""] = value.split(", ");
    const [day = "", month = ""] = datePart.split(" ");

    return {
        label: `${day} ${monthMap[month] ?? month}`.trim(),
        time,
    };
}
