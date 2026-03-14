import AccountSidebar from "@/components/account/AccountSidebar";

import styles from "./AccountLayout.module.sass";
import AccountHeader from "../account/AccountHeader";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AccountHeader />
            <div className={styles.layout}>
                <AccountSidebar />
                <main
                    className={styles.content}
                    data-lenis-prevent
                    data-lenis-prevent-wheel
                    data-lenis-prevent-touch
                >
                    {children}
                </main>
            </div>
        </>
    );
}
