"use client";

import styles from "./Hero.module.sass";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title} data-aos="fade-up">
                        Аренда автомобилей для каждого
                    </h1>

                    <div
                        className={styles.search}
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className={styles.searchItem}>
                            <div className={styles.searchLabel}>Город</div>
                        </div>
                        <div className={styles.searchItem}>
                            <div className={styles.searchLabel}>
                                Начало аренды
                            </div>
                        </div>
                        <div className={styles.searchItem}>
                            <div className={styles.searchLabel}>
                                Конец аренды
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/img/hero-cars-01.png"
                        alt=""
                        width={403}
                        height={478}
                        quality={100}
                        unoptimized={true}
                        className={styles.carsLeft}
                        data-aos="fade-up"
                        data-aos-delay="700"
                        data-aos-duration="800"
                    />
                    <Image
                        src="/img/hero-cars-02.png"
                        alt=""
                        width={1007}
                        height={1200}
                        quality={100}
                        unoptimized={true}
                        className={styles.carsMiddle}
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="800"
                    />
                    <Image
                        src="/img/hero-cars-03.png"
                        alt=""
                        width={447}
                        height={401}
                        quality={100}
                        unoptimized={true}
                        className={styles.carsRight}
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="800"
                    />
                </div>
                <Image
                    src="/img/hero-background-2.jpg"
                    alt=""
                    width={3000}
                    height={1040}
                    quality={100}
                    unoptimized={true}
                    className={styles.bg}
                />
            </section>
        </>
    );
}
