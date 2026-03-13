import view from "./AccountView.module.sass";
import {
    settingsSectionMeta,
    verifiedDocuments,
    type SettingsSection,
} from "@/data/mocks/account";

type Props = {
    section: SettingsSection;
};

const sectionContent: Record<
    SettingsSection,
    Array<{ label: string; value: string }>
> = {
    profile: [
        { label: "ФИО", value: "Иван Иванов" },
        { label: "Фото", value: "Загружено" },
        { label: "Дата рождения", value: "14 мая 1992" },
    ],
    verification: verifiedDocuments.map((document) => ({
        label: document.label,
        value: document.status,
    })),
    privacy: [
        { label: "Пароль", value: "Изменить пароль" },
        { label: "Почта", value: "ivan.petrov@example.com" },
        { label: "Телефон", value: "+7 (999) 123-45-67" },
    ],
};

export default function AccountSettingsPage({ section }: Props) {
    const meta = settingsSectionMeta[section];

    return (
        <section>
            <div className={view.title}>Настройки</div>
            <div>{meta.title}</div>
        </section>
    );
}
