import PublicLayout from "@/components/layout/PublicLayout";
import { cars } from "@/data/mocks/cars";
import CarsPage from "@/pages/cars/CarsPage";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const car = cars.find((item) => item.slug === slug);

    if (!car) {
        return {
            title: "Страница авто",
            description: "",
        };
    }

    return {
        title: car.title,
        description: `${car.title} - аренда автомобиля`,
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const car = cars.find((item) => item.slug === slug);

    if (!car) {
        notFound();
    }

    return (
        <PublicLayout>
            <CarsPage car={car} />
        </PublicLayout>
    );
}
