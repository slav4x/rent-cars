import AccountSettingsEditableField from "@/components/account/AccountSettingsEditableField";
import styles from "./AccountSettingsSection.module.sass";

export default function AccountSettingsPrivacyPage() {
    return (
        <div className={styles.privacy}>
            <div className={styles.fields}>
                <AccountSettingsEditableField
                    label="Телефон"
                    type="tel"
                    defaultValue="+7 (922) 491-34-56"
                />
                <AccountSettingsEditableField
                    label="Почта"
                    type="email"
                    defaultValue="ivanovivan@mail.ru"
                />
                <AccountSettingsEditableField
                    label="Пароль"
                    type="password"
                    defaultValue="password"
                />
            </div>
            <button className={styles.btnSave}>Сохранить</button>
        </div>
    );
}
