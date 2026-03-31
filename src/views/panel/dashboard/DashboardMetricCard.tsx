import { cn } from "@/lib/utils/cn";
import PanelDashboardSelect from "@/components/panel/PanelDashboardSelect";
import type { DashboardMonthPeriod } from "@/data/mocks/dashboard";

import styles from "./DashboardCard.module.sass";
import {
    formatDiff,
    formatMetricValue,
    getDiff,
    monthPeriodOptions,
    type DashboardStats,
} from "./dashboard.utils";

type DashboardMetricCardProps = {
    title: string;
    periodName: string;
    period: DashboardMonthPeriod;
    onPeriodChange: (value: string) => void;
    metric: DashboardStats["bookings"][DashboardMonthPeriod];
    compareLabel: string;
};

export default function DashboardMetricCard({
    title,
    periodName,
    period,
    onPeriodChange,
    metric,
    compareLabel,
}: DashboardMetricCardProps) {
    const diff = getDiff(metric);

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.title}>{title}</div>
                <PanelDashboardSelect
                    name={periodName}
                    value={period}
                    onChange={onPeriodChange}
                    options={monthPeriodOptions}
                />
            </div>
            <div className={styles.total} style={{ marginTop: 30 }}>
                <div className={styles.totalValue}>
                    {formatMetricValue(metric.value)}
                </div>
                <div
                    className={cn(
                        styles.totalDiff,
                        diff >= 0 ? styles.totalDiffUp : styles.totalDiffDown,
                    )}
                >
                    {formatDiff(diff)} <span>за {compareLabel}</span>
                </div>
            </div>
        </div>
    );
}
