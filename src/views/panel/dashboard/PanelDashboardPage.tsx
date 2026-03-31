"use client";

import { useMemo, useState } from "react";

import PanelCitySelect from "@/components/panel/PanelCitySelect";
import type {
    DashboardCity,
    DashboardMonthPeriod,
    DashboardRangePeriod,
} from "@/data/mocks/dashboard";

import DashboardMetricCard from "./DashboardMetricCard";
import DashboardTopCarsCard from "./DashboardTopCarsCard";
import DashboardVisitorsCard from "./DashboardVisitorsCard";
import PanelTop from "../layout/PanelTop";
import {
    getAllCitiesDashboardStats,
    getCityDashboardStats,
    getMonthCompareLabel,
    getRangeCompareLabel,
} from "./dashboard.utils";
import styles from "./PanelDashboardPage.module.sass";

export default function PanelDashboardPage() {
    const [city, setCity] = useState("");
    const [bookingsPeriod, setBookingsPeriod] =
        useState<DashboardMonthPeriod>("march");
    const [accountsPeriod, setAccountsPeriod] =
        useState<DashboardMonthPeriod>("march");
    const [topCarsPeriod, setTopCarsPeriod] =
        useState<DashboardRangePeriod>("14-days");
    const [visitorsPeriod, setVisitorsPeriod] =
        useState<DashboardRangePeriod>("14-days");

    const stats = useMemo(
        () =>
            city
                ? getCityDashboardStats(city as DashboardCity)
                : getAllCitiesDashboardStats(),
        [city],
    );

    return (
        <>
            <PanelTop title="Статистика">
                <PanelCitySelect value={city} onChange={setCity} />
            </PanelTop>

            <div className={styles.grid}>
                <div className={styles.colSm}>
                    <DashboardMetricCard
                        title="Бронирования"
                        periodName="requests-period"
                        period={bookingsPeriod}
                        onPeriodChange={(value) =>
                            setBookingsPeriod(value as DashboardMonthPeriod)
                        }
                        metric={stats.bookings[bookingsPeriod]}
                        compareLabel={getMonthCompareLabel(bookingsPeriod)}
                    />

                    <DashboardMetricCard
                        title="Аккаунты"
                        periodName="accounts-period"
                        period={accountsPeriod}
                        onPeriodChange={(value) =>
                            setAccountsPeriod(value as DashboardMonthPeriod)
                        }
                        metric={stats.accounts[accountsPeriod]}
                        compareLabel={getMonthCompareLabel(accountsPeriod)}
                    />
                </div>

                <div className={styles.colMd}>
                    <DashboardTopCarsCard
                        period={topCarsPeriod}
                        onPeriodChange={(value) =>
                            setTopCarsPeriod(value as DashboardRangePeriod)
                        }
                        cars={stats.topCars[topCarsPeriod]}
                    />
                </div>

                <div className={styles.colXl}>
                    <DashboardVisitorsCard
                        period={visitorsPeriod}
                        onPeriodChange={(value) =>
                            setVisitorsPeriod(value as DashboardRangePeriod)
                        }
                        metric={stats.visitors[visitorsPeriod]}
                        series={stats.visitorsSeries[visitorsPeriod]}
                        compareLabel={getRangeCompareLabel(visitorsPeriod)}
                    />
                </div>
            </div>
        </>
    );
}
