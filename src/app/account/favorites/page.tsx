import type { Metadata } from "next";

import AccountFavoritesPage from "@/views/account/AccountFavoritesPage";

export const metadata: Metadata = {
    title: "Избранное",
    description: "",
};

export default function Page() {
    return <AccountFavoritesPage />;
}
