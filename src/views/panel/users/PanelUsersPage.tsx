"use client";

import { useMemo, useState } from "react";

import PanelSearch from "@/components/panel/PanelSearch";
import PanelUserCard from "@/components/panel/PanelUserCard";
import PanelUserStatusSelect from "@/components/panel/PanelUserStatusSelect";
import { users, type UserAccountStatus } from "@/data/mocks/users";

import PanelTop from "../layout/PanelTop";

import styles from "./PanelUsersPage.module.sass";

export default function PanelUsersPage() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");

    const filteredUsers = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return users.filter((user) => {
            const matchesStatus =
                !status || user.status === (status as UserAccountStatus);
            const matchesSearch =
                !normalizedSearch ||
                user.fullName.toLowerCase().includes(normalizedSearch) ||
                user.id.toLowerCase().includes(normalizedSearch);

            return matchesStatus && matchesSearch;
        });
    }, [search, status]);

    return (
        <>
            <PanelTop title="Аккаунты">
                <PanelUserStatusSelect value={status} onChange={setStatus} />
                <PanelSearch
                    value={search}
                    onChange={setSearch}
                    placeholder="Поиск по имени или ID"
                />
            </PanelTop>

            <div className={styles.grid}>
                {filteredUsers.map((user) => (
                    <PanelUserCard key={user.id} user={user} />
                ))}
            </div>
        </>
    );
}
