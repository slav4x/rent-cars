import type { Metadata } from "next";

import PanelDashboardPage from "@/views/panel/dashboard/PanelDashboardPage";

export const metadata: Metadata = {
    title: "Панель управления",
    description: "",
};

export default function Page() {
    return <PanelDashboardPage />;
}
