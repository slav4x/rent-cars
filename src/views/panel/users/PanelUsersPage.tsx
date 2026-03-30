import PanelCitySelect from "@/components/panel/PanelCitySelect";
import PanelTop from "../layout/PanelTop";
import styles from "./PanelUsersPage.module.sass";
import PanelSearch from "@/components/panel/PanelSearch";

export default function PanelUsersPage() {
    return (
        <>
            <PanelTop title="Аккаунты">
                <PanelCitySelect />
                <PanelSearch placeholder="Поиск" />
            </PanelTop>
        </>
    );
}
