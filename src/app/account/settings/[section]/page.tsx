import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AccountSettingsPage from "@/views/account/AccountSettingsPage";
import {
    settingsSectionMeta,
    type SettingsSection,
} from "@/data/mocks/account";

type PageProps = {
    params: Promise<{ section: string }>;
};

const sections: SettingsSection[] = ["profile", "verification", "privacy"];

export function generateStaticParams() {
    return sections.map((section) => ({ section }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { section } = await params;

    if (!sections.includes(section as SettingsSection)) {
        return {
            title: "Настройки",
            description: "",
        };
    }

    return {
        title: settingsSectionMeta[section as SettingsSection].title,
        description: "",
    };
}

export default async function Page({ params }: PageProps) {
    const { section } = await params;

    if (!sections.includes(section as SettingsSection)) {
        notFound();
    }

    return <AccountSettingsPage section={section as SettingsSection} />;
}
