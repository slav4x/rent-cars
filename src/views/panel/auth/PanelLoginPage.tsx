import Link from "next/link";

import styles from "./PanelLoginPage.module.sass";

export default function PanelLoginPage() {
    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <div className={styles.copy}>
                    <span className={styles.eyebrow}>/panel/login</span>
                    <h1>Вход в админ-панель</h1>
                    <p>
                        Отдельная точка входа для администраторов, модераторов и
                        супер-админов. Здесь потом можно подключить реальную
                        авторизацию и проверку ролей.
                    </p>
                </div>

                <form className={styles.form}>
                    <label className={styles.field}>
                        <span>Почта</span>
                        <input type="email" placeholder="admin@vsemprokat.ru" />
                    </label>

                    <label className={styles.field}>
                        <span>Пароль</span>
                        <input type="password" placeholder="Введите пароль" />
                    </label>

                    <button type="submit" className={styles.submit}>
                        Войти в панель
                    </button>
                </form>

                <Link href="/" className={styles.back}>
                    Вернуться на сайт
                </Link>
            </section>
        </main>
    );
}
