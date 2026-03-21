import view from "../AccountView.module.sass";
import styles from "./AccountSettingsPage.module.sass";
import { type SettingsSection } from "@/data/mocks/account";
import AccountSettingsNav from "../components/AccountSettingsNav";
import AccountSettingsProfilePage from "./AccountSettingsProfilePage";
import AccountSettingsVerificationPage from "./AccountSettingsVerificationPage";
import AccountSettingsPrivacyPage from "./AccountSettingsPrivacyPage";

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
