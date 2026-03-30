import type { Metadata } from "next";

import PanelLoginPage from "@/views/panel/auth/PanelLoginPage";

export const metadata: Metadata = {
    title: "Вход в панель",
    description: "",
};

export default function Page() {
    return <PanelLoginPage />;
}
