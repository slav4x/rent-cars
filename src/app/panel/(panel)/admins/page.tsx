import type { Metadata } from "next";

import PanelAdminsPage from "@/views/panel/admins/PanelAdminsPage";

export const metadata: Metadata = {
    title: "Администраторы",
    description: "",
};

export default function Page() {
    return <PanelAdminsPage />;
}
