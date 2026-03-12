import type { Car } from "@/data/mocks/cars";

import Others from "./sections/Others/Others";
import Single from "./sections/Single/Single";

type Props = {
    car: Car;
    hrefBase?: string;
};

export default function CarsPage({ car, hrefBase = "/cars" }: Props) {
    return (
        <>
            <Single car={car} hrefBase={hrefBase} />
            <Others currentCarId={car.id} hrefBase={hrefBase} />
        </>
    );
}
