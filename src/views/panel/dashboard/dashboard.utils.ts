import {
    dashboardStatsByCity,
    type DashboardCity,
    type DashboardMonthPeriod,
    type DashboardRangePeriod,
} from "@/data/mocks/dashboard";

export const monthPeriodOptions = [
    { value: "march", label: "Март" },
    { value: "february", label: "Февраль" },
    { value: "january", label: "Январь" },
] as const;

export const rangePeriodOptions = [
    { value: "14-days", label: "14 дней" },
    { value: "30-days", label: "30 дней" },
    { value: "year", label: "Год" },
] as const;

export function getCityDashboardStats(city: DashboardCity) {
    return dashboardStatsByCity[city];
}

export function getAllCitiesDashboardStats() {
    const cities = Object.values(dashboardStatsByCity);

    return {
        bookings: {
            march: sumMetric(cities.map((item) => item.bookings.march)),
            february: sumMetric(cities.map((item) => item.bookings.february)),
            january: sumMetric(cities.map((item) => item.bookings.january)),
        },
        accounts: {
            march: sumMetric(cities.map((item) => item.accounts.march)),
            february: sumMetric(cities.map((item) => item.accounts.february)),
            january: sumMetric(cities.map((item) => item.accounts.january)),
        },
        visitors: {
            "14-days": sumMetric(
                cities.map((item) => item.visitors["14-days"]),
            ),
            "30-days": sumMetric(
                cities.map((item) => item.visitors["30-days"]),
            ),
            year: sumMetric(cities.map((item) => item.visitors.year)),
        },
        visitorsSeries: {
            "14-days": aggregateVisitorsSeries(
                cities.map((item) => item.visitorsSeries["14-days"]),
            ),
            "30-days": aggregateVisitorsSeries(
                cities.map((item) => item.visitorsSeries["30-days"]),
            ),
            year: aggregateVisitorsSeries(
                cities.map((item) => item.visitorsSeries.year),
            ),
        },
        topCars: {
            "14-days": aggregateTopCars(
                cities.map((item) => item.topCars["14-days"]),
            ),
            "30-days": aggregateTopCars(
                cities.map((item) => item.topCars["30-days"]),
            ),
            year: aggregateTopCars(cities.map((item) => item.topCars.year)),
        },
    };
}

export type DashboardStats = ReturnType<typeof getAllCitiesDashboardStats>;

export function getDiff(metric: { value: number; previousValue: number }) {
    return metric.value - metric.previousValue;
}

export function formatDiff(diff: number) {
    return diff > 0 ? `+${diff}` : `${diff}`;
}

export function formatMetricValue(value: number) {
    return new Intl.NumberFormat("ru-RU").format(value);
}

export function formatChartTick(value: string) {
    const date = new Date(`${value}T00:00:00`);

    return new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "short",
    })
        .format(date)
        .replace(".", "");
}

export function formatChartTooltipDate(
    value: string,
    period: DashboardRangePeriod,
) {
    const date = new Date(`${value}T00:00:00`);

    return new Intl.DateTimeFormat("ru-RU", {
        day: period === "year" ? undefined : "numeric",
        month: "long",
        year: period === "year" ? "numeric" : undefined,
    }).format(date);
}

export function getMonthCompareLabel(period: DashboardMonthPeriod) {
    const labelMap: Record<DashboardMonthPeriod, string> = {
        march: "месяц",
        february: "месяц",
        january: "месяц",
    };

    return labelMap[period];
}

export function getRangeCompareLabel(period: DashboardRangePeriod) {
    const labelMap: Record<DashboardRangePeriod, string> = {
        "14-days": "14 дней",
        "30-days": "30 дней",
        year: "год",
    };

    return labelMap[period];
}

function sumMetric(entries: Array<{ value: number; previousValue: number }>) {
    return entries.reduce(
        (acc, entry) => ({
            value: acc.value + entry.value,
            previousValue: acc.previousValue + entry.previousValue,
        }),
        { value: 0, previousValue: 0 },
    );
}

function aggregateVisitorsSeries(
    groups: Array<Array<{ date: string; value: number }>>,
) {
    const base = groups[0] ?? [];

    return base.map((point, index) => ({
        date: point.date,
        value: groups.reduce(
            (total, group) => total + (group[index]?.value ?? 0),
            0,
        ),
    }));
}

function aggregateTopCars(
    groups: Array<Array<{ title: string; requests: number }>>,
) {
    const requestsByTitle = new Map<string, number>();

    groups.flat().forEach((car) => {
        requestsByTitle.set(
            car.title,
            (requestsByTitle.get(car.title) ?? 0) + car.requests,
        );
    });

    return Array.from(requestsByTitle.entries())
        .map(([title, requests]) => ({ title, requests }))
        .sort((a, b) => b.requests - a.requests)
        .slice(0, 6);
}
