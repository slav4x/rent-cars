import type { Metadata } from "next";

import PanelPagesIndexPage from "@/views/panel/pages/PanelPagesIndexPage";

export const metadata: Metadata = {
    title: "Страницы",
    description: "",
};

export default function Page() {
    return <PanelPagesIndexPage />;
}
