"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import PanelCarCard from "@/components/panel/PanelCarCard";
import PanelCitySelect from "@/components/panel/PanelCitySelect";
import PanelSearch from "@/components/panel/PanelSearch";
import { cars } from "@/data/mocks/cars";

import PanelTop from "../layout/PanelTop";

import styles from "./PanelCarsPage.module.sass";

const carCities = ["saint-petersburg", "moscow", "sochi", "murmansk"] as const;

const cityLabels: Record<(typeof carCities)[number], string> = {
    "saint-petersburg": "Санкт-Петербург",
    moscow: "Москва",
    sochi: "Сочи",
    murmansk: "Мурманск",
};

const adminCars = cars.map((car, index) => ({
    ...car,
    city: carCities[index % carCities.length],
}));

export default function PanelCarsPage() {
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");

    const filteredCars = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return adminCars.filter((car) => {
            const matchesCity = !city || car.city === city;
            const matchesSearch =
                !normalizedSearch ||
                car.title.toLowerCase().includes(normalizedSearch);

            return matchesCity && matchesSearch;
        });
    }, [city, search]);

    return (
        <section className={styles.page}>
            <PanelTop title="Автомобили">
                <PanelCitySelect value={city} onChange={setCity} />
                <PanelSearch
                    value={search}
                    onChange={setSearch}
                    placeholder="Поиск"
                />
                <Link href="/panel/cars/new">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0C5.8125 2.82287e-05 5.63269 0.0745252 5.50011 0.207107C5.36752 0.339689 5.29303 0.519501 5.293 0.707V5.293H0.707C0.519501 5.29303 0.339689 5.36752 0.207107 5.50011C0.0745245 5.63269 2.83152e-05 5.8125 0 6C2.83152e-05 6.1875 0.0745245 6.36731 0.207107 6.49989C0.339689 6.63248 0.519501 6.70697 0.707 6.707L5.293 6.707V11.293C5.29303 11.4805 5.36752 11.6603 5.50011 11.7929C5.63269 11.9255 5.8125 12 6 12C6.1875 12 6.36731 11.9255 6.49989 11.7929C6.63247 11.6603 6.70697 11.4805 6.707 11.293L6.707 6.707H11.293C11.4805 6.70697 11.6603 6.63248 11.7929 6.49989C11.9255 6.36731 12 6.1875 12 6C12 5.8125 11.9255 5.63269 11.7929 5.50011C11.6603 5.36752 11.4805 5.29303 11.293 5.293H6.707L6.707 0.707C6.70697 0.519501 6.63247 0.339689 6.49989 0.207107C6.36731 0.0745251 6.1875 2.83777e-05 6 0Z"
                            fill="white"
                        />
                    </svg>
                    Добавить авто
                </Link>
            </PanelTop>

            <div className={styles.grid}>
                {filteredCars.map((car) => (
                    <PanelCarCard
                        key={car.id}
                        car={car}
                        cityLabel={cityLabels[car.city]}
                    />
                ))}
            </div>
        </section>
    );
}
