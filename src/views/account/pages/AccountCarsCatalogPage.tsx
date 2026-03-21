"use client";

import view from "../AccountView.module.sass";
import styles from "./AccountCatalog.module.sass";
import { useMemo, useState } from "react";
import { carCategories, type CarCategory } from "@/data/mocks/categories";
import { cars } from "@/data/mocks/cars";
import OtherCarCard from "@/components/cars/OtherCarCard";

export default function AccountCarsCatalogPage() {
    const [active, setActive] = useState<CarCategory>("all");
    const [showAll, setShowAll] = useState(false);

    const filteredCars = useMemo(() => {
        return active === "all"
            ? cars
            : cars.filter((car) => car.category === active);
    }, [active]);

    const limit = 999;

    const visibleCars = showAll ? filteredCars : filteredCars.slice(0, limit);

    const handleCategory = (id: CarCategory) => {
        setActive(id);
        setShowAll(false);
    };
    return (
        <div className={styles.catalog}>
            <div className={view.title}>Забронировать авто</div>

            <div className={styles.block}>
                <div className={styles.categoriesTitle}>Выберите класс</div>
                <div className={styles.categories}>
                    {carCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${styles.categoriesItem} ${active === cat.id ? styles.categoriesActive : ""}`}
                            onClick={() => handleCategory(cat.id)}
                            type="button"
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                {visibleCars.map((car) => (
                    <OtherCarCard
                        key={car.id}
                        car={car}
                        hrefBase="/account/cars"
                    />
                ))}
            </div>
        </div>
    );
}
