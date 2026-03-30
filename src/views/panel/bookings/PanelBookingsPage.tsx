import PanelCitySelect from "@/components/panel/PanelCitySelect";
import PanelTop from "../layout/PanelTop";
import styles from "./PanelBookingsPage.module.sass";
import PanelSearch from "@/components/panel/PanelSearch";

export default function PanelBookingsPage() {
    return (
        <>
            <PanelTop title="Бронирования">
                <PanelCitySelect />
                <PanelSearch placeholder="Поиск" />
            </PanelTop>
        </>
    );
}
