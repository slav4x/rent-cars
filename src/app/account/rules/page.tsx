import type { Metadata } from "next";

import AccountRulesPage from "@/views/account/AccountRulesPage";

export const metadata: Metadata = {
    title: "Правила бронирования",
    description: "",
};

export default function Page() {
    return <AccountRulesPage />;
}
