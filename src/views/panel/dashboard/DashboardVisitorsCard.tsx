"use client";

import { cn } from "@/lib/utils/cn";
import PanelDashboardSelect from "@/components/panel/PanelDashboardSelect";
import type { DashboardRangePeriod } from "@/data/mocks/dashboard";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import styles from "./DashboardCard.module.sass";
import {
    formatChartTick,
    formatChartTooltipDate,
    formatDiff,
    formatMetricValue,
    getDiff,
    rangePeriodOptions,
    type DashboardStats,
} from "./dashboard.utils";

type DashboardVisitorsCardProps = {
    period: DashboardRangePeriod;
    onPeriodChange: (value: string) => void;
    metric: DashboardStats["visitors"][DashboardRangePeriod];
    series: DashboardStats["visitorsSeries"][DashboardRangePeriod];
    compareLabel: string;
};

export default function DashboardVisitorsCard({
    period,
    onPeriodChange,
    metric,
    series,
    compareLabel,
}: DashboardVisitorsCardProps) {
    const diff = getDiff(metric);

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.title}>Посетители</div>
                <PanelDashboardSelect
                    name="visitors-period"
                    value={period}
                    onChange={onPeriodChange}
                    options={rangePeriodOptions}
                />
            </div>
            <div className={styles.total} style={{ marginTop: 5 }}>
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
            <div className={styles.chartWrap}>
                <ResponsiveContainer width="100%" height={280}>
                    <AreaChart
                        data={series}
                        margin={{
                            top: 12,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient
                                id="visitorsArea"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#E2D0BA"
                                    stopOpacity="1"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#F7F2EC"
                                    stopOpacity="1"
                                />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={formatChartTick}
                            interval="preserveStartEnd"
                            minTickGap={24}
                            tick={{
                                fontSize: 12,
                                fill: "rgba(45, 45, 45, 0.48)",
                            }}
                        />
                        <YAxis hide domain={["dataMin - 20", "dataMax + 20"]} />
                        <Tooltip
                            cursor={{
                                stroke: "#C9A77F",
                                strokeOpacity: 0.2,
                            }}
                            content={({ active, payload, label }) => {
                                if (!active || !payload?.length) {
                                    return null;
                                }

                                const value = payload[0]?.value;

                                return (
                                    <div
                                        style={{
                                            borderRadius: 12,
                                            background: "#fff",
                                            border: 0,
                                            padding: 12,
                                            boxShadow:
                                                "0px 12px 20.6px rgba(183, 171, 159, 0.09)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                color: "rgba(53, 53, 53, 0.6)",
                                                fontSize: 16,
                                                fontWeight: 500,
                                                lineHeight: 1.2,
                                                marginBottom: 14,
                                            }}
                                        >
                                            {formatChartTooltipDate(
                                                String(label),
                                                period,
                                            )}
                                        </div>

                                        <p
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 600,
                                                lineHeight: 1.2,
                                                margin: 0,
                                                padding: 0,
                                                color: "#353535",
                                            }}
                                        >
                                            Посетители:{" "}
                                            {formatMetricValue(Number(value))}
                                        </p>
                                    </div>
                                );
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#C9A77F"
                            strokeWidth={3}
                            fill="url(#visitorsArea)"
                            dot={false}
                            activeDot={{
                                r: 5,
                                stroke: "#C9A77F",
                                strokeWidth: 2,
                                fill: "#fff",
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
