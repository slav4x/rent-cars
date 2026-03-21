import type { Metadata } from "next";

import AccountRulesPage from "@/views/account/pages/AccountRulesPage";

export const metadata: Metadata = {
    title: "Правила бронирования",
    description: "",
};

export default function Page() {
    return <AccountRulesPage />;
}
