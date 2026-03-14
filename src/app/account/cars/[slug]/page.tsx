import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { cars } from "@/data/mocks/cars";
import CarsPage from "@/views/cars/CarsPage";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const car = cars.find((item) => item.slug === slug);

    return {
        title: car ? `${car.title} | ЛК` : "Страница авто",
        description: "",
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const car = cars.find((item) => item.slug === slug);

    if (!car) {
        notFound();
    }

    return <CarsPage car={car} hrefBase="/account/cars" variant="account" />;
}
