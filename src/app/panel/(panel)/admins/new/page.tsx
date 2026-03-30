import type { Metadata } from "next";

import PanelAdminFormPage from "@/views/panel/admins/PanelAdminFormPage";

export const metadata: Metadata = {
    title: "Добавить администратора",
    description: "",
};

export default function Page() {
    return <PanelAdminFormPage />;
}
