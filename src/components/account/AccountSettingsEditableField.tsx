"use client";

import { useRef, useState } from "react";

import styles from "./AccountSettingsEditableField.module.sass";
import { cn } from "@/lib/utils/cn";

type Props = {
    label: string;
    defaultValue?: string;
    type?: "text" | "email" | "tel" | "password" | "date";
};

export default function AccountSettingsEditableField({
    label,
    defaultValue = "",
    type = "text",
}: Props) {
    const [value, setValue] = useState(normalizeInputValue(defaultValue, type));
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleToggle = () => {
        setIsEditing((prev) => {
            const next = !prev;

            if (next) {
                requestAnimationFrame(() => {
                    inputRef.current?.focus();
                    inputRef.current?.select();
                });
            }

            return next;
        });
    };

    return (
        <div className={styles.field}>
            <p className={styles.label}>{label}</p>
            <input
                ref={inputRef}
                type={type}
                value={value}
                disabled={!isEditing}
                className={cn(styles.input, isEditing && styles.inputEditing)}
                onChange={(event) => setValue(event.target.value)}
            />
            <span className={styles.action} onClick={handleToggle}></span>
        </div>
    );
}

function normalizeInputValue(value: string, type: Props["type"]) {
    if (type !== "date") {
        return value;
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
    }

    const match = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);

    if (!match) {
        return value;
    }

    const [, day, month, year] = match;

    return `${year}-${month}-${day}`;
}
