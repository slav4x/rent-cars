import view from "./AccountView.module.sass";
import styles from "./AccountSettingsPage.module.sass";
import { type SettingsSection } from "@/data/mocks/account";
import AccountSettingsNav from "@/components/account/AccountSettingsNav";
import AccountSettingsProfilePage from "./settings/AccountSettingsProfilePage";
import AccountSettingsVerificationPage from "./settings/AccountSettingsVerificationPage";
import AccountSettingsPrivacyPage from "./settings/AccountSettingsPrivacyPage";

type Props = {
    section: SettingsSection;
};

const sectionComponents: Record<SettingsSection, React.ReactNode> = {
    profile: <AccountSettingsProfilePage />,
    verification: <AccountSettingsVerificationPage />,
    privacy: <AccountSettingsPrivacyPage />,
};

export default function AccountSettingsPage({ section }: Props) {
    return (
        <section className={styles.page}>
            <div className={view.title}>Настройки</div>

            <AccountSettingsNav active={section} />

            {sectionComponents[section]}
        </section>
    );
}
