import type { Car } from "@/data/mocks/cars";

import Others from "./sections/Others/Others";
import Single from "./sections/Single/Single";

type Props = {
    car: Car;
    hrefBase?: string;
    variant?: "default" | "account";
};

export default function CarsPage({
    car,
    hrefBase = "/cars",
    variant = "default",
}: Props) {
    return (
        <>
            <Single car={car} hrefBase={hrefBase} variant={variant} />
            <Others
                currentCarId={car.id}
                hrefBase={hrefBase}
                variant={variant}
            />
        </>
    );
}
