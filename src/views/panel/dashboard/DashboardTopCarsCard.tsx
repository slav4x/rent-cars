import PanelDashboardSelect from "@/components/panel/PanelDashboardSelect";
import type { DashboardRangePeriod } from "@/data/mocks/dashboard";

import styles from "./DashboardCard.module.sass";
import { rangePeriodOptions } from "./dashboard.utils";

type DashboardTopCarsCardProps = {
    period: DashboardRangePeriod;
    onPeriodChange: (value: string) => void;
    cars: Array<{ title: string; requests: number }>;
};

export default function DashboardTopCarsCard({
    period,
    onPeriodChange,
    cars,
}: DashboardTopCarsCardProps) {
    return (
        <div className={styles.card} style={{ height: "100%" }}>
            <div className={styles.top}>
                <div className={styles.title}>Топ автомобилей</div>
                <PanelDashboardSelect
                    name="top-cars-period"
                    value={period}
                    onChange={onPeriodChange}
                    options={rangePeriodOptions}
                />
            </div>
            <ul className={styles.list}>
                {cars.map((car) => (
                    <li key={`${period}-${car.title}`}>
                        <p>{car.title}</p>
                        <span>{car.requests} заявок</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
