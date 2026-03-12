import type { Metadata } from "next";

import AccountSupportPage from "@/views/account/AccountSupportPage";

export const metadata: Metadata = {
    title: "Поддержка",
    description: "",
};

export default function Page() {
    return <AccountSupportPage />;
}
