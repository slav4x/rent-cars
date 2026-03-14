import Link from "next/link";

import styles from "@/views/account/AccountSettingsPage.module.sass";
import { cn } from "@/lib/utils/cn";
import type { SettingsSection } from "@/data/mocks/account";

type Props = {
    active: SettingsSection;
};

const settingLinks: Array<{ id: SettingsSection; label: string }> = [
    { id: "profile", label: "Аккаунт" },
    { id: "verification", label: "Верификация" },
    { id: "privacy", label: "Конфиденциальность" },
];

export default function AccountSettingsNav({ active }: Props) {
    return (
        <nav className={styles.nav}>
            {settingLinks.map((item) => (
                <Link
                    key={item.id}
                    href={`/account/settings/${item.id}`}
                    className={cn(
                        styles.navLink,
                        active === item.id && styles.navLinkActive,
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}
