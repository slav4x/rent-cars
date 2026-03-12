import type { Metadata } from "next";

import AccountCarsCatalogPage from "@/views/account/AccountCarsCatalogPage";

export const metadata: Metadata = {
    title: "Забронировать авто",
    description: "",
};

export default function Page() {
    return <AccountCarsCatalogPage />;
}
