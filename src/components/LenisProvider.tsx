"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function LenisScrollToTop() {
    const lenis = useLenis();
    const pathname = usePathname();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;

            const navigationEntry = performance
                .getEntriesByType("navigation")
                .at(0) as PerformanceNavigationTiming | undefined;

            if (navigationEntry?.type === "reload") {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                lenis?.scrollTo(0, { immediate: true });
            }

            return;
        }

        lenis?.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    return null;
}

export default function LenisProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis
            root
            options={{
                duration: 2,
                lerp: 0.2,
                easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                syncTouch: false,
            }}
        >
            <LenisScrollToTop />
            {children}
        </ReactLenis>
    );
}
