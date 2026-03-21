import view from "../AccountView.module.sass";
import styles from "./AccountBookingsPage.module.sass";
import {
    bookingStatusMeta,
    type Booking,
    type BookingStatus,
} from "@/data/mocks/account";
import AccountBookingCard from "../components/AccountBookingCard";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Props = {
    status: BookingStatus;
    bookings: Booking[];
};

export default function AccountBookingsPage({ status, bookings }: Props) {
    const title = bookingStatusMeta[status].title;
    const tabs: { href: string; label: string; status: BookingStatus }[] = [
        {
            href: "/account/bookings/pending",
            label: "Незавершенные",
            status: "pending",
        },
        {
            href: "/account/bookings/upcoming",
            label: "Предстоящие",
            status: "upcoming",
        },
    ];

    return (
        <section className={styles.section}>
            <ul className={styles.toggle}>
                {tabs.map((tab) => (
                    <li
                        key={tab.status}
                        className={cn(tab.status === status && styles.active)}
                    >
                        <Link href={tab.href}>{tab.label}</Link>
                    </li>
                ))}
            </ul>

            <h1 className={view.title}>{title}</h1>

            {bookings.length === 0 ? (
                <div className={view.empty}>
                    В этом разделе пока нет бронирований.
                </div>
            ) : (
                <div className={styles.grid}>
                    {bookings.map((booking) => (
                        <AccountBookingCard
                            key={booking.id}
                            booking={booking}
                            status={status}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
