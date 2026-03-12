import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AccountBookingsPage from "@/views/account/AccountBookingsPage";
import {
    accountBookings,
    bookingStatusMeta,
    type BookingStatus,
} from "@/data/mocks/account";

type PageProps = {
    params: Promise<{ status: string }>;
};

const statuses: BookingStatus[] = ["pending", "upcoming", "history"];

export function generateStaticParams() {
    return statuses.map((status) => ({ status }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { status } = await params;

    if (!statuses.includes(status as BookingStatus)) {
        return {
            title: "Бронирования",
            description: "",
        };
    }

    return {
        title: bookingStatusMeta[status as BookingStatus].title,
        description: "",
    };
}

export default async function Page({ params }: PageProps) {
    const { status } = await params;

    if (!statuses.includes(status as BookingStatus)) {
        notFound();
    }

    const currentStatus = status as BookingStatus;
    const bookings = accountBookings.filter(
        (item) => item.status === currentStatus,
    );

    return <AccountBookingsPage status={currentStatus} bookings={bookings} />;
}
