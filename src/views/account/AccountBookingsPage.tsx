import view from "./AccountView.module.sass";
import styles from "./AccountBookingsPage.module.sass";
import { bookingStatusMeta, type Booking, type BookingStatus } from "@/data/mocks/account";
import AccountBookingCard from "@/components/account/AccountBookingCard";

type Props = {
    status: BookingStatus;
    bookings: Booking[];
};

export default function AccountBookingsPage({ status, bookings }: Props) {
    const title = bookingStatusMeta[status].title;

    return (
        <section className={styles.section}>
            <h1 className={view.title}>{title}</h1>

            {bookings.length === 0 ? (
                <div className={view.empty}>В этом разделе пока нет бронирований.</div>
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
