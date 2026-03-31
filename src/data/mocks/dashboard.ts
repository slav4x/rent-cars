export type DashboardCity =
    | "saint-petersburg"
    | "moscow"
    | "sochi"
    | "murmansk";

export type DashboardMonthPeriod = "march" | "february" | "january";
export type DashboardRangePeriod = "14-days" | "30-days" | "year";

type MetricEntry = {
    value: number;
    previousValue: number;
};

type TopCarEntry = {
    title: string;
    requests: number;
};

type VisitorsSeriesPoint = {
    date: string;
    value: number;
};

type CityDashboardStats = {
    bookings: Record<DashboardMonthPeriod, MetricEntry>;
    accounts: Record<DashboardMonthPeriod, MetricEntry>;
    visitors: Record<DashboardRangePeriod, MetricEntry>;
    visitorsSeries: Record<DashboardRangePeriod, VisitorsSeriesPoint[]>;
    topCars: Record<DashboardRangePeriod, TopCarEntry[]>;
};

export const dashboardCityLabels: Record<DashboardCity, string> = {
    "saint-petersburg": "Санкт-Петербург",
    moscow: "Москва",
    sochi: "Сочи",
    murmansk: "Мурманск",
};

function buildDailySeries(startDate: string, values: number[]) {
    const date = new Date(`${startDate}T00:00:00`);

    return values.map((value, index) => {
        const currentDate = new Date(date);
        currentDate.setDate(date.getDate() + index);

        return {
            date: currentDate.toISOString().slice(0, 10),
            value,
        };
    });
}

export const dashboardStatsByCity: Record<DashboardCity, CityDashboardStats> = {
    "saint-petersburg": {
        bookings: {
            march: { value: 148, previousValue: 130 },
            february: { value: 130, previousValue: 121 },
            january: { value: 121, previousValue: 116 },
        },
        accounts: {
            march: { value: 39, previousValue: 31 },
            february: { value: 31, previousValue: 28 },
            january: { value: 28, previousValue: 24 },
        },
        visitors: {
            "14-days": { value: 4820, previousValue: 4510 },
            "30-days": { value: 10240, previousValue: 9680 },
            year: { value: 118400, previousValue: 110200 },
        },
        visitorsSeries: {
            "14-days": buildDailySeries("2026-03-18", [
                280, 286, 294, 310, 304, 295, 302, 340, 336, 330, 338, 351,
                365, 390,
            ]),
            "30-days": buildDailySeries("2026-03-01", [
                260, 268, 274, 292, 300, 296, 304, 309, 314, 318, 322, 329,
                336, 340, 342, 338, 334, 331, 336, 339, 343, 347, 350, 352,
                355, 360, 366, 371, 376, 382,
            ]),
            year: [
                { date: "2026-01-01", value: 8200 },
                { date: "2026-03-01", value: 9100 },
                { date: "2026-05-01", value: 9800 },
                { date: "2026-07-01", value: 10500 },
                { date: "2026-09-01", value: 10100 },
                { date: "2026-11-01", value: 11200 },
                { date: "2026-12-01", value: 11800 },
            ],
        },
        topCars: {
            "14-days": [
                { title: "BMW M4 Competition", requests: 18 },
                { title: "Toyota Camry 2021", requests: 16 },
                { title: "Lexus ES 250", requests: 12 },
                { title: "Tesla Model 3", requests: 10 },
            ],
            "30-days": [
                { title: "BMW M4 Competition", requests: 34 },
                { title: "Toyota Camry 2021", requests: 30 },
                { title: "Lexus ES 250", requests: 23 },
                { title: "Tesla Model 3", requests: 18 },
            ],
            year: [
                { title: "Toyota Camry 2021", requests: 280 },
                { title: "BMW M4 Competition", requests: 264 },
                { title: "Lexus ES 250", requests: 210 },
                { title: "Tesla Model 3", requests: 196 },
            ],
        },
    },
    moscow: {
        bookings: {
            march: { value: 212, previousValue: 196 },
            february: { value: 196, previousValue: 188 },
            january: { value: 188, previousValue: 175 },
        },
        accounts: {
            march: { value: 57, previousValue: 61 },
            february: { value: 61, previousValue: 53 },
            january: { value: 53, previousValue: 47 },
        },
        visitors: {
            "14-days": { value: 6530, previousValue: 6210 },
            "30-days": { value: 13980, previousValue: 13120 },
            year: { value: 162700, previousValue: 151500 },
        },
        visitorsSeries: {
            "14-days": buildDailySeries("2026-03-18", [
                410, 418, 430, 439, 455, 462, 470, 464, 450, 458, 476, 495,
                503, 520,
            ]),
            "30-days": buildDailySeries("2026-03-01", [
                390, 396, 404, 412, 420, 426, 434, 442, 446, 450, 454, 459,
                464, 468, 470, 466, 462, 459, 456, 462, 470, 476, 481, 485,
                488, 494, 501, 507, 514, 520,
            ]),
            year: [
                { date: "2026-01-01", value: 11400 },
                { date: "2026-03-01", value: 12600 },
                { date: "2026-05-01", value: 13300 },
                { date: "2026-07-01", value: 14100 },
                { date: "2026-09-01", value: 13800 },
                { date: "2026-11-01", value: 14900 },
                { date: "2026-12-01", value: 15500 },
            ],
        },
        topCars: {
            "14-days": [
                { title: "Mercedes E-Class 2022", requests: 24 },
                { title: "Audi A6 Quattro", requests: 21 },
                { title: "BMW M4 Competition", requests: 18 },
                { title: "Kia K5 2022", requests: 15 },
            ],
            "30-days": [
                { title: "Mercedes E-Class 2022", requests: 41 },
                { title: "Audi A6 Quattro", requests: 38 },
                { title: "BMW M4 Competition", requests: 33 },
                { title: "Kia K5 2022", requests: 28 },
            ],
            year: [
                { title: "Mercedes E-Class 2022", requests: 340 },
                { title: "Audi A6 Quattro", requests: 311 },
                { title: "BMW M4 Competition", requests: 278 },
                { title: "Kia K5 2022", requests: 243 },
            ],
        },
    },
    sochi: {
        bookings: {
            march: { value: 96, previousValue: 84 },
            february: { value: 84, previousValue: 72 },
            january: { value: 72, previousValue: 65 },
        },
        accounts: {
            march: { value: 28, previousValue: 25 },
            february: { value: 25, previousValue: 21 },
            january: { value: 21, previousValue: 19 },
        },
        visitors: {
            "14-days": { value: 3140, previousValue: 2890 },
            "30-days": { value: 6850, previousValue: 6410 },
            year: { value: 78200, previousValue: 73100 },
        },
        visitorsSeries: {
            "14-days": buildDailySeries("2026-03-18", [
                190, 194, 205, 209, 214, 221, 232, 226, 220, 228, 240, 248,
                255, 266,
            ]),
            "30-days": buildDailySeries("2026-03-01", [
                182, 186, 190, 194, 198, 201, 205, 209, 212, 214, 218, 221,
                224, 226, 228, 231, 233, 234, 236, 239, 242, 244, 246, 248,
                250, 252, 254, 256, 258, 260,
            ]),
            year: [
                { date: "2026-01-01", value: 5600 },
                { date: "2026-03-01", value: 6100 },
                { date: "2026-05-01", value: 6450 },
                { date: "2026-07-01", value: 6820 },
                { date: "2026-09-01", value: 6580 },
                { date: "2026-11-01", value: 7200 },
                { date: "2026-12-01", value: 7600 },
            ],
        },
        topCars: {
            "14-days": [
                { title: "Range Rover Sport", requests: 17 },
                { title: "Porsche 911 Carrera", requests: 14 },
                { title: "Ford Mustang GT", requests: 12 },
                { title: "Mercedes E-Class 2022", requests: 10 },
            ],
            "30-days": [
                { title: "Range Rover Sport", requests: 29 },
                { title: "Porsche 911 Carrera", requests: 25 },
                { title: "Ford Mustang GT", requests: 20 },
                { title: "Mercedes E-Class 2022", requests: 17 },
            ],
            year: [
                { title: "Range Rover Sport", requests: 228 },
                { title: "Porsche 911 Carrera", requests: 210 },
                { title: "Ford Mustang GT", requests: 183 },
                { title: "Mercedes E-Class 2022", requests: 168 },
            ],
        },
    },
    murmansk: {
        bookings: {
            march: { value: 44, previousValue: 39 },
            february: { value: 39, previousValue: 34 },
            january: { value: 34, previousValue: 30 },
        },
        accounts: {
            march: { value: 11, previousValue: 13 },
            february: { value: 13, previousValue: 12 },
            january: { value: 12, previousValue: 10 },
        },
        visitors: {
            "14-days": { value: 1290, previousValue: 1180 },
            "30-days": { value: 2810, previousValue: 2590 },
            year: { value: 33600, previousValue: 30900 },
        },
        visitorsSeries: {
            "14-days": buildDailySeries("2026-03-18", [
                74, 77, 82, 85, 88, 91, 95, 92, 90, 94, 98, 101, 104, 108,
            ]),
            "30-days": buildDailySeries("2026-03-01", [
                70, 72, 74, 76, 79, 80, 82, 84, 85, 86, 88, 89, 91, 92, 93,
                94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
                107, 108,
            ]),
            year: [
                { date: "2026-01-01", value: 2400 },
                { date: "2026-03-01", value: 2650 },
                { date: "2026-05-01", value: 2760 },
                { date: "2026-07-01", value: 2890 },
                { date: "2026-09-01", value: 2810 },
                { date: "2026-11-01", value: 3040 },
                { date: "2026-12-01", value: 3190 },
            ],
        },
        topCars: {
            "14-days": [
                { title: "Volkswagen ID.4", requests: 9 },
                { title: "Hyundai Sonata 2023", requests: 8 },
                { title: "Toyota Camry 2021", requests: 7 },
                { title: "Tesla Model 3", requests: 6 },
            ],
            "30-days": [
                { title: "Volkswagen ID.4", requests: 15 },
                { title: "Hyundai Sonata 2023", requests: 14 },
                { title: "Toyota Camry 2021", requests: 11 },
                { title: "Tesla Model 3", requests: 10 },
            ],
            year: [
                { title: "Volkswagen ID.4", requests: 132 },
                { title: "Hyundai Sonata 2023", requests: 126 },
                { title: "Toyota Camry 2021", requests: 108 },
                { title: "Tesla Model 3", requests: 96 },
            ],
        },
    },
};
