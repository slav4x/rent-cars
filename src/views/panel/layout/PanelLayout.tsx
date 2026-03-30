import PanelSidebar from "./PanelSidebar";
import PanelHeader from "./PanelHeader";

import styles from "./PanelLayout.module.sass";

export default function PanelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className={styles.layout}>
                <PanelSidebar />
                <main
                    className={styles.content}
                    data-lenis-prevent
                    data-lenis-prevent-wheel
                    data-lenis-prevent-touch
                >
                    <PanelHeader />
                    {children}
                </main>
            </div>
        </>
    );
}
