import type { Metadata } from "next";

import PanelBookingsPage from "@/views/panel/bookings/PanelBookingsPage";

export const metadata: Metadata = {
    title: "Бронирования",
    description: "",
};

export default function Page() {
    return <PanelBookingsPage />;
}
