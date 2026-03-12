import type { Metadata } from "next";

import AccountDashboardPage from "@/views/account/AccountDashboardPage";

export const metadata: Metadata = {
    title: "Личный кабинет",
    description: "",
};

export default function Page() {
    return <AccountDashboardPage />;
}
