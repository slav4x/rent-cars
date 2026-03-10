"use client";

import styles from "./Partnership.module.sass";
import Image from "next/image";

export default function Partnership() {
    return (
        <section className={styles.partnership}>
            <div className="container">
                <h2 className={styles.title} data-aos="fade-up">
                    есть автомобиль? Зарабатывайте от 150.000р
                </h2>
                <div
                    className={styles.description}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Предлагаем выгодные условия сотрудничества, благодаря
                    которым вы сможете зарабатывать на своем автомобиле, не
                    отвлекаясь от повседневных дел и работы.
                </div>
                <Image
                    src="/img/partnership-cars-01.png"
                    alt=""
                    width={665}
                    height={330}
                    quality={100}
                    unoptimized={true}
                    className={styles.carsLeft}
                    // data-aos="fade-up"
                    // data-aos-delay="700"
                />
                <Image
                    src="/img/partnership-cars-02.png"
                    alt=""
                    width={735}
                    height={361}
                    quality={100}
                    unoptimized={true}
                    className={styles.carsMiddle}
                    // data-aos="fade-up"
                    // data-aos-delay="500"
                />
                <Image
                    src="/img/partnership-cars-03.png"
                    alt=""
                    width={742}
                    height={402}
                    quality={100}
                    unoptimized={true}
                    className={styles.carsRight}
                    // data-aos="fade-up"
                    // data-aos-delay="600"
                />
            </div>
            <Image
                src="/img/hero-background.jpg"
                alt=""
                width={3000}
                height={1042}
                quality={100}
                unoptimized={true}
                className={styles.bg}
            />
        </section>
    );
}
