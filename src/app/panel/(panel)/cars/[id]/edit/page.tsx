import type { Metadata } from "next";

import PanelCarFormPage from "@/views/panel/cars/PanelCarFormPage";

export const metadata: Metadata = {
    title: "Редактировать авто",
    description: "",
};

export default function Page() {
    return <PanelCarFormPage />;
}
