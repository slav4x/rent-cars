import ThanksPage from "@/pages/thanks/ThanksPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Спасибо за заявку",
    description: "",
};

export default function Page() {
    return <ThanksPage />;
}
