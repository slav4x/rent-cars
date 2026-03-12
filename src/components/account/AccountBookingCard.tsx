import Image from "next/image";

import styles from "./AccountBookingCard.module.sass";
import {
    getBookingCar,
    type Booking,
    type BookingStatus,
} from "@/data/mocks/account";
import { formatPriceRub } from "@/lib/format/money";

type Props = {
    booking: Booking;
    status: BookingStatus;
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

const actionLabels: Record<
    BookingStatus,
    { primary: string; secondary: string; note: string }
> = {
    pending: {
        primary: "Продолжить",
        secondary: "Отменить",
        note: "Бронирование ожидает подтверждения.",
    },
    upcoming: {
        primary: "Изменить",
        secondary: "Отменить",
        note: "Предстоящая поездка подтверждена.",
    },
    history: {
        primary: "Повторить",
        secondary: "Детали",
        note: "Поездка завершена и сохранена в истории.",
    },
};

export default function AccountBookingCard({ booking, status }: Props) {
    const car = getBookingCar(booking.carId);

    if (!car) {
        return null;
    }

    const actions = actionLabels[status];
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
                <div className={styles.title}>{car.title}</div>

                <div className={styles.info}>
                    <div className={styles.city}>{booking.city}</div>
                    <div className={styles.meta}>Детали</div>
                    <div className={styles.time}>
                        {pickup.label} <span>{pickup.time}</span>
                    </div>
                    <div className={styles.time}>
                        {returnDate.label} <span>{returnDate.time}</span>
                    </div>
                </div>

                <div className={styles.price}>
                    <b>{formatPriceRub(booking.totalPrice, "ru")} ₽</b>
                    <span>Внесен залог в размере 10 000 ₽</span>
                </div>

                <div className={styles.controls}>
                    <button type="button" className={styles.btn}>
                        {actions.primary}
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
