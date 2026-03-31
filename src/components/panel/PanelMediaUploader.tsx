"use client";

import { ChangeEvent, useEffect, useId, useMemo, useState } from "react";
import Image from "next/image";

import styles from "./PanelMediaUploader.module.sass";

type PanelMediaUploaderItem = {
    id: string;
    file: File;
    url: string;
    type: "image" | "video";
};

type PanelMediaUploaderProps = {
    label?: string;
    onChange?: (files: File[]) => void;
};

export default function PanelMediaUploader({
    label = "Выберите фото или видео",
    onChange,
}: PanelMediaUploaderProps) {
    const inputId = useId();
    const [items, setItems] = useState<PanelMediaUploaderItem[]>([]);

    useEffect(() => {
        return () => {
            items.forEach((item) => URL.revokeObjectURL(item.url));
        };
    }, [items]);

    const files = useMemo(() => items.map((item) => item.file), [items]);

    useEffect(() => {
        onChange?.(files);
    }, [files, onChange]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const nextFiles = Array.from(event.target.files ?? []);

        setItems((prev) => {
            prev.forEach((item) => URL.revokeObjectURL(item.url));

            return nextFiles.map((file, index) => ({
                id: `${file.name}-${index}-${file.lastModified}`,
                file,
                url: URL.createObjectURL(file),
                type: file.type.startsWith("video/") ? "video" : "image",
            }));
        });
    };

    return (
        <div className={styles.root}>
            <p className={styles.title}>{label}</p>
            <div className={styles.grid}>
                <label className={styles.uploader} htmlFor={inputId}>
                    <input
                        id={inputId}
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        onChange={handleChange}
                    />
                    <span />
                </label>

                {items.map((item) => (
                    <div className={styles.media} key={item.id}>
                        {item.type === "image" ? (
                            <Image
                                src={item.url}
                                alt={item.file.name}
                                width={600}
                                height={600}
                                unoptimized
                            />
                        ) : (
                            <video
                                src={item.url}
                                className={styles.video}
                                controls
                                playsInline
                                preload="metadata"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
