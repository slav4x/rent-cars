import styles from "./AccountView.module.sass";

type Props = {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    metaLabel: string;
    metaValue: string;
};

export default function AccountTextPage({
    eyebrow,
    title,
    description,
    items,
    metaLabel,
    metaValue,
}: Props) {
    return (
        <section className={styles.page}>
            <div className={styles.hero}>
                <div>
                    <div className={styles.eyebrow}>{eyebrow}</div>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.meta}>
                    <div className={styles.metaLabel}>{metaLabel}</div>
                    <div className={styles.metaValue}>{metaValue}</div>
                </div>
            </div>

            <div className={styles.textList}>
                {items.map((item) => (
                    <div key={item} className={styles.textItem}>
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}
