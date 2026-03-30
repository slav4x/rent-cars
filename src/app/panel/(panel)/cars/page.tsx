import type { Metadata } from "next";

import PanelCarsPage from "@/views/panel/cars/PanelCarsPage";

export const metadata: Metadata = {
    title: "Автомобили",
    description: "",
};

export default function Page() {
    return <PanelCarsPage />;
}
