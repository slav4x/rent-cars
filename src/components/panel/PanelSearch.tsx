"use client";

import { ChangeEvent } from "react";

import { cn } from "@/lib/utils/cn";

import styles from "./PanelSearch.module.sass";

type PanelSearchProps = {
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    className?: string;
    name?: string;
};

export default function PanelSearch({
    value,
    placeholder = "Поиск",
    onChange,
    className,
    name = "search",
}: PanelSearchProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <label className={cn(styles.search, className)}>
            <span className={styles.icon} aria-hidden="true">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.8598 11.1533L8.87771 8.17129C9.69035 7.1774 10.0899 5.90919 9.99371 4.62898C9.89753 3.34877 9.31296 2.1545 8.36093 1.2932C7.4089 0.431905 6.16224 -0.0305245 4.87882 0.00156501C3.5954 0.0336546 2.37341 0.557808 1.46561 1.46561C0.557808 2.37341 0.0336546 3.5954 0.00156501 4.87882C-0.0305245 6.16224 0.431905 7.4089 1.2932 8.36093C2.1545 9.31296 3.34877 9.89753 4.62898 9.99371C5.90919 10.0899 7.1774 9.69035 8.17129 8.87771L11.1533 11.8598C11.2476 11.9508 11.3738 12.0011 11.5048 12C11.6357 11.9988 11.761 11.9463 11.8537 11.8537C11.9463 11.761 11.9988 11.6357 12 11.5048C12.0011 11.3738 11.9508 11.2476 11.8598 11.1533ZM5.01189 9.0086C4.22141 9.0086 3.44869 8.7742 2.79143 8.33503C2.13417 7.89587 1.6219 7.27167 1.3194 6.54136C1.0169 5.81106 0.937752 5.00745 1.09197 4.23217C1.24618 3.45688 1.62683 2.74473 2.18578 2.18578C2.74473 1.62683 3.45688 1.24618 4.23217 1.09197C5.00745 0.937752 5.81106 1.0169 6.54136 1.3194C7.27167 1.6219 7.89587 2.13417 8.33503 2.79143C8.7742 3.44869 9.0086 4.22141 9.0086 5.01189C9.00741 6.07152 8.58595 7.0874 7.83668 7.83668C7.0874 8.58595 6.07152 9.00741 5.01189 9.0086Z"
                        fill="#353535"
                    />
                </svg>
            </span>

            <input
                type="search"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.input}
            />
        </label>
    );
}
