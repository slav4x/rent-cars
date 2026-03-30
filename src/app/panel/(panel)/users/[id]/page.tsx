import type { Metadata } from "next";

import PanelUserDetailsPage from "@/views/panel/users/PanelUserDetailsPage";

export const metadata: Metadata = {
    title: "Пользователь",
    description: "",
};

export default function Page() {
    return <PanelUserDetailsPage />;
}
