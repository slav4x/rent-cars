import styles from "./PanelTop.module.sass";

type PanelTopProps = {
    title: string;
    children?: React.ReactNode;
};

export default function PanelTop({ title, children }: PanelTopProps) {
    return (
        <div className={styles.top}>
            <h1 className={styles.title}>{title}</h1>
            {children ? children : null}
        </div>
    );
}
