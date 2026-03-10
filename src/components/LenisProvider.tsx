"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function LenisScrollToTop() {
    const lenis = useLenis();
    const pathname = usePathname();

    useEffect(() => {
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
