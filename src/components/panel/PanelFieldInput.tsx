"use client";

import { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

import styles from "./PanelFieldInput.module.sass";

type PanelFieldInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label: string;
    className?: string;
    inputClassName?: string;
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
};

export default function PanelFieldInput({
    label,
    className,
    inputClassName,
    type = "text",
    ...props
}: PanelFieldInputProps) {
    return (
        <label className={cn(styles.field, className)}>
            <p className={styles.label}>{label}</p>
            <input
                type={type}
                className={cn(styles.input, inputClassName)}
                {...props}
            />
        </label>
    );
}
