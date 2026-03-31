"use client";

import { useState } from "react";

import PanelMediaUploader from "@/components/panel/PanelMediaUploader";
import PanelWysiwyg from "@/components/panel/PanelWysiwyg";

import PanelTop from "../layout/PanelTop";
import styles from "./PanelCarFormPage.module.sass";

export default function PanelCarFormPage() {
    const [description, setDescription] = useState("<p></p>");

    return (
        <>
            <PanelTop title="Добавить автомобиль" />
            <div className={styles.form}>
                <div className={styles.title}>Общая информация</div>
                <label className={styles.label}>
                    <p>Название</p>
                    <input type="text" placeholder="Введите название" />
                </label>
                <PanelMediaUploader />
                <label className={styles.label}>
                    <p>Категория</p>
                    <select>
                        <option value="" disabled selected>
                            Выберите категорию автомобиля
                        </option>
                        <option value="Категория">Категория</option>
                        <option value="Категория">Категория</option>
                        <option value="Категория">Категория</option>
                    </select>
                </label>
                <label className={styles.label}>
                    <p>Город</p>
                    <select>
                        <option value="" disabled selected>
                            Выберите город
                        </option>
                        <option value="Город">Город</option>
                        <option value="Город">Город</option>
                        <option value="Город">Город</option>
                    </select>
                </label>
                <label className={styles.label}>
                    <p>Видео с YouTube или Rutube</p>
                    <input type="text" placeholder="Ссылка" />
                </label>
                <label className={styles.label}>
                    <p>Марка</p>
                    <select>
                        <option value="" disabled selected>
                            Выберите марку
                        </option>
                        <option value="Марка">Марка</option>
                        <option value="Марка">Марка</option>
                        <option value="Марка">Марка</option>
                    </select>
                </label>
                <label className={styles.label}>
                    <p>Цвет</p>
                    <select>
                        <option value="" disabled selected>
                            Выберите цвет
                        </option>
                        <option value="Цвет">Цвет</option>
                        <option value="Цвет">Цвет</option>
                        <option value="Цвет">Цвет</option>
                    </select>
                </label>
                <label className={styles.label}>
                    <p>ID Авто</p>
                    <input type="text" placeholder="Напишите ID" />
                </label>
                <label className={styles.label}>
                    <p>Мощность (л.с.)</p>
                    <input type="text" placeholder="Введите мощность" />
                </label>
                <label className={styles.label}>
                    <p>Разгон до 100 км/ч (сек)</p>
                    <input type="text" placeholder="Введите разгон" />
                </label>
                <label className={styles.label}>
                    <p>Тип топлива</p>
                    <select>
                        <option value="" disabled selected>
                            Выберите топливо
                        </option>
                        <option value="Топливо">Топливо</option>
                        <option value="Топливо">Топливо</option>
                        <option value="Топливо">Топливо</option>
                    </select>
                </label>
                <label className={styles.label}>
                    <p>Коробка передач</p>
                    <select>
                        <option value="" disabled selected>
                            Выберите коробку передач
                        </option>
                        <option value="Коробка передач">Коробка передач</option>
                        <option value="Коробка передач">Коробка передач</option>
                        <option value="Коробка передач">Коробка передач</option>
                    </select>
                </label>
                <label className={styles.label}>
                    <p>Описание</p>
                    <PanelWysiwyg
                        value={description}
                        onChange={setDescription}
                        placeholder="Введите описание автомобиля"
                    />
                </label>
                <div className={styles.title}>Стоимость</div>
                <label className={styles.label}>
                    <p>Сутки</p>
                    <input type="text" placeholder="₽" />
                </label>
                <label className={styles.label}>
                    <p>2-7 дней</p>
                    <input type="text" placeholder="₽" />
                </label>
                <label className={styles.label}>
                    <p>От 7 дней</p>
                    <input type="text" placeholder="₽" />
                </label>
                <label className={styles.label}>
                    <p>От 30 суток</p>
                    <input type="text" placeholder="₽" />
                </label>
                <label className={styles.label}>
                    <p>Стоимость 1 км свыше 200км в день</p>
                    <input type="text" placeholder="руб./км." />
                </label>
                <div className={styles.title}>SEO</div>
                <label className={styles.label}>
                    <p>SEO заголовок</p>
                    <input type="text" placeholder="Введите заголовок" />
                </label>
                <label className={styles.label}>
                    <p>SEO описание</p>
                    <PanelWysiwyg
                        value={description}
                        onChange={setDescription}
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
