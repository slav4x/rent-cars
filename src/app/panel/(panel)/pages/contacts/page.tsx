import type { Metadata } from "next";

import PanelContentEditorPage from "@/views/panel/pages/PanelContentEditorPage";

export const metadata: Metadata = {
    title: "Контакты",
    description: "",
};

export default function Page() {
    return <PanelContentEditorPage />;
}
