import type { Car } from "@/data/mocks/cars";

import Others from "./sections/Others/Others";
import Single from "./sections/Single/Single";

type Props = {
    car: Car;
};

export default function CarsPage({ car }: Props) {
    return (
        <>
            <Single car={car} />
            <Others currentCarId={car.id} />
        </>
    );
}
