"use client";

import { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

import styles from "./PanelFieldSelect.module.sass";

type PanelFieldSelectOption = {
    value: string;
    label: string;
};

type PanelFieldSelectProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "children"
> & {
    label: string;
    options: PanelFieldSelectOption[];
    placeholder?: string;
    className?: string;
    selectClassName?: string;
};

export default function PanelFieldSelect({
    label,
    options,
    placeholder,
    className,
    selectClassName,
    defaultValue = "",
    ...props
}: PanelFieldSelectProps) {
    return (
        <label className={cn(styles.field, className)}>
            <p className={styles.label}>{label}</p>
            <select
                className={cn(styles.select, selectClassName)}
                defaultValue={defaultValue}
                {...props}
            >
                {placeholder ? (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                ) : null}
                {options.map((option) => (
                    <option key={`${option.value}-${option.label}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
}
