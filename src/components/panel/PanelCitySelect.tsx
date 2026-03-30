"use client";

import { ChangeEvent } from "react";

import { cn } from "@/lib/utils/cn";

import styles from "./PanelCitySelect.module.sass";

const CITY_OPTIONS = [
    { value: "saint-petersburg", label: "Санкт-Петербург" },
    { value: "moscow", label: "Москва" },
    { value: "sochi", label: "Сочи" },
    { value: "murmansk", label: "Мурманск" },
];

type PanelCitySelectProps = {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    name?: string;
    placeholder?: string;
};

export default function PanelCitySelect({
    value,
    onChange,
    className,
    name = "city",
}: PanelCitySelectProps) {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <label className={cn(styles.select, className)}>
            <select
                name={name}
                value={value}
                onChange={handleChange}
                className={styles.input}
            >
                {CITY_OPTIONS.map((city) => (
                    <option key={city.value} value={city.value}>
                        {city.label}
                    </option>
                ))}
            </select>

            <span className={styles.icon} aria-hidden="true">
                <svg
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.99796 0.172549C7.94373 0.117874 7.87922 0.0744771 7.80813 0.0448621C7.73705 0.0152471 7.6608 0 7.5838 0C7.50679 0 7.43054 0.0152471 7.35946 0.0448621C7.28838 0.0744771 7.22386 0.117874 7.16963 0.172549L4.49796 2.84421C4.44373 2.89888 4.37922 2.94228 4.30813 2.9719C4.23705 3.00151 4.1608 3.01676 4.0838 3.01676C4.00679 3.01676 3.93054 3.00151 3.85946 2.9719C3.78837 2.94228 3.72386 2.89888 3.66963 2.84421L0.997962 0.172549C0.943734 0.117874 0.879217 0.0744771 0.808132 0.0448621C0.737048 0.0152471 0.660803 0 0.583796 0C0.506789 0 0.430544 0.0152471 0.359459 0.0448621C0.288375 0.0744771 0.223857 0.117874 0.169629 0.172549C0.0609826 0.281843 0 0.42969 0 0.583798C0 0.737906 0.0609826 0.885752 0.169629 0.995047L2.84713 3.67254C3.17526 4.00026 3.62004 4.18433 4.0838 4.18433C4.54755 4.18433 4.99234 4.00026 5.32046 3.67254L7.99796 0.995047C8.10661 0.885752 8.16759 0.737906 8.16759 0.583798C8.16759 0.42969 8.10661 0.281843 7.99796 0.172549V0.172549Z"
                        fill="#353535"
                    />
                </svg>
            </span>
        </label>
    );
}
