"use client";

import { useMemo, useState } from "react";

import PanelBookingCard from "@/components/panel/PanelBookingCard";
import PanelCitySelect from "@/components/panel/PanelCitySelect";
import PanelSearch from "@/components/panel/PanelSearch";
import { accountBookings } from "@/data/mocks/account";

import PanelTop from "../layout/PanelTop";

import styles from "./PanelBookingsPage.module.sass";

export default function PanelBookingsPage() {
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");

    const filteredBookings = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return accountBookings.filter((booking) => {
            const matchesCity = !city || normalizeCity(booking.city) === city;
            const matchesSearch =
                !normalizedSearch ||
                booking.carTitle.toLowerCase().includes(normalizedSearch);

            return matchesCity && matchesSearch;
        });
    }, [city, search]);

    return (
        <section className={styles.page}>
            <PanelTop title="Бронирования">
                <PanelCitySelect value={city} onChange={setCity} />
                <PanelSearch
                    value={search}
                    onChange={setSearch}
                    placeholder="Поиск"
                />
            </PanelTop>

            <div className={styles.grid}>
                {filteredBookings.map((booking) => (
                    <PanelBookingCard key={booking.id} booking={booking} />
                ))}
            </div>
        </section>
    );
}

function normalizeCity(city: string) {
    const map: Record<string, string> = {
        "санкт-петербург": "saint-petersburg",
        москва: "moscow",
        сочи: "sochi",
        мурманск: "murmansk",
    };

    return map[city.toLowerCase()] ?? "";
}
