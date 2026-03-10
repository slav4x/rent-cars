"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 300,
            offset: 80,
            once: true,
            easing: "ease-out",
        });

        AOS.refresh();
    }, []);

    useEffect(() => {
        AOS.refreshHard();
    }, [pathname]);

    return <>{children}</>;
}
