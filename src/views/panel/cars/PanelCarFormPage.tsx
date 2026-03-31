"use client";

import { useState } from "react";

import PanelFieldInput from "@/components/panel/PanelFieldInput";
import PanelFieldSelect from "@/components/panel/PanelFieldSelect";
import PanelMediaUploader from "@/components/panel/PanelMediaUploader";
import PanelWysiwyg from "@/components/panel/PanelWysiwyg";

import PanelTop from "../layout/PanelTop";
import styles from "./PanelCarFormPage.module.sass";

const categoryOptions = [
    { value: "sport", label: "Спорткары" },
    { value: "business", label: "Бизнес" },
    { value: "suv", label: "Внедорожники" },
];

const cityOptions = [
    { value: "spb", label: "Санкт-Петербург" },
    { value: "moscow", label: "Москва" },
    { value: "sochi", label: "Сочи" },
    { value: "murmansk", label: "Мурманск" },
];

const brandOptions = [
    { value: "bmw", label: "BMW" },
    { value: "mercedes", label: "Mercedes-Benz" },
    { value: "porsche", label: "Porsche" },
];

const colorOptions = [
    { value: "black", label: "Черный" },
    { value: "white", label: "Белый" },
    { value: "gray", label: "Серый" },
];

const fuelOptions = [
    { value: "petrol", label: "Бензин" },
    { value: "diesel", label: "Дизель" },
    { value: "hybrid", label: "Гибрид" },
];

const transmissionOptions = [
    { value: "automatic", label: "Автомат" },
    { value: "robot", label: "Робот" },
    { value: "manual", label: "Механика" },
];

export default function PanelCarFormPage() {
    const [description, setDescription] = useState("<p></p>");
    const [seoDescription, setSeoDescription] = useState("<p></p>");

    return (
        <>
            <PanelTop title="Добавить автомобиль" />
            <div className={styles.form}>
                <div className={styles.title}>Общая информация</div>
                <PanelFieldInput
                    label="Название"
                    placeholder="Введите название"
                />
                <PanelMediaUploader />
                <PanelFieldSelect
                    label="Категория"
                    placeholder="Выберите категорию автомобиля"
                    options={categoryOptions}
                />
                <PanelFieldSelect
                    label="Город"
                    placeholder="Выберите город"
                    options={cityOptions}
                />
                <PanelFieldInput
                    label="Видео с YouTube или Rutube"
                    placeholder="Ссылка"
                />
                <PanelFieldSelect
                    label="Марка"
                    placeholder="Выберите марку"
                    options={brandOptions}
                />
                <PanelFieldSelect
                    label="Цвет"
                    placeholder="Выберите цвет"
                    options={colorOptions}
                />
                <PanelFieldInput
                    label="ID Авто"
                    placeholder="Напишите ID"
                />
                <PanelFieldInput
                    label="Мощность (л.с.)"
                    placeholder="Введите мощность"
                />
                <PanelFieldInput
                    label="Разгон до 100 км/ч (сек)"
                    placeholder="Введите разгон"
                />
                <PanelFieldSelect
                    label="Тип топлива"
                    placeholder="Выберите топливо"
                    options={fuelOptions}
                />
                <PanelFieldSelect
                    label="Коробка передач"
                    placeholder="Выберите коробку передач"
                    options={transmissionOptions}
                />
                <label className={styles.label}>
                    <p>Описание</p>
                    <PanelWysiwyg
                        value={description}
                        onChange={setDescription}
                        placeholder="Введите описание автомобиля"
                    />
                </label>
                <div className={styles.title}>Стоимость</div>
                <PanelFieldInput label="Сутки" placeholder="₽" />
                <PanelFieldInput label="2-7 дней" placeholder="₽" />
                <PanelFieldInput label="От 7 дней" placeholder="₽" />
                <PanelFieldInput label="От 30 суток" placeholder="₽" />
                <PanelFieldInput
                    label="Стоимость 1 км свыше 200км в день"
                    placeholder="руб./км."
                />
                <div className={styles.title}>SEO</div>
                <PanelFieldInput
                    label="SEO заголовок"
                    placeholder="Введите заголовок"
                />
                <label className={styles.label}>
                    <p>SEO описание</p>
                    <PanelWysiwyg
                        value={seoDescription}
                        onChange={setSeoDescription}
                        placeholder="Введите SEO описание"
                    />
                </label>
                <div className={styles.actions}>
                    <button className={styles.btn}>Сохранить</button>
                    <button className={styles.btnLight}>Автоперевод</button>
                </div>
            </div>
        </>
    );
}
