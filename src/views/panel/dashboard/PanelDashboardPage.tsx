import PanelCitySelect from "@/components/panel/PanelCitySelect";
import PanelTop from "../layout/PanelTop";
import styles from "./PanelDashboardPage.module.sass";

export default function PanelDashboardPage() {
    return (
        <section className={styles.page}>
            <PanelTop title="Статистика">
                <PanelCitySelect />
            </PanelTop>
        </section>
    );
}
