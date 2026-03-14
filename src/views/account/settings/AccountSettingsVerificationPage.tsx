import styles from "./AccountSettingsSection.module.sass";

export default function AccountSettingsVerificationPage() {
    return (
        <div className={styles.verification}>
            <div className={styles.toggle}>
                <label className={styles.toggleItem}>
                    <input type="radio" name="type" />
                    <span>Гражданин РФ</span>
                </label>
                <span style={{ opacity: 0.4 }}>|</span>
                <label className={styles.toggleItem}>
                    <input type="radio" name="type" />
                    <span>Иностранный гражданин</span>
                </label>
            </div>
            <div className={styles.row}>
                <div className={styles.verificationCard}>
                    <div className={styles.status}>Обязательное поле</div>
                    <b>Главная страница паспорта</b>
                    <p>Убедитесь, что загруженные документы хорошо читаемы.</p>
                    <div className={styles.verificationBtn}>
                        Загрузить фото<span>(PDF, JPEG, PNG)</span>
                    </div>
                </div>
                <div className={styles.verificationCard}>
                    <div className={styles.status}>Обязательное поле</div>
                    <b>Страница регистрации</b>
                    <p>Убедитесь, что загруженные документы хорошо читаемы.</p>
                    <div className={styles.verificationBtn}>
                        Загрузить фото<span>(PDF, JPEG, PNG)</span>
                    </div>
                </div>
            </div>
            <div className={styles.vuTitle}>Водительское удостоверение</div>
            <div className={styles.row}>
                <div className={styles.verificationCard}>
                    <div className={styles.status}>Обязательное поле</div>
                    <b>Водительское удостоверение (лицевая сторона)</b>
                    <p>Убедитесь, что загруженные документы хорошо читаемы.</p>
                    <div className={styles.verificationBtn}>
                        Загрузить фото<span>(PDF, JPEG, PNG)</span>
                    </div>
                </div>
                <div className={styles.verificationCard}>
                    <div className={styles.status}>Обязательное поле</div>
                    <b>Водительское удостоверение (обратная сторона)</b>
                    <p>Убедитесь, что загруженные документы хорошо читаемы.</p>
                    <div className={styles.verificationBtn}>
                        Загрузить фото<span>(PDF, JPEG, PNG)</span>
                    </div>
                </div>
            </div>
            <div className={styles.verificationButtons}>
                <button className={styles.verificationButtonOutline}>
                    Помощь менеджера
                </button>
                <button className={styles.verificationButton}>Отправить</button>
            </div>
        </div>
    );
}
