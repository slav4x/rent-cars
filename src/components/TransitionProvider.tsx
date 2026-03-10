"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function TransitionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname() ?? "/";
    const [opacity, setOpacity] = useState(1);
    const [isLeaving, setIsLeaving] = useState(false);
    const pendingHrefRef = useRef<string | null>(null);
    const prevPathRef = useRef(pathname);

    useEffect(() => {
        if (prevPathRef.current === pathname) return;
        prevPathRef.current = pathname;

        const id = window.requestAnimationFrame(() => {
            setOpacity(1);
            setIsLeaving(false);
        });

        return () => window.cancelAnimationFrame(id);
    }, [pathname]);

    const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isLeaving) return;
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }

        const target = event.target as HTMLElement;
        const anchor = target.closest("a");
        if (!anchor) return;
        if (anchor.target && anchor.target !== "_self") return;
        if (anchor.hasAttribute("download")) return;

        const rawHref = anchor.getAttribute("href");
        if (!rawHref || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;
        if (rawHref.startsWith("#")) return;
        if (anchor.hasAttribute("data-no-transition")) return;
        if (anchor.getAttribute("data-transition") === "off") return;

        const nextUrl = new URL(anchor.href, window.location.href);
        const currentUrl = new URL(window.location.href);
        if (nextUrl.origin !== currentUrl.origin) return;
        if (
            nextUrl.pathname === currentUrl.pathname &&
            nextUrl.search === currentUrl.search
        ) {
            return;
        }

        const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
        const currentPath = `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;
        if (nextPath === currentPath) return;

        event.preventDefault();
        pendingHrefRef.current = nextPath;
        setIsLeaving(true);
        setOpacity(0);
    };

    const handleAnimationComplete = () => {
        if (!isLeaving || opacity !== 0) return;
        const nextHref = pendingHrefRef.current;
        if (!nextHref) return;
        pendingHrefRef.current = null;
        router.push(nextHref);
    };

    return (
        <motion.div
            initial={false}
            onClickCapture={handleClickCapture}
            onAnimationComplete={handleAnimationComplete}
            animate={{ opacity }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ pointerEvents: isLeaving ? "none" : "auto" }}
        >
            {children}
        </motion.div>
    );
}
