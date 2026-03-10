import PublicLayout from "@/components/layout/PublicLayout";
import HomePage from "@/views/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Главная",
    description: "",
};

export default function Page() {
    return (
        <PublicLayout>
            <HomePage />
        </PublicLayout>
    );
}
