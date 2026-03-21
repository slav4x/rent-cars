import view from "../AccountView.module.sass";
import styles from "./AccountCatalog.module.sass";
import { cars } from "@/data/mocks/cars";
import OtherCarCard from "@/components/cars/OtherCarCard";

export default function AccountFavoritesPage() {
    return (
        <div className={styles.catalog}>
            <div className={view.title}>Избранное</div>
            <div className={styles.grid}>
                {cars.map((car) => (
                    <OtherCarCard
                        key={car.id}
                        car={car}
                        hrefBase="/account/cars"
                    />
                ))}
            </div>
        </div>
    );
}
