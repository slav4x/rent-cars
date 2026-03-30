import type { Metadata } from "next";

import PanelUsersPage from "@/views/panel/users/PanelUsersPage";

export const metadata: Metadata = {
    title: "Аккаунты",
    description: "",
};

export default function Page() {
    return <PanelUsersPage />;
}
