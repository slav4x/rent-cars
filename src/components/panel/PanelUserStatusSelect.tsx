"use client";

import { ChangeEvent } from "react";

import { cn } from "@/lib/utils/cn";
import type { UserAccountStatus } from "@/data/mocks/users";

import styles from "./PanelUserStatusSelect.module.sass";

const STATUS_OPTIONS: { value: UserAccountStatus; label: string }[] = [
    { value: "inactive", label: "Не активирован" },
    { value: "pending", label: "На проверке" },
    { value: "verified", label: "Подтвержден" },
    { value: "rejected", label: "Отклонен" },
];

type PanelUserStatusSelectProps = {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    name?: string;
    placeholder?: string;
};

export default function PanelUserStatusSelect({
    value,
    onChange,
    className,
    name = "user-status",
    placeholder = "Все статусы",
}: PanelUserStatusSelectProps) {
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
                <option value="">{placeholder}</option>
                {STATUS_OPTIONS.map((status) => (
                    <option key={status.value} value={status.value}>
                        {status.label}
                    </option>
                ))}
            </select>

            <span className={styles.icon} aria-hidden="true">
                <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.5854 0.792969L6 5.37876L1.41421 0.792969L0 2.20718L6 8.20718L12 2.20718L10.5854 0.792969Z"
                        fill="currentColor"
                    />
                </svg>
            </span>
        </label>
    );
}
